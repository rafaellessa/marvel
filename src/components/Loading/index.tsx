import React from "react";
import { useTheme } from "styled-components";

import { Container, Spinner } from "./styles";

const Loading: React.FC = () => {
  const theme = useTheme();
  return (
    <Container>
      <Spinner size="large" color={theme.colors.white} />
    </Container>
  );
};

export default Loading;
