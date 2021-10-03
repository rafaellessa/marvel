import React from "react";
import { TouchableOpacityProps } from "react-native";
import { Container, LogoWrapper, Title, TitleWrapper } from "./styles";

interface SignInButtonProps extends TouchableOpacityProps {
  title: string;
  logo: React.ReactNode;
}

const SigninButton: React.FC<SignInButtonProps> = ({
  title,
  logo,
  ...rest
}) => {
  return (
    <Container {...rest}>
      <LogoWrapper>{logo}</LogoWrapper>
      <TitleWrapper>
        <Title>{title}</Title>
      </TitleWrapper>
    </Container>
  );
};

export default SigninButton;
