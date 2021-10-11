import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
`;

export const UserInfoWrapper = styled.View`
  flex: 1;
  margin-top: ${RFValue(44)}px;
  align-items: center;
`;

export const UserAvatar = styled.Image`
  width: ${RFValue(166)}px;
  height: ${RFValue(166)}px;
  border-radius: 90px;
`;

export const UserName = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  margin-top: 36px;
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(20)}px;
`;

export const UserEmail = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  margin-top: 5px;
`;

export const Footer = styled.View`
  margin-bottom: 10px;
`;
