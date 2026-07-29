import { FilterGroup } from '@/types/catalogFilters';

export const ribbonFilters: FilterGroup[] = [
  {
    id: 'material',
    title: 'Материал',
    type: 'checkbox',
    options: [
      {
        id: 'satin',
        label: 'Атлас',
      },
      {
        id: 'textile',
        label: 'ткань',
      },
      {
        id: 'micro',
        label: 'Микрогофрокартон',
      },
      {
        id: 'organza',
        label: 'Органза',
      },
      {
        id: 'jute',
        label: 'Джут',
      },
    ]
  }
];
