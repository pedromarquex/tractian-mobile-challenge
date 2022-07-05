import styled from "styled-components/native";
import SafeAreaView from "react-native-safe-area-view";

export const TitleText = styled.Text`
  margin-left: 10px;
  font-size: 20px;
  color: #000;
  font-family: "Inter_600SemiBold";
  margin-top: 20px;
  margin-bottom: 15px;
`;

export const AssetImage = styled.Image`
  width: 100%;
  height: 250px;
  resize-mode: cover;
`;

export const SafeAreaContainer = styled(SafeAreaView)`
  background-color: #e1e1e1;
  min-height: 100%;
`;
