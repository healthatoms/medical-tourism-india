'use client';

import { useState } from 'react';
import { i18n, languageNames, type Locale } from '@/i18n.config';

export default function TranslationManagerPage() {
  const [selectedLanguage, setSelectedLanguage] = useState<Locale>('en');
  const [key, setKey] = useState('');
  const [value, setValue] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/api/translations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          language: selectedLanguage,
          key,
          value,
        }),
      });

      if (res.ok) {
        setMessage(`✓ Translation saved for ${languageNames[selectedLanguage]}`);
        setKey('');
        setValue('');
      } else {
        setMessage('✗ Failed to save translation');
      }
    } catch (error) {
      setMessage(`✗ Error: ${(error as Error).message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Translation Manager</h1>

      <div className="max-w-2xl bg-white p-6 rounded-lg shadow">
        {message && (
          <div className="mb-4 p-4 bg-blue-100 text-blue-700 rounded">
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold mb-2">Language</label>
            <select
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value as Locale)}
              className="w-full px-4 py-2 border rounded-lg"
            >
              {i18n.locales.map((lang) => (
                <option key={lang} value={lang}>
                  {languageNames[lang as Locale]}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">
              Translation Key (e.g., nav.home, services.title)
            </label>
            <input
              type="text"
              value={key}
              onChange={(e) => setKey(e.target.value)}
              placeholder="e.g., services.cardiology"
              required
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">
              Translation Value
            </label>
            <textarea
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Enter the translation text"
              required
              rows={4}
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 disabled:bg-gray-400"
          >
            {loading ? 'Saving...' : 'Save Translation'}
          </button>
        </form>
      </div>

      {/* Available Languages List */}
      <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {i18n.locales.map((lang) => (
          <div
            key={lang}
            className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border border-blue-200"
          >
            <p className="font-semibold">{languageNames[lang as Locale]}</p>
            <p className="text-xs text-gray-600 mt-2">Code: {lang}</p>
          </div>
        ))}
      </div>
    </div>
  );
}