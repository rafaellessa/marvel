import React from "react";
import MarvelLogo from "../../assets/marvel_logo.png";
import Button from "../../components/Button";
import IronMan from "../../components/IronMan";
import {
  ButtonWrapper,
  Container,
  MarvelImage,
  MarvelImageWrapper,
  SubTitle,
  TextWrapper,
  Title,
} from "./styles";

const Splash: React.FC = () => {
  return (
    <Container>
      <IronMan />
      <MarvelImageWrapper>
        <MarvelImage source={MarvelLogo} />
      </MarvelImageWrapper>
      <TextWrapper>
        <Title>“Heróis não nascem, eles são construídos”</Title>
        <SubTitle>Tudo sobre o universo Marvel em um único app.</SubTitle>
      </TextWrapper>
      <ButtonWrapper>
        <Button title="Começar" />
      </ButtonWrapper>
    </Container>
  );
};

export default Splash;
