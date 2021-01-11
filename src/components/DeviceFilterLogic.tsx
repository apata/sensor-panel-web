import React, { useEffect } from "react";
import getDevices from "../api/getDevices";
import DeviceFilterRow from "./DeviceFilterRow";
import useQuery from "../hooks/useQuery";

interface DeviceFilterLogicProps {
  selectedDevices: string[];
  setSelectedDevices: React.Dispatch<React.SetStateAction<string[]>>;
  setDeviceColorMap: React.Dispatch<React.SetStateAction<Map<string, string>>>;
}

const DeviceFilterLogic = ({
  selectedDevices,
  setSelectedDevices,
  setDeviceColorMap,
}: DeviceFilterLogicProps) => {
  const devicesQueryResponse = useQuery({
    query: getDevices,
  });

  const toggleDevice = (device: string) =>
    setSelectedDevices((currentSelectedDevices) => {
      if (!currentSelectedDevices.length) {
        return [device];
      } else {
        if (currentSelectedDevices.includes(device)) {
          return currentSelectedDevices.filter((d) => d !== device);
        } else {
          return [...currentSelectedDevices, device];
        }
      }
    });

  return (
    <DeviceFilterRow
      queryResponse={devicesQueryResponse}
      selectedDevices={selectedDevices}
      toggleDevice={toggleDevice}
      setDeviceColorMap={setDeviceColorMap}
    />
  );
};

export default DeviceFilterLogic;
