'use client';

import { FormEvent, useState } from 'react';
import { useTranslations } from 'next-intl';

export default function AddTestimonialPage() {
  const t = useTranslations();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      patientName: formData.get('patientName'),
      country: formData.get('country'),
      title: formData.get('title'),
      description: formData.get('description'),
      videoUrl: formData.get('videoUrl'),
      procedure: formData.get('procedure'),
      rating: parseInt(formData.get('rating') as string),
    };

    try {
      const res = await fetch('/api/testimonials/videos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setMessage('Video testimonial added successfully!');
        e.currentTarget.reset();
      } else {
        setMessage('Failed to add testimonial');
      }
    } catch (error) {
      setMessage('Error: ' + (error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Add Video Testimonial</h1>

      {message && (
        <div className="mb-4 p-4 bg-blue-100 text-blue-700 rounded">
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="max-w-2xl bg-white p-6 rounded-lg shadow">
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">Patient Name</label>
          <input
            type="text"
            name="patientName"
            required
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">Country</label>
          <input
            type="text"
            name="country"
            required
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">Title</label>
          <input
            type="text"
            name="title"
            placeholder="e.g., Heart Surgery Success"
            required
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">YouTube Video URL</label>
          <input
            type="url"
            name="videoUrl"
            placeholder="https://www.youtube.com/watch?v=..."
            required
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">Procedure</label>
          <select name="procedure" required className="w-full px-4 py-2 border rounded-lg">
            <option>Heart Surgery</option>
            <option>Joint Replacement</option>
            <option>Cancer Treatment</option>
            <option>Dental Implants</option>
            <option>Ayurveda Treatment</option>
            <option>Other</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">Rating (1-5)</label>
          <input
            type="number"
            name="rating"
            min="1"
            max="5"
            required
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">Description</label>
          <textarea
            name="description"
            rows={4}
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 disabled:bg-gray-400"
        >
          {loading ? 'Submitting...' : 'Add Testimonial'}
        </button>
      </form>
    </div>
  );
}