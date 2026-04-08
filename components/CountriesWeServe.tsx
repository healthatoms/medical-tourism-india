'use client';

const countries = [
  {
    flag: '🇬🇧',
    name: 'United Kingdom',
    patients: '500+',
    popular: 'Joint Replacement',
  },
  { flag: '🇺🇸', name: 'United States', patients: '800+', popular: 'Cardiac Surgery' },
  { flag: '🇨🇦', name: 'Canada', patients: '400+', popular: 'Dentistry' },
  { flag: '🇦🇺', name: 'Australia', patients: '600+', popular: 'Orthopedics' },
  { flag: '🇿🇦', name: 'South Africa', patients: '700+', popular: 'Cancer Care' },
  { flag: '🇳🇬', name: 'Nigeria', patients: '550+', popular: 'Surgery' },
  { flag: '🇰🇪', name: 'Kenya', patients: '450+', popular: 'Cardiology' },
  { flag: '🇪🇹', name: 'Ethiopia', patients: '300+', popular: 'Ayurveda' },
  { flag: '🇸🇦', name: 'Saudi Arabia', patients: '900+', popular: 'All Services' },
  { flag: '🇦🇪', name: 'UAE', patients: '1000+', popular: 'Premium Care' },
];

export default function CountriesWeServe() {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Serving 40+ Countries Worldwide</h2>
          <p className="text-xl text-gray-600">
            Patients from around the globe trust us for affordable healthcare
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {countries.map((country, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition text-center"
            >
              <div className="text-4xl mb-3">{country.flag}</div>
              <h3 className="font-bold text-lg mb-2">{country.name}</h3>
              <p className="text-blue-600 font-semibold mb-2">{country.patients} Patients</p>
              <p className="text-sm text-gray-600">
                Popular: <span className="font-semibold">{country.popular}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}