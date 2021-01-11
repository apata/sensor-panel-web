import { RequestHandler } from "express";
import measurementsData from "./measurementsData";
import GetMeasurementsParams from "./models/GetMeasurementsParams";
import Measurement from "./models/Measurement";

const createFilterFunction = ({ query }: Parameters<RequestHandler>[0]) => {
  const dataTypes = query.dataTypes as GetMeasurementsParams["dataTypes"];
  const devices = query.devices as GetMeasurementsParams["devices"];
  const startTime = query.startTime as GetMeasurementsParams["startTime"];
  const endTime = query.endTime as GetMeasurementsParams["endTime"];

  // Create filter function only if at least one the approved params is present
  if (query.dataTypes || query.devices || query.startTime || query.endTime) {
    const filterFunction = (item: Measurement) => {
      const itemHasDataType = dataTypes
        ? dataTypes.includes(item.dataType.name)
        : true;

      const itemHasDeviceID = devices
        ? devices.includes(item.device.guid)
        : true;

      const itemIsAfterStartTime = startTime
        ? new Date(startTime) <= new Date(item.timestamp)
        : true;

      const itemIsBeforeEndTime = endTime
        ? new Date(endTime) >= new Date(item.timestamp)
        : true;

      return (
        itemHasDataType &&
        itemHasDeviceID &&
        itemIsAfterStartTime &&
        itemIsBeforeEndTime
      );
    };
    return filterFunction;
  }

  return undefined;
};

/* 
  GET /measurements
*/
const getMeasurements: RequestHandler = (request, response) => {
  const filterFunction = createFilterFunction(request);
  if (!filterFunction) {
    return response.json(measurementsData);
  } else {
    return response.json(measurementsData.filter(filterFunction));
  }
};

export default getMeasurements;
