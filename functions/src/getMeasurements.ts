import * as functions from "firebase-functions";
import measurementsData from "./measurementsData";

export const measurements = functions.https.onRequest(
  (request, response) => {
    if (request.method !== "GET") {
      throw new functions.https.HttpsError("invalid-argument", "Invalid HTTP method")
    }
    response.json(measurementsData);
  }
);
