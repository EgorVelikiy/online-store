import { type Category } from "@/types/categories";
import { Route } from "next";

export const mainCategories: Category[] = [
  {
    slug: 'boxes',
    title: 'Коробки',
    description: 'Картонные и крафт-коробки разных размеров',
    image: '/Categories/CategoryBoxes.jpeg',
    href: '/catalog/boxes' as Route,
  },
  // {
  //   slug: 'packages',
  //   title: 'Пакеты',
  //   description: 'Крафт-пакеты с ручками и без',
  //   image: '/Categories/CategoryBags.jpg',
  //   href: '/catalog/packages' as Route,
  // },
  {
    slug: 'filler',
    title: 'Бумажный наполнитель',
    description: 'Для защиты и презентации товара',
    image: '/Categories/CategoryFiller.jpg',
    href: '/catalog/filler' as Route,
  },
  {
    slug: 'tissue',
    title: 'Бумага тишью',
    description: 'Тонкая упаковочная бумага',
    image: '/Categories/CategoryTissue.jpg',
    href: '/catalog/tissue' as Route,
  },
  {
    slug: 'ribbons',
    title: 'Ленты',
    description: 'Декоративные и упаковочные ленты',
    image: '/Categories/CategoryRibbons.jpg',
    href: '/catalog/ribbons' as Route,
  },
] as const;

export const promoSlides = [
  {
    id: '1',
    title: 'Скидка на крафт-коробки',
    subtitle: 'До −20% на популярные размеры',
    tone: 'kraft' as const,
  },
  {
    id: '2',
    title: 'Наборы для маркетплейсов',
    subtitle: 'Всё для отправки заказов в одном месте',
    tone: 'forest' as const,
  },
  {
    id: '3',
    title: 'Оптовые условия',
    subtitle: 'Специальные цены для постоянных клиентов',
    tone: 'ember' as const,
  },
  {
    id: '4',
    title: 'Тишью и наполнитель',
    subtitle: 'Комплект для красивой упаковки подарков',
    tone: 'sand' as const,
  },
];


export const coverNames = {
  hinged: 'Откидная',
  separate: 'Отдельная',
  window: 'С окном',
} as const;