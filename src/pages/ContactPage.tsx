import React from 'react';
import { Mail, MapPin, Compass, Train, Car, Plane } from 'lucide-react';
import { Contact } from '../components/Contact';

export const ContactPage: React.FC = () => {
  return (
    <div className="py-12 bg-white">
      {/* Banner */}
      <div className="bg-gradient-to-r from-[#044e3b] to-[#0f766e] text-white py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-emerald-200 text-xs font-semibold uppercase tracking-wider">
            <Mail className="w-3.5 h-3.5 text-emerald-300" />
            <span>Secretariat &amp; Travel Assistance</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Contact Secretariat &amp; Venue
          </h1>
          <p className="text-emerald-100 max-w-3xl text-sm sm:text-base leading-relaxed">
            Get in touch with the conference organizing team for academic queries, sponsorship prospectus, or delegate travel guidance to the University of Chittagong.
          </p>
        </div>
      </div>

      {/* Main Contact Section */}
      <Contact />

      {/* Campus Travel & Arrival Information */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div>
            <div className="text-xs font-bold text-emerald-800 uppercase tracking-widest mb-1 flex items-center gap-2">
              <Compass className="w-4 h-4 text-emerald-600" />
              <span>Delegate Travel Information</span>
            </div>
            <h2 className="text-2xl font-bold text-slate-900">
              Reaching the University of Chittagong
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Situated in the hilly, green landscapes of Hathazari, Chattogram, Bangladesh.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center">
                <Plane className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">By Air</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Fly to <strong>Shah Amanat International Airport (CGP)</strong> in Chattogram. Taxis and ride-sharing vehicles connect directly to the University of Chittagong campus (~35 km / 60–80 mins).
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center">
                <Train className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">By Rail &amp; Shuttle Train</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Connect via <strong>Chattogram Railway Station</strong>. The famous University Shuttle Train runs scheduled daily services between the city center and the campus station.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center">
                <Car className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">By Road &amp; Highway</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Regular AC buses connect Dhaka and other metropolitan divisions to Chattogram (AK Khan / GEC Circle), with local taxis and campus buses operating to the Biological Sciences Faculty.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
