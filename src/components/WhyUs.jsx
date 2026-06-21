import { useEffect, useRef } from 'react';
import { STATS } from '../data/constants';
import { useCountUp } from '../hooks/useAnimations';

function StatItem({ stat }) {
  const [count, startCounting] = useCountUp(stat.value, 2000);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startCounting();
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [startCounting]);

  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-champagne mb-1">
        {count}{stat.suffix}
      </div>
      <div className="text-white/70 text-xs sm:text-sm font-body font-medium tracking-wide">
        {stat.label}
      </div>
    </div>
  );
}

export default function WhyUs() {
  return (
    <section className="relative py-16 sm:py-20 md:py-28 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-tl from-charcoal to-espresso">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-champagne/15 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-6">
        {/* Header */}
        <div className="reveal-blur text-center mb-10 sm:mb-14">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Mengapa Memilih Kami?
          </h2>
          <div className="ornament-divider">
            <span className="diamond" />
          </div>
          <p className="text-white/70 text-sm sm:text-base max-w-lg mx-auto font-body mt-4">
            Kepercayaan klien di Gorontalo adalah bukti komitmen kami
            menghadirkan dekorasi terbaik dengan harga terjangkau.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {[
            {
              icon: (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ),
              title: 'Harga Terjangkau',
              desc: 'Dekorasi termurah di Gorontalo tanpa mengorbankan kualitas dan keindahan hasil.',
            },
            {
              icon: (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
                </svg>
              ),
              title: 'Hasil Estetik',
              desc: 'Tim kreatif kami memastikan setiap detail dekorasi tampil indah, rapi, dan instagramable.',
            },
            {
              icon: (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              ),
              title: 'Seluruh Gorontalo',
              desc: 'Melayani area Kota Gorontalo dan seluruh kabupaten di Provinsi Gorontalo.',
            },
          ].map((feature, i) => (
            <div key={i} className={`reveal-scale reveal-delay-${i + 1} text-center group`}>
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-champagne/15 text-champagne mb-4 group-hover:scale-110 group-hover:bg-champagne/25 transition-all duration-400">
                {feature.icon}
              </div>
              <h3 className="font-display text-lg font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-white/60 text-sm font-body leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="reveal grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 pt-10 sm:pt-12 border-t border-white/10">
          {STATS.map((stat) => (
            <StatItem key={stat.label} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
