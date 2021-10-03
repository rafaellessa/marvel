import React from "react";
import { Container, IronImage } from "./styles";
import Iron from "../../assets/iron_man.png";

const IronMan: React.FC = () => {
  return (
    <Container>
      <IronImage source={Iron} />
    </Container>
  );
};

export default IronMan;
