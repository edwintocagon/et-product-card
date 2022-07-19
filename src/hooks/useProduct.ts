import { useEffect, useState } from 'react';
import { onChangeArgs, Product, initialValues } from '../interfaces/interfaces';

interface useProductArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: initialValues;
}

export const useProduct = ({
  onChange,
  product,
  value = 0,
  initialValues,
}: useProductArgs) => {
  const [counter, setCounter] = useState<number>(initialValues?.count || value);

  /* const isMounted = useRef(false); */

  const increasBy = (value: number) => {
    console.log(counter);
    if (initialValues?.maxCount && counter + value > initialValues.maxCount)
      return;

    const newValue = Math.max(0, counter + value);
    setCounter(newValue);
    onChange && onChange({ product, count: newValue });
  };

  /* console.log(isMounted.current);

  useEffect(() => {
    if (!isMounted.current) return;
    setCounter(value);
  }, [value]);

  useEffect(() => {
    isMounted.current = true;
  }, []); */

  const reset = () => {
    setCounter(initialValues?.count || value);
  };

  useEffect(() => {
    setCounter(initialValues?.count || value);
    /*     return () => {
      setCounter(0);
    }; */
  }, [value]);

  return {
    counter,
    isMaxCountReached:
      !!initialValues?.count && initialValues.maxCount === counter,
    maxCount: initialValues?.maxCount,

    increasBy,
    reset,
  };
};
