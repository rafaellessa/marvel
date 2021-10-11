import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";
import { getBottomSpace } from "react-native-iphone-x-helper";

interface StyledProps {
  active?: boolean;
}

export const Container = styled.View`
  height: ${getBottomSpace() + RFValue(40)}px;
  background-color: ${({ theme }) => theme.colors.secondary};
  flex-direction: row;
  padding: 10px 20px;
  justify-content: space-between;
`;

export const TabItem = styled.TouchableOpacity`
  align-items: center;
`;

export const TabItemTitle = styled.Text<StyledProps>`
  color: ${({ theme, active }) =>
    active ? theme.colors.white : theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(10)}px;
`;

export const TabItemIcon = styled(MaterialIcons).attrs({
  size: 30,
})<StyledProps>`
  color: ${({ theme, active }) =>
    active ? theme.colors.white : theme.colors.primary};
`;
