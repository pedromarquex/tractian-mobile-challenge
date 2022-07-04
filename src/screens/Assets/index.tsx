import React, { useEffect, useState } from "react";
import { ActivityIndicator, Card, WingBlank } from "@ant-design/react-native";
import { Image, View } from "react-native";
import { useRoute } from "@react-navigation/native";

import { SafeAreaContainer } from "../../components/SafeAreaContainer";
import { ScrollViewContainer } from "../../components/ScrollViewContainer";
import * as S from "./styles";
import { StatusIcon } from "./components/StatusIcon";
import { api } from "../../services/api";
import { getStatus } from "../../services/status";

interface IAssetProps {
  companyId: number;
  companyName: string;
  unitId: number;
  unitName: string;
}

interface IAsset {
  id: number;
  sensors: string[];
  model: string;
  status: "inAlert" | "inOperation" | "inDowntime";
  healthscore: number;
  name: string;
  image: string;
  specifications: {
    maxTemp: number;
  };
  metrics: {
    totalCollectsUptime: number;
    totalUptime: number;
    lastUptimeAt: string;
  };
  unitId: number;
  companyId: number;
}

function Assets(): JSX.Element {
  const route = useRoute();
  const { companyId, companyName, unitId, unitName } =
    route.params as IAssetProps;

  const [assets, setAssets] = useState<IAsset[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadAssets() {
      setLoading(true);
      const response = await api.get(`/assets`);
      const filteredAssets = response.data.filter((asset: IAsset) => {
        return asset.unitId === unitId && asset.companyId === companyId;
      });
      setAssets(filteredAssets);
      setLoading(false);
    }

    loadAssets();
  }, [companyId, unitId]);

  return (
    <SafeAreaContainer>
      <ScrollViewContainer>
        <S.TitleText>
          Ativos {"\n"}
          {companyName} | {unitName}
        </S.TitleText>
        {loading ? (
          <ActivityIndicator />
        ) : (
          <WingBlank size="lg">
            {assets?.map((asset) => (
              <Card key={asset.id} style={{ marginBottom: 15 }}>
                <Card.Header
                  title={asset.name}
                  extra={<StatusIcon status={asset.status} />}
                />
                <Card.Body>
                  <View>
                    <Image
                      source={{
                        uri: asset.image,
                      }}
                      style={{
                        width: "100%",
                        height: 200,
                        resizeMode: "cover",
                      }}
                    />
                  </View>
                </Card.Body>
                <Card.Footer
                  content={`${asset.healthscore}% de saúde`}
                  extra={getStatus(asset.status)}
                />
              </Card>
            ))}
          </WingBlank>
        )}
      </ScrollViewContainer>
    </SafeAreaContainer>
  );
}

export default Assets;
