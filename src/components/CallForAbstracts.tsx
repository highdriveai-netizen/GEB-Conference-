import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FileText, CheckCircle2, ArrowRight, BookOpen, X, Download, HelpCircle, Layers } from 'lucide-react';
import { SUBMISSION_GUIDELINES, CONFERENCE_INFO } from '../data/conferenceData';

export const CallForAbstracts: React.FC = () => {
  const [showGuidelinesModal, setShowGuidelinesModal] = useState(false);

  return (
    <>
      <section className="py-16 sm:py-20 bg-gradient-to-r from-[#044e3b] via-[#065f46] to-[#0f766e] text-white relative overflow-hidden">
        {/* Subtle biological background rings */}
        <div className="absolute right-0 top-0 translate-x-1/3 -translate-y-1/3 w-96 h-96 rounded-full border border-white/10 pointer-events-none" />
        <div className="absolute right-0 top-0 translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-white/5 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Heading and Description */}
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-200 text-xs font-semibold uppercase tracking-wider">
                <FileText className="w-3.5 h-3.5 text-emerald-300" />
                <span>Call for Original Scientific Contributions</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Call for Abstracts
              </h2>

              <p className="text-base sm:text-lg text-emerald-100/90 max-w-2xl leading-relaxed">
                “Researchers, academics, students, and biotechnology professionals are invited to share their original research with the international biotechnology community.”
              </p>

              {/* 4 Checkmarks */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
                <div className="flex items-center gap-2 text-sm text-emerald-100 font-semibold bg-white/10 backdrop-blur-xs p-2.5 rounded-lg border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-emerald-300 shrink-0" />
                  <span>Original Research</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-emerald-100 font-semibold bg-white/10 backdrop-blur-xs p-2.5 rounded-lg border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-emerald-300 shrink-0" />
                  <span>Review Articles</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-emerald-100 font-semibold bg-white/10 backdrop-blur-xs p-2.5 rounded-lg border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-emerald-300 shrink-0" />
                  <span>Oral Presentations</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-emerald-100 font-semibold bg-white/10 backdrop-blur-xs p-2.5 rounded-lg border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-emerald-300 shrink-0" />
                  <span>Poster Presentations</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-3">
                <Link
                  to="/submit-article"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-[#044e3b] hover:bg-emerald-50 active:bg-emerald-100 text-sm sm:text-base font-bold rounded-md shadow-md transition-all hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <FileText className="w-4 h-4" />
                  <span>SUBMIT ARTICLE</span>
                </Link>

                <button
                  type="button"
                  onClick={() => setShowGuidelinesModal(true)}
                  className="inline-flex items-center gap-2 px-5 py-3.5 bg-emerald-900/60 hover:bg-emerald-900 border border-emerald-400/40 text-emerald-100 hover:text-white text-sm sm:text-base font-semibold rounded-md transition-colors"
                >
                  <BookOpen className="w-4 h-4 text-emerald-300" />
                  <span>VIEW GUIDELINES</span>
                </button>
              </div>
            </div>

            {/* Right Column: Submission Summary Card */}
            <div className="lg:col-span-4">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl space-y-4">
                <div className="flex items-center justify-between border-b border-white/15 pb-3">
                  <span className="text-xs uppercase font-bold text-emerald-300 tracking-wider">Submission Snapshot</span>
                  <span className="text-[11px] bg-emerald-400/20 text-emerald-200 px-2 py-0.5 rounded border border-emerald-400/30">
                    No Fee Required
                  </span>
                </div>

                <div className="space-y-3 text-xs sm:text-sm text-emerald-50">
                  <div>
                    <span className="text-emerald-300 block font-semibold">Word Limit:</span>
                    <span>{SUBMISSION_GUIDELINES.abstractLength}</span>
                  </div>
                  <div>
                    <span className="text-emerald-300 block font-semibold">Required Abstract Structure:</span>
                    <span>{SUBMISSION_GUIDELINES.structure}</span>
                  </div>
                  <div>
                    <span className="text-emerald-300 block font-semibold">Peer-Review Notification:</span>
                    <span>[Date — To Be Announced]</span>
                  </div>
                  <div>
                    <span className="text-emerald-300 block font-semibold">Accepted Authors Registration:</span>
                    <span>Individual registration required upon acceptance</span>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    to="/results"
                    className="block text-center text-xs font-semibold text-emerald-200 hover:text-white underline decoration-emerald-400"
                  >
                    Already submitted? Check your abstract status →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guidelines Modal */}
      {showGuidelinesModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          aria-labelledby="guidelines-modal-title"
        >
          <div
            className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-emerald-900 px-6 py-4 text-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-emerald-300" />
                <h3 id="guidelines-modal-title" className="text-base sm:text-lg font-bold">
                  Guidelines for the Submission of Abstracts
                </h3>
              </div>
              <button
                onClick={() => setShowGuidelinesModal(false)}
                className="p-1.5 rounded-full hover:bg-white/20 text-white transition-colors"
                aria-label="Close guidelines"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Body */}
            <div className="p-6 overflow-y-auto space-y-6 text-sm text-slate-700">
              <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-lg text-xs text-emerald-900">
                <strong>From Official NBC 2023 / IBC 2026 Guidelines:</strong> Please prepare your submission in accordance with the standard academic criteria below.
              </div>

              <div className="space-y-3">
                <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider text-emerald-800">
                  Categories
                </h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Oral presentation</strong> (10-12 minutes plus Q&amp;A)</li>
                  <li><strong>Poster presentation</strong> (Standard academic poster session display)</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider text-emerald-800">
                  Specific Instructions
                </h4>
                <ul className="list-disc pl-5 space-y-2">
                  {SUBMISSION_GUIDELINES.rules.map((rule, idx) => (
                    <li key={idx} className="leading-relaxed">{rule}</li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider text-emerald-800">
                  Typography &amp; Formatting
                </h4>
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 space-y-2 text-xs">
                  <div><strong>Word limit:</strong> Maximum 250 words (Abstract body).</div>
                  <div><strong>Recommended font:</strong> Times New Roman or Calibri, size 12.</div>
                  <div><strong>Contents structure:</strong> Background/Objective(s), Methodology, Findings/Results, and Conclusion.</div>
                  <div><strong>Submissions:</strong> PDF, DOC, or DOCX formats accepted.</div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
              <span className="text-xs text-slate-500">Need clarification? Contact: conference.geb@cu.ac.bd</span>
              <button
                onClick={() => setShowGuidelinesModal(false)}
                className="px-4 py-2 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-md transition-colors"
              >
                Close Guidelines
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
