import { OrderPayload } from '@/types/order';

const MAX_API_URL = 'https://platform-api2.max.ru';

export async function sendMaxMessage(payload: OrderPayload) {
  console.log('MAX START');
  const token = process.env.MAX_BOT_TOKEN;
  const chatId = process.env.MAX_CHAT_ID;

  if (!token) {
    throw new Error('MAX_BOT_TOKEN is not configured');
  }

  if (!chatId) {
    throw new Error('MAX_CHAT_ID is not configured');
  }

  const text = `
Новая заявка с сайта

Товар:
${payload.product.title}

Количество:
${payload.order.quantity}

Цена:
${payload.product.price}

Клиент:
${payload.customer.name}

Телефон:
${payload.customer.phone}

Email:
${payload.customer.email || '-'}

Способ связи:
${payload.order.contactMethod}

Комментарий:
${payload.order.comment || '-'}
`.trim();

  const response = await fetch(
    `${MAX_API_URL}/messages?chat_id=${chatId}`,
    {
      method: 'POST',

      headers: {
        Authorization: token,
        'Content-Type': 'application/json',
      },

      body: JSON.stringify({
        text,
      }),
    },
  );

  console.log('MAX STATUS:', response.status);

  if (!response.ok) {
    const error = await response.text();

    console.error('MAX API error:', error);

    throw new Error(
      'Не удалось отправить сообщение в MAX',
    );
  }

  return response.json();
}