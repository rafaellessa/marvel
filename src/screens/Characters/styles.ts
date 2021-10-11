import { FlatList } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

export const InputWrapper = styled.View`
  padding: 0 24px;
  margin: 10px 0;
`;

export const ListHeader = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${RFValue(16)}px;
`;

export const ListWrapper = styled.View`
  padding: 0 20px;
  margin-top: 11px;
  flex: 1;
  justify-content: center;
  width: 100%;
`;

export const CharactersList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingBottom: 40,
  },
})`
  margin-top: 20px;
` as unknown as typeof FlatList;

export const Footer = styled.View``;
