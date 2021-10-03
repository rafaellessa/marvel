import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

interface TextProps {
  bold?: boolean;
}

export const Container = styled.View``;

export const InfoWrapper = styled.View`
  flex-direction: row;
`;

export const ContentWrapper = styled.View`
  margin-top: ${getStatusBarHeight() + RFValue(16)}px;
  padding: 10px 24px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const UserWrapper = styled.View`
  margin-left: 15px;
`;

export const UserName = styled.Text<TextProps>`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme, bold }) =>
    bold ? theme.fonts.bold : theme.fonts.regular};
  font-size: ${RFValue(18)}px;
`;

export const UserNameWrapper = styled.View`
  flex-direction: row;
`;

export const UserGreeting = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
`;
