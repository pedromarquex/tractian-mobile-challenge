import { Icon } from "@ant-design/react-native";
import { View } from "react-native";

interface StatusIconsPops {
  status: "inAlert" | "inOperation" | "inDowntime";
}

function StatusIcon({ status }: StatusIconsPops): JSX.Element | null {
  let iconComponent = null;
  switch (status) {
    case "inAlert":
      iconComponent = <Icon name="warning" size="md" color="#f5ce0f" />;
      break;
    case "inOperation":
      iconComponent = <Icon name="play-circle" size="md" color="green" />;
      break;
    case "inDowntime":
      iconComponent = <Icon name="stop" size="md" color="red" />;
      break;
    default:
      return null;
  }

  return <View style={{ alignItems: "flex-end" }}>{iconComponent}</View>;
}

export { StatusIcon };
