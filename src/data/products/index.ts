import { ProductType } from "@/types/product";
import { boxes } from "./boxes";

export const productsByCategory: Record<string, ProductType[]> = {
    boxes,   
}

export const products = Object.values(productsByCategory).flat();

export const popularProducts =
    products.filter(product => product.isPopular);