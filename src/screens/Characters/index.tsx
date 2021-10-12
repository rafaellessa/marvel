import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import { RefreshControl } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useTheme } from "styled-components/native";
import CharacterItem from "../../components/CharacterItem";
import Header from "../../components/Header";
import InputSearch from "../../components/InputSearch";
import Loading from "../../components/Loading";
import { CharacterAction } from "../../redux/reducers/reducers.characters";
import { getUser } from "../../redux/selectors/selectors.auth";
import * as RootNavigation from "../../navigation";
import {
  getCharacters,
  getCharactersMetadata,
} from "../../redux/selectors/selectors.characters";
import { Character } from "../../redux/types/types.characters";
import {
  CharactersList,
  Container,
  Footer,
  InputWrapper,
  ListHeader,
  ListWrapper,
} from "./styles";

const Characters: React.FC = () => {
  const [filteredCharacters, setFilteredCharacters] = useState<Character[]>([]);
  const [loadingPage, setLoadingPage] = useState(false);
  const [page, setPage] = useState(0);
  const [searchText, setSearchText] = useState("");

  const dispatch = useDispatch();
  const characters = useSelector(getCharacters);
  const { loading: loadingCharacters } = useSelector(getCharactersMetadata);
  const user = useSelector(getUser);
  const theme = useTheme();
  const LIMIT_PAGE = 20;

  useEffect(() => {
    setLoadingPage(true);
    !characters.length && fetchCharacters();
  }, []);

  useEffect(() => {
    if (characters.length) {
      setLoadingPage(false);
    }
  }, [characters]);

  useEffect(() => {
    if (searchText.length >= 3) {
      handleParseFilteredCharacters();
    }

    if (!searchText.length) {
      setFilteredCharacters([]);
    }
  }, [searchText]);

  const fetchCharacters = async (page?: number) => {
    if (page) {
      dispatch(
        CharacterAction.requestGetAllCharacters({
          offset: page * LIMIT_PAGE,
          limit: LIMIT_PAGE,
        })
      );
    } else {
      dispatch(CharacterAction.requestGetAllCharacters({}));
    }
  };

  const handleParseFilteredCharacters = () => {
    const filtered = characters.filter((character) =>
      character.name.match(new RegExp(searchText, "i"))
    );

    if (!filtered.length) {
      dispatch(CharacterAction.requestGetAllCharacters({ name: searchText }));
    } else {
      setFilteredCharacters(filtered);
    }
  };

  const handleRefetch = () => {
    setPage(0);
    fetchCharacters();
  };

  const handleEndReachedList = () => {
    if (!loadingCharacters && filteredCharacters.length === 0) {
      fetchCharacters(page + 1);
      setPage(page + 1);
    }
  };

  const renderLoading = () => <Loading />;

  const renderContent = () => (
    <Container>
      <Header urlPhoto={user.photo} userName={user.name} />
      <InputWrapper>
        <InputSearch
          onSearch={(text) => setSearchText(text)}
          search={searchText}
        />
      </InputWrapper>
      <ListWrapper>
        <ListHeader>Personagens</ListHeader>
        <CharactersList
          data={filteredCharacters.length ? filteredCharacters : characters}
          renderItem={({ item }) => (
            <CharacterItem
              title={item.name}
              urlPhoto={item.thumbnail}
              onItemPress={() => {
                RootNavigation.navigate(
                  "Details" as never,
                  { character: item } as never
                );
              }}
            />
          )}
          numColumns={2}
          keyExtractor={(item) => String(item.id)}
          refreshControl={
            <RefreshControl
              refreshing={loadingCharacters}
              onRefresh={handleRefetch}
              colors={[theme.colors.primary]}
              tintColor={theme.colors.primary}
            />
          }
          onEndReachedThreshold={0.2}
          onEndReached={handleEndReachedList}
          ListFooterComponent={loadingCharacters ? <Loading /> : null}
        />
      </ListWrapper>
      <Footer />
    </Container>
  );

  const validateRender = () => {
    if (loadingPage) {
      return renderLoading();
    }

    return renderContent();
  };

  return validateRender();
};

export default Characters;
