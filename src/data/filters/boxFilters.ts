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
        id: 'paperboard',
        label: 'Картон',
      },
      {
        id: 'micro',
        label: 'Микрогофрокартон',
      },
      {
        id: 'paperAndPlastic',
        label: 'Картон и пластик',
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
        id: 'black',
        label: 'Черный',
      },
      {
        id: 'colors',
        label: 'Цветной',
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
