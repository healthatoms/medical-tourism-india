import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const { patientId, doctorId, scheduledDate, consultationType, notes } = await request.json();

    // Validate input
    if (!patientId || !doctorId || !scheduledDate || !consultationType) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Check if slot is available
    const existingConsultation = await prisma.consultation.findFirst({
      where: {
        doctorId,
        scheduledDate: new Date(scheduledDate),
      },
    });

    if (existingConsultation) {
      return NextResponse.json(
        { error: 'Doctor not available at this time' },
        { status: 400 }
      );
    }

    const consultation = await prisma.consultation.create({
      data: {
        patientId,
        doctorId,
        scheduledDate: new Date(scheduledDate),
        consultationType,
        notes,
        status: 'pending',
      },
      include: {
        patient: true,
        doctor: { include: { hospital: true } },
      },
    });

    return NextResponse.json(consultation, { status: 201 });
  } catch (error) {
    console.error('Error creating consultation:', error);
    return NextResponse.json(
      { error: 'Failed to create consultation' },
      { status: 500 }
    );
  }
}