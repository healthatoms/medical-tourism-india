'use client';

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: '👨‍⚕️',
      title: 'Expert Doctors',
      description: 'Board-certified specialists with 20+ years experience',
    },
    {
      icon: '🏥',
      title: 'Modern Facilities',
      description: 'State-of-the-art hospitals with latest technology',
    },
    {
      icon: '💰',
      title: '60-70% Savings',
      description: 'Same quality treatment at fraction of Western costs',
    },
    {
      icon: '✈️',
      title: 'Travel Assistance',
      description: 'Complete visa, travel, and accommodation support',
    },
    {
      icon: '🌍',
      title: 'International Care',
      description: 'Multilingual staff, English-speaking doctors',
    },
    {
      icon: '⏱️',
      title: 'Minimal Wait',
      description: 'Quick appointments within 48-72 hours',
    },
  ];

  return (
    <div className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-xl text-gray-600">
            The leading medical tourism platform connecting you to world-class healthcare
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition">
              <div className="text-5xl mb-4">{reason.icon}</div>
              <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}