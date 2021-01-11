import QueryModel from "./QueryModel";

export default interface UseQueryProps<ResponsePayloadType> {
  query: QueryModel<ResponsePayloadType>;
  compare?: any;
}
