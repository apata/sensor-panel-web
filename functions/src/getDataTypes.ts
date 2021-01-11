import { RequestHandler } from "express";
import remapDataType from "./remapDataType";

/* 
  GET /data-types
  returns list of available data types
  useful to construct filtering menu
*/
const getDataTypes: RequestHandler = (request, response) => {
  const dataTypes = ["dt_temperature_C", "dt_humidity_pct", "dt_co2_ppm"]; // TODO: load data types from datastore
  response.json(dataTypes.map(remapDataType));
};

export default getDataTypes;
