import { CatalogFiltersState } from '@/types/catalogFilters';
import { ProductType } from '@/types/product';

export function filterProducts(
  products: ProductType[],
  filters: CatalogFiltersState,
) {
  return products.filter((product) => {
    const materialMatch =
      filters.material.length === 0 ||
      filters.material.includes(product.materialType);

    const colorMatch =
      filters.color.length === 0 || filters.color.includes(product.colorId);

    const coverMatch = 
      filters.cover.length === 0 || filters.cover.includes(product.cover!)

    const l = Number(filters.dimensions.l);
    const w = Number(filters.dimensions.w);
    const h = Number(filters.dimensions.h);

    const dimensionsMatch =
      (!l || (product.sizes?.l ?? 0) >= l) &&
      (!w || (product.sizes?.w ?? 0) >= w) &&
      (!h || (product.sizes?.h ?? 0) >= h);

    return materialMatch && colorMatch && dimensionsMatch && coverMatch;
  });
}
