import React, { useEffect, useState } from "react";
import { ActivityIndicator, List } from "@ant-design/react-native";
import { useNavigation } from "@react-navigation/native";
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
        <S.TitleText>Empresas</S.TitleText>
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
