import React from "react";
import { CharacterImage, Container, ImageWrapper, Title } from "./styles";

interface CharacterItemProps {
  title: string;
  urlPhoto: string;
  onItemPress: () => void;
}

const CharacterItem: React.FC<CharacterItemProps> = ({
  title,
  urlPhoto,
  onItemPress,
}) => {
  return (
    <Container onPress={onItemPress}>
      <ImageWrapper>
        <CharacterImage
          source={{
            uri: urlPhoto,
          }}
        />
      </ImageWrapper>
      <Title>{title}</Title>
    </Container>
  );
};

export default CharacterItem;
