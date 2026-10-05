import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FileUp, CheckCircle2, AlertCircle, FileText, ArrowRight, Upload, X, Info } from 'lucide-react';
import { CONFERENCE_THEMES, SUBMISSION_GUIDELINES } from '../data/conferenceData';

interface SubmissionForm {
  authorName: string;
  email: string;
  phone: string;
  institution: string;
  country: string;
  title: string;
  category: string;
  presentationType: string;
  coAuthors: string;
  abstractText: string;
  keywords: string;
  termsAgreed: boolean;
}

export const SubmitArticlePage: React.FC = () => {
  const [formData, setFormData] = useState<SubmissionForm>({
    authorName: '',
    email: '',
    phone: '',
    institution: '',
    country: 'Bangladesh',
    title: '',
    category: CONFERENCE_THEMES[0].title,
    presentationType: 'Oral Presentation',
    coAuthors: '',
    abstractText: '',
    keywords: '',
    termsAgreed: false,
  });

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [submissionId, setSubmissionId] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Real-time word count calculation
  const getWordCount = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return 0;
    return trimmed.split(/\s+/).length;
  };

  const wordCount = getWordCount(formData.abstractText);
  const maxWords = 250;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.authorName.trim()) errs.authorName = 'Corresponding / presenting author name is required.';
    if (!formData.email.trim() || !formData.email.includes('@')) errs.email = 'Valid academic or correspondence email is required.';
    if (!formData.phone.trim()) errs.phone = 'Contact telephone or mobile number is required.';
    if (!formData.institution.trim()) errs.institution = 'Institution or university affiliation is required.';
    if (!formData.country.trim()) errs.country = 'Country is required.';
    if (!formData.title.trim()) errs.title = 'Manuscript / abstract title is required.';
    if (!formData.abstractText.trim()) {
      errs.abstractText = 'Abstract body text is required.';
    } else if (wordCount > maxWords) {
      errs.abstractText = `Abstract exceeds the maximum ${maxWords} words limit (currently ${wordCount} words).`;
    }
    if (!formData.keywords.trim()) errs.keywords = 'At least 3-5 scientific keywords are required.';
    if (!formData.termsAgreed) errs.termsAgreed = 'You must confirm the scientific originality of your submission.';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!validTypes.includes(file.type) && !file.name.match(/\.(pdf|doc|docx)$/i)) {
        setErrors((prev) => ({ ...prev, file: 'Only PDF, DOC, or DOCX formats are supported.' }));
        return;
      }
      if (file.size > 10 * 1024 * 1024) {
        setErrors((prev) => ({ ...prev, file: 'File exceeds 10MB maximum size limit.' }));
        return;
      }
      setSelectedFile(file);
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy.file;
        return copy;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Generate Demo Submission ID
    const newId = `IBC26-DEMO-${Math.floor(10000 + Math.random() * 90000)}`;
    setSubmissionId(newId);

    // Save demo entry to localStorage so results lookup finds it immediately!
    try {
      const existing = JSON.parse(localStorage.getItem('ibc2026_user_submissions') || '[]');
      existing.push({
        submissionId: newId,
        email: formData.email,
        title: formData.title,
        authors: `${formData.authorName}${formData.coAuthors ? ', ' + formData.coAuthors : ''}`,
        category: formData.category,
        presentationType: formData.presentationType,
        status: 'Under Review',
        reviewComments: 'Your manuscript abstract has been logged into the peer-review queue. Evaluation is underway by the scientific committee.',
        dateChecked: 'Submitted ' + new Date().toLocaleDateString(),
      });
      localStorage.setItem('ibc2026_user_submissions', JSON.stringify(existing));
    } catch (err) {
      console.warn('Storage write failed', err);
    }
  };

  return (
    <div className="py-12 bg-white">
      {/* Banner */}
      <div className="bg-gradient-to-r from-[#044e3b] to-[#0f766e] text-white py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-emerald-200 text-xs font-semibold uppercase tracking-wider">
            <FileUp className="w-3.5 h-3.5 text-emerald-300" />
            <span>Scientific Paper Submission Portal</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Submit Article / Abstract
          </h1>
          <p className="text-emerald-100 max-w-3xl text-sm sm:text-base leading-relaxed">
            “Share your research with the biotechnology community.” Submit your structured scientific abstract for peer-review evaluation by the GEB academic committee.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-10">
        {/* Guidelines summary pill */}
        <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200 text-xs sm:text-sm text-emerald-950 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <Info className="w-5 h-5 text-emerald-700 shrink-0" />
            <span>
              <strong>Requirements:</strong> Max 250 words body · Times New Roman 12pt · PDF/DOC/DOCX up to 10MB · No submission fees.
            </span>
          </div>
          <Link
            to="/results"
            className="shrink-0 text-xs font-bold text-emerald-800 underline decoration-emerald-500"
          >
            Check Existing Submission Status →
          </Link>
        </div>

        {/* Success Screen or Form */}
        {submissionId ? (
          <div className="max-w-2xl mx-auto bg-white rounded-2xl border border-slate-200 p-8 shadow-lg text-center space-y-6 animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl font-extrabold text-slate-900">
                Submission Successful
              </h2>
              <p className="text-sm text-slate-600">
                Your research abstract has been recorded in the conference peer-review database.
              </p>
            </div>

            <div className="p-5 bg-slate-50 rounded-xl border border-slate-200 max-w-md mx-auto space-y-2">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                Submission ID
              </span>
              <div className="text-2xl font-mono font-extrabold text-emerald-800 tracking-wider">
                {submissionId}
              </div>
              <p className="text-xs text-slate-500 pt-1">
                You can immediately look up this submission on the <strong>Results</strong> page.
              </p>
            </div>

            <div className="text-left text-xs text-slate-600 bg-emerald-50/60 p-4 rounded-lg border border-emerald-100 space-y-1.5">
              <div><strong>Paper Title:</strong> {formData.title}</div>
              <div><strong>Presenting Author:</strong> {formData.authorName}</div>
              <div><strong>Category:</strong> {formData.category}</div>
              <div><strong>Track:</strong> {formData.presentationType}</div>
            </div>

            <div className="pt-2 flex flex-wrap justify-center gap-3">
              <Link
                to="/results"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-md shadow-2xs"
              >
                <span>Check Submission Status on Results Page</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <button
                type="button"
                onClick={() => {
                  setSubmissionId(null);
                  setSelectedFile(null);
                  setFormData({
                    authorName: '',
                    email: '',
                    phone: '',
                    institution: '',
                    country: 'Bangladesh',
                    title: '',
                    category: CONFERENCE_THEMES[0].title,
                    presentationType: 'Oral Presentation',
                    coAuthors: '',
                    abstractText: '',
                    keywords: '',
                    termsAgreed: false,
                  });
                }}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-700 bg-white border border-slate-300 rounded-md hover:bg-slate-50"
              >
                <span>Submit Another Abstract</span>
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm max-w-4xl mx-auto">
            <div className="mb-8 pb-4 border-b border-slate-200">
              <h3 className="text-xl font-bold text-slate-900">Manuscript Abstract Submission Form</h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Ensure all co-author names, institutional affiliations, and the structured abstract body are filled accurately.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Presenting Author Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="sub-name" className="block text-xs font-semibold text-slate-700 mb-1">
                    Presenting / Corresponding Author <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="sub-name"
                    required
                    value={formData.authorName}
                    onChange={(e) => setFormData({ ...formData, authorName: e.target.value })}
                    placeholder="Full name of author who will present"
                    className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white"
                  />
                  {errors.authorName && <p className="text-xs text-red-600 mt-1">{errors.authorName}</p>}
                </div>

                <div>
                  <label htmlFor="sub-email" className="block text-xs font-semibold text-slate-700 mb-1">
                    Correspondence Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="sub-email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="author@institution.edu"
                    className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white"
                  />
                  {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
                </div>
              </div>

              {/* Phone, Institution, Country */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="sub-phone" className="block text-xs font-semibold text-slate-700 mb-1">
                    Phone / Mobile <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="sub-phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+880 1XXXXXXXXX"
                    className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white"
                  />
                  {errors.phone && <p className="text-xs text-red-600 mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label htmlFor="sub-inst" className="block text-xs font-semibold text-slate-700 mb-1">
                    Institution Affiliation <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="sub-inst"
                    required
                    value={formData.institution}
                    onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                    placeholder="University / Research Institute"
                    className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white"
                  />
                  {errors.institution && <p className="text-xs text-red-600 mt-1">{errors.institution}</p>}
                </div>

                <div>
                  <label htmlFor="sub-country" className="block text-xs font-semibold text-slate-700 mb-1">
                    Country <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="sub-country"
                    required
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    placeholder="Bangladesh"
                    className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white"
                  />
                  {errors.country && <p className="text-xs text-red-600 mt-1">{errors.country}</p>}
                </div>
              </div>

              {/* Title */}
              <div>
                <label htmlFor="sub-title" className="block text-xs font-semibold text-slate-700 mb-1">
                  Article / Abstract Title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="sub-title"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="e.g. CRISPR-Cas9 Mediated Targeted Mutagenesis in Submergence-Tolerant Rice Cultivars"
                  className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white font-medium"
                />
                {errors.title && <p className="text-xs text-red-600 mt-1">{errors.title}</p>}
              </div>

              {/* Category & Presentation Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="sub-cat" className="block text-xs font-semibold text-slate-700 mb-1">
                    Research Thematic Area <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="sub-cat"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white"
                  >
                    {CONFERENCE_THEMES.map((theme) => (
                      <option key={theme.id} value={theme.title}>
                        {theme.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="sub-type" className="block text-xs font-semibold text-slate-700 mb-1">
                    Preferred Presentation Format <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="sub-type"
                    value={formData.presentationType}
                    onChange={(e) => setFormData({ ...formData, presentationType: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white"
                  >
                    <option value="Oral Presentation">Oral Presentation (10-12 mins)</option>
                    <option value="Poster Presentation">Poster Presentation (Board display)</option>
                  </select>
                </div>
              </div>

              {/* Co-Authors */}
              <div>
                <label htmlFor="sub-coauthors" className="block text-xs font-semibold text-slate-700 mb-1">
                  Co-Authors (comma separated)
                </label>
                <input
                  type="text"
                  id="sub-coauthors"
                  value={formData.coAuthors}
                  onChange={(e) => setFormData({ ...formData, coAuthors: e.target.value })}
                  placeholder="e.g. Dr. A. Rahman, S. Begum, T. Ahmed (Affiliation details)"
                  className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white"
                />
              </div>

              {/* Abstract Body with Real-time Word Counter */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label htmlFor="sub-abstract" className="text-xs font-semibold text-slate-700">
                    Abstract Body (Background, Methodology, Results, Conclusion) <span className="text-red-500">*</span>
                  </label>
                  <span
                    className={`text-xs font-mono font-semibold ${
                      wordCount > maxWords ? 'text-red-600' : 'text-slate-500'
                    }`}
                  >
                    {wordCount} / {maxWords} words
                  </span>
                </div>
                <textarea
                  id="sub-abstract"
                  rows={8}
                  required
                  value={formData.abstractText}
                  onChange={(e) => setFormData({ ...formData, abstractText: e.target.value })}
                  placeholder="Structure: Background/Objective(s), Methodology, Findings and Conclusion..."
                  className={`w-full px-3.5 py-2.5 text-sm bg-slate-50 border rounded-md focus:outline-none focus:ring-2 focus:bg-white ${
                    wordCount > maxWords
                      ? 'border-red-500 focus:ring-red-500'
                      : 'border-slate-300 focus:ring-emerald-600'
                  }`}
                />
                {errors.abstractText && <p className="text-xs text-red-600 mt-1">{errors.abstractText}</p>}
              </div>

              {/* Keywords */}
              <div>
                <label htmlFor="sub-keywords" className="block text-xs font-semibold text-slate-700 mb-1">
                  Keywords (3–5 terms) <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="sub-keywords"
                  required
                  value={formData.keywords}
                  onChange={(e) => setFormData({ ...formData, keywords: e.target.value })}
                  placeholder="e.g. CRISPR, Rice Genomics, Salinity Stress, Gene Expression"
                  className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white"
                />
                {errors.keywords && <p className="text-xs text-red-600 mt-1">{errors.keywords}</p>}
              </div>

              {/* File Attachment Upload */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Manuscript / Abstract File (PDF, DOC, DOCX — Max 10MB)
                </label>
                <div className="border-2 border-dashed border-slate-300 hover:border-emerald-500 rounded-xl p-6 text-center bg-slate-50/60 transition-colors">
                  {selectedFile ? (
                    <div className="flex items-center justify-between p-3 bg-white border border-slate-200 rounded-lg max-w-md mx-auto">
                      <div className="flex items-center gap-2 truncate">
                        <FileText className="w-5 h-5 text-emerald-600 shrink-0" />
                        <span className="text-xs font-medium text-slate-800 truncate">{selectedFile.name}</span>
                        <span className="text-[11px] text-slate-400">({Math.round(selectedFile.size / 1024)} KB)</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => setSelectedFile(null)}
                        className="p-1 hover:bg-slate-100 rounded text-slate-400 hover:text-slate-700"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ) : (
                    <div>
                      <Upload className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                      <div className="text-xs text-slate-600">
                        <label
                          htmlFor="file-upload"
                          className="font-semibold text-emerald-700 hover:text-emerald-900 cursor-pointer underline"
                        >
                          Choose a file from your computer
                        </label>{' '}
                        or drag and drop here
                      </div>
                      <p className="text-[11px] text-slate-400 mt-1">PDF, DOC, DOCX up to 10MB</p>
                      <input
                        id="file-upload"
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                    </div>
                  )}
                </div>
                {errors.file && <p className="text-xs text-red-600 mt-1">{errors.file}</p>}
              </div>

              {/* Confirmation terms checkbox */}
              <div className="pt-2">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.termsAgreed}
                    onChange={(e) => setFormData({ ...formData, termsAgreed: e.target.checked })}
                    className="mt-1 h-4 w-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
                  />
                  <span className="text-xs text-slate-600 leading-relaxed">
                    I confirm that the submitted work is original, has not been published elsewhere, and adheres strictly to the official conference submission guidelines.
                  </span>
                </label>
                {errors.termsAgreed && <p className="text-xs text-red-600 mt-1">{errors.termsAgreed}</p>}
              </div>

              {/* Submit Button */}
              <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-slate-400">
                  Demo will assign an instant reference ID.
                </span>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 bg-emerald-700 hover:bg-emerald-800 active:bg-emerald-900 text-white font-bold text-sm rounded-md shadow-md transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2"
                >
                  SUBMIT ARTICLE
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
