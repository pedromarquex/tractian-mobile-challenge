import React from "react";
import { useNavigation } from "@react-navigation/native";
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
            options={this.state.chartOptions}
          />
        </View>
      </ScrollViewContainer>
    </SafeAreaContainer>
  );
}

export default Reports;
