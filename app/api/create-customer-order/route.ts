import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-11-17.clover',
});

export async function POST(request: NextRequest) {
  try {
    const { 
      company, 
      contact, 
      shipping, 
      order,
      paymentIntentId 
    } = await request.json();

    if (!company?.name || !contact?.email) {
      return NextResponse.json(
        { error: 'Données entreprise ou contact manquantes' },
        { status: 400 }
      );
    }

    const customer = await stripe.customers.create({
      name: company.name,
      email: contact.email,
      phone: contact.phone || undefined,
      metadata: {
        contactName: contact.fullName,
        position: contact.position || '',
        companyAddress: `${company.address}, ${company.postalCode} ${company.city}`,
      },
      address: {
        line1: company.address,
        line2: company.addressComplement || undefined,
        postal_code: company.postalCode,
        city: company.city,
        country: 'FR',
      },
      shipping: shipping ? {
        address: {
          line1: shipping.address,
          line2: shipping.complement || undefined,
          postal_code: shipping.postalCode,
          city: shipping.city,
          country: 'FR',
        },
        name: contact.fullName,
        phone: contact.phone,
      } : undefined,
    });

    if (paymentIntentId) {
      await stripe.paymentIntents.update(paymentIntentId, {
        customer: customer.id,
      });
    }

    const orderData = {
      customerId: customer.id,
      company,
      contact,
      order,
      status: 'pending_payment',
      createdAt: new Date().toISOString(),
    };

    return NextResponse.json({
      success: true,
      customerId: customer.id,
      order: orderData
    });
  } catch (error) {
    console.error('Erreur création customer:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la création du client' },
      { status: 500 }
    );
  }
}