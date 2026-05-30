import { useState } from 'react';
import { SERVICES } from '../data/constants';

export default function Services() {
  const [selectedDetail, setSelectedDetail] = useState(null);

  const openFormModal = (serviceTitle) => {
    const event = new CustomEvent('openConsultationModal', { detail: serviceTitle });
    window.dispatchEvent(event);
  };

  return (
    <section id="layanan" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="reveal text-center mb-8">
          <span className="inline-block text-champagne text-xs md:text-sm font-body font-semibold tracking-[0.25em] uppercase mb-3">
            Our Services
          </span>
          <h2 className="section-title">Layanan Kami</h2>
          <div className="ornament-divider">
            <span className="diamond" />
          </div>
          <p className="section-subtitle">
            Kami menghadirkan dekorasi untuk berbagai momen istimewa dalam hidup Anda,
            dengan harga terjangkau dan hasil yang memukau.
          </p>
        </div>

        {/* Minimalist Service Cards without images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              className={`reveal reveal-delay-${Math.min(index + 1, 6)} group relative bg-ivory rounded-2xl p-8 sm:p-10 border border-linen hover:border-champagne/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl flex flex-col h-full`}
            >
              {/* Header */}
              <div className="mb-6">
                <div className="w-12 h-12 rounded-full bg-champagne/15 flex items-center justify-center text-2xl mb-4 text-champagne group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <span className="text-champagne-dark text-[10px] font-body tracking-[0.2em] uppercase font-semibold block mb-1">
                  {service.subtitle}
                </span>
                <h3 className="font-display text-2xl font-bold text-charcoal mb-2">
                  {service.title}
                </h3>
                <p className="text-warm-gray text-sm leading-relaxed min-h-[44px]">
                  {service.description}
                </p>
              </div>

              {/* Price */}
              <div className="bg-white rounded-xl p-4 border border-linen mb-6 flex items-center justify-between shadow-sm">
                <span className="text-xs text-warm-gray uppercase tracking-wider font-semibold">Start From</span>
                <span className="font-display text-xl font-bold text-champagne-dark">{service.priceStart}</span>
              </div>

              {/* Spacer to push content down */}
              <div className="flex-1" />

              {/* Toggle features button */}
              <button
                onClick={() => setSelectedDetail(service)}
                className="w-full text-center text-sm text-charcoal font-semibold py-3 hover:text-champagne-dark transition-colors duration-300 flex items-center justify-center gap-1 mb-2 border-t border-linen mt-2"
              >
                Lihat Detail Paket
                <svg
                  className="w-4 h-4"
                  fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* CTA Button */}
              <button
                onClick={() => openFormModal(service.title)}
                className="w-full flex items-center justify-center gap-2 bg-champagne text-white py-3.5 rounded-full text-[15px] font-bold tracking-wide hover:bg-champagne-dark transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Dekor Sekarang
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Package Detail Modal */}
      {selectedDetail && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <div 
            className="absolute inset-0 bg-charcoal/60 backdrop-blur-sm transition-opacity" 
            onClick={() => setSelectedDetail(null)} 
          />
          <div className="relative bg-white rounded-2xl w-full max-w-lg mx-auto shadow-2xl overflow-hidden animate-fade-in-up">
            {/* Header */}
            <div className="p-6 bg-ivory border-b border-linen relative">
              <button 
                onClick={() => setSelectedDetail(null)} 
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white text-warm-gray hover:text-charcoal hover:bg-champagne/10 transition-colors shadow-sm"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="w-12 h-12 rounded-full bg-champagne/15 flex items-center justify-center text-2xl mb-4 text-champagne">
                {selectedDetail.icon}
              </div>
              <h3 className="font-display text-2xl font-bold text-charcoal mb-1">{selectedDetail.title}</h3>
              <p className="text-champagne-dark font-display font-bold text-xl">{selectedDetail.priceStart}</p>
            </div>
            
            {/* Content */}
            <div className="p-6">
              <p className="text-charcoal text-xs font-semibold uppercase tracking-wider mb-4">Yang Termasuk:</p>
              <ul className="space-y-3 mb-6">
                {selectedDetail.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-warm-gray leading-relaxed">
                    <svg className="w-5 h-5 text-champagne shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feat}
                  </li>
                ))}
              </ul>
              
              {/* Complimentary */}
              <div className="p-4 bg-champagne/10 rounded-xl border border-champagne/20 mb-6">
                <p className="text-sm text-champagne-dark font-semibold flex items-center gap-2">
                  <span className="text-lg">🎁</span>
                  {selectedDetail.complement}
                </p>
              </div>
              
              {/* Action */}
              <button
                onClick={() => {
                  setSelectedDetail(null);
                  // Slight delay so modal closes before next modal opens
                  setTimeout(() => openFormModal(selectedDetail.title), 200);
                }}
                className="w-full flex items-center justify-center gap-2 bg-champagne text-white py-3.5 rounded-full text-[15px] font-bold tracking-wide hover:bg-champagne-dark transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Dekor Sekarang
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
