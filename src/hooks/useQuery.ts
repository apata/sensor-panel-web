import { Query } from "../api/API";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

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
      console.log("makeQuery run", query, compare);
      setIsLoading(true);
      try {
        const res = await query({ signal: abortController.signal });
        if (isMounted) {
          setResponseData(res);
          setIsLoading(false);
          setError(undefined);
        }
      } catch (e) {
        if (isMounted) {
          setError(e);
          setIsLoading(false);
        }
      }
    };

    makeQuery();
    return () => {
      abortController.abort();
    };
  }, [query, compare]);

  return { isLoading, error, responseData };
};

export default useQuery;
