import { FilterGroup } from '@/types/catalogFilters';

export const accessoriesFilters: FilterGroup[] = [
  {
    id: 'material',
    title: 'Материал',
    type: 'checkbox',
    options: [
      {
        id: 'paper',
        label: 'Бумага',
      },
      {
        id: 'polypropylene',
        label: 'Полипропилен',
      },
    ],
  },
  {
    id: 'color',
    title: 'Цвет',
    type: 'checkbox',
    options: [
      {
        id: 'brown',
        label: 'Крафт',
      },
      {
        id: 'white',
        label: 'Белый',
      },
      {
        id: 'transparent',
        label: 'Прозрачный',
      },
    ],
  },
];
