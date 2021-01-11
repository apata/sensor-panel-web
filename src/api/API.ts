import { stringify } from "qs";

interface GetRequestProps<RequestParamsType> {
  path: string;
  params?: RequestParamsType;
}

export type Query<ResponsePayloadType> = (
  init?: RequestInit
) => Promise<ResponsePayloadType>;

export function getJson<RequestParamsType, ResponsePayloadType>({
  path,
  params,
}: GetRequestProps<RequestParamsType>): Query<ResponsePayloadType> {
  return async (init?: RequestInit): Promise<ResponsePayloadType> => {
    try {
      const res = await fetch(`${path}?${stringify(params)}`, init);
      const payload: ResponsePayloadType = await res.json();
      return payload;
    } catch (err) {
      throw err;
    }
  };
}
