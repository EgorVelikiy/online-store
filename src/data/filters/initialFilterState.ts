import { CatalogFiltersState } from "@/types/catalogFilters";

export const initialFilters: CatalogFiltersState = {
  material: [],
  color: [],
  cover: [],
  
  dimensions: {
    l: 0,
    w: 0,
    h: 0,
  },
};