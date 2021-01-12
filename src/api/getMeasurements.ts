import { getJson } from "./API";
import GetMeasurementsParams from "../../functions/src/models/GetMeasurementsParams";
import { MeasurementsByDevice } from "../../functions/src/models/MeasurementsByDevice";

const getMeasurements = (params: GetMeasurementsParams) =>
  getJson<GetMeasurementsParams, MeasurementsByDevice>({
    path: "/api/measurements",
    params,
  });

export default getMeasurements;
