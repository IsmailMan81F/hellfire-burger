import React from 'react';
import { REVIEWS_LIST } from '../data/restaurantData';
import { StarIcon } from './Icons';

export function ReviewsSection() {
  return (
    <section id="reviews" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#0D0D0D] border-t border-[#C1272D]/20">
      <div className="max-w-7xl mx-auto">
        {/* Big section title reviews */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <h2 id="reviews-main-heading" className="display-title text-[#F5F0E8]">
            AVIS <span className="text-[#FFA733]">CLIENTS</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#F5F0E8]/80 font-inter">
            La satisfaction de nos clients est notre meilleure récompense. Découvrez ce que pensent les passionnés de burgers d&apos;Alger.
          </p>

        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS_LIST.map((review, idx) => (
            <div
              key={review.id}
              id={`review-card-${idx}`}
              className="bg-[#0D0D0D] border border-[#C1272D]/40 hover:border-[#FFA733] rounded-lg p-6 sm:p-8 flex flex-col justify-between transition-colors shadow-lg"
            >
              <div>
                {/* 5 Stars for all of them */}
                <div className="flex items-center gap-1 mb-4" aria-label="5 étoiles sur 5">
                  {[...Array(review.rating)].map((_, i) => (
                    <StarIcon key={i} className="w-4 h-4 sm:w-5 sm:h-5" filled={true} />
                  ))}
                </div>

                {/* Review Quote */}
                <blockquote className="text-sm sm:text-base text-[#F5F0E8]/90 font-inter leading-relaxed italic">
                  &ldquo;{review.content}&rdquo;
                </blockquote>
              </div>

              {/* Author Info with Template Image Avatar */}
              <div className="mt-8 pt-6 border-t border-[#C1272D]/20 flex items-center gap-4">
                <img
                  src={review.image}
                  alt={review.imageAlt}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#FFA733]"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h3 className="font-anton text-lg sm:text-xl text-[#F5F0E8] tracking-wide uppercase">
                    {review.author}
                  </h3>
                  <span className="text-xs text-[#FFA733] block font-inter">
                    {review.timeAgo} • Client Vérifié
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
