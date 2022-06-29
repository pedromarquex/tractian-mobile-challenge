import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Companies from "../screens/Companies";

const { Screen, Navigator } = createStackNavigator();

export function AppStackRoutes(): JSX.Element {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Companies" component={Companies} />
    </Navigator>
  );
}
