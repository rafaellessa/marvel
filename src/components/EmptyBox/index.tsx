import React from "react";

import { Container, Title } from "./styles";

interface EmptyBoxProps {
  title: string;
}
const EmptyBox: React.FC<EmptyBoxProps> = ({ title }) => {
  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  );
};

export default EmptyBox;
