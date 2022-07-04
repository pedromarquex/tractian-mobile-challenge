import React from "react";
import { List } from "@ant-design/react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaContainer } from "../../components/SafeAreaContainer";
import { ScrollViewContainer } from "../../components/ScrollViewContainer";

import * as S from "./styles";

function Units() {
  const navigation = useNavigation();
  return (
    <SafeAreaContainer>
      <ScrollViewContainer>
        <S.TitleText>Unidades da empresa X</S.TitleText>

        <List>
          <List.Item
            arrow="horizontal"
            onPress={() => {
              navigation.navigate("Assets");
            }}
          >
            Nome da unidade
          </List.Item>
          <List.Item arrow="horizontal" onPress={() => {}}>
            Nome da unidade
          </List.Item>
          <List.Item arrow="horizontal" onPress={() => {}}>
            Nome da unidade
          </List.Item>
        </List>
      </ScrollViewContainer>
    </SafeAreaContainer>
  );
}

export default Units;
