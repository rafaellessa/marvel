import { useFocusEffect, useNavigation } from "@react-navigation/native";

import React, { useEffect } from "react";
import EmptyBox from "../../components/EmptyBox";
import FavoriteItem from "../../components/FavoriteItem";
import PageHeader from "../../components/PageHeader";
import useFavorites from "../../hooks/useFavorites";
import { Character } from "../../redux/types/types.characters";
import { Container, FavoriteList, ListWrapper } from "./styles";

const Favorites: React.FC = () => {
  const { favorites, getFavorites } = useFavorites();
  const navigation = useNavigation();
  useEffect(() => {
    getFavorites();
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      getFavorites();
      return () => {};
    }, [])
  );

  const handlePressFavoriteItem = (item: Character) => {
    navigation.navigate("Details", { character: item });
  };
  return (
    <Container>
      <PageHeader title="Meus Favoritos" rightIcon={false} />
      <ListWrapper>
        <FavoriteList
          data={favorites}
          keyExtractor={(item) => String(item.id + item.name)}
          renderItem={({ item }) => (
            <FavoriteItem
              name={item.name}
              photo={item.thumbnail}
              onFavoriteItemPress={() => handlePressFavoriteItem(item)}
            />
          )}
          ListEmptyComponent={<EmptyBox title="Você ainda não tem favoritos" />}
        />
      </ListWrapper>
    </Container>
  );
};

export default Favorites;
