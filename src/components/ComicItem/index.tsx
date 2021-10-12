import React from "react";

import { Container } from "./styles";

interface ComicItemProps {
  urlImage: string;
}

const ComicItem: React.FC<ComicItemProps> = ({ urlImage }) => {
  return (
    <Container
      source={{
        uri: urlImage,
      }}
    />
  );
};

export default ComicItem;
