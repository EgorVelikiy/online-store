import { OrderPayload } from '@/types/order';

export function createMaxMessage(
  payload: OrderPayload
) {
  return `
Здравствуйте!

Хочу оформить заказ.

Товар: ${payload.product.title}
Количество: ${payload.order.quantity}
Цена: ${payload.product.price}

Имя: ${payload.customer.name}
Телефон: ${payload.customer.phone}
Email: ${payload.customer.email || '-'}

Комментарий:
${payload.order.comment || '-'}
`.trim();
}

export function openMax(
  payload: OrderPayload
) {
  const message = createMaxMessage(payload);

  const url = `https://max.ru/:share?text=${encodeURIComponent(message)}`;

  window.open(url, '_blank');
}