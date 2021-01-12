import { stringify } from "qs";
import GetRequestProps from "./models/GetRequestProps";
import QueryModel from "./models/QueryModel";

export function getJson<RequestParamsType, ResponsePayloadType>({
  path,
  params,
}: GetRequestProps<RequestParamsType>): QueryModel<ResponsePayloadType> {
  return async (init?: RequestInit): Promise<ResponsePayloadType> => {
    try {
      const res = await fetch(`${path}?${stringify(params)}`, init);
      if (!res.ok) {
        throw new Error("fetch failed with status " + res.status);
      }
      const payload: ResponsePayloadType = await res.json();
      return payload;
    } catch (err) {
      throw err;
    }
  };
}
