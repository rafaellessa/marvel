import React from "react";

import {
  Container,
  ImageWrapper,
  IronImage,
  MarvelImageWrapper,
  MarvelImage,
  TextWrapper,
  Title,
  SubTitle,
  ButtonWrapper,
} from "./styles";
import Iron from "../../assets/iron_man.png";
import MarvelLogo from "../../assets/marvel_logo.png";
import Button from "../../components/Button";

const Splash: React.FC = () => {
  return (
    <Container>
      <ImageWrapper>
        <IronImage source={Iron} />
      </ImageWrapper>
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
