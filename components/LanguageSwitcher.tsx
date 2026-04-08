'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import { i18n, languageNames, languagesByRegion, type Locale } from '@/i18n.config';

export default function LanguageSwitcher() {
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = (newLocale: string) => {
    const newPathname = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPathname);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 flex items-center gap-2"
      >
        <span>🌐</span>
        <span className="hidden sm:inline">{languageNames[locale]}</span>
        <span className="sm:hidden">{locale.toUpperCase()}</span>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto w-64">
          {Object.entries(languagesByRegion).map(([region, languages]) => (
            <div key={region}>
              <div className="px-4 py-2 bg-gray-100 font-semibold text-sm text-gray-700 sticky top-0">
                {region}
              </div>
              {languages.map((lang) => (
                <button
                  key={lang}
                  onClick={() => handleLanguageChange(lang)}
                  className={`w-full text-left px-4 py-2 hover:bg-blue-50 ${
                    locale === lang ? 'bg-blue-100 font-semibold' : ''
                  }`}
                >
                  {languageNames[lang as Locale]}
                </button>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}