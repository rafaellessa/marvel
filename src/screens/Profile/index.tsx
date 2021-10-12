import React from "react";
import { useSelector } from "react-redux";
import Button from "../../components/Button";
import PageHeader from "../../components/PageHeader";
import useAuth from "../../hooks/useAuth";
import { getUser } from "../../redux/selectors/selectors.auth";
import {
  Container,
  UserAvatar,
  UserName,
  UserEmail,
  Footer,
  UserInfoWrapper,
} from "./styles";

const Profile: React.FC = () => {
  const user = useSelector(getUser);
  const { logoff } = useAuth();
  return (
    <Container>
      <PageHeader rightIcon={false} title="Perfil" />
      <UserInfoWrapper>
        <UserAvatar source={{ uri: user.photo }} />
        <UserName>{user.name}</UserName>
        <UserEmail>{user.email}</UserEmail>
      </UserInfoWrapper>
      <Footer>
        <Button title="Sair" onPress={() => logoff()} />
      </Footer>
    </Container>
  );
};

export default Profile;
