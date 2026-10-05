import React from 'react';
import { Building2, Award, ExternalLink, Dna, Compass, GraduationCap } from 'lucide-react';
import { CONFERENCE_INFO } from '../data/conferenceData';

export const Organizer: React.FC = () => {
  return (
    <section id="organizer" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="text-xs sm:text-sm font-bold text-emerald-800 uppercase tracking-widest mb-2 flex items-center gap-2">
            <span className="w-6 h-0.5 bg-emerald-600 inline-block" />
            <span>Institutional Leadership &amp; Host</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Organized By
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Conducted by the Department of Genetic Engineering &amp; Biotechnology, Faculty of Biological Sciences, University of Chittagong.
          </p>
        </div>

        {/* Institutional Host Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Host Card */}
          <div className="lg:col-span-7 bg-slate-50/80 rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 pb-6 border-b border-slate-200">
              <div className="w-20 h-20 rounded-xl bg-white border border-slate-200 p-2 shrink-0 shadow-2xs flex items-center justify-center">
                <img
                  src="/images/department-logo.svg"
                  alt="GEB CU Department Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">Host Department</span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                  Department of Genetic Engineering &amp; Biotechnology
                </h3>
                <p className="text-sm font-medium text-slate-600">
                  University of Chittagong · Established 2004
                </p>
              </div>
            </div>

            <div className="text-sm text-slate-700 space-y-3 leading-relaxed">
              <p>
                The Department of Genetic Engineering and Biotechnology (GEB), University of Chittagong was established in 2004 with a forward-looking vision to advance molecular life sciences and biotechnology education in Bangladesh.
              </p>
              <p>
                For over two decades, through rigorous teaching and internationally recognized research, the department has trained graduates who are now serving around the globe across academia, clinical genomics, agriculture, and high-tech biotechnology enterprises. Faculty and scholars regularly publish in premier high-impact international journals.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap gap-4">
              <a
                href="https://cu.ac.bd"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-800 hover:text-emerald-950 bg-emerald-100/60 px-3 py-1.5 rounded-md hover:bg-emerald-100 transition-colors"
              >
                <span>Visit University of Chittagong Portal</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://cu.ac.bd/geb"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-white border border-slate-200 px-3 py-1.5 rounded-md hover:bg-slate-50 transition-colors"
              >
                <span>Department of GEB Webpage</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Institutional Partners & Crests */}
          <div className="lg:col-span-5 space-y-5">
            {/* University of Chittagong Seal Card */}
            <div className="bg-white rounded-xl border border-slate-200 p-5 flex items-center gap-4 shadow-2xs">
              <div className="w-16 h-16 rounded-xl bg-slate-50 border border-slate-200 p-1.5 shrink-0 flex items-center justify-center">
                <img
                  src="/images/university-logo.svg"
                  alt="University of Chittagong Institutional Seal"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="space-y-0.5">
                <h4 className="text-base font-bold text-slate-900">University of Chittagong</h4>
                <p className="text-xs text-slate-500">Autonomous public research university established in 1966</p>
                <span className="text-[11px] text-emerald-700 font-semibold block pt-0.5">Host Academic Institution</span>
              </div>
            </div>

            {/* National Institute of Biotechnology (NIB) Partner */}
            <div className="bg-white rounded-xl border border-slate-200 p-5 flex items-center gap-4 shadow-2xs">
              <div className="w-16 h-16 rounded-xl bg-slate-50 border border-slate-200 p-1.5 shrink-0 flex items-center justify-center">
                <img
                  src="/images/nib-logo.svg"
                  alt="National Institute of Biotechnology"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="space-y-0.5">
                <h4 className="text-base font-bold text-slate-900">National Institute of Biotechnology (NIB)</h4>
                <p className="text-xs text-slate-500">Ministry of Science &amp; Technology, Govt. of Bangladesh</p>
                <span className="text-[11px] text-emerald-700 font-semibold block pt-0.5">Institutional Collaborating Partner</span>
              </div>
            </div>

            {/* University Grants Commission (UGC) Courtesy */}
            <div className="bg-white rounded-xl border border-slate-200 p-5 flex items-center gap-4 shadow-2xs">
              <div className="w-16 h-16 rounded-xl bg-slate-50 border border-slate-200 p-1.5 shrink-0 flex items-center justify-center">
                <img
                  src="/images/ugc-logo.svg"
                  alt="University Grants Commission Courtesy"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="space-y-0.5">
                <h4 className="text-base font-bold text-slate-900">University Grants Commission (UGC)</h4>
                <p className="text-xs text-slate-500">Higher education apex regulatory &amp; research facilitator</p>
                <span className="text-[11px] text-slate-600 font-semibold block pt-0.5">Academic Courtesy &amp; Recognition</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
