import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

import { mainNav } from '@/constants/navigation';
import { cn, getAssetPath } from '@/lib/utils';
import { CatalogDropdown } from '../catalog/CatalogDropDown/CatalogDropdown';

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-surface/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-screen-2xl items-center justify-between gap-6 px-4 py-3 sm:px-6">
        <Link href="/" className="shrink-0 transition-opacity hover:opacity-90">
          <Image
            src={getAssetPath("/main/logoMain.png")}
            alt="FAMILY kraft mag"
            width={160}
            height={56}
            priority
            className="h-11 w-auto sm:h-12"
          />
        </Link>

        <nav aria-label="Основная навигация" className="hidden items-center gap-1 md:flex ">
          <CatalogDropdown label="Каталог" />
          {mainNav
            .filter((item): item is typeof item & { href: NonNullable<typeof item.href> } =>
              Boolean(item.href),
            )
            .map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="rounded-md px-3 py-2 text-sl font-medium hover:bg-surface-muted"
              >
                {item.label}
              </Link>
            ))}
        </nav>

        <MobileNav />
      </div>
    </header>
  );
}

function MobileNav() {
  return (
    <details className="relative md:hidden">
      <summary
        className={cn(
          'flex list-none cursor-pointer items-center gap-1.5 rounded-md border border-border bg-surface px-3 py-2 text-sm font-medium',
          'marker:content-none [&::-webkit-details-marker]:hidden',
        )}
      >
        Меню
        <ChevronDown className="size-4 opacity-70" aria-hidden />
      </summary>
      <div className="absolute right-0 mt-2 w-56 animate-slide-in rounded-lg border border-border bg-surface p-2 shadow-lg shadow-ink/10">
        <div className="px-3 py-2 text-sm text-muted">
          Каталог
          <span className="mt-1 block text-xs">Каталог скоро появится</span>
        </div>
        {mainNav
          .filter((item): item is typeof item & { href: NonNullable<typeof item.href> } =>
            Boolean(item.href),
          )
          .map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="block rounded-md px-3 py-2 text-sm font-medium hover:bg-surface-muted"
            >
              {item.label}
            </Link>
          ))}
      </div>
    </details>
  );
}
