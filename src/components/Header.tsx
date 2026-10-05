import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, Dna } from 'lucide-react';
import { CONFERENCE_INFO } from '../data/conferenceData';

interface HeaderProps {
  onOpenGuidelines?: () => void;
}

export const Header: React.FC<HeaderProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Speakers', path: '/speakers' },
    { label: 'Agenda', path: '/agenda' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Submit Article', path: '/submit-article' },
    { label: 'Results', path: '/results' },
    { label: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname === path;
  };

  return (
    <>
      {/* Top Academic Bar */}
      <div className="bg-[#044e3b] text-emerald-100 text-xs py-1.5 px-4 hidden md:block border-b border-emerald-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-semibold text-emerald-300">Department of Genetic Engineering & Biotechnology</span>
            <span className="text-emerald-500">·</span>
            <span className="text-emerald-200">University of Chittagong, Bangladesh</span>
          </div>
          <div className="flex items-center gap-4 text-emerald-200">
            <span>{CONFERENCE_INFO.datesDisplay}</span>
            <span className="text-emerald-500">·</span>
            <Link to="/results" className="hover:text-white transition-colors underline decoration-emerald-500">
              Check Submission Status
            </Link>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-2.5'
            : 'bg-white border-b border-slate-200 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo / Branding */}
            <Link to="/" className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 rounded-lg">
              <div className="w-10 h-10 rounded-lg bg-emerald-800 flex items-center justify-center text-white shadow-sm transition-transform group-hover:scale-105">
                <Dna className="w-6 h-6 text-emerald-300" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-bold text-lg text-slate-900 leading-tight tracking-tight">IBC 2026</span>
                  <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200/60 uppercase">
                    CU
                  </span>
                </div>
                <span className="text-[11px] text-slate-500 font-medium leading-none mt-0.5 hidden sm:block">
                  2nd Int'l Biotechnology Conference
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-6" aria-label="Main Navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors hover:text-emerald-700 relative py-1 ${
                    isActive(link.path)
                      ? 'text-emerald-700 font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-emerald-600'
                      : 'text-slate-600'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA and Actions */}
            <div className="hidden sm:flex items-center gap-3">
              <Link
                to="/register"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2 text-sm font-semibold text-white bg-emerald-700 hover:bg-emerald-800 active:bg-emerald-900 rounded-md shadow-xs transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2"
              >
                <span>REGISTER NOW</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600"
                aria-label="Toggle navigation menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white shadow-lg animate-in slide-in-from-top-2 duration-200">
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive(link.path)
                      ? 'bg-emerald-50 text-emerald-800 font-semibold'
                      : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              <div className="pt-3 border-t border-slate-100 space-y-2">
                <Link
                  to="/register"
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-center text-sm font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-md shadow-xs transition-colors"
                >
                  <span>REGISTER NOW</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/submit-article"
                  className="w-full flex items-center justify-center py-2 px-4 text-center text-sm font-medium text-emerald-800 bg-emerald-50 hover:bg-emerald-100 rounded-md transition-colors border border-emerald-200"
                >
                  Submit Article
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
