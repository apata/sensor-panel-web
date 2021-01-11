import { getJson } from "./API";
import GetMeasurementsParams from "../../functions/src/models/GetMeasurementsParams";
import Measurement from "../../functions/src/models/Measurement";

const getMeasurements = (params: GetMeasurementsParams) =>
  getJson<GetMeasurementsParams, Measurement[]>({
    path: "/api/measurements",
    params,
  });

export default getMeasurements;
