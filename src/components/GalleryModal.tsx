import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Tag } from 'lucide-react';
import { GalleryItem } from '../data/conferenceData';

interface GalleryModalProps {
  item: GalleryItem | null;
  items: GalleryItem[];
  onClose: () => void;
  onNavigate: (newItem: GalleryItem) => void;
}

export const GalleryModal: React.FC<GalleryModalProps> = ({ item, items, onClose, onNavigate }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (!item) return;
      const currentIndex = items.findIndex((i) => i.id === item.id);
      if (e.key === 'ArrowRight' && currentIndex < items.length - 1) {
        onNavigate(items[currentIndex + 1]);
      }
      if (e.key === 'ArrowLeft' && currentIndex > 0) {
        onNavigate(items[currentIndex - 1]);
      }
    };
    if (item) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [item, items, onClose, onNavigate]);

  if (!item) return null;

  const currentIndex = items.findIndex((i) => i.id === item.id);
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < items.length - 1;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full bg-slate-900 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Controls */}
        <div className="flex items-center justify-between px-5 py-3 bg-black/40 text-white border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold px-2 py-0.5 rounded bg-emerald-600/80 text-white uppercase tracking-wider">
              {item.category}
            </span>
            <span className="text-xs text-slate-400">
              {currentIndex + 1} of {items.length}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close image lightbox"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Image Stage */}
        <div className="relative flex-1 bg-black flex items-center justify-center min-h-[350px] max-h-[60vh] overflow-hidden">
          <img
            src={item.imageUrl}
            alt={item.title}
            className="w-full h-full object-contain max-h-[60vh]"
          />

          {/* Navigation Arrows */}
          {hasPrev && (
            <button
              onClick={() => onNavigate(items[currentIndex - 1])}
              className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/80 text-white transition-colors border border-white/20"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {hasNext && (
            <button
              onClick={() => onNavigate(items[currentIndex + 1])}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/80 text-white transition-colors border border-white/20"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}
        </div>

        {/* Caption */}
        <div className="p-4 sm:p-5 bg-slate-900 border-t border-white/10 text-white space-y-1">
          <h4 className="text-base sm:text-lg font-bold text-emerald-300">{item.title}</h4>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{item.caption}</p>
        </div>
      </div>
    </div>
  );
};
