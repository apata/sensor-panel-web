import React from "react";
import DataType from "../../functions/src/models/DataType";
import D3Diagram from "../components/D3Diagram";
import useQuery from "../hooks/useQuery";
import { Heading2 } from "../elements/Typography";
import measurementsContainDataPoints from "../utils/measurementsContainDataPoints";
import { MeasurementsByDevice } from "../../functions/src/models/MeasurementsByDevice";
import QueryModel from "../api/models/QueryModel";
import DiagramContainer from "../elements/DiagramContainer";
import DiagramInner from "../elements/DiagramInner";

interface DiagramProps {
  dataType: DataType;
  query: QueryModel<MeasurementsByDevice>;
}

const Diagram = ({ dataType, query }: DiagramProps) => {
  const { responseData: measurements, error, isLoading } = useQuery({
    query,
  });

  return (
    <DiagramContainer>
      <Heading2>
        {dataType.name} (unit: {dataType.unit})
      </Heading2>
      <DiagramInner>
        {isLoading ? (
          "Loading data..."
        ) : error ? (
          "Failed to load data."
        ) : measurements &&
          measurements.length &&
          measurementsContainDataPoints(measurements) ? (
          <D3Diagram data={measurements} />
        ) : (
          "No data to display."
        )}
      </DiagramInner>
    </DiagramContainer>
  );
};

export default Diagram;
