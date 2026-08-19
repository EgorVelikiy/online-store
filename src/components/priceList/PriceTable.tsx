import { PriceListItem } from '@/data/priceList';

import { PriceTableRow } from './PriceTableRow';

type PriceTableProps = {
  title: string;
  items: PriceListItem[];
};

export function PriceTable({
  title,
  items,
}: PriceTableProps) {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold">
        {title}
      </h2>

      <div className="overflow-x-auto rounded-2xl border border-border">
        <table className="w-full min-w-[700px]">
          <thead className="bg-surface-muted">
            <tr>
              <th className="px-4 py-4 text-left">
                Размер
              </th>

              <th className="px-4 py-4 text-center">
                Розница
              </th>

              <th className="px-4 py-4 text-center">
                От 30 шт.
              </th>

              <th className="px-4 py-4 text-center">
                От 100 шт.
              </th>

              <th className="px-4 py-4 text-center">
                От 1000 шт.
              </th>
            </tr>
          </thead>

          <tbody>
            {items.map((item) => (
              <PriceTableRow
                key={item.size}
                item={item}
              />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}