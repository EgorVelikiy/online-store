import { NavItem } from "@/types/navLinks";
import { Route } from "next";

export const DropDownLinks: NavItem[] = [
  { label: 'Коробки', href: '/catalog/boxes' as Route },
  { label: 'Пакеты', href: '/catalog/packages' as Route },
  { label: 'Бумага тишью', href: '/catalog/tissue' as Route },
  { label: 'Бумажный наполнитель', href: '/catalog/filler' as Route },
  { label: 'Ленты, шпагат, бирки', href: '/catalog/ribbons' as Route },
  { label: 'Аксессуары для упаковки', href: '/catalog/accessories' as Route },
];