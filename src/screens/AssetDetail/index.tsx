import React, { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import { ActivityIndicator } from "@ant-design/react-native";
import { ScrollViewContainer } from "../../components/ScrollViewContainer";
import * as S from "./styles";
import { RowItemContainer } from "./styles";
import { IAsset } from "../../models/Asset";
import { api } from "../../services/api";
import { getStatus } from "../../services/status";
import { parseDateTime } from "../../services/parseDate";

interface IAssetDetailProps {
  assetId: number;
}

function AssetDetail(): JSX.Element {
  const route = useRoute();
  const { assetId } = route.params as IAssetDetailProps;
  console.log(assetId);

  const [asset, setAsset] = useState<IAsset>({} as IAsset);
  const [loading, setLoading] = useState(true);

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
            {/* <S.DetailText>{asset.metrics?.lastUptimeAt}</S.DetailText> */}

            <S.RowContainer>
              <RowItemContainer>
                <S.DetailTitleText>Status</S.DetailTitleText>
                <S.DetailText>{getStatus(asset.status)}</S.DetailText>
              </RowItemContainer>
              <RowItemContainer>
                <S.DetailTitleText>Saúde</S.DetailTitleText>
                <S.DetailText>{asset.healthscore}%</S.DetailText>
              </RowItemContainer>
            </S.RowContainer>

            <S.DetailTitleText>Temperatura máxima</S.DetailTitleText>
            <S.DetailText>{asset.specifications?.maxTemp}ºC</S.DetailText>

            {asset.specifications?.power !== null &&
            asset.specifications?.rpm !== null ? (
              <S.RowContainer>
                <RowItemContainer>
                  <S.DetailTitleText>Potência</S.DetailTitleText>
                  <S.DetailText>
                    {asset?.specifications?.power} kWh
                  </S.DetailText>
                </RowItemContainer>
                <RowItemContainer>
                  <S.DetailTitleText>RPM</S.DetailTitleText>
                  <S.DetailText>{asset?.specifications?.rpm}</S.DetailText>
                </RowItemContainer>
              </S.RowContainer>
            ) : null}

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