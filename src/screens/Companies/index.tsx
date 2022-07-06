import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native";
import { ActivityIndicator, List } from "@ant-design/react-native";
import { SafeAreaContainer } from "../../components/SafeAreaContainer";
import { ScrollViewContainer } from "../../components/ScrollViewContainer";

import * as S from "./styles";
import { api } from "../../services/api";

interface ICompany {
  id: number;
  name: string;
}

function Companies(): JSX.Element {
  const navigation = useNavigation();

  const [companies, setCompanies] = useState<ICompany[]>([]);
  const [loading, setLoading] = useState(true);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Empresas",
    });
  }, [navigation]);

  useEffect(() => {
    async function loadCompanies() {
      setLoading(true);
      const response = await api.get("/companies");
      setCompanies(response.data);
      setLoading(false);
    }

    loadCompanies();
  }, []);

  return (
    <SafeAreaContainer>
      <ScrollViewContainer>
        {loading ? (
          <ActivityIndicator />
        ) : (
          <List>
            {companies?.map((company) => (
              <List.Item
                key={company.id}
                arrow="horizontal"
                onPress={() =>
                  navigation.navigate("Units", {
                    companyId: company.id,
                    companyName: company.name,
                  })
                }
              >
                {company.name}
              </List.Item>
            ))}
          </List>
        )}
      </ScrollViewContainer>
    </SafeAreaContainer>
  );
}

export default Companies;
