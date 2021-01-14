import { MeasurementsByDevice } from "../../functions/src/models/MeasurementsByDevice";

const measurementsContainDataPoints = (
  measurements: MeasurementsByDevice
): boolean => {
  const devicesWithSomeData = measurements.filter(
    ([_, data]) => data.length !== 0
  );
  return devicesWithSomeData.length !== 0;
};

export default measurementsContainDataPoints;
