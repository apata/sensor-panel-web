import { getJson } from "./API";
import GetMeasurementsParams from "../../functions/src/models/GetMeasurementsParams";

const getMeasurements = (params: GetMeasurementsParams) =>
  getJson<GetMeasurementsParams, string[]>({
    path: "/api/measurements",
    params,
  });

export default getMeasurements;
