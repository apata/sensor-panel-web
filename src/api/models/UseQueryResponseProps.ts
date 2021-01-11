export default interface UseQueryResponseProps<ResponsePayloadType> {
  responseData: ResponsePayloadType | undefined;
  error: object | undefined;
  isLoading: boolean;
}
