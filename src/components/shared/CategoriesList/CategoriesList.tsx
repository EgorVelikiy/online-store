'use client';

import Link from "next/link";
import { DropDownLinks } from "./categoriesLinks";

interface CategoriesListProps {
  setOpen?: (open: boolean) => void;
  absolute: boolean;
}

export function CategoriesList({ setOpen, absolute = true }: CategoriesListProps) {
  return (
    <div
      role="menu"
      className={absolute
        ? "absolute left-0 top-full z-50 mt-2 min-w-56 animate-slide-in space-y-4 rounded-lg border border-border bg-surface p-4 shadow-lg"
        : "space-y-4 rounded-lg border border-border bg-surface p-4"
      }
    >
      {DropDownLinks.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          role="menuitem"
          onClick={() => setOpen?.(false)}
          className="block text-sl text-muted transition-colors hover:text-brand-red"
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}
