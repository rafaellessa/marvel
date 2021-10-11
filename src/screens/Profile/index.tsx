import React from "react";
import Button from "../../components/Button";
import PageHeader from "../../components/PageHeader";
import {
  Container,
  UserAvatar,
  UserName,
  UserEmail,
  Footer,
  UserInfoWrapper,
} from "./styles";

const Profile: React.FC = () => {
  return (
    <Container>
      <PageHeader title="Perfil" />
      <UserInfoWrapper>
        <UserAvatar source={{ uri: "https://github.com/rafaellessa.png" }} />
        <UserName>Rafael Lessa</UserName>
        <UserEmail>rafael.lessa150@gmail.com</UserEmail>
      </UserInfoWrapper>
      <Footer>
        <Button title="Sair" />
      </Footer>
    </Container>
  );
};

export default Profile;
