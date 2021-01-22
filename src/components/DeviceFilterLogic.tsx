import React, { useContext } from "react";
import getDevices from "../api/getDevices";
import DeviceFilterRow from "./DeviceFilterRow";
import useQuery from "../hooks/useQuery";
import FilterContext from "../context/FilterContext";
import DeviceColorsContext from "../context/DeviceColorsContext";

const DeviceFilterLogic = () => {
  const { colorMap, createColorMap } = useContext(DeviceColorsContext);

  const {
    params: { devices },
    toggleDevice,
  } = useContext(FilterContext);
  const selectedDevices = devices!;

  const devicesQueryResponse = useQuery({
    query: getDevices,
  });

  return (
    <DeviceFilterRow
      queryResponse={devicesQueryResponse}
      selectedDevices={selectedDevices}
      toggleDevice={toggleDevice}
      colorMap={colorMap}
      createColorMap={createColorMap}
    />
  );
};

export default DeviceFilterLogic;
