import { Metadata } from 'next';
import { prisma } from '@/lib/prisma';
import ServiceCard from '@/components/ServiceCard';

export const metadata: Metadata = {
  title: 'Medical Services | Medical Tourism India',
  description: 'Explore our wide range of affordable medical procedures and treatments',
};

export default async function ServicesPage() {
  const services = await prisma.service.findMany({
    include: {
      hospital: true,
    },
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-2">Our Medical Services</h1>
      <p className="text-gray-600 mb-8">
        Affordable, world-class medical treatments with expert doctors
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
}