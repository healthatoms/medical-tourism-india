import { Metadata } from 'next';
import { prisma } from '@/lib/prisma';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Partner Hospitals | Medical Tourism India',
  description: 'Accredited hospitals across India offering world-class healthcare',
};

export default async function HospitalsPage() {
  const hospitals = await prisma.hospital.findMany({
    include: {
      doctors: true,
      services: true,
    },
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Our Partner Hospitals</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {hospitals.map((hospital) => (
          <div key={hospital.id} className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
            {hospital.image && (
              <Image
                src={hospital.image}
                alt={hospital.name}
                width={400}
                height={250}
                className="w-full h-64 object-cover"
              />
            )}
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">{hospital.name}</h2>
              <p className="text-gray-600 mb-4">{hospital.description}</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">{hospital.city}, {hospital.state}</p>
                  <p className="text-sm font-semibold">Rating: {hospital.rating}/5 ⭐</p>
                </div>
                <Link
                  href={`/hospitals/${hospital.id}`}
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}