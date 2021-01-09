import * as functions from "firebase-functions";

/* 
  GET /devices
  returns list of available devices
  useful to construct filtering menu
*/
export const devices = functions.https.onRequest((request, response) => {
  if (request.method !== "GET") {
    throw new functions.https.HttpsError("invalid-argument", "Invalid HTTP method")
  }
// TODO: load devices from datastore
  const devices = [
    "70B3D5E390001111",
    "70B3D5E390001112",
    "70B3D5E390001113",
    "70B3D5E390001114",
  ]
  response.json(devices);
});

