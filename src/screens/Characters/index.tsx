import React from "react";
import Header from "../../components/Header";
import InputSearch from "../../components/InputSearch";
import CharacterService from "../../data/services/characters";

import {
  Container,
  InputWrapper,
  ListHeader,
  ListWrapper,
  CharactersList,
  Footer,
} from "./styles";

const Characters: React.FC = () => {
  const fetch = async () => {
    const characters = await CharacterService.getCharacters();
    console.log("Result: ", characters);
  };

  fetch();

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
