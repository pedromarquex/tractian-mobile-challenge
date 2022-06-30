import styled from "styled-components/native";
import SafeAreaView from "react-native-safe-area-view";
import Constants from "expo-constants";

export const SafeAreaContainer = styled(SafeAreaView)`
  padding-top: ${Constants.statusBarHeight}px;
  background-color: #e1e1e1;
  min-height: 100%;
`;
