import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Dna, GraduationCap, Award, Globe, Users, CheckCircle2, ArrowRight } from 'lucide-react';
import { Organizer } from '../components/Organizer';

export const AboutPage: React.FC = () => {
  return (
    <div className="py-12 bg-white">
      {/* Page Header Banner */}
      <div className="bg-gradient-to-r from-[#044e3b] to-[#0f766e] text-white py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-emerald-200 text-xs font-semibold uppercase tracking-wider">
            <Building2 className="w-3.5 h-3.5 text-emerald-300" />
            <span>Institutional Profile &amp; Mission</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            About the Conference &amp; Department
          </h1>
          <p className="text-emerald-100 max-w-3xl text-sm sm:text-base leading-relaxed">
            Pioneering genetic engineering and biotechnology research, higher education, and international academic partnerships at the University of Chittagong.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* Section 1: Legacy from 2023 to 2026 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5">
            <div className="text-xs font-bold text-emerald-800 uppercase tracking-widest">
              From National Excellence to Global Collaboration
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-snug">
              Evolution of the Biotechnology Conference Series
            </h2>
            <div className="text-sm sm:text-base text-slate-700 space-y-4 leading-relaxed">
              <p>
                In 2023, the Department of Genetic Engineering and Biotechnology organized the <strong>National Biotechnology Conference 2023 (NBC 2023)</strong> with the rallying motto: <em>“Next Generation Biotechnology: Towards Excellence”</em>. The conference convened hundreds of biological scientists, university faculty, student investigators, and industry innovators across Bangladesh.
              </p>
              <p>
                Building on this strong foundation, the <strong>2nd International Biotechnology Conference 2026 (IBC 2026)</strong> broadens the horizon into a premier global congress. The 2026 edition invites distinguished international keynote speakers, cross-border research teams, overseas delegates, and multinational biotechnology technology providers.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs sm:text-sm text-emerald-950 flex items-start gap-3">
              <Dna className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
              <div>
                <strong className="block font-semibold">2026 Central Theme:</strong>
                <span>“Next Generation Biotechnology: Exploring Emerging Frontiers &amp; Global Collaboration”</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md">
              <img
                src="https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=800&q=80"
                alt="Biotechnology researchers evaluating laboratory assays"
                className="w-full h-72 object-cover"
              />
              <div className="p-4 bg-slate-900 text-white text-xs">
                <span className="font-semibold text-emerald-300">Archive Reference: NBC 2023 Series</span>
                <p className="text-slate-300 mt-1">Conducted at the Faculty of Biological Sciences, University of Chittagong.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Department Background */}
        <div className="bg-slate-50 rounded-2xl p-8 sm:p-10 border border-slate-200 space-y-6">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest">
              Established 2004 · University of Chittagong
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Department of Genetic Engineering &amp; Biotechnology (GEB)
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-slate-700 leading-relaxed">
            <div className="space-y-4">
              <p>
                The Department of Genetic Engineering and Biotechnology (GEB) at the University of Chittagong was founded in 2004 to provide rigorous higher education in modern molecular sciences, recombinant DNA technology, and bioengineering.
              </p>
              <p>
                The department operates state-of-the-art laboratory facilities focusing on microbial biotechnology, molecular diagnostics, crop plant functional genomics, bioinformatics, and natural products pharmacology.
              </p>
            </div>
            <div className="space-y-4">
              <p>
                GEB graduates consistently gain admission and research fellowships at world-leading academic centers across North America, Europe, Asia, and Oceania, while also driving domestic pharmaceutical manufacturing and diagnostic excellence.
              </p>
              <p>
                Research findings authored by GEB faculty are regularly published in top-ranked peer-reviewed journals including Elsevier, Springer Nature, Wiley, and Frontiers.
              </p>
            </div>
          </div>
        </div>

        {/* Section 3: Organizing Committee Structure (Placeholders) */}
        <div className="space-y-8">
          <div>
            <div className="text-xs font-bold text-emerald-800 uppercase tracking-widest mb-1">
              Leadership &amp; Governance
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Conference Organizing Committee Structure
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Official committee members and patrons to be confirmed by the University of Chittagong Syndicate &amp; Departmental Academic Committee.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-2">
              <div className="text-xs font-bold text-emerald-700 uppercase tracking-wider">Chief Patron</div>
              <h3 className="text-base font-bold text-slate-900">Vice-Chancellor</h3>
              <p className="text-xs text-slate-600">University of Chittagong, Bangladesh</p>
              <span className="text-[11px] text-slate-400 block pt-2">[Institutional Ex-Officio Patron]</span>
            </div>

            <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-2">
              <div className="text-xs font-bold text-emerald-700 uppercase tracking-wider">Patron</div>
              <h3 className="text-base font-bold text-slate-900">Dean, Faculty of Biological Sciences</h3>
              <p className="text-xs text-slate-600">University of Chittagong</p>
              <span className="text-[11px] text-slate-400 block pt-2">[Institutional Ex-Officio Patron]</span>
            </div>

            <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-2">
              <div className="text-xs font-bold text-emerald-700 uppercase tracking-wider">Organizing Chair</div>
              <h3 className="text-base font-bold text-slate-900">Chairman, Dept. of GEB</h3>
              <p className="text-xs text-slate-600">University of Chittagong</p>
              <span className="text-[11px] text-slate-400 block pt-2">[Departmental Executive Head]</span>
            </div>

            <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-2">
              <div className="text-xs font-bold text-emerald-700 uppercase tracking-wider">Organizing Secretary</div>
              <h3 className="text-base font-bold text-slate-900">[Faculty Member / Professor]</h3>
              <p className="text-xs text-slate-600">Department of GEB, University of Chittagong</p>
              <span className="text-[11px] text-slate-400 block pt-2">[Committee Appointment TBA]</span>
            </div>

            <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-2">
              <div className="text-xs font-bold text-emerald-700 uppercase tracking-wider">Scientific Review Committee</div>
              <h3 className="text-base font-bold text-slate-900">Board of Peer Reviewers</h3>
              <p className="text-xs text-slate-600">GEB Faculty &amp; National / International Experts</p>
              <span className="text-[11px] text-slate-400 block pt-2">[Abstract Peer-Review Panel]</span>
            </div>

            <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-2">
              <div className="text-xs font-bold text-emerald-700 uppercase tracking-wider">Secretariat &amp; Logistics</div>
              <h3 className="text-base font-bold text-slate-900">GEB Faculty, Staff &amp; Scholars</h3>
              <p className="text-xs text-slate-600">University of Chittagong</p>
              <span className="text-[11px] text-slate-400 block pt-2">[Logistics &amp; Reception Desk]</span>
            </div>
          </div>
        </div>

        {/* Organizer Component */}
        <Organizer />

        {/* Call to Action */}
        <div className="text-center bg-emerald-900 text-white rounded-2xl p-8 sm:p-12 space-y-4">
          <h3 className="text-2xl sm:text-3xl font-extrabold">Participate in IBC 2026</h3>
          <p className="text-emerald-100 max-w-xl mx-auto text-sm sm:text-base">
            Join international researchers, faculty members, and student scholars at the picturesque campus of the University of Chittagong.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <Link
              to="/register"
              className="px-6 py-3 bg-white text-emerald-950 font-bold rounded-md hover:bg-emerald-50 transition-colors"
            >
              Register for Conference
            </Link>
            <Link
              to="/submit-article"
              className="px-6 py-3 bg-emerald-800 border border-emerald-400/40 text-white font-semibold rounded-md hover:bg-emerald-700 transition-colors"
            >
              Submit an Abstract
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
