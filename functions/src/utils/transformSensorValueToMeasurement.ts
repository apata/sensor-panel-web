import Measurement from "../models/Measurement";
import SensorValuePayload from "../models/SensorValuePayload";

const transformSensorValueToMeasurement = (
  sensorValue: SensorValuePayload
): Measurement => ({
  timestamp: new Date(sensorValue.timestamp_production * 1000).toISOString(),
  type: sensorValue.type,
  value: sensorValue.value,
});

export default transformSensorValueToMeasurement;
