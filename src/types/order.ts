export type OrderPayload = {
  product: {
    id: string;
    title: string;
    price: number;
  };

  customer: {
    name: string;
    phone: string;
    email?: string;
  };

  order: {
    quantity: number;
    comment: string;
    contactMethod: 'whatsapp' | 'email' | 'max';
  };
};

export type CustomBoxData = {
  length: string;
  width: string;
  height: string;
  cover: 'hinged' | 'separate' | 'window' | '';
};