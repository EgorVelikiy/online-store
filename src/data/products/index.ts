import { ProductCategory, ProductType } from "@/types/product";
import { boxes } from "./boxes";
import { packages } from "./packages";
import { tissue } from "./tissue";
import { filler } from "./filler";

export const productsByCategory: Record<string, ProductType[]> = {
  boxes,
  packages,
  tissue,
  filler
}

export const products = Object.values(productsByCategory).flat();

export const popularProducts =
  products.filter(product => product.isPopular);

export function getRelatedProducts(
  product: ProductType,
  limit = 4,
) {
  return productsByCategory[product.category]
    .filter((item) => item.id !== product.id)
    .slice(0, limit);
}