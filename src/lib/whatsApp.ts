import { OrderPayload } from '@/types/order';

const WHATSAPP_NUMBER =
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER!;

export function openWhatsApp(payload: OrderPayload) {
    const message = `
Здравствуйте!

Хочу заказать товар.

Товар:
${payload.product.title}

Количество:
${payload.order.quantity}

Имя:
${payload.customer.name}

Телефон:
${payload.customer.phone}

Email:
${payload.customer.email || '-'}

Комментарий:
${payload.order.comment || '-'}
`.trim();

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    window.open(url, '_blank', 'noopener,noreferrer');
}