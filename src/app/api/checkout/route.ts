import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-02-24.acacia",
});

export async function POST(req: NextRequest) {
  const { quantity } = await req.json();

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: "Jason Mouse",
            description: "Hyper-Realistic Face Sculpt Wireless Mouse | Bluetooth 5.3 | USB-C | 16K DPI",
            images: [],
          },
          unit_amount: 8888,
        },
        quantity: Math.min(Math.max(quantity || 1, 1), 69),
      },
    ],
    mode: "payment",
    success_url: `${req.nextUrl.origin}/success`,
    cancel_url: `${req.nextUrl.origin}/`,
  });

  return NextResponse.json({ url: session.url });
}
