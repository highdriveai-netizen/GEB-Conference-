import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, MapPin, User, Tag, Calendar, ArrowRight, Filter, Download } from 'lucide-react';
import { AGENDA_ITEMS, AGENDA_DAYS, AgendaItem } from '../data/conferenceData';

interface AgendaProps {
  isPreview?: boolean;
}

export const Agenda: React.FC<AgendaProps> = ({ isPreview = false }) => {
  const [selectedDay, setSelectedDay] = useState<number>(1);
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  const filterOptions = ['All', 'Keynote', 'Oral Presentation', 'Poster', 'Workshop', 'Networking', 'Ceremony'];

  const filteredItems = AGENDA_ITEMS.filter((item) => {
    const dayMatches = item.day === selectedDay;
    const filterMatches = selectedFilter === 'All' || item.type === selectedFilter;
    return dayMatches && filterMatches;
  });

  const displayItems = isPreview ? filteredItems.slice(0, 4) : filteredItems;

  return (
    <section id="agenda" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <div className="text-xs sm:text-sm font-bold text-emerald-800 uppercase tracking-widest mb-2 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-emerald-600 inline-block" />
              <span>Scientific Program &amp; Schedule</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Conference Agenda
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600">
              Interactive three-day program comprising keynote orations, technical parallel tracks, poster sessions, and workshops.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/agenda"
              className="text-xs sm:text-sm font-semibold text-emerald-800 hover:text-emerald-950 px-3 py-1.5 rounded-md bg-emerald-50 border border-emerald-200 inline-flex items-center gap-1.5"
            >
              <span>Full Schedule View</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Day Selection Tabs (Segmented Control) */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
          <div className="flex items-center p-1 bg-slate-100 rounded-xl border border-slate-200/90 overflow-x-auto">
            {AGENDA_DAYS.map((day) => (
              <button
                key={day.dayNumber}
                type="button"
                onClick={() => setSelectedDay(day.dayNumber)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold transition-all whitespace-nowrap ${
                  selectedDay === day.dayNumber
                    ? 'bg-emerald-800 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                }`}
              >
                <span>{day.label}</span>
                <span className={`text-xs font-normal hidden sm:inline ${selectedDay === day.dayNumber ? 'text-emerald-200' : 'text-slate-400'}`}>
                  (Demo Track)
                </span>
              </button>
            ))}
          </div>

          {/* Session Type Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto py-1">
            <Filter className="w-3.5 h-3.5 text-slate-400 shrink-0 mr-1" />
            {filterOptions.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setSelectedFilter(filter)}
                className={`px-3 py-1 rounded-md text-xs font-medium transition-colors whitespace-nowrap ${
                  selectedFilter === filter
                    ? 'bg-slate-900 text-white'
                    : 'bg-slate-50 text-slate-600 hover:bg-slate-200/70 border border-slate-200'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Sessions List */}
        <div className="mt-8 space-y-4">
          {displayItems.length > 0 ? (
            displayItems.map((item: AgendaItem) => (
              <div
                key={item.id}
                className="bg-white border border-slate-200/90 rounded-xl p-5 hover:border-emerald-500 hover:shadow-xs transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div className="space-y-2 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200">
                      <Tag className="w-3 h-3 text-emerald-600" />
                      {item.type}
                    </span>
                    <span className="text-xs font-medium text-slate-400">·</span>
                    <div className="flex items-center gap-1 text-xs font-semibold text-slate-700">
                      <Clock className="w-3.5 h-3.5 text-emerald-600" />
                      <span>{item.time}</span>
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900">
                    {item.title}
                  </h3>

                  {item.description && (
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl">
                      {item.description}
                    </p>
                  )}

                  <div className="flex flex-wrap items-center gap-y-1 gap-x-5 text-xs text-slate-500 pt-1">
                    <div className="flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-slate-400" />
                      <span className="font-medium text-slate-700">{item.speaker}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      <span>{item.venue}</span>
                    </div>
                  </div>
                </div>

                <div className="shrink-0 self-start md:self-center">
                  <Link
                    to="/register"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 rounded-md border border-emerald-200 transition-colors"
                  >
                    <span>Attend Session</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12 bg-slate-50 rounded-xl border border-slate-200">
              <p className="text-slate-600 text-sm">No sessions match the selected filter on Day 0{selectedDay}.</p>
              <button
                type="button"
                onClick={() => setSelectedFilter('All')}
                className="mt-2 text-sm text-emerald-700 font-medium hover:underline"
              >
                Reset session filter
              </button>
            </div>
          )}
        </div>

        {/* View full schedule CTA for homepage preview */}
        {isPreview && (
          <div className="mt-8 text-center">
            <Link
              to="/agenda"
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold rounded-md shadow-xs transition-colors"
            >
              <span>Explore Complete 3-Day Program</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};
