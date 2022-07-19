import React, { createContext } from 'react';
import styles from '../styles/styles.module.css';
import { useProduct } from '../hooks/useProduct';
import {
  ProductCardContextProps,
  Product,
  onChangeArgs,
  initialValues,
  ProductCardHandlers,
} from '../interfaces/interfaces';

export const ProductContext = createContext({} as ProductCardContextProps);
const { Provider } = ProductContext;

export interface ProductCardProps {
  /* children?: ReactElement | ReactElement[]; */
  children: (args: ProductCardHandlers) => JSX.Element | JSX.Element[];
  product: Product;
  className?: string;
  style?: React.CSSProperties;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: initialValues;
}

export const ProductCard = ({
  children,
  product,
  className,
  style,
  onChange,
  value,
  initialValues,
}: ProductCardProps) => {
  const { counter, increasBy, maxCount, isMaxCountReached, reset } = useProduct(
    {
      onChange,
      product,
      value,
      initialValues,
    }
  );

  return (
    <Provider value={{ counter, increasBy, product, maxCount }}>
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children({
          count: counter,
          isMaxCountReached,
          maxCount: initialValues?.maxCount,
          product,

          increasBy,
          reset,
        })}
      </div>
    </Provider>
  );
};
