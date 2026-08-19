import {
  hingedBoxes,
  separateCoverBoxes,
  windowBoxes,
} from '@/data/priceList';

import { PriceTable } from "@/components/priceList/PriceTable";

export default function PriceListPage() {
  return (
    <main className="mx-auto max-w-screen-1xl space-y-12 px-4 py-8">
      <h1 className="text-4xl font-bold">
        Прайс-лист
      </h1>

      <PriceTable
        title="Коробки с откидной крышкой"
        items={hingedBoxes}
      />

      <PriceTable
        title="Коробки с отдельной крышкой"
        items={separateCoverBoxes}
      />

      <PriceTable
        title="Коробки с окном"
        items={windowBoxes}
      />
    </main>
  );
}