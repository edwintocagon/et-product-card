import { useEffect, useRef, useState } from 'react';
import { onChangeArgs, Product, InitialValues } from '../interfaces/interfaces';

interface useProductArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  InitialValues?: InitialValues;
}

export const useProduct = ({
  onChange,
  product,
  value = 0,
  InitialValues,
}: useProductArgs) => {
  const [counter, setCounter] = useState<number>(InitialValues?.count || value);
  const isMounted = useRef(false);

  const increaseBy = (value: number) => {
    let newValue = Math.max(counter + value, 0);
    if (InitialValues?.maxCount) {
      newValue = Math.min(newValue, InitialValues.maxCount);
    }

    setCounter(newValue);
    onChange && onChange({ count: newValue, product });
  };

  const reset = () => {
    setCounter(InitialValues?.count || value);
  };

  useEffect(() => {
    if (!isMounted.current) return;
    setCounter(value);
  }, [value]);

  useEffect(() => {
    isMounted.current = true;
  }, []);

  return {
    counter,
    isMaxCountReached:
      !!InitialValues?.count && InitialValues.maxCount === counter,
    maxCount: InitialValues?.maxCount,

    increaseBy,
    reset,
  };
};
