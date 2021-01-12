import SensorValuePayload from "./SensorValuePayload";

export default interface SinkPayload {
  source: string; // device ID
  timestamp_arrival: number; // UNIX timestamp of packet arrival (seconds from epoch, UTC, example: 1507562202.1)
  values: SensorValuePayload[];
}
