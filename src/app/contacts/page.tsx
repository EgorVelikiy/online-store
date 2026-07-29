import Link from 'next/link';

export default function ContactsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 py-10 sm:px-6 lg:px-8">
        <div>
          <h1 className="font-display text-4xl font-bold text-ink">Контакты</h1>
          <p className="mt-3 max-w-2xl text-muted">
            Если у вас появились вопросы по продукции, доставке или
            индивидуальному заказу упаковки — свяжитесь с нами любым удобным
            способом.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <section className="rounded-2xl border border-border bg-surface p-6 shadow-sm">
            <h2 className="mb-5 text-xl font-semibold text-ink">
              Контактная информация
            </h2>

            <div className="space-y-5">
              <div>
                <p className="text-sm font-medium text-muted">Сайт</p>
                <a
                  href="https://familykraftmag.ru"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-medium text-brand-green hover:underline"
                >
                  familykraftmag.ru
                </a>
              </div>

              <div>
                <p className="text-sm font-medium text-muted">Адрес</p>
                <p className="text-lg text-ink">
                  г. Ростов-на-Дону,
                  <br />
                  ул. Геологическая, 5
                </p>
              </div>

              <div>
                <p className="text-sm font-medium text-muted">Телефон</p>
                <Link
                  href="tel:+79034888357"
                  className="text-lg font-medium text-brand-green hover:underline"
                >
                  +7 (903) 488-83-57
                </Link>
              </div>

              <div>
                <p className="text-sm font-medium text-muted">E-mail</p>
                <Link
                  href="mailto:info@familykraftmag.ru"
                  className="text-lg font-medium text-brand-green hover:underline"
                >
                  info@familykraftmag.ru
                </Link>
              </div>
            </div>
          </section>

          <section className="rounded-2xl border border-border bg-surface p-6 shadow-sm">
            <h2 className="mb-5 text-xl font-semibold text-ink">
              Время работы
            </h2>

            <div className="space-y-4 text-ink">
              <div className="flex justify-between border-b border-border pb-2">
                <span>Вторник – Пятница</span>
                <span className="font-medium">09:00 – 18:00</span>
              </div>

              <div className="flex justify-between border-b border-border pb-2">
                <span>Суббота</span>
                <span className="font-medium">11:00 – 16:00</span>
              </div>

              <div className="flex justify-between">
                <span>Воскресенье, Понедельник</span>
                <span className="font-medium text-brand-red">Выходной</span>
              </div>
            </div>
          </section>

          <section className="rounded-2xl border border-border bg-surface p-6 shadow-sm">
            <h2 className="mb-5 text-xl font-semibold text-ink">
              Реквизиты компании
            </h2>

            <dl className="grid gap-4">
              <div>
                <dt className="text-sm text-muted">Полное наименование</dt>
                <dd className="font-medium text-ink">
                  Индивидуальный предприниматель
                  <br />
                  Великая Любовь Владимировна
                </dd>
              </div>

              <div>
                <dt className="text-sm text-muted">Адрес</dt>
                <dd>г. Ростов-на-Дону, ул. Геологическая, 5</dd>
              </div>

              <div>
                <dt className="text-sm text-muted">ИНН</dt>
                <dd>614000558300</dd>
              </div>
            </dl>
          </section>

          <section className="rounded-2xl border border-border bg-surface p-6 shadow-sm">
            <h2 className="mb-5 text-xl font-semibold text-ink">
              Банковские реквизиты
            </h2>

            <dl className="grid gap-4">
              <div>
                <dt className="text-sm text-muted">Банк</dt>
                <dd>ФИЛИАЛ «РОСТОВСКИЙ» АО «АЛЬФА-БАНК»</dd>
              </div>

              <div>
                <dt className="text-sm text-muted">Расчётный счёт</dt>
                <dd className="font-mono">40802810326070005146</dd>
              </div>

              <div>
                <dt className="text-sm text-muted">Корреспондентский счёт</dt>
                <dd className="font-mono">30101810500000000207</dd>
              </div>

              <div>
                <dt className="text-sm text-muted">БИК</dt>
                <dd className="font-mono">046015207</dd>
              </div>
            </dl>
          </section>
        </div>

        <section className="overflow-hidden rounded-2xl border border-border">
          <iframe
            title="Карта"
            src="https://yandex.ru/map-widget/v1/?text=Ростов-на-Дону%2C%20ул.%20Геологическая%2C%205"
            className="h-[420px] w-full"
            loading="lazy"
          />
        </section>
      </div>
    </div>
  );
}
