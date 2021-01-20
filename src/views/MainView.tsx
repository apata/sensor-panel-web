import React, { useMemo, useState } from "react";
import getDataTypes from "../api/getDataTypes";
import DeviceFilterLogic from "../components/DeviceFilterLogic";
import Diagram from "../components/Diagram";
import TimeRangeRow from "../components/TimeRangeRow";
import { FlexColumn } from "../elements/Flex";
import GridContainer from "../elements/GridContainer";
import Label from "../elements/Label";
import Switch from "../elements/Switch";
import useQuery from "../hooks/useQuery";

const REFRESH_FREQUENCY = 10;

const MainView = () => {
  const { responseData: dataTypes, error, isLoading } = useQuery({
    query: getDataTypes,
  });

  // 0 is false
  const [autoRefreshPeriod, setAutoRefreshPeriod] = useState<number>(0);

  // empty list state means are all selected
  const [selectedDevices, setSelectedDevices] = useState<string[]>([]);

  // set default start time so the app
  // wouldn't go refreshing ALL the measurements on each refrash
  const initialStartTime = useMemo(
    () => new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
    []
  );
  // undefined time means no filter applied
  const [startTime, setStartTime] = useState<string | undefined>(
    initialStartTime
  );
  const [endTime, setEndTime] = useState<string | undefined>(undefined);

  // color map determines which device is which color on diagram (key: device, value: rgb())
  const [deviceColorMap, setDeviceColorMap] = useState(
    new Map<string, string>()
  );

  return (
    <FlexColumn style={{ overflowX: "hidden" }}>
      <TimeRangeRow
        startTime={startTime}
        endTime={endTime}
        setStartTime={setStartTime}
        setEndTime={setEndTime}
      />
      <DeviceFilterLogic
        selectedDevices={selectedDevices}
        setSelectedDevices={setSelectedDevices}
        setDeviceColorMap={setDeviceColorMap}
      />
      <Switch
        checked={!!autoRefreshPeriod}
        onChange={() =>
          setAutoRefreshPeriod((currentPeriod) =>
            !!currentPeriod ? 0 : REFRESH_FREQUENCY
          )
        }
        label={`Automatically refresh measurements every ${REFRESH_FREQUENCY} seconds`}
      />
      <GridContainer spacing="d2">
        {isLoading ? (
          <Label>Loading data types...</Label>
        ) : error ? (
          <Label>Error loading data types.</Label>
        ) : dataTypes && dataTypes.length ? (
          <>
            {dataTypes.map((dataType) => {
              return (
                <Diagram
                  deviceColorMap={deviceColorMap}
                  key={dataType.id}
                  dataType={dataType}
                  autoRefreshPeriod={autoRefreshPeriod}
                  queryParams={{
                    dataTypes: [dataType.id],
                    devices: selectedDevices,
                    startTime: startTime,
                    endTime: endTime,
                  }}
                />
              );
            })}
          </>
        ) : (
          <Label>No data types found.</Label>
        )}
      </GridContainer>
    </FlexColumn>
  );
};

export default MainView;
