import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Medical Tourism India | Affordable Healthcare Solutions',
  description: 'Access world-class medical treatments in India with expert doctors and modern facilities. Affordable healthcare for patients worldwide.',
  keywords: 'medical tourism India, affordable healthcare, surgery in India, medical treatment abroad',
  openGraph: {
    title: 'Medical Tourism India',
    description: 'World-class medical treatments at affordable costs',
    url: 'https://yourdomain.com',
    siteName: 'Medical Tourism India',
    images: [
      {
        url: 'https://yourdomain.com/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: 'https://yourdomain.com',
    languages: {
      'en-US': 'https://yourdomain.com/en',
      'es': 'https://yourdomain.com/es',
      'fr': 'https://yourdomain.com/fr',
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  );
}