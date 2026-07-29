import Link from 'next/link';

import { footerColumns } from '@/constants/navigation';

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-ink text-surface">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        {footerColumns.map((column) => (
          <div key={column.title}>
            <h2 className="font-display text-sm font-semibold tracking-wide text-surface uppercase">
              {column.title}
            </h2>
            <ul className="mt-4 space-y-2">
              {column.content.map((item) => (
                <li key={item.label} className="text-sm text-white/70">
                  {item.href ? (
                    <Link href={item.href} className="transition-colors hover:text-surface">
                      {item.label}
                    </Link>
                  ) : (
                    <span>{item.label}</span>
                  )}
                </li>
              ))}

            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-4 py-4 text-xs text-white/55 sm:px-6">
          © 2026 FAMILY kraft mag
        </p>
      </div>
    </footer>
  );
}
