import { useState, useEffect, useCallback } from 'react';
import { TESTIMONIALS } from '../data/constants';

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const total = TESTIMONIALS.length;

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % total);
  }, [total]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + total) % total);
  }, [total]);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, next]);

  const handleManualNav = (action) => {
    setIsAutoPlaying(false);
    action();
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="section-padding bg-linen">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="reveal text-center">
          <span className="inline-block text-champagne text-xs font-body font-semibold tracking-[0.25em] uppercase mb-3">
            Testimonials
          </span>
          <h2 className="section-title">Apa Kata Mereka</h2>
          <div className="ornament-divider">
            <span className="diamond" />
          </div>
          <p className="section-subtitle">
            Testimoni dari klien-klien kami yang telah mempercayakan momen berharga mereka.
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="reveal relative px-2 sm:px-0">
          <div className="bg-white rounded-2xl p-6 sm:p-8 md:p-12 shadow-(--shadow-card) relative overflow-hidden">
            {/* Decorative quote mark */}
            <div className="absolute top-3 left-4 sm:top-6 sm:left-8">
              <svg className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 text-champagne/15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z" />
              </svg>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center">
              {/* Stars */}
              <div className="flex items-center justify-center gap-1 mb-5 sm:mb-6">
                {Array.from({ length: TESTIMONIALS[current].rating }).map((_, i) => (
                  <svg key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-champagne" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-charcoal text-sm sm:text-base md:text-lg leading-relaxed font-body mb-6 sm:mb-8 max-w-2xl mx-auto italic">
                &ldquo;{TESTIMONIALS[current].text}&rdquo;
              </p>

              {/* Author */}
              <div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-champagne/20 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <span className="text-champagne font-display font-bold text-base sm:text-lg">
                    {TESTIMONIALS[current].name.charAt(0)}
                  </span>
                </div>
                <p className="font-display font-semibold text-charcoal text-sm sm:text-base">
                  {TESTIMONIALS[current].name}
                </p>
                <p className="text-warm-gray text-xs sm:text-sm font-body">
                  {TESTIMONIALS[current].event}
                </p>
              </div>
            </div>

            {/* Bottom accent */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-champagne/40 to-transparent" />
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => handleManualNav(prev)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 sm:-translate-x-3 md:-translate-x-5 w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-charcoal hover:text-champagne hover:scale-110 transition-all duration-300"
            aria-label="Previous testimonial"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => handleManualNav(next)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 sm:translate-x-3 md:translate-x-5 w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-charcoal hover:text-champagne hover:scale-110 transition-all duration-300"
            aria-label="Next testimonial"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-5 sm:mt-6">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => handleManualNav(() => setCurrent(i))}
              className={`transition-all duration-300 rounded-full ${
                i === current
                  ? 'w-7 sm:w-8 h-2 sm:h-2.5 bg-champagne'
                  : 'w-2 sm:w-2.5 h-2 sm:h-2.5 bg-champagne/25 hover:bg-champagne/50'
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
