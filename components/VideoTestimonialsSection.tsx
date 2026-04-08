'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface VideoTestimonial {
  id: number;
  patientName: string;
  country: string;
  title: string;
  videoUrl: string;
  procedure: string;
  rating: number;
  featured: boolean;
}

export default function VideoTestimonialsSection() {
  const [testimonials, setTestimonials] = useState<VideoTestimonial[]>([]);
  const [selectedVideo, setSelectedVideo] = useState<VideoTestimonial | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await fetch('/api/testimonials/videos?featured=true&limit=8');
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

  const extractYoutubeId = (url: string): string => {
    const regex = /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/;
    const match = url.match(regex);
    return match ? match[1] : '';
  };

  if (loading) return <div className="py-20 text-center">Loading testimonials...</div>;

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Patient Success Stories</h2>
          <p className="text-xl text-gray-600">
            Real patients sharing their healing journeys
          </p>
        </div>

        {selectedVideo && (
          <div className="mb-12 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden shadow-2xl">
            <div className="grid md:grid-cols-3 gap-8 p-8">
              {/* Video */}
              <div className="md:col-span-2">
                <div className="relative h-96 bg-black rounded-lg overflow-hidden">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${extractYoutubeId(selectedVideo.videoUrl)}`}
                    title={selectedVideo.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-lg"
                  />
                </div>
              </div>

              {/* Details */}
              <div className="flex flex-col justify-center text-white">
                <h3 className="text-2xl font-bold mb-2">{selectedVideo.title}</h3>
                <p className="text-blue-200 mb-4">
                  {selectedVideo.patientName} from {selectedVideo.country}
                </p>
                <p className="text-gray-300 mb-4">
                  <strong>Procedure:</strong> {selectedVideo.procedure}
                </p>

                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`text-2xl ${
                        i < selectedVideo.rating ? 'text-yellow-400' : 'text-gray-500'
                      }`}
                    >
                      ⭐
                    </span>
                  ))}
                </div>

                <p className="text-gray-400 text-sm">
                  👁️ Watched by {selectedVideo.patientName}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Thumbnail Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {testimonials.map((testimonial) => (
            <button
              key={testimonial.id}
              onClick={() => setSelectedVideo(testimonial)}
              className={`rounded-lg overflow-hidden transition-all transform hover:scale-105 ${
                selectedVideo?.id === testimonial.id ? 'ring-4 ring-blue-600 scale-105' : ''
              }`}
            >
              <div className="relative h-32 bg-gray-300 group cursor-pointer">
                <Image
                  src={`https://img.youtube.com/vi/${extractYoutubeId(testimonial.videoUrl)}/default.jpg`}
                  alt={testimonial.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition flex items-center justify-center">
                  <div className="text-white text-2xl">▶</div>
                </div>
              </div>
              <div className="p-2 bg-white">
                <p className="text-xs font-semibold line-clamp-1">
                  {testimonial.patientName}
                </p>
                <p className="text-xs text-gray-500">{testimonial.country}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}