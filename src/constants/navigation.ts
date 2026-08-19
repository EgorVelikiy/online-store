import type { NavItem } from '@/types/navLinks';
import type { Route } from 'next';

export type { NavItem };
export const mainNav: NavItem[] = [
  { label: 'Доставка и оплата', href: '/delivery' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Оптовикам', href: '/wholesale' },
  { label: 'Прайс-лист', href: '/price-list' },
  { label: 'Контакты', href: '/contacts' },
];

export const companyColumn: NavItem[] = [
  { label: 'О компании', href: '/' },
  { label: 'Контакты', href: '/contacts' },
];

export const informationColumn: NavItem[] = [
  { label: 'Доставка и оплата', href: '/delivery' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Оптовикам', href: '/wholesale' },
];

export const helpColumn: NavItem[] = [{ label: 'Помощь', href: '/' }];

export const contactsColumn: (Omit<NavItem, "href"> & { href?: Route })[] = [
  { label: '+8-903-488-83-57', href: 'tel:+79034888357' },
  { label: 'Вт-Пт с 09:00 до 18:00' },
  { label: 'Сб с 11:00 до 16:00' },
  { label: 'Вс, пн - выходной' },
  { label: 'info@familykraftmag.ru', href: 'mailto:info@familykraftmag.ru' },
  { label: 'г. Ростов-на-Дону, ул. Геологическая, 5' },
];

export const footerColumns = [
  { title: 'Компания', content: companyColumn },
  { title: 'Информация', content: informationColumn },
  { title: 'Помощь', content: helpColumn },
  { title: 'Контакты', content: contactsColumn },
] as const;
