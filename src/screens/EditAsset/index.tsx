import React, { useEffect, useLayoutEffect, useState } from "react";
import { ActivityIndicator } from "@ant-design/react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import * as S from "./styles";
import { SafeAreaContainer } from "../../components/SafeAreaContainer";
import { ScrollViewContainer } from "../../components/ScrollViewContainer";
import { IAsset } from "../../models/Asset";
import { api } from "../../services/api";
import { parseDateTime } from "../../services/parseDate";
import { getStatus } from "../../services/status";

function EditAsset(): JSX.Element {
  const [loading, setLoading] = useState(true);
  const [asset, setAsset] = useState<IAsset>({} as IAsset);
  const navigation = useNavigation();
  const route = useRoute();
  const { assetId } = route.params as { assetId: number };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Editar Ativo",
    });
  }, [navigation]);

  useEffect(() => {
    function loadAsset(): void {
      setLoading(true);
      api.get(`/assets/${assetId}`).then((response) => {
        setAsset(response.data);
        setLoading(false);
      });
    }
    loadAsset();
  }, [assetId]);

  return (
    <SafeAreaContainer>
      <ScrollViewContainer>
        {loading ? (
          <ActivityIndicator />
        ) : (
          <S.FormContainer>
            <S.InputLabel>Nome do ativo</S.InputLabel>
            <S.Input value={asset.name} placeholder="Motor HD-25" />

            <S.InputLabel>Status</S.InputLabel>
            <S.Input
              value={String(getStatus(asset.status))}
              placeholder="Ativo"
            />

            <S.InputLabel>Saúde</S.InputLabel>
            <S.Input
              keyboardType="numeric"
              value={String(asset.healthscore)}
              placeholder="80"
            />

            <S.InputLabel>Temperatura máxima (ºC)</S.InputLabel>
            <S.Input
              value={String(asset.specifications.maxTemp)}
              placeholder="90"
            />

            <S.InputLabel>Sensores</S.InputLabel>
            <S.Input value={asset.sensors.join(", ")} placeholder="HC-2025" />

            <S.InputLabel>Total de Coletas Uptime</S.InputLabel>
            <S.Input
              value={String(asset.metrics.totalUptime)}
              placeholder="321656"
            />

            <S.InputLabel>Total de Horas de Coletas Uptime</S.InputLabel>
            <S.Input
              value={String(asset.metrics.totalCollectsUptime)}
              placeholder="360"
            />

            <S.InputLabel>Data da Ultima Coleta Uptime</S.InputLabel>
            <S.Input
              value={parseDateTime(asset.metrics.lastUptimeAt)}
              placeholder="25 de Abril de 2020 às 13:00"
            />
          </S.FormContainer>
        )}
      </ScrollViewContainer>
    </SafeAreaContainer>
  );
}

export default EditAsset;
