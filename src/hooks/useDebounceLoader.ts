import { useEffect, useRef, useState } from 'react';
import type { Dispatch, SetStateAction } from 'react';

const useDebounceLoader = <T>(
  initialState?: T,
  options?: UseDebounceLoaderOptionType<T>,
): UseDebounceLoaderResultType<T> => {
  const { delay = 1000, callback } = options || {};
  const [value, setValue] = useState<T>(initialState as T);

  const previousValue = useRef(value);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (previousValue.current !== value) {
      setLoading(true);
    }

    if (!value && !previousValue.current) {
      setLoading(false);
    }

    const handler = setTimeout(() => {
      if (previousValue.current !== value) {
        previousValue.current = value;
        if (callback) {
          callback(value);
        }
        setLoading(false);
      }
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay, callback]);

  return [value, setValue, loading];
};

interface UseDebounceLoaderOptionType<T> {
  delay?: number;
  callback?: (value: T) => void;
}

type UseDebounceLoaderResultType<T> = [T, Dispatch<SetStateAction<T>>, boolean];

export default useDebounceLoader;
