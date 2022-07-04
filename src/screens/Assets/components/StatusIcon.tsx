import { Icon } from "@ant-design/react-native";
import { View } from "react-native";

interface StatusIconsPops {
  status: "inAlert" | "inOperation" | "InDowntime";
}

function StatusIcon({ status }: StatusIconsPops): JSX.Element | null {
  let iconComponent = null;
  switch (status) {
    case "inAlert":
      iconComponent = <Icon name="warning" size="lg" color="yellow" />;
      break;
    case "inOperation":
      iconComponent = <Icon name="play-circle" size="lg" />;
      break;
    case "InDowntime":
      iconComponent = <Icon name="stop" size="lg" color="red" />;
      break;
    default:
      return null;
  }

  return <View style={{ alignItems: "flex-end" }}>{iconComponent}</View>;
}

export { StatusIcon };
