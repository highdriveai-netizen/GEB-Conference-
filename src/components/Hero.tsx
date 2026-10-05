import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Globe, ArrowRight, FileText, CheckCircle2, Sparkles, Building2 } from 'lucide-react';
import { CONFERENCE_INFO } from '../data/conferenceData';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#064e3b] via-[#065f46] to-[#047857] text-white pt-12 pb-20 md:pt-16 md:pb-28">
      {/* Background scientific overlay */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dna-pattern" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M0 40 Q 20 10, 40 40 T 80 40" fill="none" stroke="#6ee7b7" strokeWidth="1" strokeDasharray="3 3" />
              <path d="M0 40 Q 20 70, 40 40 T 80 40" fill="none" stroke="#5eead4" strokeWidth="1" strokeDasharray="3 3" />
              <circle cx="40" cy="40" r="2" fill="#a7f3d0" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dna-pattern)" />
        </svg>
      </div>

      {/* Radial soft lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-400/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-teal-300/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Institutional Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-emerald-300/30 text-emerald-200 text-xs sm:text-sm font-medium mb-6">
          <Building2 className="w-4 h-4 text-emerald-300" />
          <span>Department of Genetic Engineering & Biotechnology · University of Chittagong</span>
          <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span className="text-emerald-300 hidden sm:inline font-semibold">Demo Website</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Heading and CTAs */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <div className="text-emerald-300 font-semibold tracking-wider uppercase text-sm sm:text-base flex items-center gap-2">
                <span>International Research Summit</span>
                <span className="text-emerald-400">·</span>
                <span>2nd Edition</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
                2nd International <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 via-teal-100 to-white">
                  Biotechnology Conference
                </span>
                <br />
                <span className="text-emerald-300">2026</span>
              </h1>
            </div>

            <p className="text-base sm:text-lg text-emerald-100/90 max-w-2xl font-normal leading-relaxed">
              “Connecting researchers, scientists, academics, students, and innovators to explore emerging frontiers in biotechnology and foster meaningful scientific collaboration.”
            </p>

            {/* Event Key Badges / Metadata */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 pb-2">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-black/15 backdrop-blur-xs border border-white/10">
                <Calendar className="w-5 h-5 text-emerald-300 shrink-0" />
                <div>
                  <div className="text-xs text-emerald-200 uppercase font-medium">Conference Date</div>
                  <div className="text-sm font-semibold text-white">December 2026</div>
                  <div className="text-[11px] text-emerald-300/80">[Date TBA]</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-lg bg-black/15 backdrop-blur-xs border border-white/10">
                <MapPin className="w-5 h-5 text-emerald-300 shrink-0" />
                <div>
                  <div className="text-xs text-emerald-200 uppercase font-medium">Venue & City</div>
                  <div className="text-sm font-semibold text-white">Univ. of Chittagong</div>
                  <div className="text-[11px] text-emerald-300/80">Chattogram, Bangladesh</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-lg bg-black/15 backdrop-blur-xs border border-white/10">
                <Globe className="w-5 h-5 text-emerald-300 shrink-0" />
                <div>
                  <div className="text-xs text-emerald-200 uppercase font-medium">Format</div>
                  <div className="text-sm font-semibold text-white">Int'l Conference</div>
                  <div className="text-[11px] text-emerald-300/80">In-Person &amp; Plenary</div>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                to="/register"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-bold text-[#064e3b] bg-white hover:bg-emerald-50 active:bg-emerald-100 rounded-md shadow-md transition-all hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <span>REGISTER NOW</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/submit-article"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-emerald-800/80 hover:bg-emerald-800 border border-emerald-400/40 rounded-md transition-all hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
              >
                <FileText className="w-4 h-4 text-emerald-300" />
                <span>SUBMIT ARTICLE</span>
              </Link>
              <Link
                to="/agenda"
                className="text-sm font-medium text-emerald-200 hover:text-white underline decoration-emerald-400 underline-offset-4 px-2 py-1"
              >
                View Scientific Program
              </Link>
            </div>
          </div>

          {/* Right Column: High Quality Visual Showcase */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative card */}
              <div className="relative rounded-2xl overflow-hidden bg-white/10 p-2 border border-white/20 shadow-2xl backdrop-blur-sm">
                <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-emerald-950">
                  <img
                    src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=900&q=80"
                    alt="Biotechnology research and genetic analysis in modern academic laboratory"
                    className="w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/40 to-transparent" />
                  
                  {/* Floating Academic Badge */}
                  <div className="absolute bottom-4 left-4 right-4 bg-emerald-900/90 backdrop-blur-md rounded-lg p-3.5 border border-emerald-500/30 text-white">
                    <div className="flex items-center justify-between text-xs text-emerald-300 mb-1">
                      <span className="font-semibold uppercase tracking-wider">Conference Theme</span>
                      <span className="bg-emerald-700/80 px-2 py-0.5 rounded text-[10px] text-white">IBC 2026</span>
                    </div>
                    <div className="text-sm font-bold text-white line-clamp-2">
                      “Next Generation Biotechnology: Exploring Emerging Frontiers &amp; Global Collaboration”
                    </div>
                    <div className="mt-2 pt-2 border-t border-emerald-700/60 flex items-center justify-between text-xs text-emerald-200">
                      <span>12 Thematic Research Areas</span>
                      <span>Oral &amp; Poster Tracks</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Little Floating Highlight Tag */}
              <div className="absolute -top-3 -right-3 hidden sm:flex items-center gap-2 bg-emerald-900 border border-emerald-400 text-emerald-200 text-xs px-3 py-1.5 rounded-full shadow-lg">
                <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
                <span className="font-medium">Call for Papers Active</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
