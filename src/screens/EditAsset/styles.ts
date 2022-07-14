import styled from "styled-components/native";
import { Button, Icon } from "@ant-design/react-native";

export const FormContainer = styled.View`
  margin: 20px 30px 0 30px;
`;

export const InputLabel = styled.Text`
  font-size: 16px;
  font-family: "Inter_500Medium";
`;

export const Input = styled.TextInput`
  height: 50px;
  margin: 5px 0 10px 0;

  border-radius: 8px;
  background-color: #fff;
  padding: 0 10px 0 10px;
`;

export const SaveButton = styled(Button).attrs({
  type: "primary",
})`
  margin-top: 10px;
  background-color: #2563eb;
  border-radius: 8px;
`;

export const ImageContainer = styled.View`
  width: 100%;
  height: 200px;
  border-radius: 8px;
  background-color: #ccc;
  justify-content: center;
  align-items: center;
  align-self: center;
`;

export const IconTouchable = styled.TouchableOpacity``;

export const ImageIcon = styled(Icon).attrs({
  name: "camera",
  size: 40,
  color: "#fff",
})``;

export const SelectedImage = styled.Image`
  width: 100%;
  height: 200px;
  border-radius: 8px;
  resize-mode: contain;
`;

export const LargeButton = styled(Button)`
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 8px;
`;
