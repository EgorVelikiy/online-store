'use client';

import Link from "next/link";
import { usePathname } from 'next/navigation';
import { DropDownLinks } from "./categoriesLinks";

interface CategoriesListProps {
  setOpen?: (open: boolean) => void;
  absolute: boolean;
}

export function CategoriesList({ setOpen, absolute = true }: CategoriesListProps) {
  const pathname = usePathname();
  return (
    <div
      role="menu"
      className={absolute
        ? "absolute left-0 top-full z-50 mt-2 min-w-56 animate-slide-in space-y-4 rounded-lg border border-border bg-surface p-4 shadow-lg"
        : "space-y-4 rounded-lg border border-border bg-surface p-4"
      }
    >
      {DropDownLinks.map((link) => {
        const isActive = pathname === link.href;

        return (
          <Link
            key={link.label}
            href={link.href}
            role="menuitem"
            onClick={() => setOpen?.(false)}
            className={`block rounded-md px-3 py-2 text-sm transition-colors ${isActive
                ? 'bg-brand-red/10 font-semibold text-brand-red'
                : 'text-muted hover:bg-brand-red/5 hover:text-brand-red'
              }`}
          >
            {link.label}
          </Link>
        );
      })}
    </div>
  );
}
