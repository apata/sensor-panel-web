import { RequestHandler } from "express";
import measurementsData from "./measurementsData";

/* 
  GET /measurements
*/
const getMeasurements: RequestHandler = (request, response) =>
  response.json(measurementsData);

export default getMeasurements;
