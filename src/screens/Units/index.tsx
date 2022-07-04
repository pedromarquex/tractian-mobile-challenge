import React, { useEffect, useState } from "react";
import { List } from "@ant-design/react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { SafeAreaContainer } from "../../components/SafeAreaContainer";
import { ScrollViewContainer } from "../../components/ScrollViewContainer";

import * as S from "./styles";
import { api } from "../../services/api";

interface IUnitsProps {
  companyId: number;
  companyName: string;
}

interface IUnit {
  id: number;
  name: string;
  companyId: number;
}

function Units(): JSX.Element {
  const route = useRoute();
  const { companyId, companyName } = route.params as IUnitsProps;
  const [units, setUnits] = useState<IUnit[]>([]);
  useEffect(() => {
    async function loadUnits() {
      const response = await api.get(`/units`);

      const filteredUnits = response.data.filter(
        (unit: IUnit) => unit.companyId === companyId
      );

      setUnits(filteredUnits);
    }

    loadUnits();
  }, [companyId]);
  const navigation = useNavigation();
  return (
    <SafeAreaContainer>
      <ScrollViewContainer>
        <S.TitleText>Unidades da {companyName}</S.TitleText>

        <List>
          {units.map((unit: IUnit) => (
            <List.Item
              key={unit.id}
              arrow="horizontal"
              onPress={() => {
                navigation.navigate("Assets");
              }}
            >
              {unit.name}
            </List.Item>
          ))}
        </List>
      </ScrollViewContainer>
    </SafeAreaContainer>
  );
}

export default Units;
