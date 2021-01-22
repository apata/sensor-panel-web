import React, { useContext, useEffect, useRef } from "react";
import FullSizeContainer from "../elements/FullSizeContainer";
import { MeasurementsByDevice } from "../../functions/src/models/MeasurementsByDevice";
import drawDiagram from "../utils/drawDiagram";
import DeviceColorsContext from "../context/DeviceColorsContext";

interface D3DiagramProps {
  data: MeasurementsByDevice;
}

const D3Diagram = ({ data }: D3DiagramProps) => {
  const { colorMap } = useContext(DeviceColorsContext);
  const d3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    drawDiagram(d3Ref, data, colorMap);

    const currentRef = d3Ref.current;
    return () => {
      currentRef?.firstChild?.remove();
    };
  }, [data, colorMap]);

  return <FullSizeContainer ref={d3Ref} />;
};

export default D3Diagram;
