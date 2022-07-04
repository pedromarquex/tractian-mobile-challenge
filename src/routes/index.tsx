import { NavigationContainer } from "@react-navigation/native";
import { AppStackRoutes } from "./app.stack.routes";

declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Companies: undefined;
      Units: undefined;
      Assets: undefined;
    }
  }
}

export function Routes(): JSX.Element {
  return (
    <NavigationContainer>
      <AppStackRoutes />
    </NavigationContainer>
  );
}
