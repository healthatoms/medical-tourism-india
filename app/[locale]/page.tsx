import { Metadata } from 'next';
import Hero from '@/components/Hero';
import MedicalSystems from '@/components/MedicalSystems';
import FeaturedServices from '@/components/FeaturedServices';
import WhyChooseUs from '@/components/WhyChooseUs';
import VideoTestimonialsSection from '@/components/VideoTestimonialsSection';
import CountriesWeServe from '@/components/CountriesWeServe';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Medical Tourism India | World-Class Healthcare',
  description: 'Affordable medical treatments with expert doctors and modern facilities. Surgery, cancer care, dental implants, and more.',
};

export default function Home() {
  return (
    <main>
      <Hero />
      <MedicalSystems />
      <FeaturedServices />
      <WhyChooseUs />
      <VideoTestimonialsSection />
      <CountriesWeServe />
      <CTASection />
    </main>
  );
}