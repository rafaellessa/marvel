import { TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled(TouchableOpacity)`
  width: ${RFValue(241)}px;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 10px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${RFValue(16)}px;
  text-align: center;
  margin-top: 15px;
`;
