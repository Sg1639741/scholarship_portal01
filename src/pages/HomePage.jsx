import React from 'react';
import { GovMarquee } from '../components/common/GovMarquee';
import { HeroBanner } from '../components/home/HeroBanner';
import { QuickStats } from '../components/home/QuickStats';
import { FeaturedSchemes } from '../components/home/FeaturedSchemes';
import { HowItWorks } from '../components/home/HowItWorks';
import { TestimonialsSection } from '../components/home/TestimonialsSection';
import { FaqSection } from '../components/home/FaqSection';

export const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
      <GovMarquee />
      <HeroBanner />
      <QuickStats />
      <FeaturedSchemes />
      <HowItWorks />
      <TestimonialsSection />
      <FaqSection />
    </div>
  );
};
