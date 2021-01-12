export default interface SensorValuePayload {
  timestamp_production: number; // UNIX timestamp of measurement time (seconds from epoch, UTC, example: 1507562202.1)
  type: string; // dataType, example "dt_temperature_C"
  value: number; // value, example "30.0"
}
