import { useEffect, useState } from 'react';
import { getWhatsAppLink } from '../data/constants';

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="beranda"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-espresso via-charcoal to-espresso">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-champagne/20 via-transparent to-transparent opacity-60" />
      </div>

      {/* Decorative blurs */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-champagne/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-champagne/5 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        {/* Location badge */}
        <div
          className={`flex items-center justify-center gap-3 mb-6 transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          style={{ transitionDelay: '200ms' }}
        >
          <span className="block w-12 h-px bg-champagne/60" />
          <span className="text-champagne text-xs font-body tracking-[0.3em] uppercase font-medium">
            Gorontalo
          </span>
          <span className="block w-12 h-px bg-champagne/60" />
        </div>

        {/* Main Headline — updated copywriting */}
        <h1
          className={`font-display text-white text-[1.75rem] sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.15] mb-4 transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          style={{ transitionDelay: '400ms' }}
        >
          Wujudkan Momen Impianmu
          {/* <br />
          <span className="text-champagne italic">Tanpa Bikin Kantong Jebol.</span> */}
        </h1>

        {/* Sub-headline — updated copywriting */}
        <p
          className={`text-white/80 text-sm sm:text-base md:text-lg font-body font-light max-w-xl mx-auto mb-3 leading-relaxed transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          style={{ transitionDelay: '600ms' }}
        >
          Dari prosesi lamaran hingga syukuran, <strong className="font-display font-bold">dhe.dekorasi</strong> hadir menyulap hari spesialmu
          menjadi lebih indah dan berkesan. Solusi dekorasi estetik dengan harga paling
          bersahabat di Gorontalo.
        </p>

        {/* Value proposition badge */}
        <div
          className={`inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full px-4 py-1.5 mb-8 transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          style={{ transitionDelay: '700ms' }}
        >
          <span className="w-2 h-2 bg-champagne rounded-full animate-pulse" />
          <span className="text-white/90 text-xs font-body tracking-wide">
            Dekorasi Termurah Gorontalo
          </span>
        </div>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          style={{ transitionDelay: '800ms' }}
        >
          <a
            href="#konsultasi"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#konsultasi')?.scrollIntoView({ behavior: 'smooth' });
            }}
            id="hero-cta-konsultasi"
            className="group inline-flex items-center gap-2.5 bg-champagne text-espresso px-8 py-3.5 rounded-full font-semibold text-[15px] tracking-wide hover:bg-champagne-dark transition-all duration-300 hover:scale-[1.03] shadow-lg shadow-champagne/20"
          >
            <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Konsultasi Gratis
          </a>
          <a
            href="#galeri"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#galeri')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 border border-white/30 text-white px-7 py-3.5 rounded-full text-[15px] font-medium hover:bg-white/10 transition-all duration-300 hover:border-white/50"
          >
            Lihat Portfolio
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-700 ${loaded ? 'opacity-100' : 'opacity-0'
          }`}
        style={{ transitionDelay: '1200ms' }}
      >
        <span className="text-white/40 text-[11px] font-body tracking-[0.2em] uppercase">Scroll</span>
        <div className="w-px h-8 bg-linear-to-b from-white/40 to-transparent relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-3 bg-champagne animate-bounce" style={{ animationDuration: '2s' }} />
        </div>
      </div>
    </section>
  );
}
