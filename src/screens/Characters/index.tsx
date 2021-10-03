import React from "react";
import Header from "../../components/Header";
import InputSearch from "../../components/InputSearch";

import {
  Container,
  InputWrapper,
  ListHeader,
  ListWrapper,
  CharactersList,
  Footer,
} from "./styles";

const Characters: React.FC = () => {
  return (
    <Container>
      <Header urlPhoto="https://github.com/rafaellessa.png" userName="Rafael" />
      <InputWrapper>
        <InputSearch />
      </InputWrapper>
      <ListWrapper>
        <ListHeader>Personagens</ListHeader>
        <CharactersList />
      </ListWrapper>
      <Footer />
    </Container>
  );
};

export default Characters;
