import { FilterGroup } from '@/types/catalogFilters';

export const packagesFilters: FilterGroup[] = [
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
        id: 'transparent',
        label: 'Прозрачный',
      },
      {
        id: 'white',
        label: 'Белый',
      },
      {
        id: 'black',
        label: 'Черный',
      },
      {
        id: 'gray',
        label: 'Серый',
      },
      {
        id: 'red',
        label: 'Красный',
      },
    ],
  },
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
        id: 'polyethylene',
        label: 'Полиэтилен',
      },
    ]
  }
];
