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
const remapDataType = (datatype_id: string): DataType =>
  datatypesMap.get(datatype_id) || {
    id: datatype_id,
    name: datatype_id,
    unit: "",
  };

export default remapDataType