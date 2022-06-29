import { NavigationContainer } from "@react-navigation/native";
import { AppStackRoutes } from "./app.stack.routes";

export function Routes(): JSX.Element {
  return (
    <NavigationContainer>
      <AppStackRoutes />
    </NavigationContainer>
  );
}
