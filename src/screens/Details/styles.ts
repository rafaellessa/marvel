import { FlatList } from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  padding: 0 24px;
  align-items: center;
`;
export const CharacterImage = styled.Image`
  width: ${RFValue(252)}px;
  height: ${RFValue(277)}px;
  margin-top: 17px;
  border-radius: 10px;
`;

export const CharacterName = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  margin-top: 5px;
`;

export const CharacterDescription = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(10)}px;
  margin-top: 10px;
  text-align: center;
`;

export const ComicsWrapper = styled.View`
  width: 100%;
  margin-top: 20px;
`;

export const TitleCommics = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const Footer = styled.View`
  flex: 1;
  justify-content: flex-end;
  margin-bottom: ${getBottomSpace() + RFValue(10)}px;
`;

export const ComicsList = styled.FlatList`` as unknown as typeof FlatList;
