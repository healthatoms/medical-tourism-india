'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import Image from 'next/image';

export default function Hero() {
  const t = useTranslations('home');
  const locale = useLocale();

  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-4 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              {t('title')}
            </h1>
            <p className="text-xl text-blue-100">
              {t('description')}
            </p>

            <div className="flex gap-4 pt-4">
              <Link
                href={`/${locale}/services`}
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
              >
                Explore Services
              </Link>
              <Link
                href={`/${locale}/contact`}
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition"
              >
                Book Consultation
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-blue-400">
              <div>
                <p className="text-3xl font-bold">500+</p>
                <p className="text-blue-100">Surgeries/Year</p>
              </div>
              <div>
                <p className="text-3xl font-bold">50+</p>
                <p className="text-blue-100">Hospitals</p>
              </div>
              <div>
                <p className="text-3xl font-bold">40+</p>
                <p className="text-blue-100">Countries</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-96 md:h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-3xl transform rotate-3"></div>
            <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
              <Image
                src="/images/hero-hospital.jpg"
                alt="World-class hospital facility"
                width={400}
                height={400}
                className="rounded-2xl object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}