import { useNavigation } from "@react-navigation/core";
import React from "react";
import { useSelector } from "react-redux";
import MarvelLogo from "../../assets/marvel_logo.png";
import Button from "../../components/Button";
import IronMan from "../../components/IronMan";
import Loading from "../../components/Loading";
import { getAuthMetadata } from "../../redux/selectors/selectors.auth";
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
  const navigation = useNavigation();
  const { loading } = useSelector(getAuthMetadata);

  const handlePressButton = () => {
    navigation.navigate("Signin");
  };

  const renderContent = () => (
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
        <Button title="Começar" onPress={handlePressButton} />
      </ButtonWrapper>
    </Container>
  );

  const validateRender = () => {
    if (loading) {
      return <Loading />;
    }
    return renderContent();
  };
  return validateRender();
};

export default Splash;
