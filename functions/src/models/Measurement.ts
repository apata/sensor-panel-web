export default interface Measurement {
  timestamp: string; // ISO string (example: "2020-10-09T14:35:05.501295Z"),
  type: string; // dataType ID (example: "dt_temperature_C",
  value: number; // measurement itself (example: 30.0)
}
