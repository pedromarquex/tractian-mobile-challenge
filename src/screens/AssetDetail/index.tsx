import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ActivityIndicator } from "@ant-design/react-native";
import { ScrollViewContainer } from "../../components/ScrollViewContainer";
import * as S from "./styles";
import { IAsset } from "../../models/Asset";
import { api } from "../../services/api";
import { getStatus } from "../../services/status";
import { parseDateTime } from "../../services/parseDate";

interface IAssetDetailProps {
  assetId: number;
}

function AssetDetail(): JSX.Element {
  const route = useRoute();
  const navigation = useNavigation();
  const { assetId } = route.params as IAssetDetailProps;

  const [asset, setAsset] = useState<IAsset>({} as IAsset);
  const [loading, setLoading] = useState(true);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Detalhes do Ativo",
    });
  }, [navigation]);

  useEffect(() => {
    async function loadAsset() {
      setLoading(true);
      const response = await api.get(`/assets/${assetId}`);
      setAsset(response.data);
      setLoading(false);
    }

    loadAsset();
  }, [assetId]);

  return (
    <S.SafeAreaContainer>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <ScrollViewContainer>
          <S.AssetImage
            source={{
              uri: asset.image,
            }}
          />
          <S.AssetDetailContainer>
            <S.AssetNameText>{asset.name}</S.AssetNameText>
            <S.DetailText>{asset.model}</S.DetailText>

            <S.RowContainer>
              <S.RowItemContainer>
                <S.DetailTitleText>Status</S.DetailTitleText>
                <S.DetailText>{getStatus(asset.status)}</S.DetailText>
              </S.RowItemContainer>
              <S.RowItemContainer>
                <S.DetailTitleText>Saúde</S.DetailTitleText>
                <S.DetailText>{asset.healthscore}%</S.DetailText>
              </S.RowItemContainer>
            </S.RowContainer>

            <S.DetailTitleText>Temperatura máxima</S.DetailTitleText>
            <S.DetailText>{asset.specifications?.maxTemp}ºC</S.DetailText>

            <S.RowContainer>
              {asset.specifications?.power !== null &&
                asset.specifications?.power !== undefined && (
                  <S.RowItemContainer>
                    <S.DetailTitleText>Potência</S.DetailTitleText>
                    <S.DetailText>
                      {asset.specifications?.power} kWh
                    </S.DetailText>
                  </S.RowItemContainer>
                )}
              {asset.specifications?.rpm !== null &&
                asset.specifications?.rpm !== undefined && (
                  <S.RowItemContainer>
                    <S.DetailTitleText>RPM</S.DetailTitleText>
                    <S.DetailText>{asset.specifications?.rpm}</S.DetailText>
                  </S.RowItemContainer>
                )}
            </S.RowContainer>

            <S.DetailTitleText>Sensores</S.DetailTitleText>
            <S.DetailText>{asset.sensors?.join(", ")}</S.DetailText>

            <S.DetailTitleText>
              Total de Coletas Uptime(Ligada)
            </S.DetailTitleText>
            <S.DetailText>{asset.metrics?.totalCollectsUptime}</S.DetailText>

            <S.DetailTitleText>
              Total de Horas de Coletas Uptime(Ligada)
            </S.DetailTitleText>
            <S.DetailText>{asset.metrics?.totalUptime}</S.DetailText>

            <S.DetailTitleText>
              Data da Ultima Coleta Uptime(Ligada)
            </S.DetailTitleText>
            <S.DetailText>
              {parseDateTime(asset.metrics?.lastUptimeAt)}
            </S.DetailText>
          </S.AssetDetailContainer>
        </ScrollViewContainer>
      )}
    </S.SafeAreaContainer>
  );
}

export default AssetDetail;
