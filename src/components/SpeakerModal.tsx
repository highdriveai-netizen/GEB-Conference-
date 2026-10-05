import React, { useEffect } from 'react';
import { X, Building2, MapPin, BookOpen, Presentation, Calendar, Award } from 'lucide-react';
import { Speaker } from '../data/conferenceData';

interface SpeakerModalProps {
  speaker: Speaker | null;
  onClose: () => void;
}

export const SpeakerModal: React.FC<SpeakerModalProps> = ({ speaker, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (speaker) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [speaker, onClose]);

  if (!speaker) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="speaker-modal-title"
    >
      <div
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Ribbon */}
        <div className="bg-gradient-to-r from-emerald-800 to-teal-800 px-6 py-4 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider bg-white/20 px-2 py-0.5 rounded text-white">
              {speaker.sessionType} Profile
            </span>
            <span className="text-xs text-emerald-200 font-medium">IBC 2026 Speaker Demo</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/20 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Speaker Overview */}
          <div className="flex flex-col sm:flex-row gap-5 items-start">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden bg-slate-100 border-2 border-emerald-600/30 shrink-0">
              <img
                src={speaker.avatarUrl}
                alt={speaker.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-1.5 flex-1">
              <h3 id="speaker-modal-title" className="text-xl sm:text-2xl font-bold text-slate-900 leading-tight">
                {speaker.name}
              </h3>
              <p className="text-sm font-semibold text-emerald-700">{speaker.role}</p>
              
              <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-slate-500 pt-1">
                <div className="flex items-center gap-1">
                  <Building2 className="w-3.5 h-3.5 text-slate-400" />
                  <span>{speaker.institution}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span>{speaker.country}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Research Specialization */}
          <div className="p-3.5 rounded-lg bg-emerald-50/60 border border-emerald-100">
            <div className="text-xs font-bold text-emerald-900 uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-emerald-700" />
              <span>Research Specialization</span>
            </div>
            <p className="text-sm text-slate-800 font-medium">{speaker.researchArea}</p>
          </div>

          {/* Presentation Title */}
          <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200">
            <div className="text-xs font-bold text-slate-600 uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <Presentation className="w-3.5 h-3.5 text-slate-500" />
              <span>Scheduled Presentation / Session</span>
            </div>
            <p className="text-sm text-slate-900 font-semibold">{speaker.presentationTitle}</p>
          </div>

          {/* Biography */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Biography &amp; Academic Background</h4>
            <p className="text-sm text-slate-700 leading-relaxed">{speaker.bio}</p>
          </div>

          {/* Demo Note */}
          <div className="p-3 rounded-md bg-amber-50 border border-amber-200 text-xs text-amber-900">
            <strong>Demonstrator Notice:</strong> This speaker entry is an editable template for the conference organizing committee. Official confirmed keynote and invited scholar biographies will be substituted prior to public launch.
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-semibold text-slate-700 hover:text-slate-900 bg-white border border-slate-300 rounded-md shadow-2xs hover:bg-slate-50"
          >
            Close Profile
          </button>
        </div>
      </div>
    </div>
  );
};
