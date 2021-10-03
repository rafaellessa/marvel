import React from "react";
import IronMan from "../../components/IronMan";
import SigninButton from "../../components/SigninButton";
import { Container, Footer } from "./styles";

import Google from "../../assets/google_icon.svg";
import Apple from "../../assets/apple_icon.svg";

const SignIn: React.FC = () => {
  return (
    <Container>
      <IronMan />
      <Footer>
        <SigninButton logo={<Google />} title="Entrar com Google" />
        <SigninButton logo={<Apple />} title="Entrar com Apple" />
      </Footer>
    </Container>
  );
};

export default SignIn;
