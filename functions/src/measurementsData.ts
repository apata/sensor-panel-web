const data = [
  {
    "id": 1,
    "timestamp": "2020-10-09T14:35:05.501295Z",
    "value": 20.0,
    "device": {
      "guid": "70B3D5E390001114",
    },
    "dataType": {
      "name": "dt_temperature_C",
    },
  },
  {
    "id": 2,
    "timestamp": "2020-10-09T14:35:31.237582Z",
    "value": 30.0,
    "device": {
      "guid": "70B3D5E390001113",
    },
    "dataType": {
      "name": "dt_temperature_C",
    },
  },
  {
    "id": 3,
    "timestamp": "2020-10-09T14:35:43.629773Z",
    "value": 10.0,
    "device": {
      "guid": "70B3D5E390001112",
    },
    "dataType": {
      "name": "dt_temperature_C",
    },
  },
  {
    "id": 4,
    "timestamp": "2020-10-09T14:35:57.141959Z",
    "value": 5.0,
    "device": {
      "guid": "70B3D5E390001111",
    },
    "dataType": {
      "name": "dt_temperature_C",
    },
  },
  {
    "id": 5,
    "timestamp": "2020-10-09T14:36:20.701809Z",
    "value": 20.0,
    "device": {
      "guid": "70B3D5E390001111",
    },
    "dataType": {
      "name": "dt_humidity_pct",
    },
  },
  {
    "id": 6,
    "timestamp": "2020-10-09T14:36:33.438206Z",
    "value": 30.0,
    "device": {
      "guid": "70B3D5E390001112",
    },
    "dataType": {
      "name": "dt_humidity_pct",
    },
  },
  {
    "id": 7,
    "timestamp": "2020-10-09T14:36:45.293732Z",
    "value": 40.0,
    "device": {
      "guid": "70B3D5E390001113",
    },
    "dataType": {
      "name": "dt_humidity_pct",
    },
  },
  {
    "id": 8,
    "timestamp": "2020-10-09T14:36:58.942296Z",
    "value": 50.0,
    "device": {
      "guid": "70B3D5E390001114",
    },
    "dataType": {
      "name": "dt_humidity_pct",
    },
  },
  {
    "id": 9,
    "timestamp": "2020-10-09T14:37:25.678414Z",
    "value": 50.0,
    "device": {
      "guid": "70B3D5E390001114",
    },
    "dataType": {
      "name": "dt_co2_ppm",
    },
  },
  {
    "id": 10,
    "timestamp": "2020-10-09T14:37:36.646842Z",
    "value": 40.0,
    "device": {
      "guid": "70B3D5E390001113",
    },
    "dataType": {
      "name": "dt_co2_ppm",
    },
  },
  {
    "id": 11,
    "timestamp": "2020-10-09T14:37:48.630428Z",
    "value": 30.0,
    "device": {
      "guid": "70B3D5E390001112",
    },
    "dataType": {
      "name": "dt_co2_ppm",
    },
  },
  {
    "id": 12,
    "timestamp": "2020-10-09T14:38:03.662654Z",
    "value": 20.0,
    "device": {
      "guid": "70B3D5E390001113",
    },
    "dataType": {
      "name": "dt_co2_ppm",
    },
  },
  {
    "id": 20,
    "timestamp": "2020-11-20T00:00:00.000Z",
    "value": -10.0,
    "device": {
      "guid": "70B3D5E390001114",
    },
    "dataType": {
      "name": "dt_temperature_C",
    },
  },
  {
    "id": 130,
    "timestamp": "2020-11-20T21:00:00.000Z",
    "value": 59.0,
    "device": {
      "guid": "70B3D5E390001112",
    },
    "dataType": {
      "name": "dt_co2_ppm",
    },
  },
  {
    "id": 125,
    "timestamp": "2020-11-20T21:00:00.000Z",
    "value": 51.0,
    "device": {
      "guid": "70B3D5E390001111",
    },
    "dataType": {
      "name": "dt_co2_ppm",
    },
  },
  {
    "id": 131,
    "timestamp": "2020-11-20T21:00:00.000Z",
    "value": 60.0,
    "device": {
      "guid": "70B3D5E390001113",
    },
    "dataType": {
      "name": "dt_co2_ppm",
    },
  },
  {
    "id": 18,
    "timestamp": "2020-11-21T00:00:00.000Z",
    "value": -10.0,
    "device": {
      "guid": "70B3D5E390001114",
    },
    "dataType": {
      "name": "dt_temperature_C",
    },
  },
  {
    "id": 129,
    "timestamp": "2020-11-21T21:00:00.000Z",
    "value": 51.0,
    "device": {
      "guid": "70B3D5E390001112",
    },
    "dataType": {
      "name": "dt_co2_ppm",
    },
  },
  {
    "id": 132,
    "timestamp": "2020-11-21T21:00:00.000Z",
    "value": 60.0,
    "device": {
      "guid": "70B3D5E390001113",
    },
    "dataType": {
      "name": "dt_co2_ppm",
    },
  },
  {
    "id": 126,
    "timestamp": "2020-11-21T21:00:00.000Z",
    "value": 51.0,
    "device": {
      "guid": "70B3D5E390001111",
    },
    "dataType": {
      "name": "dt_co2_ppm",
    },
  },
  {
    "id": 19,
    "timestamp": "2020-11-22T00:00:00.000Z",
    "value": -10.0,
    "device": {
      "guid": "70B3D5E390001114",
    },
    "dataType": {
      "name": "dt_temperature_C",
    },
  },
  {
    "id": 134,
    "timestamp": "2020-11-22T21:00:00.000Z",
    "value": 60.0,
    "device": {
      "guid": "70B3D5E390001114",
    },
    "dataType": {
      "name": "dt_co2_ppm",
    },
  },
  {
    "id": 133,
    "timestamp": "2020-11-22T21:00:00.000Z",
    "value": 60.0,
    "device": {
      "guid": "70B3D5E390001113",
    },
    "dataType": {
      "name": "dt_co2_ppm",
    },
  },
  {
    "id": 128,
    "timestamp": "2020-11-22T21:00:00.000Z",
    "value": 51.0,
    "device": {
      "guid": "70B3D5E390001112",
    },
    "dataType": {
      "name": "dt_co2_ppm",
    },
  },
  {
    "id": 127,
    "timestamp": "2020-11-22T21:00:00.000Z",
    "value": 51.0,
    "device": {
      "guid": "70B3D5E390001111",
    },
    "dataType": {
      "name": "dt_co2_ppm",
    },
  },
  {
    "id": 16,
    "timestamp": "2020-12-20T00:00:00.000Z",
    "value": 20.0,
    "device": {
      "guid": "70B3D5E390001114",
    },
    "dataType": {
      "name": "dt_temperature_C",
    },
  },
  {
    "id": 51,
    "timestamp": "2020-12-20T09:00:00.000Z",
    "value": 20.0,
    "device": {
      "guid": "70B3D5E390001111",
    },
    "dataType": {
      "name": "dt_temperature_C",
    },
  },
  {
    "id": 107,
    "timestamp": "2020-12-20T10:00:00.000Z",
    "value": 38.0,
    "device": {
      "guid": "70B3D5E390001112",
    },
    "dataType": {
      "name": "dt_co2_ppm",
    },
  },
  {
    "id": 89,
    "timestamp": "2020-12-20T10:00:00.000Z",
    "value": 32.0,
    "device": {
      "guid": "70B3D5E390001114",
    },
    "dataType": {
      "name": "dt_co2_ppm",
    },
  },
  {
    "id": 88,
    "timestamp": "2020-12-20T10:00:00.000Z",
    "value": 32.0,
    "device": {
      "guid": "70B3D5E390001114",
    },
    "dataType": {
      "name": "dt_humidity_pct",
    },
  },
  {
    "id": 106,
    "timestamp": "2020-12-20T10:00:00.000Z",
    "value": 38.0,
    "device": {
      "guid": "70B3D5E390001113",
    },
    "dataType": {
      "name": "dt_co2_ppm",
    },
  },
  {
    "id": 72,
    "timestamp": "2020-12-20T11:00:00.000Z",
    "value": 36.0,
    "device": {
      "guid": "70B3D5E390001113",
    },
    "dataType": {
      "name": "dt_humidity_pct",
    },
  },
  {
    "id": 69,
    "timestamp": "2020-12-20T11:00:00.000Z",
    "value": 46.0,
    "device": {
      "guid": "70B3D5E390001112",
    },
    "dataType": {
      "name": "dt_humidity_pct",
    },
  },
  {
    "id": 50,
    "timestamp": "2020-12-20T11:00:00.000Z",
    "value": 3.0,
    "device": {
      "guid": "70B3D5E390001111",
    },
    "dataType": {
      "name": "dt_temperature_C",
    },
  },
  {
    "id": 32,
    "timestamp": "2020-12-20T12:00:00.000Z",
    "value": 8.0,
    "device": {
      "guid": "70B3D5E390001113",
    },
    "dataType": {
      "name": "dt_temperature_C",
    },
  },
  {
    "id": 87,
    "timestamp": "2020-12-20T13:00:00.000Z",
    "value": 32.0,
    "device": {
      "guid": "70B3D5E390001114",
    },
    "dataType": {
      "name": "dt_humidity_pct",
    },
  },
  {
    "id": 49,
    "timestamp": "2020-12-20T14:00:00.000Z",
    "value": -3.0,
    "device": {
      "guid": "70B3D5E390001111",
    },
    "dataType": {
      "name": "dt_temperature_C",
    },
  },
  {
    "id": 36,
    "timestamp": "2020-12-20T14:00:00.000Z",
    "value": 15.0,
    "device": {
      "guid": "70B3D5E390001112",
    },
    "dataType": {
      "name": "dt_temperature_C",
    },
  },
  {
    "id": 123,
    "timestamp": "2020-12-20T15:00:00.000Z",
    "value": 43.0,
    "device": {
      "guid": "70B3D5E390001111",
    },
    "dataType": {
      "name": "dt_co2_ppm",
    },
  },
  {
    "id": 53,
    "timestamp": "2020-12-20T16:00:00.000Z",
    "value": 16.0,
    "device": {
      "guid": "70B3D5E390001111",
    },
    "dataType": {
      "name": "dt_humidity_pct",
    },
  },
  {
    "id": 52,
    "timestamp": "2020-12-20T16:00:00.000Z",
    "value": 16.0,
    "device": {
      "guid": "70B3D5E390001111",
    },
    "dataType": {
      "name": "dt_temperature_C",
    },
  },
  {
    "id": 73,
    "timestamp": "2020-12-20T16:00:00.000Z",
    "value": 12.0,
    "device": {
      "guid": "70B3D5E390001113",
    },
    "dataType": {
      "name": "dt_humidity_pct",
    },
  },
  {
    "id": 90,
    "timestamp": "2020-12-20T17:00:00.000Z",
    "value": 10.0,
    "device": {
      "guid": "70B3D5E390001114",
    },
    "dataType": {
      "name": "dt_co2_ppm",
    },
  },
  {
    "id": 105,
    "timestamp": "2020-12-20T17:00:00.000Z",
    "value": 48.0,
    "device": {
      "guid": "70B3D5E390001113",
    },
    "dataType": {
      "name": "dt_co2_ppm",
    },
  },
  {
    "id": 108,
    "timestamp": "2020-12-20T18:00:00.000Z",
    "value": 20.0,
    "device": {
      "guid": "70B3D5E390001112",
    },
    "dataType": {
      "name": "dt_co2_ppm",
    },
  },
  {
    "id": 68,
    "timestamp": "2020-12-20T18:00:00.000Z",
    "value": 66.0,
    "device": {
      "guid": "70B3D5E390001112",
    },
    "dataType": {
      "name": "dt_humidity_pct",
    },
  },
  {
    "id": 54,
    "timestamp": "2020-12-20T18:00:00.000Z",
    "value": 20.0,
    "device": {
      "guid": "70B3D5E390001111",
    },
    "dataType": {
      "name": "dt_humidity_pct",
    },
  },
  {
    "id": 70,
    "timestamp": "2020-12-20T19:00:00.000Z",
    "value": 26.0,
    "device": {
      "guid": "70B3D5E390001112",
    },
    "dataType": {
      "name": "dt_humidity_pct",
    },
  },
  {
    "id": 23,
    "timestamp": "2020-12-20T19:00:00.000Z",
    "value": -10.0,
    "device": {
      "guid": "70B3D5E390001114",
    },
    "dataType": {
      "name": "dt_temperature_C",
    },
  },
  {
    "id": 71,
    "timestamp": "2020-12-20T19:00:00.000Z",
    "value": 26.0,
    "device": {
      "guid": "70B3D5E390001113",
    },
    "dataType": {
      "name": "dt_humidity_pct",
    },
  },
  {
    "id": 33,
    "timestamp": "2020-12-20T20:00:00.000Z",
    "value": 26.0,
    "device": {
      "guid": "70B3D5E390001113",
    },
    "dataType": {
      "name": "dt_temperature_C",
    },
  },
  {
    "id": 22,
    "timestamp": "2020-12-20T20:00:00.000Z",
    "value": -10.0,
    "device": {
      "guid": "70B3D5E390001114",
    },
    "dataType": {
      "name": "dt_temperature_C",
    },
  },
  {
    "id": 34,
    "timestamp": "2020-12-20T20:00:00.000Z",
    "value": 26.0,
    "device": {
      "guid": "70B3D5E390001112",
    },
    "dataType": {
      "name": "dt_temperature_C",
    },
  },
  {
    "id": 55,
    "timestamp": "2020-12-20T20:00:00.000Z",
    "value": 30.0,
    "device": {
      "guid": "70B3D5E390001111",
    },
    "dataType": {
      "name": "dt_humidity_pct",
    },
  },
  {
    "id": 91,
    "timestamp": "2020-12-20T20:00:00.000Z",
    "value": 20.0,
    "device": {
      "guid": "70B3D5E390001114",
    },
    "dataType": {
      "name": "dt_co2_ppm",
    },
  },
  {
    "id": 122,
    "timestamp": "2020-12-20T21:00:00.000Z",
    "value": 51.0,
    "device": {
      "guid": "70B3D5E390001111",
    },
    "dataType": {
      "name": "dt_co2_ppm",
    },
  },
  {
    "id": 21,
    "timestamp": "2020-12-20T21:00:00.000Z",
    "value": -10.0,
    "device": {
      "guid": "70B3D5E390001114",
    },
    "dataType": {
      "name": "dt_temperature_C",
    },
  },
  {
    "id": 124,
    "timestamp": "2020-12-20T21:00:00.000Z",
    "value": 51.0,
    "device": {
      "guid": "70B3D5E390001111",
    },
    "dataType": {
      "name": "dt_co2_ppm",
    },
  },
  {
    "id": 35,
    "timestamp": "2020-12-20T22:00:00.000Z",
    "value": 20.0,
    "device": {
      "guid": "70B3D5E390001112",
    },
    "dataType": {
      "name": "dt_temperature_C",
    },
  },
  {
    "id": 109,
    "timestamp": "2020-12-20T23:00:00.000Z",
    "value": 18.0,
    "device": {
      "guid": "70B3D5E390001112",
    },
    "dataType": {
      "name": "dt_co2_ppm",
    },
  },
  {
    "id": 86,
    "timestamp": "2020-12-20T23:00:00.000Z",
    "value": 52.0,
    "device": {
      "guid": "70B3D5E390001114",
    },
    "dataType": {
      "name": "dt_humidity_pct",
    },
  },
  {
    "id": 104,
    "timestamp": "2020-12-20T23:00:00.000Z",
    "value": 58.0,
    "device": {
      "guid": "70B3D5E390001113",
    },
    "dataType": {
      "name": "dt_co2_ppm",
    },
  },
  {
    "id": 17,
    "timestamp": "2020-12-21T00:00:00.000Z",
    "value": 20.0,
    "device": {
      "guid": "70B3D5E390001114",
    },
    "dataType": {
      "name": "dt_temperature_C",
    },
  },
  {
    "id": 15,
    "timestamp": "2020-12-21T00:00:00.000Z",
    "value": 20.0,
    "device": {
      "guid": "70B3D5E390001114",
    },
    "dataType": {
      "name": "dt_temperature_C",
    },
  },
  {
    "id": 14,
    "timestamp": "2020-12-21T00:00:00.000Z",
    "value": 20.0,
    "device": {
      "guid": "70B3D5E390001114",
    },
    "dataType": {
      "name": "dt_temperature_C",
    },
  },
  {
    "id": 119,
    "timestamp": "2020-12-21T10:00:00.000Z",
    "value": 60.0,
    "device": {
      "guid": "70B3D5E390001111",
    },
    "dataType": {
      "name": "dt_co2_ppm",
    },
  },
  {
    "id": 94,
    "timestamp": "2020-12-21T10:00:00.000Z",
    "value": 17.0,
    "device": {
      "guid": "70B3D5E390001114",
    },
    "dataType": {
      "name": "dt_co2_ppm",
    },
  },
  {
    "id": 101,
    "timestamp": "2020-12-21T10:00:00.000Z",
    "value": 24.0,
    "device": {
      "guid": "70B3D5E390001113",
    },
    "dataType": {
      "name": "dt_co2_ppm",
    },
  },
  {
    "id": 112,
    "timestamp": "2020-12-21T10:00:00.000Z",
    "value": 46.0,
    "device": {
      "guid": "70B3D5E390001112",
    },
    "dataType": {
      "name": "dt_co2_ppm",
    },
  },
  {
    "id": 75,
    "timestamp": "2020-12-21T11:00:00.000Z",
    "value": 52.0,
    "device": {
      "guid": "70B3D5E390001113",
    },
    "dataType": {
      "name": "dt_humidity_pct",
    },
  },
  {
    "id": 83,
    "timestamp": "2020-12-21T11:00:00.000Z",
    "value": 52.0,
    "device": {
      "guid": "70B3D5E390001114",
    },
    "dataType": {
      "name": "dt_humidity_pct",
    },
  },
  {
    "id": 31,
    "timestamp": "2020-12-21T12:00:00.000Z",
    "value": 5.0,
    "device": {
      "guid": "70B3D5E390001113",
    },
    "dataType": {
      "name": "dt_temperature_C",
    },
  },
  {
    "id": 37,
    "timestamp": "2020-12-21T14:00:00.000Z",
    "value": 0.0,
    "device": {
      "guid": "70B3D5E390001112",
    },
    "dataType": {
      "name": "dt_temperature_C",
    },
  },
  {
    "id": 57,
    "timestamp": "2020-12-21T14:00:00.000Z",
    "value": 10.0,
    "device": {
      "guid": "70B3D5E390001111",
    },
    "dataType": {
      "name": "dt_humidity_pct",
    },
  },
  {
    "id": 93,
    "timestamp": "2020-12-21T14:00:00.000Z",
    "value": 15.0,
    "device": {
      "guid": "70B3D5E390001114",
    },
    "dataType": {
      "name": "dt_co2_ppm",
    },
  },
  {
    "id": 48,
    "timestamp": "2020-12-21T14:00:00.000Z",
    "value": 10.0,
    "device": {
      "guid": "70B3D5E390001111",
    },
    "dataType": {
      "name": "dt_temperature_C",
    },
  },
  {
    "id": 66,
    "timestamp": "2020-12-21T14:00:00.000Z",
    "value": 60.0,
    "device": {
      "guid": "70B3D5E390001112",
    },
    "dataType": {
      "name": "dt_humidity_pct",
    },
  },
  {
    "id": 30,
    "timestamp": "2020-12-21T14:00:00.000Z",
    "value": -5.0,
    "device": {
      "guid": "70B3D5E390001113",
    },
    "dataType": {
      "name": "dt_temperature_C",
    },
  },
  {
    "id": 111,
    "timestamp": "2020-12-21T15:00:00.000Z",
    "value": 40.0,
    "device": {
      "guid": "70B3D5E390001112",
    },
    "dataType": {
      "name": "dt_co2_ppm",
    },
  },
  {
    "id": 120,
    "timestamp": "2020-12-21T16:00:00.000Z",
    "value": 51.0,
    "device": {
      "guid": "70B3D5E390001111",
    },
    "dataType": {
      "name": "dt_co2_ppm",
    },
  },
  {
    "id": 74,
    "timestamp": "2020-12-21T16:00:00.000Z",
    "value": 12.0,
    "device": {
      "guid": "70B3D5E390001113",
    },
    "dataType": {
      "name": "dt_humidity_pct",
    },
  },
  {
    "id": 58,
    "timestamp": "2020-12-21T17:00:00.000Z",
    "value": 50.0,
    "device": {
      "guid": "70B3D5E390001111",
    },
    "dataType": {
      "name": "dt_humidity_pct",
    },
  },
  {
    "id": 40,
    "timestamp": "2020-12-21T17:00:00.000Z",
    "value": -10.0,
    "device": {
      "guid": "70B3D5E390001112",
    },
    "dataType": {
      "name": "dt_temperature_C",
    },
  },
  {
    "id": 25,
    "timestamp": "2020-12-21T18:00:00.000Z",
    "value": -10.0,
    "device": {
      "guid": "70B3D5E390001114",
    },
    "dataType": {
      "name": "dt_temperature_C",
    },
  },
  {
    "id": 102,
    "timestamp": "2020-12-21T18:00:00.000Z",
    "value": 50.0,
    "device": {
      "guid": "70B3D5E390001113",
    },
    "dataType": {
      "name": "dt_co2_ppm",
    },
  },
  {
    "id": 67,
    "timestamp": "2020-12-21T18:00:00.000Z",
    "value": 66.0,
    "device": {
      "guid": "70B3D5E390001112",
    },
    "dataType": {
      "name": "dt_humidity_pct",
    },
  },
  {
    "id": 65,
    "timestamp": "2020-12-21T19:00:00.000Z",
    "value": 20.0,
    "device": {
      "guid": "70B3D5E390001112",
    },
    "dataType": {
      "name": "dt_humidity_pct",
    },
  },
  {
    "id": 47,
    "timestamp": "2020-12-21T19:00:00.000Z",
    "value": 16.0,
    "device": {
      "guid": "70B3D5E390001111",
    },
    "dataType": {
      "name": "dt_temperature_C",
    },
  },
  {
    "id": 76,
    "timestamp": "2020-12-21T19:00:00.000Z",
    "value": 17.0,
    "device": {
      "guid": "70B3D5E390001113",
    },
    "dataType": {
      "name": "dt_humidity_pct",
    },
  },
  {
    "id": 84,
    "timestamp": "2020-12-21T19:00:00.000Z",
    "value": 52.0,
    "device": {
      "guid": "70B3D5E390001114",
    },
    "dataType": {
      "name": "dt_humidity_pct",
    },
  },
  {
    "id": 29,
    "timestamp": "2020-12-21T19:00:00.000Z",
    "value": -10.0,
    "device": {
      "guid": "70B3D5E390001113",
    },
    "dataType": {
      "name": "dt_temperature_C",
    },
  },
  {
    "id": 24,
    "timestamp": "2020-12-21T19:00:00.000Z",
    "value": -10.0,
    "device": {
      "guid": "70B3D5E390001114",
    },
    "dataType": {
      "name": "dt_temperature_C",
    },
  },
  {
    "id": 38,
    "timestamp": "2020-12-21T20:00:00.000Z",
    "value": 0.0,
    "device": {
      "guid": "70B3D5E390001112",
    },
    "dataType": {
      "name": "dt_temperature_C",
    },
  },
  {
    "id": 92,
    "timestamp": "2020-12-21T20:00:00.000Z",
    "value": 17.0,
    "device": {
      "guid": "70B3D5E390001114",
    },
    "dataType": {
      "name": "dt_co2_ppm",
    },
  },
  {
    "id": 56,
    "timestamp": "2020-12-21T20:00:00.000Z",
    "value": 30.0,
    "device": {
      "guid": "70B3D5E390001111",
    },
    "dataType": {
      "name": "dt_humidity_pct",
    },
  },
  {
    "id": 121,
    "timestamp": "2020-12-21T21:00:00.000Z",
    "value": 51.0,
    "device": {
      "guid": "70B3D5E390001111",
    },
    "dataType": {
      "name": "dt_co2_ppm",
    },
  },
  {
    "id": 103,
    "timestamp": "2020-12-21T23:00:00.000Z",
    "value": 58.0,
    "device": {
      "guid": "70B3D5E390001113",
    },
    "dataType": {
      "name": "dt_co2_ppm",
    },
  },
  {
    "id": 39,
    "timestamp": "2020-12-21T23:00:00.000Z",
    "value": 0.0,
    "device": {
      "guid": "70B3D5E390001112",
    },
    "dataType": {
      "name": "dt_temperature_C",
    },
  },
  {
    "id": 85,
    "timestamp": "2020-12-21T23:00:00.000Z",
    "value": 52.0,
    "device": {
      "guid": "70B3D5E390001114",
    },
    "dataType": {
      "name": "dt_humidity_pct",
    },
  },
  {
    "id": 110,
    "timestamp": "2020-12-21T23:00:00.000Z",
    "value": 18.0,
    "device": {
      "guid": "70B3D5E390001112",
    },
    "dataType": {
      "name": "dt_co2_ppm",
    },
  },
  {
    "id": 13,
    "timestamp": "2020-12-22T00:00:00.000Z",
    "value": 30.0,
    "device": {
      "guid": "70B3D5E390001114",
    },
    "dataType": {
      "name": "dt_temperature_C",
    },
  },
  {
    "id": 100,
    "timestamp": "2020-12-22T10:00:00.000Z",
    "value": 24.0,
    "device": {
      "guid": "70B3D5E390001113",
    },
    "dataType": {
      "name": "dt_co2_ppm",
    },
  },
  {
    "id": 95,
    "timestamp": "2020-12-22T10:00:00.000Z",
    "value": 17.0,
    "device": {
      "guid": "70B3D5E390001114",
    },
    "dataType": {
      "name": "dt_co2_ppm",
    },
  },
  {
    "id": 113,
    "timestamp": "2020-12-22T10:00:00.000Z",
    "value": 46.0,
    "device": {
      "guid": "70B3D5E390001112",
    },
    "dataType": {
      "name": "dt_co2_ppm",
    },
  },
  {
    "id": 118,
    "timestamp": "2020-12-22T10:00:00.000Z",
    "value": 60.0,
    "device": {
      "guid": "70B3D5E390001111",
    },
    "dataType": {
      "name": "dt_co2_ppm",
    },
  },
  {
    "id": 78,
    "timestamp": "2020-12-22T11:00:00.000Z",
    "value": 54.0,
    "device": {
      "guid": "70B3D5E390001113",
    },
    "dataType": {
      "name": "dt_humidity_pct",
    },
  },
  {
    "id": 82,
    "timestamp": "2020-12-22T11:00:00.000Z",
    "value": 52.0,
    "device": {
      "guid": "70B3D5E390001114",
    },
    "dataType": {
      "name": "dt_humidity_pct",
    },
  },
  {
    "id": 61,
    "timestamp": "2020-12-22T12:00:00.000Z",
    "value": 30.0,
    "device": {
      "guid": "70B3D5E390001111",
    },
    "dataType": {
      "name": "dt_humidity_pct",
    },
  },
  {
    "id": 62,
    "timestamp": "2020-12-22T12:00:00.000Z",
    "value": 30.0,
    "device": {
      "guid": "70B3D5E390001112",
    },
    "dataType": {
      "name": "dt_humidity_pct",
    },
  },
  {
    "id": 79,
    "timestamp": "2020-12-22T14:00:00.000Z",
    "value": 22.0,
    "device": {
      "guid": "70B3D5E390001113",
    },
    "dataType": {
      "name": "dt_humidity_pct",
    },
  },
  {
    "id": 80,
    "timestamp": "2020-12-22T14:00:00.000Z",
    "value": 22.0,
    "device": {
      "guid": "70B3D5E390001114",
    },
    "dataType": {
      "name": "dt_humidity_pct",
    },
  },
  {
    "id": 117,
    "timestamp": "2020-12-22T15:00:00.000Z",
    "value": 57.0,
    "device": {
      "guid": "70B3D5E390001111",
    },
    "dataType": {
      "name": "dt_co2_ppm",
    },
  },
  {
    "id": 96,
    "timestamp": "2020-12-22T15:00:00.000Z",
    "value": 19.0,
    "device": {
      "guid": "70B3D5E390001114",
    },
    "dataType": {
      "name": "dt_co2_ppm",
    },
  },
  {
    "id": 41,
    "timestamp": "2020-12-22T17:00:00.000Z",
    "value": -10.0,
    "device": {
      "guid": "70B3D5E390001112",
    },
    "dataType": {
      "name": "dt_temperature_C",
    },
  },
  {
    "id": 99,
    "timestamp": "2020-12-22T17:00:00.000Z",
    "value": 27.0,
    "device": {
      "guid": "70B3D5E390001113",
    },
    "dataType": {
      "name": "dt_co2_ppm",
    },
  },
  {
    "id": 114,
    "timestamp": "2020-12-22T17:00:00.000Z",
    "value": 40.0,
    "device": {
      "guid": "70B3D5E390001112",
    },
    "dataType": {
      "name": "dt_co2_ppm",
    },
  },
  {
    "id": 63,
    "timestamp": "2020-12-22T17:00:00.000Z",
    "value": 40.0,
    "device": {
      "guid": "70B3D5E390001112",
    },
    "dataType": {
      "name": "dt_humidity_pct",
    },
  },
  {
    "id": 59,
    "timestamp": "2020-12-22T17:00:00.000Z",
    "value": 50.0,
    "device": {
      "guid": "70B3D5E390001111",
    },
    "dataType": {
      "name": "dt_humidity_pct",
    },
  },
  {
    "id": 26,
    "timestamp": "2020-12-22T18:00:00.000Z",
    "value": 30.0,
    "device": {
      "guid": "70B3D5E390001114",
    },
    "dataType": {
      "name": "dt_temperature_C",
    },
  },
  {
    "id": 27,
    "timestamp": "2020-12-22T18:00:00.000Z",
    "value": 30.0,
    "device": {
      "guid": "70B3D5E390001113",
    },
    "dataType": {
      "name": "dt_temperature_C",
    },
  },
  {
    "id": 81,
    "timestamp": "2020-12-22T19:00:00.000Z",
    "value": 72.0,
    "device": {
      "guid": "70B3D5E390001114",
    },
    "dataType": {
      "name": "dt_humidity_pct",
    },
  },
  {
    "id": 77,
    "timestamp": "2020-12-22T19:00:00.000Z",
    "value": 17.0,
    "device": {
      "guid": "70B3D5E390001113",
    },
    "dataType": {
      "name": "dt_humidity_pct",
    },
  },
  {
    "id": 46,
    "timestamp": "2020-12-22T19:00:00.000Z",
    "value": 16.0,
    "device": {
      "guid": "70B3D5E390001111",
    },
    "dataType": {
      "name": "dt_temperature_C",
    },
  },
  {
    "id": 60,
    "timestamp": "2020-12-22T19:00:00.000Z",
    "value": 40.0,
    "device": {
      "guid": "70B3D5E390001111",
    },
    "dataType": {
      "name": "dt_humidity_pct",
    },
  },
  {
    "id": 28,
    "timestamp": "2020-12-22T19:00:00.000Z",
    "value": 30.0,
    "device": {
      "guid": "70B3D5E390001113",
    },
    "dataType": {
      "name": "dt_temperature_C",
    },
  },
  {
    "id": 64,
    "timestamp": "2020-12-22T19:00:00.000Z",
    "value": 10.0,
    "device": {
      "guid": "70B3D5E390001112",
    },
    "dataType": {
      "name": "dt_humidity_pct",
    },
  },
  {
    "id": 45,
    "timestamp": "2020-12-22T20:00:00.000Z",
    "value": 20.0,
    "device": {
      "guid": "70B3D5E390001111",
    },
    "dataType": {
      "name": "dt_temperature_C",
    },
  },
  {
    "id": 42,
    "timestamp": "2020-12-22T20:00:00.000Z",
    "value": 10.0,
    "device": {
      "guid": "70B3D5E390001112",
    },
    "dataType": {
      "name": "dt_temperature_C",
    },
  },
  {
    "id": 115,
    "timestamp": "2020-12-22T22:00:00.000Z",
    "value": 49.0,
    "device": {
      "guid": "70B3D5E390001112",
    },
    "dataType": {
      "name": "dt_co2_ppm",
    },
  },
  {
    "id": 116,
    "timestamp": "2020-12-22T22:00:00.000Z",
    "value": 50.0,
    "device": {
      "guid": "70B3D5E390001111",
    },
    "dataType": {
      "name": "dt_co2_ppm",
    },
  },
  {
    "id": 44,
    "timestamp": "2020-12-22T23:00:00.000Z",
    "value": 15.0,
    "device": {
      "guid": "70B3D5E390001111",
    },
    "dataType": {
      "name": "dt_temperature_C",
    },
  },
  {
    "id": 98,
    "timestamp": "2020-12-22T23:00:00.000Z",
    "value": 30.0,
    "device": {
      "guid": "70B3D5E390001113",
    },
    "dataType": {
      "name": "dt_co2_ppm",
    },
  },
  {
    "id": 43,
    "timestamp": "2020-12-22T23:00:00.000Z",
    "value": 15.0,
    "device": {
      "guid": "70B3D5E390001112",
    },
    "dataType": {
      "name": "dt_temperature_C",
    },
  },
  {
    "id": 97,
    "timestamp": "2020-12-22T23:00:00.000Z",
    "value": 30.0,
    "device": {
      "guid": "70B3D5E390001114",
    },
    "dataType": {
      "name": "dt_co2_ppm",
    },
  },
];

export default data;
