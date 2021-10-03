import { TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled(TouchableOpacity)`
  background-color: ${({ theme }) => theme.colors.white};
  flex-direction: row;
  width: ${RFValue(311)}px;
  height: ${RFValue(56)}px;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border-radius: 10px;
  margin-bottom: 16px;
`;

export const LogoWrapper = styled.View``;
export const TitleWrapper = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.secondary100};
  font-size: ${RFValue(14)}px;
  text-align: center;
`;
