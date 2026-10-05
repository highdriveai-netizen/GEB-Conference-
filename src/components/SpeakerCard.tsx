import React from 'react';
import { Building2, MapPin, ArrowRight } from 'lucide-react';
import { Speaker } from '../data/conferenceData';

interface SpeakerCardProps {
  speaker: Speaker;
  onSelect: (speaker: Speaker) => void;
}

export const SpeakerCard: React.FC<SpeakerCardProps> = ({ speaker, onSelect }) => {
  return (
    <div className="group bg-white rounded-xl border border-slate-200/90 overflow-hidden shadow-2xs hover:shadow-md hover:border-emerald-500 transition-all duration-200 flex flex-col justify-between">
      <div>
        {/* Portrait container */}
        <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
          <img
            src={speaker.avatarUrl}
            alt={speaker.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-2.5 right-2.5">
            <span className="text-[11px] font-semibold tracking-wide uppercase px-2 py-0.5 rounded bg-black/60 backdrop-blur-xs text-white">
              {speaker.sessionType}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 space-y-2">
          <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-800 transition-colors line-clamp-1">
            {speaker.name}
          </h3>
          <p className="text-xs font-semibold text-emerald-700 line-clamp-1">
            {speaker.role}
          </p>

          <div className="space-y-1 text-xs text-slate-500 pt-1">
            <div className="flex items-center gap-1.5 truncate">
              <Building2 className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span className="truncate">{speaker.institution}</span>
            </div>
            <div className="flex items-center gap-1.5 truncate">
              <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span>{speaker.country}</span>
            </div>
          </div>

          <div className="pt-2 border-t border-slate-100">
            <div className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">Research Domain</div>
            <p className="text-xs text-slate-700 font-medium line-clamp-2 mt-0.5">
              {speaker.researchArea}
            </p>
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="p-4 pt-0">
        <button
          type="button"
          onClick={() => onSelect(speaker)}
          className="w-full mt-2 inline-flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 rounded-md transition-colors border border-emerald-200/70"
        >
          <span>VIEW PROFILE</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
