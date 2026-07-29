import { FilterGroup } from '@/types/catalogFilters';

export const tissueFilters: FilterGroup[] = [
  {
    id: 'color',
    title: 'Цвет',
    type: 'checkbox',
    options: [
      {
        id: 'whiteSilver',
        label: 'Белый с серебром',
      },
      {
        id: 'purple',
        label: 'Фиолетовый',
      },
      {
        id: 'whiteGold',
        label: 'Белый с золотом',
      },
      {
        id: 'greenApple',
        label: 'Зеленое яблоко',
      },
      {
        id: 'milky',
        label: 'Молочный',
      },
      {
        id: 'white',
        label: 'Белый',
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
    ]
  }
];
