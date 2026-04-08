import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const language = searchParams.get('language') || 'en';

    const translations = await prisma.translation.findMany({
      where: { language },
    });

    // Convert to object format
    const translationObj = translations.reduce(
      (acc, t) => {
        acc[t.key] = t.value;
        return acc;
      },
      {} as Record<string, string>
    );

    return NextResponse.json(translationObj);
  } catch (error) {
    console.error('Error fetching translations:', error);
    return NextResponse.json(
      { error: 'Failed to fetch translations' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const { language, key, value } = await request.json();

    const translation = await prisma.translation.upsert({
      where: { language_key: { language, key } },
      update: { value },
      create: { language, key, value },
    });

    return NextResponse.json(translation, { status: 201 });
  } catch (error) {
    console.error('Error creating/updating translation:', error);
    return NextResponse.json(
      { error: 'Failed to save translation' },
      { status: 500 }
    );
  }
}