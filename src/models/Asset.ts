interface IAsset {
  id: number;
  sensors: string[];
  model: string;
  status: "inAlert" | "inOperation" | "inDowntime";
  healthscore: number;
  name: string;
  image: string;
  specifications: {
    maxTemp: number;
    rpm?: number;
    power?: number;
  };
  metrics: {
    totalCollectsUptime: number;
    totalUptime: number;
    lastUptimeAt: string;
  };
  unitId: number;
  companyId: number;
}

export { IAsset };
