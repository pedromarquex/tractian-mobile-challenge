function getStatus(
  status: "inAlert" | "inOperation" | "inDowntime"
): string | null {
  switch (status) {
    case "inAlert":
      return "Em Alerta";
    case "inOperation":
      return "Em Operação";
    case "inDowntime":
      return "Em Parada";
    default:
      return null;
  }
}

export { getStatus };
