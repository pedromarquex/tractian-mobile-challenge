import React, { useEffect, useLayoutEffect, useState } from "react";
import { ActivityIndicator, List } from "@ant-design/react-native";
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
  const navigation = useNavigation();

  const { companyId, companyName } = route.params as IUnitsProps;
  const [units, setUnits] = useState<IUnit[]>([]);
  const [loading, setLoading] = useState(true);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: `Unidades de ${companyName}`,
    });
  }, [companyName, navigation]);

  useEffect(() => {
    async function loadUnits() {
      setLoading(true);
      const response = await api.get(`/units`);

      const filteredUnits = response.data.filter(
        (unit: IUnit) => unit.companyId === companyId
      );

      setUnits(filteredUnits);
      setLoading(false);
    }

    loadUnits();
  }, [companyId]);

  return (
    <SafeAreaContainer>
      <ScrollViewContainer>
        {loading ? (
          <ActivityIndicator />
        ) : (
          <List>
            {units.map((unit: IUnit) => (
              <List.Item
                key={unit.id}
                arrow="horizontal"
                onPress={() => {
                  navigation.navigate("Assets", {
                    companyId,
                    companyName,
                    unitId: unit.id,
                    unitName: unit.name,
                  });
                }}
              >
                {unit.name}
              </List.Item>
            ))}
          </List>
        )}
      </ScrollViewContainer>
    </SafeAreaContainer>
  );
}

export default Units;
