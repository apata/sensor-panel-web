import { getJson } from "./API";
import DataType from "../../functions/src/models/DataType";

const getDataTypes = getJson<{}, DataType[]>({ path: "/api/data-types" });

export default getDataTypes;
