import Header from '../components/Header';
import InfoSection from '../components/InfoSection';
import BookSection from '../components/BookSection';
import GetInSection from '../components/GetInSection';
import RoadmapSection from '../components/RoadmapSection';
import TutorialSection from '../components/TutorialSection';
import FlagSection from '../components/FlagSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

import InProgressMessage from '../components/InProgressMessage';

import { Hero } from '../styles/pages/Home';

export default function Home() {
  return (
    <>
      <Header />
      <Hero>
        <img src="/hero/hero-logo.png" alt="Axie Scholarship Rimuru Tempest" />
      </Hero>
      <InfoSection />
      <BookSection />
      <GetInSection />
      <RoadmapSection />
      <TutorialSection />
      <FlagSection />
      <ContactSection />
      <Footer />
      <InProgressMessage />
    </>
  );
}
