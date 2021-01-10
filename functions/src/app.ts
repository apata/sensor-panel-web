import * as express from "express";

import getMeasurements from "./getMeasurements";
import getDevices from "./getDevices";
import getDataTypes from "./getDataTypes";

const app = express();

app.get("/devices", getDevices);
app.get("/measurements", getMeasurements);
app.get("/data-types", getDataTypes);

export default app;
