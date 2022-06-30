import React from "react";
import { List } from "@ant-design/react-native";
import { SafeAreaContainer } from "../../components/SafeAreaContainer";
import { ScrollViewContainer } from "../../components/ScrollViewContainer";

import * as S from "./styles";

function Units() {
  return (
    <SafeAreaContainer>
      <ScrollViewContainer>
        <S.TitleText>Unidades</S.TitleText>

        <List>
          <List.Item arrow="horizontal" onPress={() => {}}>
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
