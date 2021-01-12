import Measurement from "./models/Measurement";
import SensorValuePayload from "./models/SensorValuePayload";

const transformSensorValueToMeasurement = (
  sensorValue: SensorValuePayload,
  deviceID: string
): Measurement => ({
  id: 1, // unused
  device: { guid: deviceID },
  timestamp: new Date(sensorValue.timestamp_production * 1000).toISOString(),
  value: sensorValue.value,
  dataType: {
    name: sensorValue.type,
  },
});

export default transformSensorValueToMeasurement;
