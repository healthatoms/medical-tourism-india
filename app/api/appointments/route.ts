import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(request: Request) {
  try {
    const { patientId, doctorId, serviceId, hospitalId, appointmentDate } = await request.json();

    // Get service details for cost
    const service = await prisma.service.findUnique({
      where: { id: serviceId },
    });

    if (!service) {
      return NextResponse.json(
        { error: 'Service not found' },
        { status: 404 }
      );
    }

    // Create Stripe payment intent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(service.estimatedCost * 100),
      currency: 'usd',
      metadata: {
        patientId: patientId.toString(),
        serviceId: serviceId.toString(),
      },
    });

    // Create appointment
    const appointment = await prisma.appointment.create({
      data: {
        patientId,
        doctorId,
        serviceId,
        hospitalId,
        appointmentDate: new Date(appointmentDate),
        estimatedCost: service.estimatedCost,
        paymentId: paymentIntent.id,
        status: 'pending',
      },
      include: {
        patient: true,
        doctor: true,
        service: true,
        hospital: true,
      },
    });

    return NextResponse.json({
      appointment,
      clientSecret: paymentIntent.client_secret,
    }, { status: 201 });
  } catch (error) {
    console.error('Error creating appointment:', error);
    return NextResponse.json(
      { error: 'Failed to create appointment' },
      { status: 500 }
    );
  }
}