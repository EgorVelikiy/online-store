import { getAssetPath } from '@/lib/utils';
import Image from 'next/image';

export default function DeliveryPage() {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 py-10 sm:px-6 lg:px-8">
      <div>
        <h1 className="font-display text-4xl font-bold text-ink">
          Доставка и оплата
        </h1>

        <p className="mt-3 max-w-3xl text-muted">
          Мы отправляем заказы по всей России и доставляем товары по
          Ростову-на-Дону. Ниже вы найдете всю необходимую информацию об оплате,
          доставке и самовывозе.
        </p>
      </div>

      <div className="rounded-2xl border border-amber-300 bg-amber-50 p-6">
        <p className="text-lg font-semibold text-amber-900">
          Минимальная сумма заказа — 2 000 ₽
        </p>

        <p className="mt-2 text-amber-800">
          Все заказы по России и Ростову-на-Дону отправляются после 100%
          предоплаты.
        </p>
      </div>

      <div className="flex justify-center">
        <Image
          src={getAssetPath("/main/delivery.jpg")}
          alt="Доставка"
          width={800}
          height={400}
          className="rounded-2xl object-cover"
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <section className="rounded-2xl border border-border bg-surface p-6 shadow-sm">
          <h2 className="mb-5 text-2xl font-semibold text-ink">
            Оплата для физических лиц
          </h2>

          <ul className="space-y-4 text-muted">
            <li className="rounded-xl bg-surface-muted p-4">
              <p className="font-medium text-ink">Robokassa</p>

              <p className="mt-1">
                Банковские карты, Apple Pay, Samsung Pay, Google Pay, Яндекс Pay
                и другие способы оплаты.
              </p>
            </li>

            <li className="rounded-xl bg-surface-muted p-4">
              <p className="font-medium text-ink">Сбербанк</p>

              <p className="mt-1">
                Банковские карты, SberPay, Apple Pay, Google Pay, оплата
                бонусами «Спасибо».
              </p>
            </li>
          </ul>
        </section>

        <section className="rounded-2xl border border-border bg-surface p-6 shadow-sm">
          <h2 className="mb-5 text-2xl font-semibold text-ink">
            Оплата для юридических лиц
          </h2>

          <div className="rounded-xl bg-surface-muted p-4">
            <p className="font-medium text-ink">Безналичный расчет</p>

            <p className="mt-2 text-muted">
              После оформления заказа счет автоматически отправляется на
              указанный адрес электронной почты.
            </p>
          </div>
        </section>

        <section className="rounded-2xl border border-border bg-surface p-6 shadow-sm">
          <h2 className="mb-5 text-2xl font-semibold text-ink">
            Доставка по России
          </h2>

          <ul className="space-y-3 text-muted">
            <li>• Почта России</li>
            <li>• СДЭК</li>
            <li>• ПЭК</li>
          </ul>

          <p className="mt-5">
            Стоимость доставки рассчитывается автоматически при оформлении
            заказа и оплачивается сразу вместе с заказом. Благодаря этому при
            получении вам не потребуется ничего доплачивать.
          </p>
        </section>

        <section className="rounded-2xl border border-border bg-surface p-6 shadow-sm">
          <h2 className="mb-5 text-2xl font-semibold text-ink">
            Доставка по Ростову-на-Дону
          </h2>

          <div className="space-y-4">
            <div className="flex items-center justify-between rounded-xl bg-surface-muted p-4">
              <span>Стоимость доставки</span>
              <span className="font-semibold">500 ₽</span>
            </div>

            <div className="flex items-center justify-between rounded-xl bg-brand-green/10 p-4">
              <span>При заказе от 8 000 ₽</span>
              <span className="font-semibold text-brand-green">Бесплатно</span>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-border bg-surface p-6 shadow-sm">
          <h2 className="mb-5 text-2xl font-semibold text-ink">Самовывоз</h2>

          <p className="text-muted">
            Вы можете самостоятельно забрать заказ по адресу:
          </p>

          <p className="mt-3 text-lg font-semibold text-ink">
            г. Ростов-на-Дону,
            <br />
            ул. Геологическая, 5
          </p>

          <div className="mt-5 rounded-xl bg-surface-muted p-4">
            <p className="font-medium text-ink">Срок сборки заказа</p>

            <p className="mt-1 text-muted">5–6 рабочих дней.</p>
          </div>
        </section>

        <section className="rounded-2xl border border-border bg-surface p-6 shadow-sm">
          <h2 className="mb-5 text-2xl font-semibold text-ink">Важно</h2>

          <div className="space-y-4 text-muted">
            <p>
              Пожалуйста, внимательно проверяйте ФИО получателя и адрес доставки
              при оформлении заказа.
            </p>

            <p>
              Если данные будут указаны некорректно или не полностью, обработка
              заказа может занять больше времени до уточнения информации.
            </p>

            <div className="rounded-xl bg-brand-green/10 p-4">
              <p className="font-medium text-brand-green">Конфиденциальность</p>

              <p className="mt-2">
                Все заказы надежно упаковываются без опознавательных знаков.
                Получатель увидит отправителя в лице одного из наших
                сотрудников.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
