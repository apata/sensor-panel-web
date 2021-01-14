import * as express from "express";

import getMeasurements from "./routes/getMeasurements";
import getDevices from "./routes/getDevices";
import getDataTypes from "./routes/getDataTypes";
import postSink from "./routes/postSink";
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
