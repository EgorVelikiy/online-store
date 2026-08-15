'use client';

import { OrderForm } from '@/components/forms/OrderForm/OrderForm';
import { OrderFormData } from '@/components/shared/schemas/orderSchema';
import { ProductType } from '@/types/product';
import { Modal } from './OrderModal';
import { openWhatsApp } from '@/lib/whatsApp';
import { CustomBoxData } from '@/types/order';
import { sendOrder } from '@/lib/utils';

type OrderModalProps = {
  open: boolean;
  onClose: () => void;
  product: ProductType;
  customBox?: CustomBoxData
};

export function OrderModal({
  open,
  onClose,
  product,
  customBox,
}: OrderModalProps) {

  const handleOrder = async (data: OrderFormData) => {
    const payload = {
      product: {
        id: product.id,
        title: product.title,
        price: product.price,
      },

      customer: {
        name: data.name,
        phone: data.phone,
        email: data.email,
      },

      order: {
        quantity: data.quantity,
        comment: data.comment,
        contactMethod: data.contactMethod,

        customBox: data.customBox,
      },
    };

    switch (data.contactMethod) {
      case 'max':
      case 'email': {
        const response = await sendOrder(payload)

        if (!response.ok) {
          throw new Error('Ошибка отправки заявки');
        }

        break;
      }

      case 'whatsapp':
        openWhatsApp(payload);
        break;
    }

    onClose();
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
    >
      <OrderForm
        product={product}
        onSubmit={handleOrder}
        customBox={customBox}
      />
    </Modal>
  );
}
