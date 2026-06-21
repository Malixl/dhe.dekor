import { MAPS_CONFIG, getWhatsAppLink } from '../data/constants';

export default function GoogleMap() {
  return (
    <section className="relative bg-linen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="section-padding pb-0 text-center">
          <div className="reveal">
            <span className="inline-block text-champagne text-xs font-body font-semibold tracking-[0.25em] uppercase mb-3">
              Lokasi Kami
            </span>
            <h2 className="section-title">Temukan Kami</h2>
            <div className="ornament-divider">
              <span className="diamond" />
            </div>
            <p className="section-subtitle">
              Kunjungi studio kami atau kami yang datang ke lokasi acara Anda
              di seluruh Provinsi Gorontalo.
            </p>
          </div>
        </div>

        {/* Map + Info Card */}
        <div className="px-4 sm:px-6 pb-16 md:pb-20">
          <div className="relative rounded-2xl overflow-hidden shadow-xl border border-linen">
            {/* Google Maps Embed */}
            <div className="w-full h-[300px] sm:h-[400px] md:h-[450px]">
              <iframe
                title="Lokasi dhe.dekorasi Gorontalo"
                src={MAPS_CONFIG.embedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Floating Info Card */}
            <div className="hidden sm:block absolute top-4 left-4 right-4 sm:top-6 sm:left-6 sm:right-auto sm:max-w-sm">
              <div className="bg-white/95 backdrop-blur-md rounded-xl p-5 shadow-xl border border-linen">
                {/* Brand */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden border border-champagne/30 bg-white shadow-sm flex items-center justify-center p-1 shrink-0">
                    <img src="/Logo.png" alt="Logo dhe.dekorasi" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-charcoal text-base">
                      dhe.<span className="text-champagne">dekorasi</span>
                    </h3>
                    <p className="text-warm-gray text-xs">Jasa Dekorasi Acara</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-2 mb-3">
                  <svg className="w-4 h-4 text-champagne shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  <p className="text-warm-gray text-xs leading-relaxed">
                    {MAPS_CONFIG.address}
                  </p>
                </div>

                {/* Contact */}
                <div className="flex items-center gap-2 mb-4">
                  <svg className="w-4 h-4 text-champagne shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  <p className="text-warm-gray text-xs">+62 853-9600-4674</p>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <a
                    href={MAPS_CONFIG.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 bg-charcoal text-white py-2.5 rounded-lg text-xs font-semibold hover:bg-espresso transition-colors"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                    Petunjuk Arah
                  </a>
                  <a
                    href={getWhatsAppLink('Halo, saya ingin berkunjung ke studio dhe.dekorasi. Apakah bisa?')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 bg-champagne text-espresso py-2.5 rounded-lg text-xs font-bold hover:bg-champagne-dark transition-colors"
                  >
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Hubungi
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
