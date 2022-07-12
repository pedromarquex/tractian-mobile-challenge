import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  ActionSheet,
  ActivityIndicator,
  Button,
  Card,
  Icon,
  Provider,
  WingBlank,
} from "@ant-design/react-native";
import { Image, Text, View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { SafeAreaContainer } from "../../components/SafeAreaContainer";
import { ScrollViewContainer } from "../../components/ScrollViewContainer";
import * as S from "./styles";
import { StatusIcon } from "../../components/StatusIcon";
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

  const handleActionSheetOptionClick = useCallback(
    (index: number) => {
      if (index === 0) {
        const filteredAssets = assets;
        console.log(filteredAssets);
        navigation.navigate("Reports", {
          assets: filteredAssets,
        });
      }
    },
    [assets, navigation]
  );

  const showActionSheet = useCallback(() => {
    const BUTTONS = ["Relatórios", "Cancel"];
    ActionSheet.showActionSheetWithOptions(
      {
        title: "Opções",
        options: BUTTONS,
        cancelButtonIndex: 1,
      },
      handleActionSheetOptionClick
    );
  }, [handleActionSheetOptionClick]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Ativos",
      headerRight: () => (
        <Icon
          name="more"
          size={25}
          color="#fff"
          style={{ marginRight: 10 }}
          onPress={showActionSheet}
        />
      ),
    });
  }, [navigation]);

  return (
    <Provider>
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
                    {/* TODO REMOVER STYLE INLINE */}
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
                              fontWeight: "400",
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
    </Provider>
  );
}

export default Assets;
