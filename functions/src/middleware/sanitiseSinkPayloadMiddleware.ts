import { RequestHandler } from "express";
import { logger } from "firebase-functions";
import sanitiseSinkPayload from "../utils/sanitiseSinkPayload";

const sanitiseSinkPayloadMiddleware: RequestHandler = (
  request,
  response,
  next
) => {
  const payload = request.body;
  const { sanitisedSinkPayload, validationErrors } = sanitiseSinkPayload(
    payload
  );
  if (!sanitisedSinkPayload) {
    const message = "Error with validation";
    logger.error(message, validationErrors);
    response.status(400).send({ errors: validationErrors });
    return;
  }
  request.body = sanitisedSinkPayload;
  next();
};

export default sanitiseSinkPayloadMiddleware;
