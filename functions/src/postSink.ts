import { RequestHandler } from "express";
import db from "./dbConnector";
import { logger } from "firebase-functions";
import SinkPayload from "./models/SinkPayload";
import ValidationError from "./models/ValidationError";

/*
  POST /sink
*/
const postSink: RequestHandler = async (request, response) => {
  const { source, values }: SinkPayload = request.body;

  // push values to measurements subcollection of device document
  const measurements = db
    .collection("devices")
    .doc(source)
    .collection("measurements");

  const errors: ValidationError[] = [];

  values.forEach(async (value) => {
    try {
      await measurements.add(value);
    } catch (e) {
      const message = "Error saving value";
      logger.error(message, e, value);
      errors.push({ message, invalidValue: value });
    }
  });

  // send partial success
  if (errors.length) {
    response.status(207).send({ errors });
    return;
  }

  response.sendStatus(200);
  return;
};

export default postSink;
