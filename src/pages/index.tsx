import BookSection from '../components/BookSection';
import GetInSection from '../components/GetInSection';
import Header from '../components/Header';
import InfoSection from '../components/InfoSection';

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
    </>
  );
}