import { RequestHandler } from "express";

/* 
  GET /devices
  returns list of available devices
  useful to construct filtering menu
*/
const getDevices: RequestHandler = (request, response) => {
  // TODO: load devices from datastore
  const devices = [
    "70B3D5E390001111",
    "70B3D5E390001112",
    "70B3D5E390001113",
    "70B3D5E390001114",
  ];
  response.json(devices);
};

export default getDevices;
