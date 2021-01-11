export default interface GetRequestProps<RequestParamsType> {
  path: string;
  params?: RequestParamsType;
}
