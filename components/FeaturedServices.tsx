'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import Image from 'next/image';

interface Service {
  id: number;
  name: string;
  category: string;
  estimatedCost: number;
  estimatedStay: number;
  image: string;
  hospital: { name: string; city: string };
}

export default function FeaturedServices() {
  const locale = useLocale();
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await fetch('/api/services?limit=6');
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

  if (loading) return <div className="py-20 text-center">Loading services...</div>;

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Popular Medical Treatments</h2>
          <p className="text-xl text-gray-600">
            Affordable, world-class procedures with expert surgeons
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link
              key={service.id}
              href={`/${locale}/services/${service.id}`}
              className="group"
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition">
                <div className="relative h-48 bg-gray-200 overflow-hidden">
                  {service.image ? (
                    <Image
                      src={service.image}
                      alt={service.name}
                      fill
                      className="object-cover group-hover:scale-110 transition duration-300"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center text-4xl">
                      🏥
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{service.category}</p>

                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <p className="text-gray-600">Cost</p>
                      <p className="font-bold text-blue-600">
                        ${service.estimatedCost.toLocaleString()}
                      </p>
                    </div>
                    <div className="bg-green-50 p-3 rounded-lg">
                      <p className="text-gray-600">Stay</p>
                      <p className="font-bold text-green-600">
                        {service.estimatedStay} days
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-4">
                    📍 {service.hospital.name}, {service.hospital.city}
                  </p>

                  <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
                    Learn More →
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href={`/${locale}/services`}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 inline-block"
          >
            View All Services →
          </Link>
        </div>
      </div>
    </div>
  );
}