import { useNavigation } from "@react-navigation/core";
import React from "react";
import { Container, Title, IconWrapper, IconArrowBack } from "./styles";

interface PageHeaderProps {
  title: string;
  rightIcon: boolean;
}
const PageHeader: React.FC<PageHeaderProps> = ({ title, rightIcon }) => {
  const navigation = useNavigation();
  return (
    <Container>
      {rightIcon && (
        <IconWrapper onPress={() => navigation.goBack()}>
          <IconArrowBack />
        </IconWrapper>
      )}
      <Title>{title}</Title>
    </Container>
  );
};

export default PageHeader;
