import Link from 'next/link';
import Image from 'next/image';

export default function WholesalePage() {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 py-10 sm:px-6 lg:px-8">
      <header className="grid items-center gap-8 lg:grid-cols-2">
        <div>
          <h1 className="font-display text-4xl font-bold text-ink">
            Оптовым покупателям
          </h1>

          <p className="mt-4 leading-8 text-muted">
            Мы производим коробки из микрогофрокартона, которые отлично подходят
            для отправки товаров Почтой России, транспортными компаниями и через
            маркетплейсы.
          </p>

          <p className="mt-4 leading-8 text-muted">
            Производство находится в <strong>г. Ростов-на-Дону</strong>, а
            заказы мы отправляем по всей России.
          </p>
        </div>

        <div className="overflow-hidden rounded-3xl">
          <Image
            src="/main/optovikam.jpg"
            alt="Оптовые поставки коробок"
            width={540}
            height={280}
            className="h-[280px] w-full object-cover"
          />
        </div>
      </header>

      <section className="rounded-2xl border border-border bg-surface p-8 shadow-sm">
        <h2 className="text-2xl font-semibold text-ink">
          Как меняются условия сотрудничества
        </h2>

        <p className="mt-3 max-w-2xl text-muted">
          Чем больше объем заказа, тем выгоднее стоимость продукции и условия
          производства.
        </p>

        <div className="relative mt-12">
          {/* Линия */}
          <div className="absolute left-0 right-0 top-5 hidden h-0.5 bg-border lg:block" />

          <div className="grid gap-8 lg:grid-cols-4">
            <div className="relative">
              <div className="relative z-10 flex size-10 items-center justify-center rounded-full bg-brand-green text-sm font-bold text-white">
                1
              </div>

              <h3 className="mt-4 text-xl font-semibold text-ink">От 30 шт.</h3>

              <p className="mt-2 text-muted">
                Мелкий опт для начинающих продавцов и небольших магазинов.
              </p>
            </div>

            <div className="relative">
              <div className="relative z-10 flex size-10 items-center justify-center rounded-full bg-brand-green text-sm font-bold text-white">
                2
              </div>

              <h3 className="mt-4 text-xl font-semibold text-ink">
                От 100 шт.
              </h3>

              <p className="mt-2 text-muted">
                Более выгодные цены. Стоимость рассчитывается индивидуально
              </p>
            </div>

            <div className="relative">
              <div className="relative z-10 flex size-10 items-center justify-center rounded-full bg-brand-green text-sm font-bold text-white">
                3
              </div>

              <h3 className="mt-4 text-xl font-semibold text-ink">
                От 1000 шт.
              </h3>

              <p className="mt-2 text-muted">
                Производство коробок по вашему заказу. Срок изготовления — 6–8
                рабочих дней.
              </p>
            </div>

            <div className="relative">
              <div className="relative z-10 flex size-10 items-center justify-center rounded-full bg-brand-red text-sm font-bold text-white">
                ★
              </div>

              <h3 className="mt-4 text-xl font-semibold text-ink">
                От 5000 шт.
              </h3>

              <p className="mt-2 text-muted">
                Максимальные скидки и индивидуальные условия сотрудничества.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <article className="flex flex-col rounded-2xl border border-border bg-surface p-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-ink">
            Мелкий и средний опт
          </h2>

          <div className="mt-6 grid flex-1 gap-5">
            <div className="flex flex-col rounded-xl bg-surface-muted p-5">
              <h3 className="font-semibold text-ink">От 30 штук</h3>

              <p className="mt-2 flex-1 text-muted">
                Отличный вариант для начинающих продавцов и небольших магазинов.
              </p>
            </div>

            <div className="flex flex-col rounded-xl bg-surface-muted p-5">
              <h3 className="font-semibold text-ink">От 100 штук</h3>

              <p className="mt-2 flex-1 text-muted">
                Более выгодные оптовые цены. Стоимость автоматически
                пересчитывается после добавления нужного количества товара в
                корзину.
              </p>
            </div>
          </div>
        </article>

        <article className="flex flex-col rounded-2xl border border-border bg-surface p-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-ink">Крупный опт</h2>

          <div className="mt-6 grid flex-1 gap-5">
            <div className="flex flex-col rounded-xl bg-brand-green/10 p-5">
              <h3 className="font-bold text-brand-green">От 1000 штук</h3>

              <p className="mt-2 flex-1 text-muted">
                Производство коробок собственного изготовления. Срок выполнения
                заказа — <strong>6–8 рабочих дней</strong>.
              </p>
            </div>

            <div className="flex flex-col rounded-xl bg-brand-green/10 p-5">
              <h3 className="font-bold text-brand-green">От 5000 штук</h3>

              <p className="mt-2 flex-1 text-muted">
                Мы предоставляем самые выгодные условия сотрудничества. Для
                расчета стоимости свяжитесь с нами по телефону.
              </p>

              <Link
                href="tel:+79034888357"
                className="mt-4 font-semibold text-brand-green hover:underline"
              >
                +7 (903) 488-83-57
              </Link>
            </div>
          </div>
        </article>
      </section>

      <section className="rounded-2xl border border-border bg-surface p-8 shadow-sm">
        <h2 className="text-2xl font-semibold text-ink">
          Дополнительная скидка
        </h2>

        <div className="mt-5 rounded-xl bg-brand-green/10 p-6">
          <p className="text-lg font-semibold text-brand-green">
            При заказе от 60 000 ₽
          </p>

          <p className="mt-3 text-muted">
            На все товары действуют самые низкие цены независимо от количества
            каждой позиции.
          </p>

          <p className="mt-3 text-muted">
            Цена автоматически в корзине не пересчитывается. Для получения
            актуального счета свяжитесь с нами.
          </p>
        </div>
      </section>

      <section className="rounded-2xl border border-border bg-surface p-8 shadow-sm">
        <h2 className="text-2xl font-semibold text-ink">
          Индивидуальное производство
        </h2>

        <p className="mt-5 leading-8 text-muted">
          Мы можем изготовить коробки по вашим индивидуальным размерам при
          заказе <strong>от 1000 штук</strong>.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="rounded-xl bg-surface-muted p-5">
            <p className="text-lg font-semibold text-ink">От 1000 шт.</p>

            <p className="mt-2 text-muted">Минимальный тираж.</p>
          </div>

          <div className="rounded-xl bg-surface-muted p-5">
            <p className="text-lg font-semibold text-ink">14 дней</p>

            <p className="mt-2 text-muted">Срок изготовления.</p>
          </div>

          <div className="rounded-xl bg-surface-muted p-5">
            <p className="text-lg font-semibold text-ink">
              Штанцформа за наш счет
            </p>

            <p className="mt-2 text-muted">
              Мы полностью берем на себя расходы на изготовление штанцформы
              стоимостью от 8 000 до 22 000 ₽.
            </p>
          </div>
        </div>
      </section>

      <section className="rounded-3xl bg-brand-green/50 px-8 py-10 text-center text-white">
        <h2 className="text-3xl font-semibold">Остались вопросы?</h2>

        <p className="mx-auto mt-4 max-w-2xl text-white/90">
          Наши специалисты помогут подобрать упаковку, рассчитают стоимость
          крупного заказа и ответят на любые вопросы.
        </p>

        <Link
          href="tel:+79034888357"
          className="mt-8 inline-flex rounded-xl bg-black/50 px-8 py-3 font-semibold text-brand-green transition hover:bg-black/100"
        >
          Позвонить: +7 (903) 488-83-57
        </Link>
      </section>
    </div>
  );
}
