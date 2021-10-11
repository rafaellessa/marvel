import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CharacterItem from "../../components/CharacterItem";
import Header from "../../components/Header";
import InputSearch from "../../components/InputSearch";
import Loading from "../../components/Loading";
import { CharacterAction } from "../../redux/reducers/reducers.characters";
import {
  getCharacters,
  getCharactersMetadata,
} from "../../redux/selectors/selectors.characters";
import {
  CharactersList,
  Container,
  Footer,
  InputWrapper,
  ListHeader,
  ListWrapper,
} from "./styles";

const Characters: React.FC = () => {
  const dispatch = useDispatch();
  const characters = useSelector(getCharacters);
  const { loading } = useSelector(getCharactersMetadata);
  useEffect(() => {
    !characters.length && fetchCharacters();
  }, []);

  const fetchCharacters = async () => {
    dispatch(CharacterAction.requestGetAllCharacters({}));
  };
  const renderLoading = () => <Loading />;

  const renderContent = () => (
    <Container>
      <Header urlPhoto="https://github.com/rafaellessa.png" userName="Rafael" />
      <InputWrapper>
        <InputSearch />
      </InputWrapper>
      <ListWrapper>
        <ListHeader>Personagens</ListHeader>
        <CharactersList
          data={characters}
          renderItem={({ item }) => (
            <CharacterItem title={item.name} urlPhoto={item.thumbnail} />
          )}
          numColumns={2}
        />
      </ListWrapper>
      <Footer />
    </Container>
  );

  const validateRender = () => {
    if (loading) {
      return renderLoading();
    }

    return renderContent();
  };

  return validateRender();
};

export default Characters;
