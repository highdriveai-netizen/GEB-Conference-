import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Users, BookOpen, GraduationCap, ArrowRight, Check, Microscope } from 'lucide-react';
import { CONFERENCE_INFO } from '../data/conferenceData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-20 bg-slate-50/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs sm:text-sm font-bold text-emerald-800 uppercase tracking-widest mb-2 flex items-center gap-2">
            <span className="w-6 h-0.5 bg-emerald-600 inline-block" />
            <span>Academic Background &amp; Scope</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            About the 2nd International Biotechnology Conference 2026
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Following the monumental success of the National Biotechnology Conference (NBC 2023), the Department of Genetic Engineering &amp; Biotechnology (GEB) at the University of Chittagong is proud to convene the international research community for the 2026 edition.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Descriptive narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed text-sm sm:text-base space-y-4">
              <p>
                The <strong>2nd International Biotechnology Conference 2026 (IBC 2026)</strong> provides a premier interdisciplinary platform for researchers, scientists, academic scholars, and biotechnology industry pioneers to present groundbreaking findings, discuss emerging challenges, and foster cross-border collaborations.
              </p>
              <p>
                Organized under the auspices of the <strong>Department of Genetic Engineering and Biotechnology (GEB), University of Chittagong</strong>, this three-day international congress will feature plenary addresses by distinguished world authorities, high-level oral presentations, competitive scientific poster exhibitions, hands-on bioinformatics workshops, and dedicated industry-academia networking roundtables.
              </p>
              <p>
                Special emphasis is placed on empowering young researchers and student investigators through the <em>Young Emerging Biotechnologists Spotlight</em>, career guidance colloquiums, and meritorious research recognition awards.
              </p>
            </div>

            {/* Core Pillars List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-white border border-slate-200/80 shadow-2xs">
                <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-slate-800">
                  <strong className="block font-semibold text-slate-900">Peer-Reviewed Proceedings</strong>
                  Indexed conference abstracts and journal special issue opportunities.
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-white border border-slate-200/80 shadow-2xs">
                <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-slate-800">
                  <strong className="block font-semibold text-slate-900">12 Multidisciplinary Tracks</strong>
                  Covering genomics, pharma, agricultural, and environmental biotechnology.
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-white border border-slate-200/80 shadow-2xs">
                <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-slate-800">
                  <strong className="block font-semibold text-slate-900">Global Academic Network</strong>
                  Interaction with international scholars, laboratory directors, and faculty.
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-white border border-slate-200/80 shadow-2xs">
                <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-slate-800">
                  <strong className="block font-semibold text-slate-900">Young Scientist Awards</strong>
                  Formal recognition and cash grants for outstanding student presentations.
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 hover:text-emerald-900 hover:underline"
              >
                <span>Read Full Institutional Background &amp; History</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: Visual Graphic & Academic Metric Highlights */}
          <div className="lg:col-span-5 space-y-6">
            {/* Visual Box */}
            <div className="rounded-xl overflow-hidden bg-white border border-slate-200 shadow-sm p-4 space-y-4">
              <div className="relative rounded-lg overflow-hidden aspect-[16/10] bg-slate-900">
                <img
                  src="https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80"
                  alt="Microscopy and genetic analysis"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white text-xs">
                  <div className="font-semibold text-emerald-300">Department of GEB · Established 2004</div>
                  <div className="text-slate-200 text-[11px]">Faculty of Biological Sciences, University of Chittagong</div>
                </div>
              </div>

              {/* Demo Metric Cards - Explicitly labeled as demo placeholders */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-lg bg-emerald-50/60 border border-emerald-100">
                  <div className="text-xs font-semibold text-emerald-800">Research Focus</div>
                  <div className="text-lg font-bold text-slate-900 mt-0.5">12 Themes</div>
                  <div className="text-[11px] text-slate-500">From genomics to bioeconomy</div>
                </div>

                <div className="p-3 rounded-lg bg-teal-50/60 border border-teal-100">
                  <div className="text-xs font-semibold text-teal-800">Delegates Target</div>
                  <div className="text-lg font-bold text-slate-900 mt-0.5">[500+ Demo]</div>
                  <div className="text-[11px] text-slate-500">Academics &amp; students</div>
                </div>

                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                  <div className="text-xs font-semibold text-slate-700">Presentations</div>
                  <div className="text-lg font-bold text-slate-900 mt-0.5">[100+ Demo]</div>
                  <div className="text-[11px] text-slate-500">Oral &amp; poster tracks</div>
                </div>

                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                  <div className="text-xs font-semibold text-slate-700">Institutions</div>
                  <div className="text-lg font-bold text-slate-900 mt-0.5">[50+ Demo]</div>
                  <div className="text-[11px] text-slate-500">Universities &amp; research bodies</div>
                </div>
              </div>
              <div className="text-[11px] text-slate-400 italic text-center">
                * Numerical metrics above are demonstrative placeholders for the website prototype.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
