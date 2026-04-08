import { MetadataRoute } from 'next';
import { i18n } from '@/i18n.config';
import { prisma } from '@/lib/prisma';

export default async function sitemap(): MetadataRoute.Sitemap {
  const services = await prisma.service.findMany();
  const hospitals = await prisma.hospital.findMany();

  const sitemapEntries: MetadataRoute.Sitemap = [];

  // Homepage for each language
  i18n.locales.forEach((locale) => {
    sitemapEntries.push({
      url: `https://yourdomain.com/${locale === 'en' ? '' : locale}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    });
  });

  // Services for each language
  services.forEach((service) => {
    i18n.locales.forEach((locale) => {
      sitemapEntries.push({
        url: `https://yourdomain.com/${locale === 'en' ? '' : locale}/services/${service.id}`,
        lastModified: service.updatedAt,
        changeFrequency: 'monthly',
        priority: 0.8,
      });
    });
  });

  // Hospitals for each language
  hospitals.forEach((hospital) => {
    i18n.locales.forEach((locale) => {
      sitemapEntries.push({
        url: `https://yourdomain.com/${locale === 'en' ? '' : locale}/hospitals/${hospital.id}`,
        lastModified: hospital.updatedAt,
        changeFrequency: 'monthly',
        priority: 0.8,
      });
    });
  });

  return sitemapEntries;
}