import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { AboutPage } from './pages/AboutPage';
import { SpeakersPage } from './pages/SpeakersPage';
import { AgendaPage } from './pages/AgendaPage';
import { RegistrationPage } from './pages/RegistrationPage';
import { SubmitArticlePage } from './pages/SubmitArticlePage';
import { ResultsPage } from './pages/ResultsPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';

// Scroll to top automatically on route changes
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-[#fafbfc] text-slate-900">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/speakers" element={<SpeakersPage />} />
            <Route path="/agenda" element={<AgendaPage />} />
            <Route path="/register" element={<RegistrationPage />} />
            <Route path="/submit-article" element={<SubmitArticlePage />} />
            <Route path="/results" element={<ResultsPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
