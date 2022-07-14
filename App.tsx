import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import "react-native-gesture-handler";
import { LogBox } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

import { Routes } from "./src/routes";

export default function App() {
  async function loadFonts() {
    await Font.loadAsync(
      "antoutline",
      // eslint-disable-next-line
        require('@ant-design/icons-react-native/fonts/antoutline.ttf')
    );

    await Font.loadAsync(
      "antfill",
      // eslint-disable-next-line
        require('@ant-design/icons-react-native/fonts/antfill.ttf')
    );
  }

  useEffect(() => {
    LogBox.ignoreLogs([
      "expo-app-loading is deprecated",
      "ViewPropTypes will be removed",
      "Please instead use `remove()` on the subscription",
    ]);

    DropDownPicker.addTranslation("PT", {
      NOTHING_TO_SHOW: "Selecione",
      PLACEHOLDER: "Selecione",
      SEARCH_PLACEHOLDER: "Digite para buscar",
      SELECTED_ITEMS_COUNT_TEXT: {
        1: "1 item selecionado",
        n: "{count} itens selecionados",
      },
    });

    DropDownPicker.setLanguage("PT");
    loadFonts();
  }, []);

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <SafeAreaProvider>
      {/* eslint-disable-next-line react/style-prop-object */}
      <StatusBar style="light" />
      <Routes />
    </SafeAreaProvider>
  );
}
