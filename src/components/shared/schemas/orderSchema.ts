import { z } from 'zod';

export const orderSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, 'Введите имя'),

  phone: z
    .string()
    .trim()
    .min(10, 'Введите номер телефона'),

  email: z
    .string()
    .trim()
    .email('Некорректный email')
    .optional()
    .or(z.literal('')),

  quantity: z
    .number()
    .min(1, 'Минимум 1 товар'),

  comment: z.string(),

  contactMethod: z.enum([
    'whatsapp',
    'email',
    'max',
  ]),

  customBox: z.object({
    length: z.string(),
    width: z.string(),
    height: z.string(),
    cover: z.string(),
  })
    .optional(),
});

export type OrderFormData = z.infer<typeof orderSchema>;