'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

interface VideoTestimonial {
  id: number;
  patientName: string;
  country: string;
  title: string;
  videoUrl: string;
  thumbnailUrl: string;
  procedure: string;
  rating: number;
}

export default function VideoTestimonials() {
  const t = useTranslations();
  const [testimonials, setTestimonials] = useState<VideoTestimonial[]>([]);
  const [selectedVideo, setSelectedVideo] = useState<VideoTestimonial | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await fetch('/api/testimonials/videos?featured=true&limit=6');
        const data = await res.json();
        setTestimonials(data);
        if (data.length > 0) setSelectedVideo(data[0]);
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  if (loading) return <div className="text-center py-8">Loading testimonials...</div>;

  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Patient Success Stories</h2>

        {selectedVideo && (
          <div className="mb-8">
            <div className="bg-black rounded-lg overflow-hidden h-96">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${extractYoutubeId(selectedVideo.videoUrl)}`}
                title={selectedVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="mt-4">
              <h3 className="text-2xl font-bold">{selectedVideo.title}</h3>
              <p className="text-gray-600 mt-2">
                {selectedVideo.patientName} from {selectedVideo.country}
              </p>
              <p className="text-sm text-gray-500">Procedure: {selectedVideo.procedure}</p>
              <div className="mt-2 flex items-center">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={i < selectedVideo.rating ? 'text-yellow-400' : 'text-gray-300'}>
                    ⭐
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Thumbnail Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className={`cursor-pointer rounded-lg overflow-hidden transition-transform hover:scale-105 ${
                selectedVideo?.id === testimonial.id ? 'ring-4 ring-blue-600' : ''
              }`}
              onClick={() => setSelectedVideo(testimonial)}
            >
              <div className="relative h-32 bg-gray-300">
                <Image
                  src={testimonial.thumbnailUrl || `https://img.youtube.com/vi/${extractYoutubeId(testimonial.videoUrl)}/default.jpg`}
                  alt={testimonial.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 hover:bg-opacity-30 transition">
                  <div className="text-white text-3xl">▶</div>
                </div>
              </div>
              <div className="p-2 bg-white">
                <p className="text-xs font-semibold">{testimonial.patientName}</p>
                <p className="text-xs text-gray-500">{testimonial.country}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function extractYoutubeId(url: string): string {
  const regex = /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/;
  const match = url.match(regex);
  return match ? match[1] : '';
}