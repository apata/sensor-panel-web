export default interface Measurement {
  id: number; // id (database internal)
  timestamp: string; // ISO string (example: "2020-10-09T14:35:05.501295Z"),
  value: number; // measurement itself (example: 30.0)
  device: {
    guid: string; // device ID (example: "70B3D5E390001114"),
  };
  dataType: {
    name: string; // dataType ID (example: "dt_temperature_C",
  };
}
