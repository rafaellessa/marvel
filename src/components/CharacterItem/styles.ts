import { TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled(TouchableOpacity)`
  width: ${RFValue(140)}px;
  height: ${RFValue(180)}px;
  border-radius: 10px;
  justify-content: space-between;
  margin-right: 10px;
  margin-left: 10px;
  margin-top: 10px;
`;

export const ImageWrapper = styled.View``;

export const CharacterImage = styled.Image.attrs({})`
  width: ${RFValue(140)}px;
  height: ${RFValue(160)}px;

  border-radius: 10px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.white};
  margin-top: 10px;
  font-size: ${RFValue(10)}px;
  text-align: left;
`;

export const TitleWrapper = styled.View`
  width: 100%;
  justify-content: center;
  flex-wrap: wrap;
`;
