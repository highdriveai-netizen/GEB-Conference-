import React, { useState } from 'react';
import { Award, Building2, MapPin, Sparkles, BookOpen, ArrowRight } from 'lucide-react';
import { FEATURED_KEYNOTE_SPEAKER } from '../data/conferenceData';
import { SpeakerModal } from './SpeakerModal';

export const FeaturedSpeaker: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const speaker = FEATURED_KEYNOTE_SPEAKER;

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-white to-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-8">
          <div className="text-xs sm:text-sm font-bold text-emerald-800 uppercase tracking-widest mb-2 flex items-center gap-2">
            <span className="w-6 h-0.5 bg-emerald-600 inline-block" />
            <span>Plenary Leadership</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Featured Keynote Speaker
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Distinguished scholars and international leaders in genetic engineering and biotechnology delivering inaugural plenary addresses.
          </p>
        </div>

        {/* Keynote Card */}
        <div className="relative rounded-2xl bg-white border border-emerald-900/10 shadow-lg overflow-hidden p-6 sm:p-8 lg:p-10">
          {/* Subtle green accent border on top */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-700" />

          {/* Demo Ribbon */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-semibold uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>KEYNOTE SPEAKER · DEMO PLACEHOLDER</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Portrait */}
            <div className="lg:col-span-4 flex justify-center lg:justify-start">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden shadow-md border-4 border-white bg-slate-100 ring-1 ring-slate-200">
                <img
                  src={speaker.avatarUrl}
                  alt={speaker.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-2 left-2 right-2 bg-emerald-900/80 backdrop-blur-xs text-white text-[11px] py-1 px-2 rounded text-center font-medium">
                  Keynote Address TBA
                </div>
              </div>
            </div>

            {/* Info and Bio */}
            <div className="lg:col-span-8 space-y-4">
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  {speaker.name}
                </h3>
                <p className="text-base sm:text-lg font-semibold text-emerald-700 mt-1">
                  {speaker.role}
                </p>

                <div className="flex flex-wrap items-center gap-y-1 gap-x-5 text-xs sm:text-sm text-slate-500 mt-2">
                  <div className="flex items-center gap-1.5">
                    <Building2 className="w-4 h-4 text-slate-400" />
                    <span>{speaker.institution}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-slate-400" />
                    <span>{speaker.country}</span>
                  </div>
                </div>
              </div>

              {/* Research Focus */}
              <div className="p-3.5 rounded-lg bg-emerald-50/70 border border-emerald-100/80">
                <div className="text-xs font-bold text-emerald-900 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-emerald-700" />
                  <span>Research Specialization</span>
                </div>
                <div className="text-sm font-semibold text-slate-800">
                  {speaker.researchArea}
                </div>
              </div>

              {/* Bio summary */}
              <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
                {speaker.bio}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white text-sm font-semibold rounded-md shadow-xs transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2"
                >
                  <span>VIEW PROFILE</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <span className="text-xs text-slate-400 italic">
                  * Official Keynote speaker invitations are actively underway by the committee.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <SpeakerModal speaker={isModalOpen ? speaker : null} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};
