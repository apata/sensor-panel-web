import * as express from "express";

import getMeasurements from "./getMeasurements";
import getDevices from "./getDevices";
import getDataTypes from "./getDataTypes";
import postSink from "./postSink";
import sanitiseSinkPayloadMiddleware from "./middleware/sanitiseSinkPayloadMiddleware";
import createDeviceDocumentMiddleware from "./middleware/createDeviceDocumentMiddleware";

const app = express();

app.use(express.json());

app.get("/devices", getDevices);
app.get("/measurements", getMeasurements);
app.get("/data-types", getDataTypes);
app.post("/sink", [
  sanitiseSinkPayloadMiddleware,
  createDeviceDocumentMiddleware,
  postSink,
]);

export default app;
