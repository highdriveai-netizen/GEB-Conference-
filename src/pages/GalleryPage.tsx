import React from 'react';
import { Camera, Image } from 'lucide-react';
import { Gallery } from '../components/Gallery';

export const GalleryPage: React.FC = () => {
  return (
    <div className="py-12 bg-white">
      {/* Banner */}
      <div className="bg-gradient-to-r from-[#044e3b] to-[#0f766e] text-white py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-emerald-200 text-xs font-semibold uppercase tracking-wider">
            <Camera className="w-3.5 h-3.5 text-emerald-300" />
            <span>Photographic Repository</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Conference Photo Archive
          </h1>
          <p className="text-emerald-100 max-w-3xl text-sm sm:text-base leading-relaxed">
            Relive moments from previous biotechnology conferences, explore laboratory facilities, and view scenic landmarks of the University of Chittagong campus.
          </p>
        </div>
      </div>

      <Gallery isPreview={false} />
    </div>
  );
};
