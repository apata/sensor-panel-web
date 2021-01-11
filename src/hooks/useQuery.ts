import { Query } from "../api/API";
import { useCallback, useEffect, useRef, useState } from "react";

interface UseQueryProps<ResponsePayloadType> {
  query: Query<ResponsePayloadType>;
  compare?: any;
}

const useQuery = <ResponsePayloadType>({
  query,
  compare,
}: UseQueryProps<ResponsePayloadType>) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<object | undefined>(undefined);
  const [responseData, setResponseData] = useState<
    ResponsePayloadType | undefined
  >(undefined);
  const abortController = useRef(new AbortController());

  const makeQuery = useCallback(async () => {
    setIsLoading(true);
    try {
      const res = await query({ signal: abortController.current.signal });
      setResponseData(res);
      setIsLoading(false);
    } catch (e) {
      setError(e);
      setIsLoading(false);
    }
  }, [query]);

  useEffect(() => {
    makeQuery();
    return abortController.current.abort;
  }, [makeQuery, compare]);

  return { isLoading, error, responseData };
};

export default useQuery;
