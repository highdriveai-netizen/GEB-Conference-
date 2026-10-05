import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Tag, User, Filter, Download, Printer, Info, Check } from 'lucide-react';
import { AGENDA_ITEMS, AGENDA_DAYS, AgendaItem } from '../data/conferenceData';

export const AgendaPage: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState<number>(1);
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [copiedSchedule, setCopiedSchedule] = useState(false);

  const filterOptions = ['All', 'Keynote', 'Oral Presentation', 'Poster', 'Workshop', 'Networking', 'Ceremony'];

  const filteredItems = AGENDA_ITEMS.filter((item) => {
    const dayMatches = item.day === selectedDay;
    const filterMatches = selectedFilter === 'All' || item.type === selectedFilter;
    return dayMatches && filterMatches;
  });

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="py-12 bg-white">
      {/* Banner */}
      <div className="bg-gradient-to-r from-[#044e3b] to-[#0f766e] text-white py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-emerald-200 text-xs font-semibold uppercase tracking-wider">
            <Calendar className="w-3.5 h-3.5 text-emerald-300" />
            <span>3-Day Scientific Program</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Conference Agenda &amp; Schedule
          </h1>
          <p className="text-emerald-100 max-w-3xl text-sm sm:text-base leading-relaxed">
            Detailed session breakdown, keynote lectures, technical tracks, poster viewings, and academic symposiums.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-10">
        {/* Day selection and controls */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-200">
          {/* Day Tabs */}
          <div className="flex items-center p-1.5 bg-slate-100 rounded-xl border border-slate-200 overflow-x-auto">
            {AGENDA_DAYS.map((day) => (
              <button
                key={day.dayNumber}
                type="button"
                onClick={() => setSelectedDay(day.dayNumber)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-bold transition-all whitespace-nowrap ${
                  selectedDay === day.dayNumber
                    ? 'bg-emerald-800 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                }`}
              >
                <span>{day.label}</span>
                <span className={`text-xs font-normal ${selectedDay === day.dayNumber ? 'text-emerald-200' : 'text-slate-400'}`}>
                  · {day.dateLabel.split('—')[1]?.trim() || 'Sessions'}
                </span>
              </button>
            ))}
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-300 rounded-md hover:bg-slate-50 transition-colors shadow-2xs"
            >
              <Printer className="w-4 h-4 text-slate-600" />
              <span>Print Schedule</span>
            </button>
          </div>
        </div>

        {/* Filter bar */}
        <div className="flex items-center gap-2 overflow-x-auto py-1">
          <Filter className="w-4 h-4 text-slate-400 shrink-0" />
          <span className="text-xs font-semibold text-slate-500 mr-2 shrink-0">Filter Track:</span>
          {filterOptions.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setSelectedFilter(filter)}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors whitespace-nowrap ${
                selectedFilter === filter
                  ? 'bg-slate-900 text-white'
                  : 'bg-slate-50 text-slate-600 hover:bg-slate-200/70 border border-slate-200'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Notice */}
        <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start gap-3">
          <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
          <div>
            <strong>Demonstration Schedule:</strong> Timings, hall allocations, and selected oral paper codes will be finalized and published in the official conference handbook following abstract peer-review.
          </div>
        </div>

        {/* Sessions timeline */}
        <div className="space-y-4">
          {filteredItems.map((item: AgendaItem) => (
            <div
              key={item.id}
              className="bg-white border border-slate-200/90 rounded-xl p-6 hover:border-emerald-500 hover:shadow-xs transition-all flex flex-col md:flex-row md:items-start justify-between gap-6"
            >
              <div className="space-y-3 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200">
                    {item.type}
                  </span>
                  <span className="text-slate-300">·</span>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700">
                    <Clock className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{item.time}</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-slate-900">
                  {item.title}
                </h3>

                {item.description && (
                  <p className="text-sm text-slate-600 leading-relaxed max-w-4xl">
                    {item.description}
                  </p>
                )}

                <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-500 pt-2 border-t border-slate-100">
                  <div className="flex items-center gap-1.5">
                    <User className="w-4 h-4 text-slate-400" />
                    <span className="font-semibold text-slate-800">{item.speaker}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-slate-400" />
                    <span>{item.venue}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {filteredItems.length === 0 && (
            <div className="text-center py-16 bg-slate-50 rounded-xl border border-slate-200">
              <p className="text-slate-600 text-sm">No sessions found matching "{selectedFilter}" on Day 0{selectedDay}.</p>
              <button
                type="button"
                onClick={() => setSelectedFilter('All')}
                className="mt-2 text-sm text-emerald-700 font-semibold hover:underline"
              >
                Clear filter
              </button>
            </div>
          )}
        </div>

        {/* Venue guide */}
        <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 space-y-4">
          <h3 className="text-base sm:text-lg font-bold text-slate-900">
            Conference Venue Halls (Faculty of Biological Sciences, CU)
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs text-slate-600">
            <div className="p-3 bg-white rounded-lg border border-slate-200">
              <strong className="block text-slate-900 font-semibold text-sm mb-1">Faculty Auditorium</strong>
              <span>Main keynote lectures, inaugural ceremony, and valedictory banquet. Capacity: 500+</span>
            </div>
            <div className="p-3 bg-white rounded-lg border border-slate-200">
              <strong className="block text-slate-900 font-semibold text-sm mb-1">Seminar Hall A</strong>
              <span>Technical oral presentations in Medical &amp; Pharmaceutical Biotechnology.</span>
            </div>
            <div className="p-3 bg-white rounded-lg border border-slate-200">
              <strong className="block text-slate-900 font-semibold text-sm mb-1">Seminar Hall B</strong>
              <span>Bioinformatics, computational genomics, and plant biotech presentations.</span>
            </div>
            <div className="p-3 bg-white rounded-lg border border-slate-200">
              <strong className="block text-slate-900 font-semibold text-sm mb-1">Poster Exhibition Foyer</strong>
              <span>Standard 36"x48" poster boards, interactive author Q&amp;A sessions.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
