import styled from "styled-components/native";
import SafeAreaView from "react-native-safe-area-view";

export const AssetNameText = styled.Text`
  font-size: 20px;
  color: #000;
  font-family: "Inter_600SemiBold";
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

export const AssetDetailContainer = styled.View`
  margin-top: 20px;
  margin-left: 15px;
  flex: 1;
`;

export const DetailText = styled.Text`
  font-size: 14px;
  font-family: "Inter_400Regular";
  color: #71797e;
`;

export const DetailTitleText = styled.Text`
  font-size: 16px;
  font-family: "Inter_500Medium";
  margin-top: 10px;
`;

export const RowContainer = styled.View`
  flex-direction: row;
  width: 100%;
`;

export const RowItemContainer = styled.View`
  width: 50%;
`;
