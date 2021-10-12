import React from "react";
import { useDispatch } from "react-redux";
import Apple from "../../assets/apple_icon.svg";
import Google from "../../assets/google_icon.svg";
import IronMan from "../../components/IronMan";
import SigninButton from "../../components/SigninButton";
import { AuthAction } from "../../redux/reducers/reducers.auth";
import { Container, Footer } from "./styles";

const SignIn: React.FC = () => {
  const dispatch = useDispatch();

  const handlePressButton = () => {
    dispatch(AuthAction.requestLogin("google"));
  };

  return (
    <Container>
      <IronMan />
      <Footer>
        <SigninButton
          logo={<Google />}
          title="Entrar com Google"
          onPress={handlePressButton}
        />
        <SigninButton
          logo={<Apple />}
          title="Entrar com Apple"
          onPress={handlePressButton}
        />
      </Footer>
    </Container>
  );
};

export default SignIn;
