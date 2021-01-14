import { RequestHandler } from "express";
import remapDataType from "../utils/remapDataType";

/* 
  GET /data-types
  returns list of available data types
  useful to construct filtering menu
*/
const getDataTypes: RequestHandler = (request, response) => {
  const dataTypes = ["dt_temperature_C", "dt_humidity_pct", "dt_co2_ppm"]; // DataTypes are hardcoded in the BE
  response.json(dataTypes.map(remapDataType));
  return;
};

export default getDataTypes;
