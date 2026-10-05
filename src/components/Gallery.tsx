import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Image, ArrowRight, Eye, Camera } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem } from '../data/conferenceData';
import { GalleryModal } from './GalleryModal';

interface GalleryProps {
  isPreview?: boolean;
}

export const Gallery: React.FC<GalleryProps> = ({ isPreview = false }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalItem, setActiveModalItem] = useState<GalleryItem | null>(null);

  const categories = ['All', 'Conference', 'Presentations', 'Participants', 'Campus'];

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (selectedCategory === 'All') return true;
    return item.category === selectedCategory;
  });

  const displayItems = isPreview ? filteredItems.slice(0, 6) : filteredItems;

  return (
    <section id="gallery" className="py-16 sm:py-20 bg-slate-50/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <div className="text-xs sm:text-sm font-bold text-emerald-800 uppercase tracking-widest mb-2 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-emerald-600 inline-block" />
              <span>Visual Archive &amp; Campus Atmosphere</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Conference Gallery
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600">
              Photographic highlights from the NBC 2023 archive, GEB research laboratories, and University of Chittagong campus.
            </p>
          </div>

          {/* Filter tabs */}
          <div className="flex items-center gap-1 p-1 bg-white rounded-lg border border-slate-200 shadow-2xs overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-emerald-800 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveModalItem(item)}
              className="group relative bg-white rounded-xl overflow-hidden border border-slate-200 shadow-2xs hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                <div className="absolute top-3 left-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-black/60 backdrop-blur-xs text-white border border-white/20">
                    {item.category}
                  </span>
                </div>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-10 h-10 rounded-full bg-emerald-700/90 text-white flex items-center justify-center shadow-lg">
                    <Eye className="w-5 h-5" />
                  </div>
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <h3 className="text-sm font-bold text-white line-clamp-1 group-hover:text-emerald-300 transition-colors">
                    {item.title}
                  </h3>
                </div>
              </div>

              <div className="p-3.5 bg-white border-t border-slate-100 flex-1 flex flex-col justify-between">
                <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                  {item.caption}
                </p>
                <div className="mt-2 text-[11px] font-semibold text-emerald-700 flex items-center gap-1">
                  <span>Enlarge photograph</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View all button if preview */}
        {isPreview && (
          <div className="mt-10 text-center">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-white hover:bg-slate-50 text-slate-700 text-xs sm:text-sm font-semibold rounded-md border border-slate-300 shadow-2xs transition-colors"
            >
              <Camera className="w-4 h-4 text-emerald-700" />
              <span>Browse Complete Photo Archive</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>

      <GalleryModal
        item={activeModalItem}
        items={filteredItems}
        onClose={() => setActiveModalItem(null)}
        onNavigate={(newItem) => setActiveModalItem(newItem)}
      />
    </section>
  );
};
