import {useRef, useEffect} from 'react';

export const usePrev = <T>(value: T): T | null => {
  const valueRef = useRef<T | null>(null);
  
  useEffect(() => {
      valueRef.current = value;
  }, [value])

  return valueRef.current;
}