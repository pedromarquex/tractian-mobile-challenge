import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import HighchartsReactNative from "@highcharts/highcharts-react-native";

import { SafeAreaContainer } from "../../components/SafeAreaContainer";
import { ScrollViewContainer } from "../../components/ScrollViewContainer";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    justifyContent: "center",
    flex: 1,
  },
});

function Reports(): JSX.Element {
  const navigation = useNavigation();
  const route = useRoute();
  const { assets } = route.params;
  // console.log(route.params);

  const [chartOptions, setChartOptions] = React.useState(() => {
    return {
      series: [
        {
          name: "Saúde",
          data: [
            { x: 1, y: 60 },
            { x: 2, y: 87.2 },
            { x: 3, y: 97 },
          ],
        },
      ],
      title: {
        text: "Grafico de teste",
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
        categories: ["Ativo 1", "Ativo 2", "Ativo 3"],
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
        <View style={styles.container}>
          <HighchartsReactNative
            styles={styles.container}
            options={chartOptions}
          />
        </View>
      </ScrollViewContainer>
    </SafeAreaContainer>
  );
}

export default Reports;
