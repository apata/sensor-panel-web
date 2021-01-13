const sineFnFactory = (min: number, max: number, offset: number) => {
  return (t: number) =>
    (Math.sin(t / 1000 + offset + Math.random() / 10) * (max - min)) / 2 +
    min +
    (max - min) / 2;
};

const generateData = () => {
  const dataTypes: DataTypeID[] = [
    "dt_temperature_C",
    "dt_humidity_pct",
    "dt_co2_ppm",
  ];

  type DataTypeID = "dt_temperature_C" | "dt_humidity_pct" | "dt_co2_ppm";

  type DeviceID =
    | "70B3D5E390001111"
    | "70B3D5E390001112"
    | "70B3D5E390001113"
    | "70B3D5E390001114"
    | "70B3D5E390001000";

  const weightedDeviceList: DeviceID[] = [
    ...Array(3).fill("70B3D5E390001111"),
    ...Array(2).fill("70B3D5E390001112"),
    ...Array(4).fill("70B3D5E390001113"),
    ...Array(2).fill("70B3D5E390001114"),
    ...Array(1).fill("70B3D5E390001000"),
  ];

  type Generators = {
    [K in DataTypeID]: (time: number) => number;
  };

  const generators: Map<DeviceID, Generators> = new Map([
    [
      "70B3D5E390001000",
      {
        dt_co2_ppm: sineFnFactory(40, 150, 0),
        dt_temperature_C: sineFnFactory(-10, 20, 0.8),
        dt_humidity_pct: sineFnFactory(0, 75, 0.32),
      },
    ],
    [
      "70B3D5E390001111",
      {
        dt_co2_ppm: sineFnFactory(200, 250, 0.21),
        dt_temperature_C: sineFnFactory(17, 25, 0.38),
        dt_humidity_pct: sineFnFactory(50, 75, 0.15),
      },
    ],
    [
      "70B3D5E390001112",
      {
        dt_co2_ppm: sineFnFactory(0, 25, 0.42),
        dt_temperature_C: sineFnFactory(-10, 10, 0.33),
        dt_humidity_pct: sineFnFactory(0, 100, 0.2),
      },
    ],
    [
      "70B3D5E390001113",
      {
        dt_co2_ppm: sineFnFactory(50, 200, 0.7),
        dt_temperature_C: sineFnFactory(5, 15, 0.11),
        dt_humidity_pct: sineFnFactory(0, 10, 0.9),
      },
    ],
    [
      "70B3D5E390001114",
      {
        dt_co2_ppm: sineFnFactory(0, 100, 0.25),
        dt_temperature_C: sineFnFactory(10, 15, 0.1),
        dt_humidity_pct: sineFnFactory(50, 60, 0.55),
      },
    ],
  ]);

  const randomIndex = Math.floor(Math.random() * weightedDeviceList.length);
  const randomDevice = weightedDeviceList[randomIndex];

  const now = Date.now() / 1000; // transform to unix seconds instead of JS milliseconds ;

  const data = {
    source: randomDevice,
    timestamp_arrival: now,
    values: dataTypes.map((dataType) => ({
      timestamp_production: now - 1,
      type: dataType,
      value: generators.get(randomDevice)![dataType](now),
    })),
  };

  return data;
};

export default generateData;
