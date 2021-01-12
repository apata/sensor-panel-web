import { RequestHandler } from "express";
import db from "../dbConnector";
import { logger } from "firebase-functions";
import SinkPayload from "../models/SinkPayload";

/*
  POST /sink
*/
const createDeviceDocumentMiddleware: RequestHandler = async (
  request,
  response,
  next
) => {
  const { source }: SinkPayload = request.body;

  try {
    // access device document
    const deviceDoc = await db.collection("devices").doc(source).get();

    if (deviceDoc.exists) {
      next();
      return;
    }

    // if document doesn't exist, create it
    await db
      .collection("devices")
      .doc(source)
      .set({ timestamp_device_added: Date.now() / 1000 });
    next();
    return;
  } catch (e) {
    const message = "Error adding device";
    logger.error(message, source);
    response.status(500).send({
      errors: [
        {
          message: message,
          invalidValue: source,
        },
      ],
    });
    return;
  }
};

export default createDeviceDocumentMiddleware;
