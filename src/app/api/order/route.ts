import { NextResponse } from 'next/server';
import { sendOrderEmail } from '@/lib/mail';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    await sendOrderEmail(body);

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
      },
      {
        status: 500,
      },
    );
  }
}