import { FilterGroup } from '@/types/catalogFilters';

export const fillerFilters: FilterGroup[] = [
  {
    id: 'color',
    title: 'Цвет',
    type: 'checkbox',
    options: [
      {
        id: 'red',
        label: 'Красный',
      },
      {
        id: 'beige',
        label: 'Бежевый',
      },
      {
        id: 'white',
        label: 'Белый',
      },
      {
        id: 'paleLilac',
        label: 'Бледно-лиловый',
      },
      {
        id: 'vanillaBeige',
        label: 'Ванильно-беженвый',
      },
    ],
  },
];
