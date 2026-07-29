import { Dispatch, SetStateAction } from "react";
import { BoxSizesType, ProductMaterial } from "./product";

export type FilterOption = {
  id: string;
  label: string;
  count?: number;
  disabled?: boolean;
};

export type FilterGroup = {
  id: string;
  title: string;
  type: 'checkbox' | 'dimensions';
  defaultOpen?: boolean;
  options?: FilterOption[];
};

export type SetFilters = Dispatch<SetStateAction<CatalogFiltersState>>

export type CatalogFiltersProps = {
  groups: FilterGroup[];
  filters: CatalogFiltersState;
  setFilters: SetFilters;
};

export type CatalogFiltersState = {
  material: ProductMaterial[];
  color: string[];
  cover: string[];

  dimensions: BoxSizesType;
};
