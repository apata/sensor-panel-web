import { RequestHandler } from "express";
import remapDataType from "./remapDataType";

/* 
  GET /datatypes
  returns list of available data types
  useful to construct filtering menu
*/
const getDataTypes: RequestHandler = (request, response) => {
  const datatypes = ["dt_temperature_C", "dt_humidity_pct", "dt_co2_ppm"]; // TODO: load datatypes from datastore
  response.json(datatypes.map(remapDataType));
};

export default getDataTypes;
