import React from 'react';
import { Hero } from '../components/Hero';
import { Countdown } from '../components/Countdown';
import { About } from '../components/About';
import { ConferenceThemes } from '../components/ConferenceThemes';
import { FeaturedSpeaker } from '../components/FeaturedSpeaker';
import { Speakers } from '../components/Speakers';
import { ImportantDates } from '../components/ImportantDates';
import { Agenda } from '../components/Agenda';
import { CallForAbstracts } from '../components/CallForAbstracts';
import { Gallery } from '../components/Gallery';
import { Organizer } from '../components/Organizer';
import { Contact } from '../components/Contact';

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 2. Hero Section */}
      <Hero />

      {/* 3. Countdown Section */}
      <Countdown />

      {/* 4. About Conference */}
      <About />

      {/* 5. Conference Themes */}
      <ConferenceThemes />

      {/* 6. Featured Keynote Speaker */}
      <FeaturedSpeaker />

      {/* 7. Featured Speakers */}
      <Speakers />

      {/* 8. Important Dates */}
      <ImportantDates />

      {/* 9. Interactive Agenda Preview */}
      <Agenda isPreview={true} />

      {/* 10. Call for Abstracts */}
      <CallForAbstracts />

      {/* 11. Gallery Preview */}
      <Gallery isPreview={true} />

      {/* 12. Organizer / University */}
      <Organizer />

      {/* 13. Contact */}
      <Contact />
    </div>
  );
};
