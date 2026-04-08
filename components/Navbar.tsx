import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
  const t = useTranslations('nav');
  const locale = useLocale();

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-40">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href={`/${locale}`} className="text-2xl font-bold text-blue-600">
            🏥 MedicalTourism
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <Link href={`/${locale}`} className="hover:text-blue-600">
              {t('home')}
            </Link>
            <Link href={`/${locale}/services`} className="hover:text-blue-600">
              {t('services')}
            </Link>
            <Link href={`/${locale}/hospitals`} className="hover:text-blue-600">
              {t('hospitals')}
            </Link>
            <Link href={`/${locale}/doctors`} className="hover:text-blue-600">
              {t('doctors')}
            </Link>
            <Link href={`/${locale}/testimonials`} className="hover:text-blue-600">
              {t('testimonials')}
            </Link>
            <Link href={`/${locale}/contact`} className="hover:text-blue-600">
              {t('contact')}
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 hidden md:block">
              {t('bookConsultation')}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}