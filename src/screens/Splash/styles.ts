import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const Container = styled.View``;

export const IronImage = styled.Image`
  width: 100%;
`;

export const ImageWrapper = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: ${getStatusBarHeight() + RFValue(70)}px;
`;

export const MarvelImageWrapper = styled.View`
  justify-content: center;
  align-items: center;
  position: absolute;
  top: ${RFPercentage(62)}px;
  width: 100%;
`;

export const MarvelImage = styled.Image`
  width: ${RFValue(287)}px;
  height: ${RFValue(63)}px;
`;

export const TextWrapper = styled.View`
  margin-top: 50px;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${RFValue(20)}px;
  text-align: center;
`;

export const SubTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${RFValue(12)}px;
  text-align: center;
  margin-top: 15px;
`;

export const ButtonWrapper = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;
