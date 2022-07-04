import { NavigationContainer } from "@react-navigation/native";
import { AppStackRoutes } from "./app.stack.routes";

declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Companies: undefined;
      Units: { companyId: number; companyName: string };
      Assets: {
        companyId: number;
        companyName: string;
        unitId: number;
        unitName: string;
      };
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
