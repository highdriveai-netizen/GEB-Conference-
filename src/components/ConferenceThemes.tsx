import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Stethoscope,
  Sprout,
  Leaf,
  Factory,
  Apple,
  Dna,
  Binary,
  Cpu,
  Network,
  Microscope,
  Trees,
  Sparkles,
  ArrowRight,
  Search,
  CheckCircle2,
} from 'lucide-react';
import { CONFERENCE_THEMES, ConferenceTheme } from '../data/conferenceData';

const iconMap: Record<string, React.ElementType> = {
  Stethoscope,
  Sprout,
  Leaf,
  Factory,
  Apple,
  Dna,
  Binary,
  Cpu,
  Network,
  Microscope,
  Trees,
  Sparkles,
};

export const ConferenceThemes: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredThemes = CONFERENCE_THEMES.filter(
    (theme) =>
      theme.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      theme.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="themes" className="py-10 sm:py-12 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Compact Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 pb-4 border-b border-slate-100">
          <div>
            <div className="text-xs font-bold text-emerald-800 uppercase tracking-widest mb-1 flex items-center gap-1.5">
              <span className="w-4 h-0.5 bg-emerald-600 inline-block" />
              <span>Scientific Tracks &amp; Scope</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Conference Thematic Areas &amp; Presentation Topics
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
              Abstract contributions are welcomed in 12 specialized research areas for Oral and Poster presentations.
            </p>
          </div>

          {/* Compact Search */}
          <div className="w-full sm:w-64 relative shrink-0">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-8 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-emerald-600 focus:bg-white"
            />
          </div>
        </div>

        {/* Compact List / Bullet Style Grid (2-column on tablet, 3-column on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-3.5">
          {filteredThemes.map((theme: ConferenceTheme, idx) => {
            const IconComponent = iconMap[theme.iconName] || Dna;
            return (
              <div
                key={theme.id}
                className="group flex items-start gap-3 p-2.5 rounded-lg hover:bg-emerald-50/60 transition-colors border border-transparent hover:border-emerald-200/60"
              >
                {/* Bullet Icon */}
                <div className="w-6 h-6 rounded-md bg-emerald-50 border border-emerald-200/80 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-emerald-700 group-hover:text-white transition-colors">
                  <IconComponent className="w-3.5 h-3.5" />
                </div>

                {/* Text Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-emerald-800 transition-colors leading-snug">
                      <span className="text-emerald-600 font-semibold text-xs mr-1">
                        {String(idx + 1).padStart(2, '0')}.
                      </span>
                      {theme.title}
                    </h3>
                  </div>
                  <p className="text-[11px] sm:text-xs text-slate-500 leading-relaxed mt-0.5 line-clamp-2">
                    {theme.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {filteredThemes.length === 0 && (
          <div className="text-center py-8 bg-slate-50 rounded-lg border border-slate-200">
            <p className="text-slate-600 text-xs">No themes found matching "{searchQuery}".</p>
            <button
              onClick={() => setSearchQuery('')}
              className="mt-1 text-xs text-emerald-700 font-medium hover:underline"
            >
              Clear filter
            </button>
          </div>
        )}

        {/* Compact Footer Strip */}
        <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500" />
            <span>Oral &amp; Poster presentations scheduled across all tracks</span>
            <span className="text-slate-300">·</span>
            <span className="text-slate-500">Cross-disciplinary abstracts accepted</span>
          </div>

          <Link
            to="/submit-article"
            className="inline-flex items-center gap-1.5 font-semibold text-emerald-700 hover:text-emerald-900 hover:underline"
          >
            <span>Submit Abstract in These Areas</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
};
