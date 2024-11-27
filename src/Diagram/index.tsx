import { useMemo } from "react";
import { AxisOptions, Chart, UserSerie } from "react-charts";
import { DiagramData } from "./utils";

import "./style.css";

interface Props {
  data: UserSerie<any>[];
}

const Diagram = ({ data }: Props) => {
  const primaryAxis = useMemo(
    (): AxisOptions<DiagramData> => ({
      getValue: (value) => new Date(value.timestamp * 1000).toLocaleDateString(),
      elementType: "area",
    }),
    []
  );

  const secondaryAxes = useMemo(
    (): AxisOptions<DiagramData>[] => [
      {
        getValue: (value) => value.ils,
        // elementType: "line",
      },
      {
        id: "precentage",
        getValue: (value) => value.timestamp,
        // elementType: "line",
      },
    ],
    []
  );

  if (!data) {
    return null;
  }

  return (
    <div className="diagram">
      <Chart
        options={{
          data,
          primaryAxis,
          secondaryAxes,
        }}
      />
    </div>
  );
};

export default Diagram;
