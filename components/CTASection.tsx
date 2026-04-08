'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function CTASection() {
  const locale = useLocale();

  return (
    <div className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Start Your Health Journey?</h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Get a free consultation from our experts and receive a personalized treatment plan
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={`/${locale}/contact`}
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition inline-block"
          >
            Book Free Consultation
          </Link>
          <Link
            href={`/${locale}/hospitals`}
            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition inline-block"
          >
            Explore Hospitals
          </Link>
        </div>

        <p className="text-blue-100 mt-8">
          💬 Call us: +91 XXXX-XXXX-XXX | ✉️ Email: info@medicaltourism.com
        </p>
      </div>
    </div>
  );
}