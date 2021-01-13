import { useEffect, useLayoutEffect, useRef, useState } from "react";
import UseQueryProps from "../api/models/UseQueryProps";

const useQuery = <ResponsePayloadType>({
  query,
  compare,
}: UseQueryProps<ResponsePayloadType>) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<object | undefined>(undefined);
  const [responseData, setResponseData] = useState<
    ResponsePayloadType | undefined
  >(undefined);
  const isMounted = useRef(false);
  useLayoutEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    const abortController = new AbortController();
    const makeQuery = async () => {
      setIsLoading(true);
      setError(undefined);
      try {
        const res = await query({ signal: abortController.signal });
        if (isMounted) {
          setResponseData(res);
          setError(undefined);
          setIsLoading(false);
        }
      } catch (e) {
        if (isMounted) {
          setError(e);
        }
      }
    };

    makeQuery();
    return () => {
      abortController.abort();
      if (isMounted) {
        setIsLoading(false);
      }
    };
  }, [query, compare]);

  return { isLoading, error, responseData };
};

export default useQuery;
