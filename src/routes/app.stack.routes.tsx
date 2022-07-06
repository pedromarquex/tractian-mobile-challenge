import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Companies from "../screens/Companies";
import Units from "../screens/Units";
import Assets from "../screens/Assets";
import AssetDetail from "../screens/AssetDetail";

const { Screen, Navigator } = createStackNavigator();

export function AppStackRoutes(): JSX.Element {
  return (
    <Navigator>
      <Screen name="Companies" component={Companies} />
      <Screen name="Units" component={Units} />
      <Screen name="Assets" component={Assets} />
      <Screen name="AssetDetail" component={AssetDetail} />
    </Navigator>
  );
}
