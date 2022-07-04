import React from "react";
import { List } from "@ant-design/react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaContainer } from "../../components/SafeAreaContainer";
import { ScrollViewContainer } from "../../components/ScrollViewContainer";

import * as S from "./styles";

function Companies() {
  const navigation = useNavigation();

  return (
    <SafeAreaContainer>
      <ScrollViewContainer>
        <S.TitleText>Empresas</S.TitleText>
        <List>
          <List.Item
            arrow="horizontal"
            onPress={() => navigation.navigate("Units")}
          >
            Nome da empresa
          </List.Item>
          <List.Item
            arrow="horizontal"
            onPress={() => navigation.navigate("Units")}
          >
            Nome da empresa
          </List.Item>
          <List.Item
            arrow="horizontal"
            onPress={() => navigation.navigate("Units")}
          >
            Nome da empresa
          </List.Item>
        </List>
      </ScrollViewContainer>
    </SafeAreaContainer>
  );
}

export default Companies;
