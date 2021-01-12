import React, { useEffect } from "react";
import createDataLocally from "../api/createDataLocally";

const SensorSimulator = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      createDataLocally();
    }, 3000);
    return () => clearInterval(interval);
  });

  return <></>;
};

export default SensorSimulator;
