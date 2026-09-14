import React, { useState, useEffect } from 'react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { PhoneIcon } from './Icons';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Monitor scroll for solid bar styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prohibit scrolling through the page when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <header
        id="navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 border-b ${
          scrolled
            ? 'bg-[#0D0D0D] border-[#C1272D]/30 shadow-lg'
            : 'bg-[#0D0D0D]/90 backdrop-blur-sm border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo image with the name "HELLFIRE BURGER" */}
          <a
            href="#hero"
            id="nav-logo"
            className="flex items-end gap-0 group focus:outline-none focus:ring-2 focus:ring-[#FFA733] rounded-md p-1"
          >
            <img
              src="/assets/images/Logo-svg.svg"
              alt="Logo Hellfire Burger"
              className="w-11 h-11 object-contain rounded-md"
              referrerPolicy="no-referrer"
            />
            <span className="font-anton text-left text-3xl tracking-wider italic text-[#C1272D] group-hover:text-[#FFA733] transition-colors">
              HELLFIRE BURGER
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Navigation principale">
            <a
              href="#hero"
              id="desktop-link-home"
              className="text-[#F5F0E8] hover:text-[#FFA733] font-medium text-base tracking-wide transition-colors"
            >
              Accueil
            </a>
            <a
              href="#menu"
              id="desktop-link-menu"
              className="text-[#F5F0E8] hover:text-[#FFA733] font-medium text-base tracking-wide transition-colors"
            >
              Le Menu
            </a>
            <a
              href="#reviews"
              id="desktop-link-reviews"
              className="text-[#F5F0E8] hover:text-[#FFA733] font-medium text-base tracking-wide transition-colors"
            >
              Avis
            </a>
          </nav>

          {/* Large screen "Order now" button with phone icon */}
          <div className="hidden md:flex items-center">
            <a
              href={RESTAURANT_INFO.phoneCallUrl}
              id="desktop-order-btn"
              className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-[#C1272D] text-[#F5F0E8] hover:bg-[#FFA733] hover:text-[#0D0D0D] font-anton text-base tracking-wide uppercase rounded-md transition-colors shadow-md active:translate-y-0.5"
            >
              <PhoneIcon className="w-5 h-5" color="currentColor" />
              <span>Commander : {RESTAURANT_INFO.phoneFormatted}</span>
            </a>
          </div>

          {/* Mobile hamburger button (animated three lines to X) */}
          <div className="flex md:hidden items-center">
            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="relative w-12 h-12 focus:outline-none rounded-md"
              aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={isOpen}
            >
              <span
                className="absolute left-3 w-6 h-0.5 rounded-full origin-center transition-[top,transform,background-color] duration-300"
                style={{
                  top: isOpen ? '50%' : 'calc(50% - 6px)',
                  transform: isOpen ? 'translateY(-50%) rotate(45deg)' : 'translateY(-50%)',
                  backgroundColor: isOpen ? '#FFA733' : '#C1272D',
                }}
              />
              <span
                className="absolute left-3 w-6 h-0.5 rounded-full origin-center transition-[opacity,transform,background-color] duration-200"
                style={{
                  top: '50%',
                  opacity: isOpen ? 0 : 1,
                  transform: isOpen ? 'translateY(-50%) scaleX(0)' : 'translateY(-50%) scaleX(1)',
                  backgroundColor: '#C1272D',
                }}
              />
              <span
                className="absolute left-3 w-6 h-0.5 rounded-full origin-center transition-[top,transform,background-color] duration-300"
                style={{
                  top: isOpen ? '50%' : 'calc(50% + 6px)',
                  transform: isOpen ? 'translateY(-50%) rotate(-45deg)' : 'translateY(-50%)',
                  backgroundColor: isOpen ? '#FFA733' : '#C1272D',
                }}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile navigation below the fixed header */}
      {isOpen && (
        <div
          id="mobile-navigation-overlay"
          className="fixed top-20 right-0 bottom-0 left-0 z-40 bg-[#0D0D0D] w-full flex flex-col justify-between px-6 py-8 overflow-y-auto"
        >
          {/* Links list */}
          <nav className="flex flex-col items-center gap-10 py-8 my-auto" aria-label="Menu mobile">
            <a
              href="#hero"
              id="mobile-link-home"
              onClick={closeMenu}
              className="w-full max-w-sm text-center font-anton text-4xl sm:text-5xl tracking-wide text-[#F5F0E8] hover:text-[#FFA733] transition-colors py-3"
            >
              Accueil
            </a>
            <a
              href="#menu"
              id="mobile-link-menu"
              onClick={closeMenu}
              className="w-full max-w-sm text-center font-anton text-4xl sm:text-5xl tracking-wide text-[#F5F0E8] hover:text-[#FFA733] transition-colors py-3"
            >
              Le Menu
            </a>
            <a
              href="#reviews"
              id="mobile-link-reviews"
              onClick={closeMenu}
              className="w-full max-w-sm text-center font-anton text-4xl sm:text-5xl tracking-wide text-[#F5F0E8] hover:text-[#FFA733] transition-colors py-3"
            >
              Avis Clients
            </a>
          </nav>

          {/* Mobile bottom details */}
          <div className="pt-4 border-t border-[#C1272D]/20">
            <p className="text-center text-xs text-[#F5F0E8]/60 font-inter">
              04 Boulevard Victor Hugo, Alger Centre • 11h30 – 00h00
            </p>
          </div>
        </div>
      )}
    </>
  );
}
