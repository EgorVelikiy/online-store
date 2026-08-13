import { FilterGroup } from '@/types/catalogFilters';
import { boxFilters } from '@/data/filters/boxFilters';
import { boxes } from '@/data/products/boxes';
import { ProductType } from '@/types/product';
import { accessoriesFilters } from './accessoriesFilters';
import { fillerFilters } from './fillerFilters';
import { ribbonFilters } from './ribbonFilters';
import { tissueFilters } from './tissueFilters';
import { tissue } from '../products/tissue';
import { filler } from '../products/filler';

export type CatalogConfigType = {
  title: string;
  filters: FilterGroup[];
  products: ProductType[] | [];
};

export const catalogConfig = {
  boxes: {
    title: 'Самосборные картонные коробки',
    filters: boxFilters,
    products: boxes,
  },

  // packages: {
  //   title: 'Пакеты',
  //   filters: packagesFilters,
  //   products: packages,
  // },

  tissue: {
    title: 'Бумага тишью',
    filters: tissueFilters,
    products: tissue,
  },

  filler: {
    title: 'Бумажный наполнитель',
    filters: fillerFilters,
    products: filler,
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
