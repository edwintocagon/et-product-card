export { ProductImage } from "./ProductImage";
export { ProductTitle } from "./ProductTitle";
export { ProductButtons } from "./ProductButtons";

import { ProductCard as PorductCardHOC } from "./ProductCard";
import { ProductButtons } from "./ProductButtons";
import { ProductImage } from "./ProductImage";
import { ProductTitle } from "./ProductTitle";
import { ProductCardHOCProps } from "../interfaces/interfaces";

export const ProductCard: ProductCardHOCProps = Object.assign(PorductCardHOC, {
  Image: ProductImage,
  Title: ProductTitle,
  Buttons: ProductButtons,
});

export default ProductCard;
