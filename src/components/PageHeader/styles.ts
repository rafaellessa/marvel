import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  width: 100%;
  margin-top: ${getStatusBarHeight() + RFValue(30)}px;
  padding: 0 24px;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(18)}px;
`;
