import { RequestHandler } from "express";
import { logger } from "firebase-functions";
import db from "../dbConnector";
import GetMeasurementsParams from "../models/GetMeasurementsParams";
import { MeasurementsByDevice } from "../models/MeasurementsByDevice";
import SensorValuePayload from "../models/SensorValuePayload";
import transformSensorValueToMeasurement from "../utils/transformSensorValueToMeasurement";

const attachFiltersToMeasurementsRef = (
  measurementsRef: FirebaseFirestore.CollectionReference<FirebaseFirestore.DocumentData>,
  { dataTypes, startTime, endTime }: Omit<GetMeasurementsParams, "devices">
) => {
  let filteredRef;
  if (dataTypes) {
    filteredRef = measurementsRef.where("type", "in", dataTypes);
  }
  if (startTime) {
    const unixStartTime = new Date(startTime).getTime() / 1000;
    filteredRef = (filteredRef ? filteredRef : measurementsRef).where(
      "timestamp_production",
      ">=",
      unixStartTime
    );
  }
  if (endTime) {
    const unixEndTime = new Date(endTime).getTime() / 1000;
    filteredRef = (filteredRef ? filteredRef : measurementsRef).where(
      "timestamp_production",
      "<=",
      unixEndTime
    );
  }
  return filteredRef || measurementsRef;
};

/* 
  GET /measurements
*/
const getMeasurements: RequestHandler = async (request, response) => {
  const { query } = request;
  const {
    dataTypes,
    devices,
    startTime,
    endTime,
  }: GetMeasurementsParams = query;
  const measurementsByDevice: MeasurementsByDevice = [];
  try {
    const deviceDocsSnapshot = await db.collection("devices").get();
    const deviceIDs = deviceDocsSnapshot.docs.map((d) => d.id);

    for (const deviceID of deviceIDs.filter((id) =>
      devices ? devices.includes(id) : true
    )) {
      const measurementsRef = db
        .collection("devices")
        .doc(deviceID)
        .collection("measurements");

      const filteredRef = attachFiltersToMeasurementsRef(measurementsRef, {
        dataTypes,
        endTime,
        startTime,
      });

      const snapshot = await filteredRef
        .orderBy("timestamp_production", "asc")
        .get();

      const measurementsForDevice = snapshot.docs.map((d) =>
        transformSensorValueToMeasurement(
          d.data() as SensorValuePayload,
          deviceID
        )
      );
      measurementsByDevice.push([deviceID, measurementsForDevice]);
    }
  } catch (e) {
    const message = "Error getting devices";
    logger.error(message, e);
    response.status(500).send({
      errors: [
        {
          message,
        },
      ],
    });
    return;
  }

  response.json(measurementsByDevice);
  return;
};

export default getMeasurements;
