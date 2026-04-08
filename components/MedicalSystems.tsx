'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import Image from 'next/image';

const systems = [
  {
    id: 'allopathy',
    icon: '🏥',
    features: ['Modern Technology', 'Board Certified', 'Advanced Surgery'],
  },
  {
    id: 'ayurveda',
    icon: '🌿',
    features: ['Natural Remedies', 'Holistic Care', 'Ancient Wisdom'],
  },
  {
    id: 'homeopathy',
    icon: '💊',
    features: ['Safe Treatment', 'No Side Effects', 'Personalized Care'],
  },
  {
    id: 'unani',
    icon: '🧴',
    features: ['Traditional Methods', 'Herbal Medicine', 'Time-Tested'],
  },
  {
    id: 'siddha',
    icon: '🌱',
    features: ['Ancient Science', 'Mineral Therapy', 'Balance & Harmony'],
  },
];

export default function MedicalSystems() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Multiple Systems of Medicine</h2>
          <p className="text-xl text-gray-600">
            Choose from world-renowned medical systems for your treatment
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {systems.map((system) => (
            <Link key={system.id} href={`/${locale}/services?system=${system.id}`}>
              <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
                <div className="text-5xl mb-4">{system.icon}</div>
                <h3 className="text-xl font-bold mb-4 capitalize">
                  {t(`medical_systems.${system.id}`)}
                </h3>
                <ul className="space-y-2">
                  {system.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-gray-600">
                      <span className="text-blue-600 mt-1">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}