import React, { useEffect, useRef } from "react";
import FullSizeContainer from "../elements/FullSizeContainer";
import { MeasurementsByDevice } from "../../functions/src/models/MeasurementsByDevice";
import drawDiagram from "./drawDiagram";

interface D3DiagramProps {
  data: MeasurementsByDevice;
  deviceColorMap: Map<string, string>;
}

const D3Diagram = ({ data, deviceColorMap }: D3DiagramProps) => {
  const d3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    drawDiagram(d3Ref, data, deviceColorMap);
  }, [data, deviceColorMap]);

  return <FullSizeContainer ref={d3Ref} />;
};

export default D3Diagram;
