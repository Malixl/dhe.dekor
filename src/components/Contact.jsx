import { getWhatsAppLink } from '../data/constants';

export default function Contact() {
  return (
    <section id="kontak" className="relative py-20 md:py-28 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-espresso via-charcoal to-espresso">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-champagne/15 via-transparent to-transparent opacity-80" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-5 sm:px-6 text-center">
        {/* Header */}
        <div className="reveal-blur">
          <span className="inline-block text-champagne text-xs font-body font-semibold tracking-[0.25em] uppercase mb-4">
            Hubungi Kami
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
            Siap Mewujudkan
            <br />
            <span className="text-champagne italic">Acara Impianmu?</span>
          </h2>
          <p className="text-white/70 text-sm sm:text-base md:text-lg font-body max-w-lg mx-auto mb-10 leading-relaxed">
            Konsultasikan kebutuhan dekorasimu secara gratis. Kami siap membantu
            dari konsep hingga eksekusi — dengan harga terjangkau.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="reveal reveal-delay-1 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-14">
          <a
            href={getWhatsAppLink('Halo, saya ingin konsultasi tentang jasa dekorasi acara. Bisa dibantu?')}
            target="_blank"
            rel="noopener noreferrer"
            id="contact-cta-whatsapp"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-champagne text-espresso px-8 sm:px-10 py-4 rounded-full font-bold text-sm sm:text-base tracking-wide hover:bg-champagne-dark transition-all duration-300 hover:scale-[1.03] shadow-xl shadow-champagne/25"
          >
            <svg className="w-5 sm:w-6 h-5 sm:h-6 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Chat via WhatsApp
          </a>
          <a
            href="tel:+6285396004674"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-4 rounded-full text-sm sm:text-base font-medium hover:bg-white/10 transition-all duration-300 hover:border-white/50"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            +62 853-9600-4674
          </a>
        </div>

        {/* Info Cards */}
        <div className="reveal-scale reveal-delay-2 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
          {[
            {
              icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              ),
              title: 'Lokasi',
              detail: 'Bone Bolango, Gorontalo',
            },
            {
              icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ),
              title: 'Jam Kerja',
              detail: 'Setiap Hari, 08:00 - 21:00',
            },
            {
              icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
                </svg>
              ),
              title: 'Instagram',
              detail: '@dhe.dekorasi',
            },
          ].map((info, i) => (
            <div
              key={i}
              className="bg-white/8 backdrop-blur-sm border border-white/10 rounded-xl p-4 sm:p-5 text-center"
            >
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-champagne/15 text-champagne mb-3">
                {info.icon}
              </div>
              <p className="text-white/50 text-[10px] sm:text-xs font-body uppercase tracking-wider mb-1">
                {info.title}
              </p>
              <p className="text-white font-body font-medium text-xs sm:text-sm">
                {info.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
