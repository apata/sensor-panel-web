import { logger } from "firebase-functions";
import fetch from "node-fetch";
import generateData from "./generateData";

const ENDPOINT_URL =
  "https://sensor-panel.web.app/sensor-panel/us-central1/app/api/sink";

const createDataOnSchedule = async () => {
  logger.debug("creating data");
  try {
    const response = await fetch(ENDPOINT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(generateData()),
    });
    if (!response.ok) {
      const body = await response.json();
      throw new Error(JSON.stringify(body));
    }
  } catch (e) {
    logger.error("error POSTing data to sink", e);
  }
};

export default createDataOnSchedule;
