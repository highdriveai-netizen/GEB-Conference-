import React from 'react';
import { Calendar, Clock, AlertCircle, ArrowRight, CheckCircle2 } from 'lucide-react';
import { IMPORTANT_DATES, ImportantDate } from '../data/conferenceData';
import { Link } from 'react-router-dom';

export const ImportantDates: React.FC = () => {
  return (
    <section id="dates" className="py-10 sm:py-12 bg-slate-50/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Compact Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 pb-4 border-b border-slate-200">
          <div>
            <div className="text-xs font-bold text-emerald-800 uppercase tracking-widest mb-1 flex items-center gap-1.5">
              <span className="w-4 h-0.5 bg-emerald-600 inline-block" />
              <span>Conference Deadlines &amp; Milestones</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Important Dates
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
              Official timeline for manuscript submissions, peer-review acceptance, and delegate registration.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 bg-white px-3 py-1.5 rounded-md border border-slate-200 shadow-2xs shrink-0">
            <Clock className="w-3.5 h-3.5 text-emerald-600" />
            <span>Deadlines: 23:59 BST (UTC+6)</span>
          </div>
        </div>

        {/* Structured List View */}
        <div className="bg-white rounded-xl border border-slate-200 divide-y divide-slate-100 overflow-hidden shadow-2xs">
          {IMPORTANT_DATES.map((item: ImportantDate, index) => {
            return (
              <div
                key={item.id}
                className="group flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 sm:px-6 hover:bg-emerald-50/40 transition-colors"
              >
                {/* Left: Bullet Dot, Step, Title & Description */}
                <div className="flex items-start gap-3.5 flex-1 min-w-0">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold shrink-0 mt-0.5">
                    {index + 1}
                  </div>

                  <div className="space-y-0.5 min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-sm font-bold text-slate-900 group-hover:text-emerald-800 transition-colors">
                        {item.title}
                      </h3>
                      <span
                        className={`text-[10px] font-semibold px-2 py-0.5 rounded ${
                          item.status === 'open'
                            ? 'bg-emerald-100 text-emerald-800'
                            : 'bg-slate-100 text-slate-600'
                        }`}
                      >
                        {item.status === 'open' ? 'Active / Open' : 'Scheduled'}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 line-clamp-1">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Right: Date Value & Action Link */}
                <div className="flex items-center justify-between sm:justify-end gap-6 shrink-0 pl-9 sm:pl-0">
                  <div className="flex items-center gap-1.5 text-xs sm:text-sm font-bold text-emerald-800 font-mono">
                    <Calendar className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{item.date}</span>
                  </div>

                  <Link
                    to={item.status === 'open' ? '/submit-article' : '/register'}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 hover:text-emerald-900 hover:underline"
                  >
                    <span>{item.status === 'open' ? 'Submit' : 'Details'}</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Compact Bottom Notice */}
        <div className="mt-5 p-3.5 bg-emerald-50/80 border border-emerald-200/80 rounded-lg flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-emerald-950">
          <div className="flex items-center gap-2.5">
            <AlertCircle className="w-4 h-4 text-emerald-700 shrink-0" />
            <span>
              <strong>Note:</strong> Exact calendar dates are demonstrator placeholders and will be confirmed by the conference executive board.
            </span>
          </div>

          <Link
            to="/register"
            className="shrink-0 font-semibold text-emerald-800 hover:text-emerald-950 underline decoration-emerald-600"
          >
            Pre-Register Early →
          </Link>
        </div>
      </div>
    </section>
  );
};
