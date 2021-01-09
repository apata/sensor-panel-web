import * as functions from "firebase-functions";
import remapDataType from "./remapDataType";

/* 
  GET /datatypes
  returns list of available data types
  useful to construct filtering menu
*/
export const datatypes = functions.https.onRequest((request, response) => {
  if (request.method !== "GET") {
    throw new functions.https.HttpsError(
      "invalid-argument",
      "Invalid HTTP method"
    );
  }
  const datatypes = ["dt_temperature_C", "dt_humidity_pct", "dt_co2_ppm"]; // TODO: load datatypes from datastore
  response.json(datatypes.map(remapDataType));
});
