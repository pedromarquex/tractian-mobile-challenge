import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Companies from "../screens/Companies";
import Units from "../screens/Units";
import Assets from "../screens/Assets";

const { Screen, Navigator } = createStackNavigator();

export function AppStackRoutes(): JSX.Element {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Companies" component={Companies} />
      <Screen name="Units" component={Units} />
      <Screen name="Assets" component={Assets} />
    </Navigator>
  );
}
