import React from 'react';
import { Link } from 'react-router-dom';
import { Dna, Building2, Mail, Phone, ExternalLink, ArrowUp } from 'lucide-react';
import { CONFERENCE_INFO } from '../data/conferenceData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      {/* Upper Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Col 1: Conference & Institutional Brand */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-700 flex items-center justify-center text-white shadow-sm">
                <Dna className="w-6 h-6 text-emerald-200" />
              </div>
              <div>
                <span className="font-extrabold text-lg text-white tracking-tight block leading-tight">IBC 2026</span>
                <span className="text-xs text-emerald-400 font-medium">2nd Int'l Biotechnology Conference</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Hosted by the Department of Genetic Engineering &amp; Biotechnology (GEB), University of Chittagong. Advancing scientific inquiry, international research synergy, and technological innovation.
            </p>

            <div className="pt-2 text-xs text-slate-400 space-y-1">
              <div className="flex items-center gap-2">
                <Building2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Faculty of Biological Sciences, CU, Bangladesh</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span className="font-mono">{CONFERENCE_INFO.contactEmail}</span>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Conference Links</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link to="/" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Home Overview
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  About GEB &amp; Conference
                </Link>
              </li>
              <li>
                <Link to="/speakers" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Keynote &amp; Invited Speakers
                </Link>
              </li>
              <li>
                <Link to="/agenda" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Scientific Agenda &amp; Tracks
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Conference &amp; Campus Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Authors & Delegates */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Authors &amp; Delegates</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link to="/register" className="text-emerald-400 font-semibold hover:text-emerald-300 transition-colors">
                  Register for Conference
                </Link>
              </li>
              <li>
                <Link to="/submit-article" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Submit Research Abstract
                </Link>
              </li>
              <li>
                <Link to="/results" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Check Submission Results
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Secretariat &amp; Help Desk
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Social & Institutional Portal */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Institutional Channels</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-emerald-400 transition-colors flex items-center gap-1.5"
                >
                  <span>Facebook [Demo]</span>
                  <ExternalLink className="w-3 h-3 text-slate-600" />
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-emerald-400 transition-colors flex items-center gap-1.5"
                >
                  <span>LinkedIn [Demo]</span>
                  <ExternalLink className="w-3 h-3 text-slate-600" />
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-emerald-400 transition-colors flex items-center gap-1.5"
                >
                  <span>YouTube [Demo]</span>
                  <ExternalLink className="w-3 h-3 text-slate-600" />
                </a>
              </li>
              <li>
                <a
                  href="https://cu.ac.bd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:underline flex items-center gap-1.5 text-xs font-medium pt-1"
                >
                  <span>cu.ac.bd</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800 bg-black/40 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © 2026 2nd International Biotechnology Conference. All Rights Reserved. University of Chittagong.
          </div>

          <div className="flex items-center gap-4">
            <span className="text-slate-500">Demo Prototype for Organizing Committee</span>
            <span>·</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300"
              aria-label="Scroll to top of page"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
