import type { Metadata } from 'next';
import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { i18n, type Locale } from '@/i18n.config';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import '@/app/globals.css';

export const metadata: Metadata = {
  title: 'Medical Tourism India | World-Class Healthcare',
  description: 'Affordable medical treatments with expert doctors and modern facilities',
};

async function getTranslations(locale: Locale) {
  try {
    return (await getRequestConfig()).messages;
  } catch (error) {
    notFound();
  }
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }));
}

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: Locale };
}) {
  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={`https://yourdomain.com/${locale}`} />
      </head>
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}