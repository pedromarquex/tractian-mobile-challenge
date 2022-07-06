import { Icon } from "@ant-design/react-native";
import { View } from "react-native";

interface StatusIconsPops {
  status: "inAlert" | "inOperation" | "inDowntime";
}

function StatusIcon({ status }: StatusIconsPops): JSX.Element | null {
  let iconComponent = null;
  switch (status) {
    case "inAlert":
      iconComponent = <Icon name="warning" size="md" color="#d69018" />;
      break;
    case "inOperation":
      iconComponent = <Icon name="play-circle" size="md" color="#0d8500" />;
      break;
    case "inDowntime":
      iconComponent = <Icon name="stop" size="md" color="red" />;
      break;
    default:
      return null;
  }
  // TODO REMOVER STYLE INLINE
  return <View style={{ alignItems: "flex-end" }}>{iconComponent}</View>;
}

export { StatusIcon };
