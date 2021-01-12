import { logger } from "firebase-functions";
import fetch from "node-fetch";
import generateData from "./generateData";

const ENDPOINT_URL = "https://sensor-panel.web.app/api/sink";

const createDataOnSchedule = async () => {
  const data = generateData();
  logger.debug("createDataOnSchedule:: creating data", data);
  try {
    const response = await fetch(ENDPOINT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      logger.debug("createDataOnSchedule:: response ok");
      return;
    }
    if (!response.ok) {
      const body = await response.json();
      throw new Error(JSON.stringify(body));
    }
  } catch (e) {
    logger.error("createDataOnSchedule:: error sending data to sink", e);
  }
};

export default createDataOnSchedule;
