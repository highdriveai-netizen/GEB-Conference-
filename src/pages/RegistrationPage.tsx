import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { UserCheck, CheckCircle2, AlertCircle, FileText, Download, Printer, ArrowRight, ShieldCheck, CreditCard } from 'lucide-react';
import { REGISTRATION_CATEGORIES, CONFERENCE_INFO } from '../data/conferenceData';

interface RegistrationForm {
  fullName: string;
  email: string;
  phone: string;
  institution: string;
  designation: string;
  country: string;
  participantType: string;
  registrationCategory: string;
  dietaryRequirements: string;
  specialRequirements: string;
  message: string;
  termsAgreed: boolean;
}

export const RegistrationPage: React.FC = () => {
  const [formData, setFormData] = useState<RegistrationForm>({
    fullName: '',
    email: '',
    phone: '',
    institution: '',
    designation: '',
    country: 'Bangladesh',
    participantType: 'Student',
    registrationCategory: 'cat-student',
    dietaryRequirements: 'None / Standard',
    specialRequirements: '',
    message: '',
    termsAgreed: false,
  });

  const [referenceNumber, setReferenceNumber] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full Name is required.';
    if (!formData.email.trim() || !formData.email.includes('@')) errs.email = 'Valid institutional or personal email is required.';
    if (!formData.phone.trim()) errs.phone = 'Contact telephone or mobile number is required.';
    if (!formData.institution.trim()) errs.institution = 'Institution or organization is required.';
    if (!formData.designation.trim()) errs.designation = 'Current academic designation is required.';
    if (!formData.country.trim()) errs.country = 'Country is required.';
    if (!formData.termsAgreed) errs.termsAgreed = 'You must agree to the conference participation terms.';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Generate Demo Reference
    const generatedRef = `IBC26-DEMO-${Math.floor(10000 + Math.random() * 90000)}`;
    setReferenceNumber(generatedRef);

    // Save to localStorage for demo persistence
    try {
      const existing = JSON.parse(localStorage.getItem('ibc2026_registrations') || '[]');
      existing.push({
        referenceNumber: generatedRef,
        ...formData,
        date: new Date().toISOString(),
      });
      localStorage.setItem('ibc2026_registrations', JSON.stringify(existing));
    } catch (e) {
      console.warn('LocalStorage save skipped', e);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="py-12 bg-white">
      {/* Banner */}
      <div className="bg-gradient-to-r from-[#044e3b] to-[#0f766e] text-white py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-emerald-200 text-xs font-semibold uppercase tracking-wider">
            <UserCheck className="w-3.5 h-3.5 text-emerald-300" />
            <span>Delegate &amp; Participant Enrollment</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Register for the Conference
          </h1>
          <p className="text-emerald-100 max-w-3xl text-sm sm:text-base leading-relaxed">
            Join the international scientific gathering at the University of Chittagong. Complete the registration form below to receive your provisional delegate reference.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-12">
        {/* Registration Categories Overview */}
        <div className="space-y-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Registration Categories &amp; Entitlements
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              Select your appropriate academic delegate category. Official finalized fee figures will be issued by the steering committee.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {REGISTRATION_CATEGORIES.map((cat) => (
              <div
                key={cat.id}
                onClick={() => setFormData({ ...formData, registrationCategory: cat.id })}
                className={`p-5 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                  formData.registrationCategory === cat.id
                    ? 'border-emerald-600 bg-emerald-50/50 ring-2 ring-emerald-600/20 shadow-sm'
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Category</span>
                    {formData.registrationCategory === cat.id && (
                      <span className="text-[11px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                        Selected
                      </span>
                    )}
                  </div>

                  <h3 className="text-base font-bold text-slate-900 leading-snug">
                    {cat.name}
                  </h3>

                  <div className="text-sm font-extrabold text-emerald-800">
                    {cat.feeDemo}
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {cat.description}
                  </p>

                  <ul className="text-xs text-slate-500 space-y-1 pt-2 border-t border-slate-100">
                    {cat.benefits.map((b, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-emerald-600 font-bold">✓</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Demo Notice Banner */}
        <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <strong>Demonstrator Notice:</strong> This is a frontend demo interface for the conference committee. No payment processing (bKash/Nagad/Cards) is connected at this prototype stage. Upon form completion, a provisional reference number is generated and stored locally.
          </div>
        </div>

        {/* Success Screen or Registration Form */}
        {referenceNumber ? (
          <div className="max-w-2xl mx-auto bg-white rounded-2xl border border-slate-200 p-8 shadow-lg text-center space-y-6 animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl font-extrabold text-slate-900">
                Registration Submitted Successfully
              </h2>
              <p className="text-sm text-slate-600">
                Thank you for registering for the <strong>2nd International Biotechnology Conference 2026</strong>.
              </p>
            </div>

            <div className="p-5 bg-slate-50 rounded-xl border border-slate-200 max-w-md mx-auto space-y-2">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                Registration Reference
              </span>
              <div className="text-2xl font-mono font-extrabold text-emerald-800 tracking-wider">
                {referenceNumber}
              </div>
              <p className="text-xs text-slate-500 pt-1">
                Please retain this demo reference for correspondence with the Secretariat.
              </p>
            </div>

            <div className="text-left text-xs text-slate-600 bg-emerald-50/60 p-4 rounded-lg border border-emerald-100 space-y-1.5">
              <div><strong>Registered Delegate:</strong> {formData.fullName}</div>
              <div><strong>Email:</strong> {formData.email}</div>
              <div><strong>Institution:</strong> {formData.institution}</div>
              <div><strong>Category:</strong> {formData.participantType}</div>
            </div>

            <div className="pt-2 flex flex-wrap justify-center gap-3">
              <button
                type="button"
                onClick={handlePrint}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-300 rounded-md hover:bg-slate-50 shadow-2xs"
              >
                <Printer className="w-4 h-4 text-slate-600" />
                <span>Print Confirmation</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setReferenceNumber(null);
                  setFormData({
                    fullName: '',
                    email: '',
                    phone: '',
                    institution: '',
                    designation: '',
                    country: 'Bangladesh',
                    participantType: 'Student',
                    registrationCategory: 'cat-student',
                    dietaryRequirements: 'None / Standard',
                    specialRequirements: '',
                    message: '',
                    termsAgreed: false,
                  });
                }}
                className="inline-flex items-center gap-2 px-5 py-2 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-md shadow-2xs"
              >
                <span>New Registration</span>
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm max-w-4xl mx-auto">
            <div className="mb-8 pb-4 border-b border-slate-200">
              <h3 className="text-xl font-bold text-slate-900">Delegate Registration Form</h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Please provide accurate personal and institutional details. All fields marked with (*) are required.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Row 1: Name and Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="reg-name" className="block text-xs font-semibold text-slate-700 mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="reg-name"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Dr. Sabrina Rahman / Md. Tanvir Ahmed"
                    className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white"
                  />
                  {errors.fullName && <p className="text-xs text-red-600 mt-1">{errors.fullName}</p>}
                </div>

                <div>
                  <label htmlFor="reg-email" className="block text-xs font-semibold text-slate-700 mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="reg-email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="author@institution.edu.bd"
                    className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white"
                  />
                  {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
                </div>
              </div>

              {/* Row 2: Phone and Country */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="reg-phone" className="block text-xs font-semibold text-slate-700 mb-1">
                    Telephone / Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="reg-phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+880 1XXXXXXXXX"
                    className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white"
                  />
                  {errors.phone && <p className="text-xs text-red-600 mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label htmlFor="reg-country" className="block text-xs font-semibold text-slate-700 mb-1">
                    Country of Residence <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="reg-country"
                    required
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    placeholder="Bangladesh / International"
                    className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white"
                  />
                  {errors.country && <p className="text-xs text-red-600 mt-1">{errors.country}</p>}
                </div>
              </div>

              {/* Row 3: Institution and Designation */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="reg-inst" className="block text-xs font-semibold text-slate-700 mb-1">
                    Institution / University / Company <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="reg-inst"
                    required
                    value={formData.institution}
                    onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                    placeholder="University of Chittagong / Other Institution"
                    className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white"
                  />
                  {errors.institution && <p className="text-xs text-red-600 mt-1">{errors.institution}</p>}
                </div>

                <div>
                  <label htmlFor="reg-desig" className="block text-xs font-semibold text-slate-700 mb-1">
                    Designation / Title <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="reg-desig"
                    required
                    value={formData.designation}
                    onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                    placeholder="Professor / Graduate Student / Research Associate"
                    className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white"
                  />
                  {errors.designation && <p className="text-xs text-red-600 mt-1">{errors.designation}</p>}
                </div>
              </div>

              {/* Row 4: Participant Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="reg-part-type" className="block text-xs font-semibold text-slate-700 mb-1">
                    Participant Type <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="reg-part-type"
                    value={formData.participantType}
                    onChange={(e) => setFormData({ ...formData, participantType: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white"
                  >
                    <option value="Student">Student (Undergraduate / Masters)</option>
                    <option value="Research Scholar">Research Scholar (PhD / Postdoc)</option>
                    <option value="Faculty / Researcher">Faculty / University Researcher</option>
                    <option value="Industry Professional">Industry / Corporate Professional</option>
                    <option value="International Delegate">International Delegate</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="reg-diet" className="block text-xs font-semibold text-slate-700 mb-1">
                    Dietary Requirements (Lunch &amp; Banquet)
                  </label>
                  <select
                    id="reg-diet"
                    value={formData.dietaryRequirements}
                    onChange={(e) => setFormData({ ...formData, dietaryRequirements: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white"
                  >
                    <option value="None / Standard">Standard Regular Meal</option>
                    <option value="Vegetarian">Strict Vegetarian</option>
                    <option value="Halal">Halal (Standard)</option>
                    <option value="Gluten-Free">Gluten-Free / Specific</option>
                  </select>
                </div>
              </div>

              {/* Special Requirements */}
              <div>
                <label htmlFor="reg-special" className="block text-xs font-semibold text-slate-700 mb-1">
                  Special Requirements or Accessibility Needs
                </label>
                <input
                  type="text"
                  id="reg-special"
                  value={formData.specialRequirements}
                  onChange={(e) => setFormData({ ...formData, specialRequirements: e.target.value })}
                  placeholder="e.g. Wheelchair access, prayer space, poster display logistics"
                  className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="reg-msg" className="block text-xs font-semibold text-slate-700 mb-1">
                  Message / Notes for Secretariat
                </label>
                <textarea
                  id="reg-msg"
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Optional comments or question for the organizing committee..."
                  className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white"
                />
              </div>

              {/* Terms Checkbox */}
              <div className="pt-2">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.termsAgreed}
                    onChange={(e) => setFormData({ ...formData, termsAgreed: e.target.checked })}
                    className="mt-1 h-4 w-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
                  />
                  <span className="text-xs text-slate-600 leading-relaxed">
                    I agree to the conference participation terms, scientific code of conduct, and privacy policy for the 2nd International Biotechnology Conference 2026.
                  </span>
                </label>
                {errors.termsAgreed && <p className="text-xs text-red-600 mt-1">{errors.termsAgreed}</p>}
              </div>

              {/* Submit Button */}
              <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-slate-400">
                  Provisional demo reference will be issued upon click.
                </span>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 bg-emerald-700 hover:bg-emerald-800 active:bg-emerald-900 text-white font-bold text-sm rounded-md shadow-md transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2"
                >
                  COMPLETE REGISTRATION
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
