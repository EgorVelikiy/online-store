import type { Metadata } from 'next';
import { Manrope, Unbounded } from 'next/font/google';

import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';

import './globals.css';

const display = Unbounded({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-display',
  display: 'swap',
});

const body = Manrope({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-body',
  display: 'swap',
});
export const metadata: Metadata = {
  title: 'FAMILY kraft mag — упаковка и крафт-материалы',
  description:
    'Интернет-магазин упаковки: коробки, пакеты, бумага тишью, наполнитель и ленты.',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="ru" className={`${display.variable} ${body.variable}`}>
      <body className="flex min-h-screen flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
