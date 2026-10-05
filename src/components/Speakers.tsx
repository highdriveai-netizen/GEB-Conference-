import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Info, Users } from 'lucide-react';
import { SPEAKERS, Speaker } from '../data/conferenceData';
import { SpeakerCard } from './SpeakerCard';
import { SpeakerModal } from './SpeakerModal';

export const Speakers: React.FC = () => {
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);
  const [filterType, setFilterType] = useState<string>('All');

  const filteredSpeakers = SPEAKERS.filter((speaker) => {
    if (filterType === 'All') return true;
    return speaker.sessionType === filterType;
  });

  return (
    <section id="speakers" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <div className="text-xs sm:text-sm font-bold text-emerald-800 uppercase tracking-widest mb-2 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-emerald-600 inline-block" />
              <span>Scientific Faculty &amp; Invited Scholars</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Meet Our Speakers
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600">
              Leading researchers and scientists from universities, institutions, and biotechnology research centers.
            </p>
          </div>

          {/* Filter tabs */}
          <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg border border-slate-200/80">
            {['All', 'Plenary', 'Invited'].map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setFilterType(type)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                  filterType === type
                    ? 'bg-white text-emerald-800 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Demo Disclaimer Banner */}
        <div className="mb-8 p-3.5 rounded-lg bg-amber-50/80 border border-amber-200/80 flex items-start gap-3">
          <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
          <div className="text-xs text-amber-900 leading-relaxed">
            <span className="font-semibold">Organizing Committee Notice:</span> The speaker profiles below are editable demonstrations designed to showcase layout and presentation formatting. Confirmed national and international invited scholars will be listed upon confirmation.
          </div>
        </div>

        {/* Speakers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
          {filteredSpeakers.map((speaker) => (
            <SpeakerCard
              key={speaker.id}
              speaker={speaker}
              onSelect={(sp) => setSelectedSpeaker(sp)}
            />
          ))}
        </div>

        {/* Bottom Actions */}
        <div className="mt-12 text-center">
          <Link
            to="/speakers"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 rounded-md border border-emerald-300 transition-colors shadow-2xs"
          >
            <span>View All Speakers &amp; Scientific Biographies</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <SpeakerModal speaker={selectedSpeaker} onClose={() => setSelectedSpeaker(null)} />
    </section>
  );
};
