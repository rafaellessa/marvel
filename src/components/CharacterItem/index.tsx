import React from "react";
import { CharacterImage, Container, ImageWrapper, Title } from "./styles";

interface CharacterItemProps {
  title: string;
  urlPhoto: string;
}

const CharacterItem: React.FC<CharacterItemProps> = ({ title, urlPhoto }) => {
  return (
    <Container>
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
