import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

type CreatePaymentIntentRequest = {
  amount: number;
  contactInfo: {
    fullName: string;
    position?: string;
    phone?: string;
    email: string;
  };
};

// type StripeError = {
//   type?: string;
//   code?: string;
//   message: string;
//   statusCode?: number;
// };

export async function POST(request: NextRequest) {
  console.log('📍 /api/create-payment-intent called');

  let stripe: Stripe;

  try {
    // Create a new Stripe instance inside the function scope
    stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
      apiVersion: '2025-11-17.clover',
    });
    console.log(stripe);
    console.log('✅ Stripe initialized successfully inside POST handler');
  } catch (error) {
    console.error('❌ Stripe initialization failed:', error);
    return NextResponse.json(
      { error: 'Erreur d\'initialisation de Stripe' },
      { status: 500 }
    );
  }

  try {
    if (!process.env.STRIPE_SECRET_KEY) {
      console.error('❌ STRIPE_SECRET_KEY is missing');
      return NextResponse.json(
        { error: 'Configuration Stripe manquante' },
        { status: 500 }
      );
    }

    const body = await request.json() as CreatePaymentIntentRequest;
    console.log('📥 Request body received');

    const { amount, contactInfo } = body;

    if (!amount || amount <= 0) {
      console.log('❌ Invalid amount:', amount);
      return NextResponse.json(
        { error: 'Montant invalide' },
        { status: 400 }
      );
    }

    if (!contactInfo?.email || !contactInfo?.fullName) {
      console.log('❌ Invalid contact info:', contactInfo);
      return NextResponse.json(
        { error: 'Informations de contact incomplètes' },
        { status: 400 }
      );
    }

    console.log('💰 Creating payment intent for amount:', amount);

    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100),
      currency: 'eur',
      automatic_payment_methods: {
        enabled: true,
      },
      metadata: {
        contactName: contactInfo.fullName,
        contactEmail: contactInfo.email,
        contactPhone: contactInfo.phone || '',
        position: contactInfo.position || '',
      },
      description: `Commande bipSOS - ${contactInfo.fullName}`,
    });

    console.log('✅ Payment intent created:', paymentIntent.id);

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
      paymentIntentId: paymentIntent.id,
    });

  } catch (error: unknown) {
    console.error('❌ Error in create-payment-intent:', error);
    
    let errorMessage = 'Erreur lors de la création du paiement';
    
    if (error instanceof Error) {
      errorMessage = error.message;
    }

    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}
export async function GET() {
  console.log('🔧 Testing Stripe configuration...');
  
  try {
    if (!process.env.STRIPE_SECRET_KEY) {
      return NextResponse.json(
        { error: 'STRIPE_SECRET_KEY manquante' },
        { status: 500 }
      );
    }

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: '2025-11-17.clover',
    });

    const account = await stripe.accounts.retrieve();
    
    return NextResponse.json({
      message: 'Stripe configuration OK',
      stripe: {
        hasKey: true,
        keyLength: process.env.STRIPE_SECRET_KEY.length,
        accountId: account.id,
        accountType: account.type,
      },
      environment: process.env.NODE_ENV,
    });
  } catch (error: unknown) {
    console.error('❌ Stripe test failed:', error);
    
    let errorDetails = 'Unknown error';
    if (error instanceof Error) {
      errorDetails = error.message;
    }
    
    return NextResponse.json(
      { 
        error: 'Stripe configuration failed',
        details: errorDetails 
      },
      { status: 500 }
    );
  }
}