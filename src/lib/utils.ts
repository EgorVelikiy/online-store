import { OrderPayload } from '@/types/order';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getAssetPath(path: string) {
    const basePath = process.env.NODE_ENV === 'production'
        ? '/online-store'
        : '';

    return `${basePath}${path}`;
}

export const sendOrder = async (payload: OrderPayload) => {
  return fetch('/api/order', {
    method: 'POST',

    headers: {
      'Content-Type': 'application/json',
    },

    body: JSON.stringify(payload),
  });
};