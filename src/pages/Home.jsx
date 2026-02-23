import React, { useEffect } from 'react';
import Hero from '../components/home/Hero';
import TrustBar from '../components/home/TrustBar';
import WhyPrenup from '../components/home/WhyPrenup';
import HowItWorks from '../components/home/HowItWorks';
import Services from '../components/home/Services';
import Stats from '../components/home/Stats';
import Testimonials from '../components/home/Testimonials';
import FAQ from '../components/home/FAQ';
import CTA from '../components/home/CTA';

export default function Home() {
  useEffect(() => {
    document.title = "PrenupAttorney.us | Find a Prenup & Postnup Attorney Near You";
  }, []);

  return (
    <>
      <main>
        <Hero />
        <TrustBar />
        <WhyPrenup />
        <Services />
        <HowItWorks />
        <Stats />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
    </>
  );
}