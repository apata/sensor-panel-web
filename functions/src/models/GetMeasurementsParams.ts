export default interface GetMeasurementsParams {
  devices?: string[]; // device ID list (example: "devices[0]=70B3D5E390001112")
  dataTypes?: string[]; // dataType ID list, (example: "dataTypes[0]=dt_temperature_C")
  startTime?: string; // ISO string, (example: "startTime=2021-01-10T19:54:55.556Z")
  endTime?: string; // ISO string, (example: "endTime=2021-01-11T19:54:55.556Z")
}
