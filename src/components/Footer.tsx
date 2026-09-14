import React from 'react';
import { RESTAURANT_INFO, OPENING_HOURS } from '../data/restaurantData';
import { GoogleMapsIcon, MapPinIcon } from './Icons';

export function Footer() {
  return (
    <footer id="footer" className="bg-[#0D0D0D] border-t-2 border-[#C1272D] text-[#F5F0E8] pt-16 pb-24 sm:pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-[#C1272D]/20">
          {/* Column 1: Logo (Image ONLY without logo name) & Social Links */}
          <div className="flex flex-col items-start">
            {/* Logo image only without the logo name as requested */}
            <a href="#hero" id="footer-logo-link" className="block focus:outline-none focus:ring-2 focus:ring-[#FFA733] rounded-md">
              <img
                src="/assets/images/Logo-svg.svg"
                alt="Logo Hellfire Burger"
                className="w-20 h-20 sm:w-24 sm:h-24 object-contain rounded-lg"
                referrerPolicy="no-referrer"
              />
            </a>

            <p className="mt-4 text-lg sm:text-xl text-[#F5F0E8]/70 font-inter leading-relaxed">
              Burgers braisés à la flamme vive, frites croustillantes et sauces maison au cœur d&apos;Alger.
            </p>

            {/* Contact links using their logos rather than full name */}
            <div className="mt-3 flex items-center gap-1 p-0">
              <a
                href={RESTAURANT_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="footer-instagram-btn"
                className="flex h-16 w-16 items-center justify-center rounded-md bg-[#0D0D0D] p-0 text-[#FFA733] hover:text-[#F5F0E8] transition-colors"
                aria-label="Instagram Hellfire Burger"
              >
                <img src="/assets/images/instagram-logo.svg" alt="" aria-hidden="true" className="h-10 w-10" />
              </a>

              <a
                href={RESTAURANT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="footer-whatsapp-btn"
                className="flex h-16 w-16 items-center justify-center rounded-md bg-[#0D0D0D] p-0 text-[#FFA733] hover:text-[#F5F0E8] transition-colors"
                aria-label="WhatsApp Hellfire Burger"
              >
                <img src="/assets/images/whatsapp-logo.svg" alt="" aria-hidden="true" className="h-10 w-10" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h3 className="font-anton text-2xl text-[#FFA733] uppercase tracking-wider mb-4">
              NAVIGATION
            </h3>
            <ul className="space-y-4 font-inter text-lg text-[#F5F0E8]/80">
              <li>
                <a
                  href="#hero"
                  id="footer-nav-home"
                  className="hover:text-[#FFA733] transition-colors inline-block py-0.5"
                >
                  Accueil
                </a>
              </li>
              <li>
                <a
                  href="#menu"
                  id="footer-nav-menu"
                  className="hover:text-[#FFA733] transition-colors inline-block py-0.5"
                >
                  Menu
                </a>
              </li>
              <li>
                <a
                  href="#reviews"
                  id="footer-nav-reviews"
                  className="hover:text-[#FFA733] transition-colors inline-block py-0.5"
                >
                  Avis
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Location name & Google Maps Link with logo */}
          <div>
            <h3 className="font-anton text-2xl text-[#FFA733] uppercase tracking-wider mb-4">
              ADRESSE & LOCALISATION
            </h3>

            <div className="space-y-3 font-inter text-base">
              <div className="flex items-center gap-2.5">
                <MapPinIcon className="w-5 h-5 text-[#C1272D] shrink-0" color="currentColor" />
                <div>
                  <span className="font-semibold text-[#F5F0E8] block">
                    {RESTAURANT_INFO.locationAddress}
                  </span>
                </div>
              </div>

              {/* View in Google Maps Link with Maps logo */}
              <div className="pt-2">
                <a
                  href={RESTAURANT_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="footer-google-maps-link"
                  className="inline-flex items-center gap-2.5 px-4 py-2.5 bg-[#FFA733] text-[#0D0D0D] rounded-md font-anton text-sm uppercase tracking-wider transition-colors hover:bg-[#F5F0E8]"
                >
                  <GoogleMapsIcon className="w-4 h-4" color="currentColor" />
                  <span>Voir sur Google Maps</span>
                </a>
              </div>

            </div>
          </div>

          {/* Column 4: Opening Hours */}
          <div>
            <h3 className="font-anton text-2xl text-[#FFA733] uppercase tracking-wider mb-4">
              HORAIRES D&apos;OUVERTURE
            </h3>

            <ul className="space-y-2 font-inter text-sm sm:text-base">
              {OPENING_HOURS.map((item) => (
                <li
                  key={item.day}
                  className="flex items-center justify-between py-1 border-b border-[#F5F0E8]/5 text-[#F5F0E8]/80"
                >
                  <span>{item.day}</span>
                  <span className="font-semibold">{item.hours}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright and Credits bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F5F0E8]/50 font-inter">
          <p>© {new Date().getFullYear()} Hellfire Burger. Tous droits réservés.</p>
          <p className="text-center sm:text-right">
            Born in Hell • Tastes like Heaven • Alger Centre
          </p>
        </div>
      </div>
    </footer>
  );
}
