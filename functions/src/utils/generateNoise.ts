/* eslint-disable require-jsdoc */

// Parameters for high merit LCG functions (see below) [modulus, multiplier, increment]
// source: https://www.ams.org/journals/mcom/1999-68-225/S0025-5718-99-00996-5/S0025-5718-99-00996-5.pdf, page 10 of doc
const GOOD_LGC_PARAMS: [number, number, number][] = [
  [2 ** 32, 2891336453, 1],
  [2 ** 32, 29943829, 1],
  [2 ** 32, 32310901, 1],
  [2 ** 31, 37769685, 1],
];

// Linear Congruential Generator function
// yields pseudorandom number in range [-0.5, 0.5)
export function* linearCongruentialGenerator(initialSeed: number) {
  const [modulus, multiplier, increment] = GOOD_LGC_PARAMS[0];
  let seed = initialSeed;
  while (true) {
    seed = (multiplier * seed + increment) % modulus;
    yield seed / modulus - 0.5;
  }
}

// Cosine interpolation function
// http://paulbourke.net/miscellaneous/interpolation/
export function interpolateCosine(y1: number, y2: number, mu: number) {
  const mu2 = (1 - Math.cos(mu * Math.PI)) / 2;
  return y1 * (1 - mu2) + y2 * mu2;
}

// Noise generator function
// yields smooth noise (1D)
// values are in range [-0.5 * amplitude + offset, 0.5 * amplitude + offset)
export function* noiseGenerator(
  amplitude: number, // height of wave
  wavelength: number, // distance in milliseconds between each wave
  offset: number, // offset of value on y axis
  LCG: Generator<number>
): Generator<any, number, number> {
  let a = LCG.next().value;
  let b = LCG.next().value;
  let currentWaveIndex = 0;
  const xMin = 0;

  while (true) {
    const x = Date.now();
    if (!currentWaveIndex) {
      currentWaveIndex = Math.ceil(x / wavelength);
    } else if (x - xMin >= currentWaveIndex * wavelength) {
      currentWaveIndex++;
      a = b;
      b = LCG.next().value;
    }
    const mu = ((x - xMin) % wavelength) / wavelength;
    yield interpolateCosine(a, b, mu) * amplitude + offset;
  }
}

// Combines several noise levels ("octaves")
// yields smooth noise (1D)
// values in range [-0.5 * amplitude + offset, 0.5 * amplitude + offset)
export function* multiOctaveNoiseGenerator(
  amplitude: number, // height of wave
  wavelength: number, // distance in milliseconds between each wave
  offset: number, // offset of value on y axis
  octaves: number,
  divisor: number,
  seed: number
) {
  const noiseGenerators = Array(octaves)
    .fill(null)
    .map((_, index) =>
      noiseGenerator(
        amplitude / (divisor * index || 1),
        wavelength / (divisor * index || 1),
        0,
        linearCongruentialGenerator(seed * index)
      )
    );

  while (true) {
    let value = 0;
    noiseGenerators.forEach((generator) => {
      value += generator.next().value as number;
    });
    yield value + offset;
  }
}
