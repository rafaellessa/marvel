import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 65px;
  flex-direction: row;
  align-items: center;
  padding: 0 24px;
  margin-bottom: 20px;
`;

export const CharacterImage = styled.Image`
  width: ${RFValue(60)}px;
  height: ${RFValue(60)}px;

  border-radius: 10px;
`;

export const CharacterName = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(16)}px;
  margin-left: 20px;
`;
