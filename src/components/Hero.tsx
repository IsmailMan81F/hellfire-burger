import React from 'react';
import { ArrowDownIcon } from './Icons';

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-[#0D0D0D]"
    >
      {/* Background Video Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          src="/assets/videos/hero%20video.mp4"
          className="w-full h-full object-cover object-center"
        />
        {/* Darkening overlay to ensure contrast and readability without gradient */}
        <div className="absolute inset-0 bg-[#0D0D0D]/80" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto text-center flex flex-col items-center">
        <h1
          id="hero-title"
          className="display-title text-[#F5F0E8] max-w-7xl"
        >
          <span className="hero-title-line hero-title-line-first block text-[#C1272D]">NÉ EN ENFER</span>
          <span className="hero-title-line hero-title-line-second block text-[#FFA733]">LE GOÛT DU PARADIS</span>
        </h1>

        {/* Action Buttons */}
        <div className="hero-action mt-20 sm:mt-16 flex items-center justify-center w-full sm:w-auto">
          {/* View Menu Button */}
          <a
            href="#menu"
            id="hero-view-menu-btn"
            className="w-fit inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#FFA733] text-[#0D0D0D] hover:bg-[#F5F0E8] font-anton text-lg tracking-wider uppercase rounded-md transition-colors shadow-lg active:translate-y-0.5"
          >
            <span>Voir Le Menu</span>
            <ArrowDownIcon className="w-5 h-5" color="currentColor" />
          </a>
        </div>
      </div>
    </section>
  );
}
