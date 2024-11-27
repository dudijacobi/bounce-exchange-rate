import { BaseType, ExchangeRate } from "../services/types";

export interface DiagramData {
  timestamp: number;
  usd: number;
  ils: number;
}

export type DiagramSeries = {
  label: string;
  data: DiagramData[];
};

export const getDiagramData = (data: ExchangeRate[]) => {
  const formatedData = data.map(({ timestamp, rates }) => ({
    label: BaseType.ILS,
    data: [{ timestamp, ils: rates.ILS }],
  } as DiagramSeries));

  return formatedData;
};
