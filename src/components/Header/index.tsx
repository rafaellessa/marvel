import React from "react";
import Avatar from "../Avatar";
import {
  Container,
  ContentWrapper,
  UserGreeting,
  UserName,
  UserWrapper,
  InfoWrapper,
  UserNameWrapper,
} from "./styles";

interface HeaderProps {
  userName: string;
  urlPhoto: string;
}

const Header: React.FC<HeaderProps> = ({ userName, urlPhoto }) => {
  return (
    <Container>
      <ContentWrapper>
        <InfoWrapper>
          <Avatar url={urlPhoto} />
          <UserWrapper>
            <UserNameWrapper>
              <UserName>Olá, </UserName>
              <UserName bold>{userName}</UserName>
            </UserNameWrapper>
            <UserGreeting>Seja bem vindo!</UserGreeting>
          </UserWrapper>
        </InfoWrapper>
      </ContentWrapper>
    </Container>
  );
};

export default Header;
