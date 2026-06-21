import { useState } from 'react';
import { GALLERY_ITEMS } from '../data/constants';

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <section id="galeri" className="section-padding bg-ivory">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="reveal-blur text-center mb-10">
          <span className="inline-block text-champagne text-xs font-body font-semibold tracking-[0.25em] uppercase mb-3">
            Portfolio
          </span>
          <h2 className="section-title">Hasil Karya Kami</h2>
          <div className="ornament-divider">
            <span className="diamond" />
          </div>
          <p className="section-subtitle">
            Setiap acara adalah karya. Lihat langsung hasil dekorasi nyata
            yang telah kami wujudkan untuk klien-klien kami di Gorontalo.
          </p>
        </div>

        {/* Gallery Grid - Removed Filters */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
          {GALLERY_ITEMS.map((item, index) => (
            <div
              key={item.id}
              className={`reveal-scale reveal-delay-${Math.min(index + 1, 6)} group relative aspect-square sm:aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1`}
              onClick={() => setLightbox(item)}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-espresso/0 group-hover:bg-espresso/50 transition-all duration-500 flex items-center justify-center p-4">
                <div className="scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 delay-100">
                  <div className="w-12 h-12 bg-champagne/90 rounded-full flex items-center justify-center text-white shadow-lg">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
                
                {/* Category Badge */}
                <div className="absolute bottom-3 left-3 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400 delay-150">
                  <span className="inline-block bg-white text-charcoal text-[10px] sm:text-xs font-semibold px-2.5 py-1 rounded-md shadow-md">
                    {item.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-espresso/90 backdrop-blur-sm animate-[fadeIn_300ms_ease]"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative max-w-5xl w-full max-h-[90vh] animate-[scaleIn_300ms_var(--ease-out-expo)]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightbox.src}
              alt={lightbox.alt}
              className="w-full h-full max-h-[85vh] object-contain rounded-xl"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-6 rounded-b-xl">
              <span className="text-white text-lg font-display font-medium tracking-wide">
                {lightbox.category}
              </span>
            </div>
            <button
              onClick={() => setLightbox(null)}
              className="absolute -top-4 -right-4 sm:-top-5 sm:-right-5 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center text-charcoal shadow-xl hover:bg-champagne hover:text-white transition-all duration-300"
              aria-label="Close lightbox"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes scaleIn { from { opacity: 0; transform: scale(0.92); } to { opacity: 1; transform: scale(1); } }
      `}</style>
    </section>
  );
}
