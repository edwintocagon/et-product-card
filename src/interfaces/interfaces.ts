import { ProductCardProps } from "../components/ProductCard";
import { ProductTitleProps } from "../components/ProductTitle";
import { ProductImageProps } from "../components/ProductImage";
import { ProductButtonsProps } from "../components/ProductButtons";

export interface Product {
  id: number;
  img?: string;
  title: string;
  className?: string;
}

export interface ProductCardContextProps {
  counter: number;
  product: Product;
  maxCount?: number;
  increasBy: (value: number) => void;
}

/* opcional */
export interface ProductCardHOCProps {
  ({ children, product }: ProductCardProps): JSX.Element;
  Title: (Props: ProductTitleProps) => JSX.Element;
  Image: (Props: ProductImageProps) => JSX.Element;
  Buttons: (Props: ProductButtonsProps) => JSX.Element;
}

export interface onChangeArgs {
  product: Product;
  count: number;
}

export interface ProductinCart extends Product {
  count: number;
}

export interface initialValues {
  count?: number;
  maxCount?: number;
}

export interface ProductCardHandlers {
  count: number;
  isMaxCountReached: boolean;
  maxCount?: number;
  product: Product;

  increasBy: (value: number) => void;
  reset: () => void;
}
