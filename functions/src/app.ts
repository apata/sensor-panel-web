import * as express from "express";

import getMeasurements from "./endpoints/getMeasurements";
import getDevices from "./endpoints/getDevices";
import getDataTypes from "./endpoints/getDataTypes";
import postSink from "./endpoints/postSink";
import sanitiseSinkPayloadMiddleware from "./middleware/sanitiseSinkPayloadMiddleware";
import createDeviceDocumentMiddleware from "./middleware/createDeviceDocumentMiddleware";

const app = express();

app.use(express.json());

app.get("/api/devices", getDevices);
app.get("/api/measurements", getMeasurements);
app.get("/api/data-types", getDataTypes);
app.post("/api/sink", [
  sanitiseSinkPayloadMiddleware,
  createDeviceDocumentMiddleware,
  postSink,
]);

export default app;
