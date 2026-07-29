import { FilterGroup } from '@/types/catalogFilters';
import { boxFilters } from '@/data/filters/boxFilters';
import { boxes } from '@/data/products/boxes';
import { ProductType } from '@/types/product';
import { accessoriesFilters } from './accessoriesFilters';
import { fillerFilters } from './fillerFilters';
import { packagesFilters } from './packagesFilters';
import { ribbonFilters } from './ribbonFilters';
import { tissueFilters } from './tissueFilters';

export type CatalogConfigType = {
  title: string;
  filters: FilterGroup[];
  products: ProductType[] | [];
};

export const catalogConfig = {
  boxes: {
    title: 'Картонные коробки',
    filters: boxFilters,
    products: boxes,
  },

  packages: {
    title: 'Пакеты',
    filters: packagesFilters,
    products: [],
  },

  tissue: {
    title: 'Бумага тишью',
    filters: tissueFilters,
    products: [],
  },

  filler: {
    title: 'Бумажный наполнитель',
    filters: fillerFilters,
    products: [],
  },

  ribbons: {
    title: 'Ленты, шпагаты, бирки',
    filters: ribbonFilters,
    products: [],
  },

  accessories: {
    title: 'Акссесуары для упаковки',
    filters: accessoriesFilters,
    products: [],
  },
} satisfies Record<string, CatalogConfigType>;
