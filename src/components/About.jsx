export default function About() {
  return (
    <section id="tentang" className="section-padding bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center overflow-hidden">
          {/* Gradient Block */}
          <div className="reveal-left relative">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] max-w-sm mx-auto lg:max-w-none bg-gradient-to-tr from-champagne-light via-ivory to-champagne/30 flex items-center justify-center">
              <div className="w-40 h-40 rounded-full border-8 border-white/60 flex items-center justify-center shadow-2xl backdrop-blur-sm bg-white/30 overflow-hidden p-3">
                <img src="/Logo.png" alt="Logo dhe.dekorasi" className="w-full h-full object-contain" />
              </div>
            </div>

            {/* Floating accent card */}
            <div className="absolute -bottom-3 -right-3 sm:bottom-6 sm:-right-6 bg-champagne text-white p-4 sm:p-5 rounded-xl shadow-xl animate-float">
              <div className="font-display text-2xl sm:text-3xl font-bold">3+</div>
              <div className="text-xs sm:text-sm font-body font-medium opacity-90">Tahun<br />Pengalaman</div>
            </div>

            {/* Decorative frame */}
            <div className="absolute -top-3 -left-3 w-20 sm:w-24 h-20 sm:h-24 border-t-2 border-l-2 border-champagne/30 rounded-tl-2xl" />
          </div>

          {/* Content Side */}
          <div>
            <div className="reveal-right">
              <span className="inline-block text-champagne text-xs font-body font-semibold tracking-[0.25em] uppercase mb-4">
                Tentang Kami
              </span>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-charcoal leading-tight mb-6">
                Menghadirkan Keindahan
                <br />
                di Setiap <span className="text-champagne italic">Momen</span>
              </h2>
            </div>

            <div className="reveal-right reveal-delay-1">
              <p className="text-warm-gray text-sm sm:text-base leading-relaxed mb-4">
                <strong className="font-display font-bold text-charcoal">dhe.dekorasi</strong> hadir sebagai solusi
                dekorasi acara terjangkau di Gorontalo. Kami percaya bahwa setiap momen istimewa
                layak tampil indah — tanpa harus menguras kantong.
              </p>
              <p className="text-warm-gray text-sm sm:text-base leading-relaxed mb-6">
                Dengan pengalaman menangani lebih dari 20 acara, dari lamaran intim hingga
                syukuran besar, tim kami terlatih menghadirkan dekorasi yang estetik, rapi,
                dan sesuai keinginan Anda. Kami memahami budaya dan selera masyarakat Gorontalo,
                sehingga setiap dekorasi terasa personal dan bermakna.
              </p>
            </div>

            {/* Values */}
            <div className="reveal-scale reveal-delay-2 space-y-4 mb-8">
              {[
                { icon: '🎨', text: 'Desain kreatif & estetik yang disesuaikan dengan tema acara Anda' },
                { icon: '💰', text: 'Harga transparan & paling terjangkau di Gorontalo' },
                { icon: '🤝', text: 'Konsultasi gratis & pelayanan ramah dari tim berpengalaman' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-lg sm:text-xl mt-0.5 shrink-0">{item.icon}</span>
                  <p className="text-charcoal text-sm leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>

            {/* Signature-style */}
            <div className="reveal-right reveal-delay-3">
              <div className="flex items-center gap-4 pt-4 border-t border-linen">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-champagne/30 bg-white shadow-sm flex items-center justify-center p-1">
                  <img src="/Logo.png" alt="Logo dhe.dekorasi" className="w-full h-full object-contain" />
                </div>
                <div>
                  <p className="font-display font-bold text-charcoal">dhe.dekorasi</p>
                  <p className="text-warm-gray text-sm">Bone Bolango, Gorontalo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
