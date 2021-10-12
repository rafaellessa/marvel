import React from "react";

import { CharacterImage, CharacterName, Container } from "./styles";

interface FavoriteItemProps {
  name: string;
  photo: string;
  onFavoriteItemPress: () => void;
}

const FavoriteItem: React.FC<FavoriteItemProps> = ({
  name,
  photo,
  onFavoriteItemPress,
}) => {
  return (
    <Container onPress={onFavoriteItemPress}>
      <CharacterImage
        source={{
          uri: photo,
        }}
      />
      <CharacterName>{name}</CharacterName>
    </Container>
  );
};

export default FavoriteItem;
