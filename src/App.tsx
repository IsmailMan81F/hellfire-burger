import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MenuSection } from './components/MenuSection';
import { ReviewsSection } from './components/ReviewsSection';
import { Footer } from './components/Footer';
import { StickyOrderButton } from './components/StickyOrderButton';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0D0D0D] text-[#F5F0E8] selection:bg-[#C1272D] selection:text-[#F5F0E8] relative">
      {/* Top Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <main id="main-content">
        <Hero />
        <MenuSection />
        <ReviewsSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Sticky Order Button for Mobile */}
      <StickyOrderButton />
    </div>
  );
}
