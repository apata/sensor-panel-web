import * as functions from "firebase-functions";
import app from "./app";

// Exports the Express app as single Firebase HTTPS function with path /api
export const api = functions.https.onRequest(app);
