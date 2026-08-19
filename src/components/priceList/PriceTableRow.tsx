import { PriceListItem } from '@/data/priceList';

type PriceTableRowProps = {
  item: PriceListItem;
};

export function PriceTableRow({
  item,
}: PriceTableRowProps) {
  return (
    <tr className="border-b border-border transition hover:bg-surface-muted">
      <td className="px-4 py-4 font-medium">
        {item.size}
      </td>

      <td className="px-4 py-4 text-center">
        {item.retail} ₽
      </td>

      <td className="px-4 py-4 text-center">
        {item.from30} ₽
      </td>

      <td className="px-4 py-4 text-center">
        {item.from100} ₽
      </td>

      <td className="px-4 py-4 text-center">
        {item.from1000} ₽
      </td>
    </tr>
  );
}