type QueryModel<ResponsePayloadType> = (
  init?: RequestInit
) => Promise<ResponsePayloadType>;

export default QueryModel;
