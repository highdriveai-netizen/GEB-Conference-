import React, { useState } from 'react';
import { Mail, Phone, Globe, MapPin, Send, CheckCircle2, Building, MessageSquare, AlertCircle } from 'lucide-react';
import { CONFERENCE_INFO } from '../data/conferenceData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMsg('Please complete all required fields before submitting.');
      return;
    }
    setErrorMsg('');
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 bg-slate-50/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="text-xs sm:text-sm font-bold text-emerald-800 uppercase tracking-widest mb-2 flex items-center gap-2">
            <span className="w-6 h-0.5 bg-emerald-600 inline-block" />
            <span>Conference Secretariat</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Contact Us
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            For academic inquiries, registration queries, or corporate partnership expressions, please contact the organizing committee.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Secretariat Details & Map */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-2xs space-y-5">
              <div className="flex items-center gap-2.5 pb-4 border-b border-slate-100">
                <Building className="w-5 h-5 text-emerald-700" />
                <h3 className="text-base sm:text-lg font-bold text-slate-900">
                  Secretariat Headquarters
                </h3>
              </div>

              <div className="space-y-4 text-sm text-slate-600">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 font-semibold">Official Postal Address</strong>
                    <span>Department of Genetic Engineering &amp; Biotechnology</span>
                    <br />
                    <span>Faculty of Biological Sciences</span>
                    <br />
                    <span>University of Chittagong, Chattogram 4331, Bangladesh</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-emerald-600 shrink-0" />
                  <div>
                    <strong className="block text-slate-900 font-semibold">Email Desk</strong>
                    <span className="text-emerald-800 font-mono text-xs">{CONFERENCE_INFO.contactEmail}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-emerald-600 shrink-0" />
                  <div>
                    <strong className="block text-slate-900 font-semibold">Telephone / Mobile Helpline</strong>
                    <span className="text-slate-800 font-mono text-xs">{CONFERENCE_INFO.contactPhone}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-emerald-600 shrink-0" />
                  <div>
                    <strong className="block text-slate-900 font-semibold">Official Web Portal</strong>
                    <span className="text-emerald-700 text-xs">{CONFERENCE_INFO.contactWebsite}</span>
                  </div>
                </div>
              </div>

              <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg text-xs text-amber-900">
                <strong>Notice:</strong> Contact numbers and emails above are configured as placeholders and can be edited in <code>conferenceData.ts</code>.
              </div>
            </div>

            {/* University Campus Visual Map Placeholder */}
            <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-2xs space-y-3">
              <div className="flex items-center justify-between text-xs font-semibold text-slate-700">
                <span>Campus Location: University of Chittagong</span>
                <span className="text-emerald-700">Hathazari, Chattogram</span>
              </div>
              
              <div className="relative rounded-xl overflow-hidden aspect-[16/9] bg-slate-100 border border-slate-200 flex items-center justify-center text-center p-4">
                <img
                  src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=700&q=80"
                  alt="University of Chittagong Campus Map Area"
                  className="absolute inset-0 w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-emerald-950/40 backdrop-blur-[1px]" />
                <div className="relative z-10 text-white space-y-1">
                  <MapPin className="w-8 h-8 text-emerald-300 mx-auto animate-bounce" />
                  <div className="text-sm font-bold">University of Chittagong Campus</div>
                  <div className="text-xs text-emerald-100">[Interactive Map Placeholder]</div>
                  <a
                    href="https://maps.google.com/?q=University+of+Chittagong"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-1 text-[11px] font-semibold bg-white/90 text-emerald-900 px-2.5 py-1 rounded shadow-xs hover:bg-white transition-colors"
                  >
                    Open in Google Maps ↗
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Message Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-2xs">
              <div className="mb-6">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                  Send a Message to the Secretariat
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Have inquiries regarding registration, presentations, or accommodation? Leave your message below.
                </p>
              </div>

              {isSubmitted ? (
                <div className="p-8 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-3 animate-in fade-in">
                  <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="text-lg font-bold text-emerald-950">Message Transmitted (Demo)</h4>
                  <p className="text-xs sm:text-sm text-emerald-800 max-w-md mx-auto">
                    Thank you, <strong>{formData.name}</strong>. In the production deployment with a connected backend, your message will be routed directly to <code>{CONFERENCE_INFO.contactEmail}</code>.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="mt-4 px-4 py-2 text-xs font-semibold text-emerald-800 bg-white border border-emerald-300 rounded-md hover:bg-emerald-50 transition-colors shadow-2xs"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMsg && (
                    <div className="p-3 bg-red-50 border border-red-200 rounded-md text-xs text-red-800 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-700 mb-1">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="contact-name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Dr. / Mr. / Ms. Full Name"
                        className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-700 mb-1">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="contact-email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="author@institution.edu"
                        className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-subject" className="block text-xs font-semibold text-slate-700 mb-1">
                      Inquiry Subject
                    </label>
                    <input
                      type="text"
                      id="contact-subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Abstract Guidelines / Delegate Accommodation / Registration"
                      className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-700 mb-1">
                      Your Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please specify your query or institutional request..."
                      className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white text-sm font-semibold rounded-md shadow-xs transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-600"
                    >
                      <Send className="w-4 h-4" />
                      <span>SEND MESSAGE</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
