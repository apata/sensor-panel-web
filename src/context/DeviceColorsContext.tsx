import React, { createContext, ReactNode, useCallback, useState } from "react";
import * as d3 from "d3";

const defaultContextValue = {
  colorMap: new Map<string, string>(),
  createColorMap: (devices: string[]) => {},
};
export type DeviceColorsContextValue = typeof defaultContextValue;

const DeviceColorsContext = createContext(defaultContextValue);

const DeviceColorsContextProvider = ({ children }: { children: ReactNode }) => {
  const [colorMap, setColorMap] = useState<
    DeviceColorsContextValue["colorMap"]
  >(new Map<string, string>());

  const createColorMap = useCallback((devices: string[]) => {
    const map = new Map<string, string>();

    const colorStep = 1 / (devices.length + 1);

    devices.forEach((device, index) => {
      map.set(device, d3.interpolateTurbo(0 + index * colorStep));
    });

    setColorMap(map);
  }, []);

  return (
    <DeviceColorsContext.Provider
      value={{
        colorMap,
        createColorMap,
      }}
    >
      {children}
    </DeviceColorsContext.Provider>
  );
};

export { DeviceColorsContextProvider };
export default DeviceColorsContext;
