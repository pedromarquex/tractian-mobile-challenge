import React, { useEffect, useLayoutEffect, useState } from "react";
import {
  ActivityIndicator,
  Card,
  Icon,
  WingBlank,
} from "@ant-design/react-native";
import { Image, Text, View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { SafeAreaContainer } from "../../components/SafeAreaContainer";
import { ScrollViewContainer } from "../../components/ScrollViewContainer";
import * as S from "./styles";
import { StatusIcon } from "./components/StatusIcon";
import { api } from "../../services/api";
import { getStatus } from "../../services/status";
import { IAsset } from "../../models/Asset";

interface IAssetProps {
  companyId: number;
  companyName: string;
  unitId: number;
  unitName: string;
}

function Assets(): JSX.Element {
  const route = useRoute();
  const navigation = useNavigation();
  const { companyId, companyName, unitId, unitName } =
    route.params as IAssetProps;

  const [assets, setAssets] = useState<IAsset[]>([]);
  const [loading, setLoading] = useState(true);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Ativos",
    });
  }, [navigation]);

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
          {companyName} | {unitName}
        </S.TitleText>
        {loading ? (
          <ActivityIndicator />
        ) : (
          <WingBlank size="lg">
            {assets?.map((asset) => (
              <TouchableOpacity
                key={asset.id}
                onPress={() =>
                  navigation.navigate("AssetDetail", { assetId: asset.id })
                }
              >
                <Card style={{ marginBottom: 15 }}>
                  <Card.Header
                    title={
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 18,
                            fontWeight: "600",
                            marginRight: 5,
                          }}
                        >
                          {asset.name}
                        </Text>
                        <StatusIcon status={asset.status} />
                      </View>
                    }
                    extra={
                      <Icon style={{ alignSelf: "flex-end" }} name="right" />
                    }
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
                    extra={`status: ${getStatus(asset.status)}`}
                  />
                </Card>
              </TouchableOpacity>
            ))}
          </WingBlank>
        )}
      </ScrollViewContainer>
    </SafeAreaContainer>
  );
}

export default Assets;
