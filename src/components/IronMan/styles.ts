import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  align-items: center;
  margin-top: ${getStatusBarHeight() + RFValue(70)}px;
`;

export const IronImage = styled.Image`
  width: 100%;
`;
