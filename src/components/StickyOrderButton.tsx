import React from 'react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { PhoneIcon } from './Icons';

export function StickyOrderButton() {
  return (
    <div className="md:hidden fixed bottom-5 right-5 z-40">
      <a
        href={RESTAURANT_INFO.phoneCallUrl}
        id="mobile-sticky-order-btn"
        className="flex items-center gap-2.5 px-4 py-3 bg-[#C1272D] text-[#F5F0E8] hover:bg-[#FFA733] hover:text-[#0D0D0D] font-anton text-base tracking-wider uppercase rounded-full shadow-2xl transition-transform active:scale-95 border-2 border-[#FFA733]"
        aria-label={`Commander maintenant par téléphone au ${RESTAURANT_INFO.phoneFormatted}`}
      >
        <span className="w-8 h-8 rounded-full bg-[#0D0D0D] text-[#FFA733] flex items-center justify-center">
          <PhoneIcon className="w-4 h-4" color="currentColor" />
        </span>
        <span className="pr-1">Commander</span>
      </a>
    </div>
  );
}
