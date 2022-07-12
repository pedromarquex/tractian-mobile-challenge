import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Companies from "../screens/Companies";
import Units from "../screens/Units";
import Assets from "../screens/Assets";
import AssetDetail from "../screens/AssetDetail";
import Reports from "../screens/Reports";
import EditAsset from "../screens/EditAsset";

const { Screen, Navigator } = createStackNavigator();

export function AppStackRoutes(): JSX.Element {
  return (
    <Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#2563eb",
        },
        headerTintColor: "#fff",
      }}
    >
      <Screen name="Companies" component={Companies} />
      <Screen name="Units" component={Units} />
      <Screen name="Assets" component={Assets} />
      <Screen name="AssetDetail" component={AssetDetail} />
      <Screen name="EditAsset" component={EditAsset} />
      <Screen name="Reports" component={Reports} />
    </Navigator>
  );
}
