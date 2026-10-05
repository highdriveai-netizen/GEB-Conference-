import React, { useState } from 'react';
import { Bell, ArrowRight, X, Calendar, Megaphone, Info } from 'lucide-react';
import { ANNOUNCEMENTS, Announcement } from '../data/conferenceData';

export const Announcements: React.FC = () => {
  const [activeAnnouncement, setActiveAnnouncement] = useState<Announcement | null>(null);

  return (
    <section id="announcements" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <div className="text-xs sm:text-sm font-bold text-emerald-800 uppercase tracking-widest mb-2 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-emerald-600 inline-block" />
              <span>Secretariat Notices</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Latest Announcements
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600">
              Official communiqués, deadlines, and notifications from the conference organizing desk.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-md border border-emerald-200">
            <Megaphone className="w-4 h-4 text-emerald-600" />
            <span>Demonstration Bulletin</span>
          </div>
        </div>

        {/* Announcements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {ANNOUNCEMENTS.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-slate-200/90 rounded-xl p-5 hover:border-emerald-500 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs mb-3">
                  <span className="font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
                    {item.category}
                  </span>
                  <span className="text-slate-400 text-[11px] font-medium">{item.date}</span>
                </div>

                <h3 className="text-base font-bold text-slate-900 leading-snug mb-2">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                  {item.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setActiveAnnouncement(item)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 hover:text-emerald-900 transition-colors"
                >
                  <span>Read Notice</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Announcement Detail Modal */}
      {activeAnnouncement && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-emerald-900 px-6 py-4 text-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Bell className="w-4 h-4 text-emerald-300" />
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-200">
                  {activeAnnouncement.category}
                </span>
              </div>
              <button
                onClick={() => setActiveAnnouncement(null)}
                className="p-1.5 rounded-full hover:bg-white/20 text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-4">
              <div className="text-xs text-slate-400 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                <span>{activeAnnouncement.date}</span>
              </div>

              <h3 className="text-xl font-bold text-slate-900">
                {activeAnnouncement.title}
              </h3>

              <div className="text-sm text-slate-700 space-y-3 leading-relaxed">
                <p>{activeAnnouncement.description}</p>
                {activeAnnouncement.fullContent && (
                  <p className="p-3 bg-slate-50 rounded-lg border border-slate-200 text-xs sm:text-sm">
                    {activeAnnouncement.fullContent}
                  </p>
                )}
              </div>

              <div className="p-3 rounded-md bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start gap-2">
                <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <span>
                  This notice is an editable demo template. Official announcements will be populated via <code>conferenceData.ts</code>.
                </span>
              </div>
            </div>

            <div className="px-6 py-3 bg-slate-50 border-t border-slate-200 flex justify-end">
              <button
                type="button"
                onClick={() => setActiveAnnouncement(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-white border border-slate-300 rounded-md shadow-2xs"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
