import { Metadata } from 'next';
import Image from 'next/image';

export async function generateMetadata(
  { params }: { params: { hospitalId: string } }
): Promise<Metadata> {
  const hospital = await fetchHospital(params.hospitalId);
  
  return {
    title: `${hospital.name} | Medical Tourism India`,
    description: hospital.description,
    openGraph: {
      images: [{ url: hospital.image }],
    },
  };
}

async function fetchHospital(id: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/hospitals/${id}`);
  if (!res.ok) throw new Error('Failed to fetch hospital');
  return res.json();
}

export default async function HospitalPage({
  params,
}: {
  params: { hospitalId: string };
}) {
  const hospital = await fetchHospital(params.hospitalId);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">{hospital.name}</h1>
      <Image
        src={hospital.image}
        alt={hospital.name}
        width={800}
        height={400}
        priority
      />
      <p className="text-lg mt-6">{hospital.description}</p>
    </div>
  );
}