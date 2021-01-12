import * as functions from "firebase-functions";
import app from "./app";
import createDataOnSchedule from "./createDataOnSchedule";

// Exports the Express app as single Firebase HTTPS function with path /api
export const api = functions.https.onRequest(app);
export const scheduledSensor = functions.pubsub
  .schedule("every 2 minutes")
  .onRun(createDataOnSchedule);
