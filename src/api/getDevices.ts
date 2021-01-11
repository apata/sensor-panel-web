import { getJson } from "./API";

const getDevices = getJson<{}, string[]>({ path: "/api/devices" });

export default getDevices;
