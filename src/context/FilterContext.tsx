import React, {
  createContext,
  ReactNode,
  useCallback,
  useMemo,
  useState,
} from "react";
import GetMeasurementsParams from "../../functions/src/models/GetMeasurementsParams";

const defaultContextValue = {
  params: {} as GetMeasurementsParams,
  setStartTime: (time: string | undefined) => {},
  setEndTime: (time: string | undefined) => {},
  toggleDevice: (device: string) => {},
};
export type FilterContextValue = typeof defaultContextValue;

const FilterContext = createContext(defaultContextValue);

const FilterContextProvider = ({ children }: { children: ReactNode }) => {
  // set default start time so the app
  // wouldn't go refreshing ALL the measurements on each refresh
  const initialStartTime = useMemo(
    () => new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
    []
  );

  // empty list means all are selected
  const initialDevices: GetMeasurementsParams["devices"] = [];

  const [params, setParams] = useState<GetMeasurementsParams>({
    startTime: initialStartTime,
    devices: initialDevices,
  });

  const setStartTime: FilterContextValue["setStartTime"] = useCallback(
    (t) => setParams((p) => ({ ...p, startTime: t })),
    []
  );

  const setEndTime: FilterContextValue["setStartTime"] = useCallback(
    (t) => setParams((p) => ({ ...p, endTime: t })),
    []
  );

  const toggleDevice: FilterContextValue["toggleDevice"] = useCallback(
    (d) =>
      setParams((p) => ({
        ...p,
        devices: p.devices
          ? p.devices.includes(d)
            ? p.devices.filter((dd) => dd !== d)
            : [...p.devices, d]
          : [d],
      })),
    []
  );

  return (
    <FilterContext.Provider
      value={{
        setStartTime,
        setEndTime,
        toggleDevice,
        params,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export { FilterContextProvider };
export default FilterContext;
