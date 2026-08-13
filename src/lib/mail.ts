import { OrderPayload } from '@/types/order';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true,

  logger: true,
  debug: true,

  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

export async function sendOrderEmail(payload: OrderPayload) {
  console.log('sendMail start');

  console.log(JSON.stringify(payload, null, 2));

  const info = await transporter.sendMail({
    from: process.env.SMTP_USER,

    to: process.env.COMPANY_EMAIL,

    subject: `Новый заказ: ${payload.product.title}`,

    html: `
      <h2>Новая заявка</h2>

      <hr/>

      <p><b>Товар:</b> ${payload.product.title}</p>

      <p><b>Количество:</b> ${payload.order.quantity}</p>

      <p><b>Цена:</b> ${payload.product.price}</p>

      <hr/>

      <p><b>Имя:</b> ${payload.customer.name}</p>

      <p><b>Телефон:</b> ${payload.customer.phone}</p>

      <p><b>Email:</b> ${payload.customer.email || '-'}</p>

      <p><b>Способ связи:</b> ${payload.order.contactMethod}</p>

      <p><b>Комментарий:</b></p>

      <p>${payload.order.comment || '-'}</p>
    `,
  });

  console.log('sendMail success');
  console.log(info);
}