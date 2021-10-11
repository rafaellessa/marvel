import React from "react";
import IronMan from "../../components/IronMan";
import SigninButton from "../../components/SigninButton";
import { Container, Footer } from "./styles";

import Google from "../../assets/google_icon.svg";
import Apple from "../../assets/apple_icon.svg";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { AuthAction } from "../../redux/reducers/reducers.auth";

const SignIn: React.FC = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handlePressButton = () => {
    // navigation.navigate("Characters");
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
