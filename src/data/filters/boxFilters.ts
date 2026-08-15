import { FilterGroup } from '@/types/catalogFilters';

export const boxFilters: FilterGroup[] = [
  {
    id: 'dimensions',
    title: 'Размер коробки',
    type: 'dimensions',
  },
  {
    id: 'material',
    title: 'Материал',
    type: 'checkbox',
    options: [
      {
        id: 'micro',
        label: 'Микрогофрокартон',
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
    ],
  },
  {
    id: 'cover',
    title: 'Крышка',
    type: 'checkbox',
    options: [
      {
        id: 'hinged',
        label: 'Откидная',
      },
      {
        id: 'separate',
        label: 'Отдельная',
      },
      {
        id: 'window',
        label: 'С окном',
      },
    ],
  },
];
