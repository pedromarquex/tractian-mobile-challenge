import React, { useEffect, useLayoutEffect, useState } from "react";
import { ActivityIndicator } from "@ant-design/react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import DropDownPicker from "react-native-dropdown-picker";

import * as S from "./styles";
import { SafeAreaContainer } from "../../components/SafeAreaContainer";
import { ScrollViewContainer } from "../../components/ScrollViewContainer";
import { IAsset } from "../../models/Asset";
import { api } from "../../services/api";
import { parseDateTime } from "../../services/parseDate";

function EditAsset(): JSX.Element {
  const [loading, setLoading] = useState(true);
  const [asset, setAsset] = useState<IAsset>({} as IAsset);

  const [statusOpen, setStatusOpen] = useState(false);
  const [statusValue, setStatusValue] = useState(null);
  const [statusItems, setStatusItems] = useState([
    { label: "Em Alerta", value: "inAlert" },
    { label: "Em Operação", value: "inOperation" },
    { label: "Em Parada", value: "inDowntime" },
  ]);

  const [sensorsOpen, setSensorsOpen] = useState(false);
  const [sensorsValue, setSensorsValue] = useState([]);
  const [sensorsItems, setSensorsItems] = useState([
    { label: "GSJ1535", value: "GSJ1535" },
    { label: "IBS1636", value: "IBS1636" },
    { label: "JVC1134", value: "JVC1134" },
    { label: "LZY5230", value: "LZY5230" },
    { label: "NBX2120", value: "NBX2120" },
  ]);

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
        setStatusValue(response.data.status);
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
            <DropDownPicker
              style={{ borderWidth: 0, marginBottom: 10 }}
              open={statusOpen}
              value={statusValue}
              items={statusItems}
              setOpen={setStatusOpen}
              setValue={setStatusValue}
              setItems={setStatusItems}
              placeholder="Selecione o status"
              listMode="MODAL"
            />
            <S.InputLabel>Saúde (%)</S.InputLabel>
            <S.Input
              keyboardType="numeric"
              value={String(asset.healthscore)}
              placeholder="80"
            />
            <S.InputLabel>Temperatura máxima (ºC)</S.InputLabel>
            <S.Input
              keyboardType="numeric"
              value={String(asset.specifications.maxTemp)}
              placeholder="90"
            />
            <S.InputLabel>Sensores</S.InputLabel>
            <DropDownPicker
              style={{ borderWidth: 0, marginBottom: 10 }}
              open={sensorsOpen}
              value={sensorsValue}
              items={sensorsItems}
              setOpen={setSensorsOpen}
              setValue={setSensorsValue}
              setItems={setSensorsItems}
              placeholder="Selecione os sensores"
              listMode="MODAL"
              multiple
            />
            <S.InputLabel>Total de Coletas Uptime</S.InputLabel>
            <S.Input
              keyboardType="numeric"
              value={String(asset.metrics.totalUptime)}
              placeholder="321656"
            />
            <S.InputLabel>Total de Horas de Coletas Uptime</S.InputLabel>
            <S.Input
              keyboardType="numeric"
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
