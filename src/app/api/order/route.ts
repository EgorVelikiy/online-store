import { NextResponse } from 'next/server';

import { sendOrderEmail } from '@/lib/mail';
import { sendMaxMessage } from '@/lib/max';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (body.order.contactMethod === 'email') {
      await sendOrderEmail(body);
    }

    if (body.order.contactMethod === 'max') {
      await sendMaxMessage(body);
    }

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        error: String(error),
      },
      {
        status: 500,
      },
    );
  }
}