import SinkPayload from "../models/SinkPayload";
import {
  linearCongruentialGenerator,
  interpolateCosine,
} from "./generateNoise";

interface ValueConfig {
  period: number; // repeats itself over length, ms
  min: number;
  max: number;
  octaves: number; // number [1...3]
}

const generateData = (): SinkPayload => {
  // Setup for function operation
  const T_MIN = 1610833445168;
  const DATA_TYPES = ["dt_temperature_C", "dt_co2_ppm", "dt_humidity_pct"];
  const DEVICES = [
    "70B3D5E390001111",
    "70B3D5E390001112",
    "70B3D5E390001113",
    "70B3D5E390001114",
  ];
  const POINTS_PER_DEVICE = 100;
  const POINT_GENERATORS = [
    linearCongruentialGenerator(1249),
    linearCongruentialGenerator(93493),
    linearCongruentialGenerator(3441),
  ];
  const POINTS = POINT_GENERATORS.map((generator) =>
    Array(DEVICES.length * DATA_TYPES.length * POINTS_PER_DEVICE)
      .fill(null)
      .map(() => generator.next().value as number)
  );
  const DIVISOR = 5; // noisiness

  // Config for the different generated values
  const VALUE_SETUP: [ValueConfig, ValueConfig, ValueConfig][] = [
    [
      { min: -10, max: 20, period: 14 * 24 * 60 * 60 * 1000, octaves: 1 },
      { min: 40, max: 150, period: 24 * 60 * 60 * 1000, octaves: 2 },
      { min: 0, max: 75, period: 22 * 24 * 60 * 60 * 1000, octaves: 3 },
    ],
    [
      { min: -17, max: 26, period: 17 * 24 * 60 * 60 * 1000, octaves: 2 },
      { min: 200, max: 250, period: 19 * 60 * 60 * 1000, octaves: 3 },
      { min: 50, max: 80, period: 15 * 24 * 60 * 60 * 1000, octaves: 1 },
    ],
    [
      { min: -15, max: 10, period: 10 * 24 * 60 * 60 * 1000, octaves: 1 },
      { min: 0, max: 70, period: 20 * 24 * 60 * 60 * 1000, octaves: 1 },
      { min: 40, max: 100, period: 40 * 24 * 60 * 60 * 1000, octaves: 3 },
    ],
    [
      { min: 5, max: 15, period: 18 * 24 * 60 * 60 * 1000, octaves: 3 },
      { min: 50, max: 200, period: 30 * 24 * 60 * 60 * 1000, octaves: 2 },
      { min: 5, max: 30, period: 22 * 24 * 60 * 60 * 1000, octaves: 2 },
    ],
  ];

  // Multi-octave noise generation function
  const getValue = (t: number, deviceIndex: number, dataTypeIndex: number) => {
    const pointMinIndex = deviceIndex * DATA_TYPES.length + dataTypeIndex;
    const config = VALUE_SETUP[deviceIndex][dataTypeIndex];
    const period = config.period;

    const amplitude = config.max - config.min;
    const offset = amplitude / 2 + config.min;

    const timeshiftInPoints =
      (((t - T_MIN) % period) / period) * POINTS_PER_DEVICE;
    const lastPointIndex = Math.floor(timeshiftInPoints);

    const mu = timeshiftInPoints - lastPointIndex;

    const noiseArray = Array(config.octaves)
      .fill(null)
      .map((_, octaveIndex) => {
        const localPoints = POINTS[octaveIndex].slice(
          pointMinIndex,
          pointMinIndex + POINTS_PER_DEVICE
        );

        const value = interpolateCosine(
          localPoints[lastPointIndex],
          localPoints[lastPointIndex + 1],
          mu
        );

        if (octaveIndex === 0) {
          return value;
        } else {
          return value / (DIVISOR * octaveIndex);
        }
      });

    const value =
      noiseArray.reduce((acc, currentValue) => acc + currentValue, 0) *
        amplitude +
      offset;
    console.log(
      DEVICES[deviceIndex],
      DATA_TYPES[dataTypeIndex],
      value,
      noiseArray
    );
    return value;
  };

  // Creates the data and returns it in payload format
  const now = Date.now();
  const unixNow = now / 1000;

  const deviceIndex = Math.floor(Math.random() * DEVICES.length);

  const values: SinkPayload["values"] = DATA_TYPES.map(
    (type, dataTypeIndex) => ({
      type,
      timestamp_production: unixNow,
      value: getValue(now, deviceIndex, dataTypeIndex),
    })
  );

  return {
    source: DEVICES[deviceIndex],
    timestamp_arrival: unixNow + 1,
    values,
  };
};

export default generateData;
