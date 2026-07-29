import { CategoriesList } from '@/components/shared/CategoriesList/CategoriesList';
import { CatalogFiltersProps } from '@/types/catalogFilters';
import { FilterSection } from './FilterSection';

export function CatalogFilters({
  groups,
  filters,
  setFilters
}: CatalogFiltersProps) {
  return (
    <aside className="sticky top-24 flex flex-col gap-5">
      <h3 className="text-center text-2xl font-semibold">Категории</h3>
      <CategoriesList absolute={false} />

      <div className="rounded-2xl p-2">
        <h3 className="text-center text-2xl font-semibold">Фильтры</h3>
      </div>

      {groups.map((group) => (
        <FilterSection key={group.id} group={group} filters={filters} setFilters={setFilters}/>
      ))}
    </aside>
  );
}
