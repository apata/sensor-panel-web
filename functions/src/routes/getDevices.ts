import { RequestHandler } from "express";
import { logger } from "firebase-functions";
import db from "../dbConnector";

/* 
  GET /devices
  returns list of available devices
  useful to construct filtering menu
*/
const getDevices: RequestHandler = async (request, response) => {
  try {
    const deviceDocs = await db.collection("devices").get();
    const devices: string[] = deviceDocs.docs.map((d) => d.id);
    response.json(devices);
    return;
  } catch (e) {
    const message = "Error getting devices";
    logger.error(message, e);
    response.status(500).send({ errors: [{ message: message }] });
    return;
  }
};

export default getDevices;
