import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import HighchartsReactNative from "@highcharts/highcharts-react-native";

import { SafeAreaContainer } from "../../components/SafeAreaContainer";
import { ScrollViewContainer } from "../../components/ScrollViewContainer";
import { IAsset } from "../../models/Asset";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: 500,
  },
});

interface IReportsProps {
  assets: IAsset[];
}

function Reports(): JSX.Element {
  const navigation = useNavigation();
  const route = useRoute();
  const { assets } = route.params as IReportsProps;

  const [healthChartOptions, setHealthChartOptions] = React.useState(() => {
    return {
      series: [
        {
          name: "Saúde",
          data: assets.map((asset) => asset.healthscore),
        },
      ],
      title: {
        text: "Saúde dos ativos",
      },
      yAxis: {
        title: {
          text: "Nível de saúde (%)",
        },
      },
      xAxis: {
        title: {
          text: "Ativo",
        },
        categories: assets.map((asset) => asset.name),
      },
    };
  });

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Relatórios",
    });
  }, [navigation]);

  return (
    <SafeAreaContainer>
      <ScrollViewContainer>
        <HighchartsReactNative
          styles={styles.container}
          options={healthChartOptions}
        />
      </ScrollViewContainer>
    </SafeAreaContainer>
  );
}

export default Reports;
