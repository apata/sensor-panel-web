import React, { useContext } from "react";
import getDataTypes from "../api/getDataTypes";
import Diagram from "../components/Diagram";
import FilterContext from "../context/FilterContext";
import GridContainer from "../elements/GridContainer";
import Label from "../elements/Label";
import useQuery from "../hooks/useQuery";
import getMeasurements from "../api/getMeasurements";

const Diagrams = () => {
  const { responseData: dataTypes, error, isLoading } = useQuery({
    query: getDataTypes,
  });
  const { params } = useContext(FilterContext);

  return (
    <GridContainer spacing="d2">
      {isLoading ? (
        <Label>Loading data types...</Label>
      ) : error ? (
        <Label>Error loading data types.</Label>
      ) : dataTypes && dataTypes.length ? (
        <>
          {dataTypes.map((dataType) => {
            const query = getMeasurements({
              ...params,
              dataTypes: [dataType.id],
            });
            return (
              <Diagram key={dataType.id} dataType={dataType} query={query} />
            );
          })}
        </>
      ) : (
        <Label>No data types found.</Label>
      )}
    </GridContainer>
  );
};

export default Diagrams;
