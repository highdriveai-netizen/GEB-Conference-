import React, { useState } from 'react';
import { Users, Search, Sparkles, Filter, Building2, MapPin, ArrowRight, BookOpen } from 'lucide-react';
import { SPEAKERS, FEATURED_KEYNOTE_SPEAKER, Speaker } from '../data/conferenceData';
import { SpeakerCard } from '../components/SpeakerCard';
import { SpeakerModal } from '../components/SpeakerModal';
import { FeaturedSpeaker } from '../components/FeaturedSpeaker';

export const SpeakersPage: React.FC = () => {
  const [search, setSearch] = useState('');
  const [filterType, setFilterType] = useState('All');
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);

  const allSpeakers = [FEATURED_KEYNOTE_SPEAKER, ...SPEAKERS];

  const filteredSpeakers = allSpeakers.filter((sp) => {
    const matchesFilter = filterType === 'All' || sp.sessionType === filterType;
    const matchesSearch =
      sp.name.toLowerCase().includes(search.toLowerCase()) ||
      sp.institution.toLowerCase().includes(search.toLowerCase()) ||
      sp.researchArea.toLowerCase().includes(search.toLowerCase()) ||
      sp.country.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="py-12 bg-white">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#044e3b] to-[#0f766e] text-white py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-emerald-200 text-xs font-semibold uppercase tracking-wider">
            <Users className="w-3.5 h-3.5 text-emerald-300" />
            <span>Academic Faculty &amp; Invited Orators</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Conference Speakers &amp; Scholars
          </h1>
          <p className="text-emerald-100 max-w-3xl text-sm sm:text-base leading-relaxed">
            Distinguished scientists, professors, and emerging researchers convening to deliver plenary keynotes, thematic symposia, and parallel technical sessions.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-12">
        {/* Featured Keynote Card */}
        <FeaturedSpeaker />

        {/* Filter and Search Bar */}
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-lg border border-slate-200 overflow-x-auto">
            {['All', 'Keynote', 'Plenary', 'Invited'].map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setFilterType(type)}
                className={`px-4 py-2 text-xs font-semibold rounded-md transition-colors whitespace-nowrap ${
                  filterType === type
                    ? 'bg-white text-emerald-800 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          <div className="w-full md:w-80 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search speaker, institution, topic..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-sm bg-slate-50 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white"
            />
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

        {filteredSpeakers.length === 0 && (
          <div className="text-center py-16 bg-slate-50 rounded-xl border border-slate-200">
            <p className="text-slate-600 text-sm">No speakers match your search criteria.</p>
            <button
              onClick={() => {
                setSearch('');
                setFilterType('All');
              }}
              className="mt-2 text-sm text-emerald-700 font-semibold hover:underline"
            >
              Reset filters
            </button>
          </div>
        )}
      </div>

      <SpeakerModal speaker={selectedSpeaker} onClose={() => setSelectedSpeaker(null)} />
    </div>
  );
};
