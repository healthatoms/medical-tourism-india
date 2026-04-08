'use client';

import { useEffect, useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import ServiceCard from '@/components/ServiceCard';
import { Locale } from '@/i18n.config';

interface Service {
  id: number;
  name: string;
  description: string;
  category: string;
  image: string;
  estimatedCost: number;
  medicalSystem: { id: number; name: string };
  hospital: { id: number; name: string; city: string };
}

export default function ServicesPage({ params }: { params: { locale: Locale } }) {
  const t = useTranslations();
  const locale = useLocale();
  const [services, setServices] = useState<Service[]>([]);
  const [selectedSystem, setSelectedSystem] = useState<string>('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await fetch('/api/services');
        const data = await res.json();
        setServices(data);
      } catch (error) {
        console.error('Error fetching services:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  const medicalSystems = [...new Set(services.map((s) => s.medicalSystem.name))];
  const filteredServices =
    selectedSystem === 'all'
      ? services
      : services.filter((s) => s.medicalSystem.name === selectedSystem);

  if (loading)
    return <div className="text-center py-12">Loading services...</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-2">{t('services.title')}</h1>
      <p className="text-gray-600 mb-8">
        Comprehensive medical services across multiple healthcare systems
      </p>

      {/* Medical System Filter */}
      <div className="mb-8 flex gap-4 flex-wrap">
        <button
          onClick={() => setSelectedSystem('all')}
          className={`px-4 py-2 rounded-lg font-medium ${
            selectedSystem === 'all'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 hover:bg-gray-300'
          }`}
        >
          All Services
        </button>
        {medicalSystems.map((system) => (
          <button
            key={system}
            onClick={() => setSelectedSystem(system)}
            className={`px-4 py-2 rounded-lg font-medium ${
              selectedSystem === system
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >
            {t(`medical_systems.${system.toLowerCase()}`)}
          </button>
        ))}
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredServices.map((service) => (
          <ServiceCard key={service.id} service={service} locale={locale} />
        ))}
      </div>

      {filteredServices.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          No services found for the selected category.
        </div>
      )}
    </div>
  );
}