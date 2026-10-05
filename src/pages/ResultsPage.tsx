import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search, CheckCircle2, Clock, AlertTriangle, XCircle, FileText, ArrowRight, Printer, Info, Sparkles } from 'lucide-react';
import { DEMO_RESULTS, DemoSubmissionResult } from '../data/conferenceData';

export const ResultsPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [submissionId, setSubmissionId] = useState(searchParams.get('id') || '');
  const [email, setEmail] = useState('');
  const [searchResult, setSearchResult] = useState<DemoSubmissionResult | null>(null);
  const [hasSearched, setHasSearched] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Check if searchParam ID exists on initial load
  useEffect(() => {
    const idParam = searchParams.get('id');
    if (idParam) {
      setSubmissionId(idParam);
      handleLookup(idParam, '');
    }
  }, [searchParams]);

  const handleLookup = (idToSearch: string, emailToSearch: string) => {
    setErrorMsg('');
    const cleanId = idToSearch.trim().toUpperCase();

    if (!cleanId) {
      setErrorMsg('Please enter your Submission Reference ID.');
      return;
    }

    // Check predefined demo results
    let found = DEMO_RESULTS.find((item) => item.submissionId.toUpperCase() === cleanId);

    // Also check user's locally created submissions from SubmitArticlePage
    if (!found) {
      try {
        const localSubmissions = JSON.parse(localStorage.getItem('ibc2026_user_submissions') || '[]');
        found = localSubmissions.find((item: any) => item.submissionId.toUpperCase() === cleanId);
      } catch (err) {
        console.warn('Storage read skipped', err);
      }
    }

    setHasSearched(true);
    if (found) {
      setSearchResult(found);
    } else {
      setSearchResult(null);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleLookup(submissionId, email);
  };

  const handleQuickDemoClick = (id: string, testEmail: string) => {
    setSubmissionId(id);
    setEmail(testEmail);
    handleLookup(id, testEmail);
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Accepted — Oral':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-900 border border-emerald-300">
            <CheckCircle2 className="w-4 h-4 text-emerald-700" />
            Accepted for Oral Presentation
          </span>
        );
      case 'Accepted — Poster':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-teal-100 text-teal-900 border border-teal-300">
            <CheckCircle2 className="w-4 h-4 text-teal-700" />
            Accepted for Poster Presentation
          </span>
        );
      case 'Under Review':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-900 border border-amber-300">
            <Clock className="w-4 h-4 text-amber-700" />
            Under Peer Review
          </span>
        );
      case 'Revision Required':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-900 border border-orange-300">
            <AlertTriangle className="w-4 h-4 text-orange-700" />
            Revision Required
          </span>
        );
      case 'Not Accepted':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-slate-200 text-slate-800 border border-slate-300">
            <XCircle className="w-4 h-4 text-slate-600" />
            Not Accepted
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-900">
            {status}
          </span>
        );
    }
  };

  return (
    <div className="py-12 bg-white">
      {/* Banner */}
      <div className="bg-gradient-to-r from-[#044e3b] to-[#0f766e] text-white py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-emerald-200 text-xs font-semibold uppercase tracking-wider">
            <FileText className="w-3.5 h-3.5 text-emerald-300" />
            <span>Peer Review Tracking Desk</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Submission Results
          </h1>
          <p className="text-emerald-100 max-w-3xl text-sm sm:text-base leading-relaxed">
            “Check the status of your submitted abstract or article.” Enter your unique submission reference ID to verify decision letters and review panel remarks.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-10">
        {/* Search Box Card */}
        <div className="max-w-2xl mx-auto bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
          <div>
            <h2 className="text-lg font-bold text-slate-900">Track Abstract Decision</h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Enter the tracking ID generated upon abstract upload (e.g. <code>IBC26-DEMO-00123</code>).
            </p>
          </div>

          <form onSubmit={handleFormSubmit} className="space-y-4">
            {errorMsg && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-md text-xs text-red-800">
                {errorMsg}
              </div>
            )}

            <div>
              <label htmlFor="res-id" className="block text-xs font-semibold text-slate-700 mb-1">
                Submission ID <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="res-id"
                required
                value={submissionId}
                onChange={(e) => setSubmissionId(e.target.value)}
                placeholder="e.g. IBC26-DEMO-00123"
                className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-md font-mono uppercase focus:outline-none focus:ring-2 focus:ring-emerald-600"
              />
            </div>

            <div>
              <label htmlFor="res-email" className="block text-xs font-semibold text-slate-700 mb-1">
                Corresponding Email Address (Optional for Demo)
              </label>
              <input
                type="email"
                id="res-email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="author@institution.edu"
                className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-600"
              />
            </div>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 text-sm font-bold text-white bg-emerald-700 hover:bg-emerald-800 rounded-md shadow-xs transition-colors"
            >
              <Search className="w-4 h-4" />
              <span>CHECK RESULT</span>
            </button>
          </form>

          {/* Quick Demo Test Buttons */}
          <div className="pt-4 border-t border-slate-200 space-y-2">
            <div className="text-xs font-semibold text-slate-500 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>Quick Test Demonstrator IDs (Click to populate):</span>
            </div>
            <div className="flex flex-wrap gap-2 text-xs">
              <button
                type="button"
                onClick={() => handleQuickDemoClick('IBC26-DEMO-00123', 'researcher@example.com')}
                className="px-2.5 py-1 bg-white border border-emerald-300 text-emerald-800 rounded hover:bg-emerald-50 font-mono transition-colors"
              >
                IBC26-DEMO-00123 (Oral Accepted)
              </button>
              <button
                type="button"
                onClick={() => handleQuickDemoClick('IBC26-DEMO-00456', 'biotech.student@example.com')}
                className="px-2.5 py-1 bg-white border border-teal-300 text-teal-800 rounded hover:bg-teal-50 font-mono transition-colors"
              >
                IBC26-DEMO-00456 (Poster Accepted)
              </button>
              <button
                type="button"
                onClick={() => handleQuickDemoClick('IBC26-DEMO-00789', 'pharma.lab@example.com')}
                className="px-2.5 py-1 bg-white border border-amber-300 text-amber-800 rounded hover:bg-amber-50 font-mono transition-colors"
              >
                IBC26-DEMO-00789 (Under Review)
              </button>
              <button
                type="button"
                onClick={() => handleQuickDemoClick('IBC26-DEMO-00999', 'scholar@example.com')}
                className="px-2.5 py-1 bg-white border border-orange-300 text-orange-800 rounded hover:bg-orange-50 font-mono transition-colors"
              >
                IBC26-DEMO-00999 (Revision Req.)
              </button>
            </div>
          </div>
        </div>

        {/* Results Card */}
        {hasSearched && searchResult && (
          <div className="max-w-3xl mx-auto bg-white rounded-2xl border-2 border-emerald-600/30 p-6 sm:p-8 shadow-md space-y-6 animate-in fade-in-50 duration-200">
            {/* Top Bar with Status */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
              <div>
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                  Official Decision Notice
                </span>
                <span className="font-mono text-base font-bold text-slate-900">
                  {searchResult.submissionId}
                </span>
              </div>
              <div>{getStatusBadge(searchResult.status)}</div>
            </div>

            {/* Manuscript Metadata */}
            <div className="space-y-4">
              <div>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Paper / Abstract Title
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-1 leading-snug">
                  {searchResult.title}
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-600 pt-2 border-t border-slate-100">
                <div>
                  <strong className="block text-slate-800">Contributing Authors:</strong>
                  <span>{searchResult.authors}</span>
                </div>
                <div>
                  <strong className="block text-slate-800">Thematic Category:</strong>
                  <span>{searchResult.category}</span>
                </div>
                <div>
                  <strong className="block text-slate-800">Presentation Track:</strong>
                  <span>{searchResult.presentationType}</span>
                </div>
                <div>
                  <strong className="block text-slate-800">Evaluation Timestamp:</strong>
                  <span>{searchResult.dateChecked}</span>
                </div>
              </div>

              {/* Review Comments Box */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                <span className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-emerald-700" />
                  <span>Scientific Committee Evaluation Remarks</span>
                </span>
                <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
                  {searchResult.reviewComments}
                </p>
                {searchResult.assignedSession && (
                  <div className="mt-2 pt-2 border-t border-slate-200 text-xs font-semibold text-emerald-800">
                    Assigned Session: {searchResult.assignedSession}
                  </div>
                )}
              </div>
            </div>

            {/* Next Action Steps */}
            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs sm:text-sm text-emerald-950 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <strong className="block font-bold">Next Mandatory Step:</strong>
                <span>Authors of accepted manuscripts must complete individual delegate registration prior to session scheduling.</span>
              </div>
              <Link
                to="/register"
                className="shrink-0 px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white font-bold rounded-md transition-colors"
              >
                Complete Registration
              </Link>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                type="button"
                onClick={() => window.print()}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 border border-slate-300 rounded-md"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print Decision Slip</span>
              </button>
            </div>
          </div>
        )}

        {hasSearched && !searchResult && (
          <div className="max-w-xl mx-auto bg-slate-50 border border-slate-200 rounded-xl p-8 text-center space-y-3">
            <XCircle className="w-10 h-10 text-slate-400 mx-auto" />
            <h3 className="text-base font-bold text-slate-800">No Submission Found</h3>
            <p className="text-xs text-slate-500">
              No manuscript matched reference ID <code>{submissionId}</code>. Please double-check the ID from your submission confirmation or use one of the test demonstration buttons above.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
