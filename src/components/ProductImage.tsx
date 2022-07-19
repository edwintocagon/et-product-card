import React, { useContext } from 'react';
import { ProductContext } from './ProductCard';
import styles from '../styles/styles.module.css';
import noImage from '../assets/no-image.jpg';

export interface ProductImageProps {
  className?: string;
  img?: string;
  title?: string;
  style?: React.CSSProperties;
}

export const ProductImage = ({
  img,
  className,
  title,
  style,
}: ProductImageProps) => {
  const { product } = useContext(ProductContext);
  return (
    <img
      className={`${styles.productImg} ${className}`}
      src={img || product.img || noImage}
      alt={title}
      style={style}
    />
  );
};
