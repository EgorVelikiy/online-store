'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import {
  orderSchema,
  type OrderFormData,
} from '@/components/shared/schemas/orderSchema';
import { ProductType } from '@/types/product';
import { CustomBoxData } from '@/types/order';

type OrderFormProps = {
  product: ProductType;
  onSubmit: (data: OrderFormData) => void;
  customBox?: CustomBoxData;
};

export function OrderForm({
  product,
  onSubmit,
  customBox,
}: OrderFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<OrderFormData>({
    resolver: zodResolver(orderSchema),
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      quantity: 1,
      comment: '',
      contactMethod: 'email',
      customBox,
    },
  });

  const submitHandler = async (data: OrderFormData) => {
    await onSubmit(data);

    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="mt-6 space-y-4"
    >
      <div>
        <h2 className="text-2xl font-semibold">
          Оформление заказа
        </h2>

        <p className="mt-2 text-muted">
          {product.title}
        </p>

        {customBox && (
          <div className="mt-4 rounded-xl bg-surface-muted p-4 text-sm">
            <p>
              <strong>Размер:</strong>{' '}
              {customBox.length} × {customBox.width} × {customBox.height} мм
            </p>

            <p className="mt-2">
              <strong>Крышка:</strong>{' '}
              {customBox.cover === 'hinged' && 'Откидная'}
              {customBox.cover === 'separate' && 'Отдельная'}
              {customBox.cover === 'window' && 'С окном'}
            </p>
          </div>
        )}
      </div>

      <div className="grid gap-4">
        <label className="flex flex-col gap-1">
          <span className="font-medium">Имя</span>

          <input
            type="text"
            placeholder="Ваше имя"
            {...register('name')}
            className="rounded-xl border border-border px-4 py-3 outline-none transition focus:border-brand-red"
          />

          {errors.name && (
            <span className="text-sm text-brand-red">
              {errors.name.message}
            </span>
          )}
        </label>

        <label className="flex flex-col gap-1">
          <span className="font-medium">Телефон *</span>

          <input
            type="tel"
            placeholder="+7 (999) 999-99-99"
            {...register('phone')}
            className="rounded-xl border border-border px-4 py-3 outline-none transition focus:border-brand-red"
          />

          {errors.phone && (
            <span className="text-sm text-brand-red">
              {errors.phone.message}
            </span>
          )}
        </label>

        <label className="flex flex-col gap-1">
          <span className="font-medium">Почта</span>

          <input
            type="email"
            placeholder="example@mail.ru"
            {...register('email')}
            className="rounded-xl border border-border px-4 py-3 outline-none transition focus:border-brand-red"
          />

          {errors.email && (
            <span className="text-sm text-brand-red">
              {errors.email.message}
            </span>
          )}
        </label>

        <label className="flex flex-col gap-1">
          <span className="font-medium">Количество</span>

          <input
            type="number"
            min={1}
            {...register('quantity', {
              valueAsNumber: true,
            })}
            className="rounded-xl border border-border px-4 py-3 outline-none transition focus:border-brand-red"
          />

          {errors.quantity && (
            <span className="text-sm text-brand-red">
              {errors.quantity.message}
            </span>
          )}
        </label>

        <label className="flex flex-col gap-1">
          <span className="font-medium">Комментарий</span>

          <textarea
            rows={4}
            placeholder="Дополнительная информация..."
            {...register('comment')}
            className="resize-none rounded-xl border border-border px-4 py-3 outline-none transition focus:border-brand-red"
          />
        </label>
      </div>

      <fieldset className="space-y-2">
        <legend className="mb-3 font-semibold">
          Как с вами связаться?
        </legend>

        <label className="flex items-center gap-3">
          <input
            type="radio"
            value="whatsapp"
            {...register('contactMethod')}
          />

          WhatsApp
        </label>

        <label className="flex items-center gap-3">
          <input
            type="radio"
            value="email"
            {...register('contactMethod')}
          />

          Почта
        </label>

        <label className="flex items-center gap-3">
          <input
            type="radio"
            value="max"
            {...register('contactMethod')}
          />
          MAX
        </label>
      </fieldset>

      <button
        type="submit"
        disabled={isSubmitting}
        className="
        h-12
        w-full
        rounded-xl
        bg-brand-red
        font-semibold
        text-white
        transition
        hover:opacity-90
        disabled:cursor-not-allowed
        disabled:opacity-50
      "
      >
        {isSubmitting
          ? 'Отправляем...'
          : 'Отправить заявку'}
      </button>
    </form>
  );
}