import * as functions from "firebase-functions";
import expressApp from "./app";
import createDataOnSchedule from "./createDataOnSchedule";

// Exports the Express app as single Firebase HTTPS function with path /app/
export const app = functions.https.onRequest(expressApp);
export const scheduledSensor = functions.pubsub
  .schedule("every 2 minutes")
  .onRun(createDataOnSchedule);
