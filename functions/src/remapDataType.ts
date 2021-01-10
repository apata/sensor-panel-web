import DataType from "./models/DataType";

const datatypesMap = new Map<string, DataType>([
  [
    "dt_temperature_C",
    {
      id: "dt_temperature_C",
      name: "temperature",
      unit: "°C",
    },
  ],
  [
    "dt_humidity_pct",
    {
      id: "dt_humidity_pct",
      name: "humidity",
      unit: "%",
    },
  ],
  [
    "dt_co2_ppm",
    {
      id: "dt_co2_ppm",
      name: "CO2 level",
      unit: "ppm",
    },
  ],
]);

// Provide FE with usable unit and filter system
const remapDataType = (datatypeId: string): DataType =>
  datatypesMap.get(datatypeId) || {
    id: datatypeId,
    name: datatypeId,
    unit: "",
  };

export default remapDataType;
