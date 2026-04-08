'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function Footer() {
  const locale = useLocale();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">Medical Tourism India</h3>
            <p className="text-gray-400">
              Connecting patients worldwide to affordable, world-class healthcare in India.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href={`/${locale}/services`} className="hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/hospitals`} className="hover:text-white">
                  Hospitals
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/doctors`} className="hover:text-white">
                  Doctors
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/contact`} className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-gray-400">
              <li>📞 +91 XXXX-XXXX-XXX</li>
              <li>📧 info@medicaltourism.com</li>
              <li>📍 India</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white text-2xl">
                f
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-2xl">
                𝕏
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-2xl">
                📷
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-2xl">
                in
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="grid md:grid-cols-2 gap-4">
            <p className="text-gray-400">
              © {currentYear} Medical Tourism India. All rights reserved.
            </p>
            <div className="flex gap-6 text-gray-400 md:justify-end">
              <Link href="#" className="hover:text-white">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-white">
                Terms & Conditions
              </Link>
              <Link href="#" className="hover:text-white">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}