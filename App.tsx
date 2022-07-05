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
      <StatusBar style="auto" />
      <Routes />
    </SafeAreaProvider>
  );
}
