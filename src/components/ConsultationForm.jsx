import { useState, useEffect } from 'react';
import {
  FORM_COLORS,
  FORM_BUDGETS,
  FORM_VENUES,
  getWhatsAppLink,
} from '../data/constants';

const initialForm = {
  namaLengkap: '',
  namaPasangan: '',
  tanggalAcara: '',
  noHp: '',
  temaAcara: '',
  warnaAcara: '',
  warnaCustom: '',
  tempatAcara: '',
  budgetAcara: '',
  budgetCustom: '',
  catatan: '',
};

export default function ConsultationForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Listen for open modal event
  useEffect(() => {
    const handler = (e) => {
      setSelectedService(e.detail);
      setForm(initialForm);
      setErrors({});
      setIsOpen(true);
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    };
    window.addEventListener('openConsultationModal', handler);
    return () => window.removeEventListener('openConsultationModal', handler);
  }, []);

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = 'unset';
  };

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!form.namaLengkap.trim()) newErrors.namaLengkap = 'Wajib diisi';
    if (!form.namaPasangan.trim()) newErrors.namaPasangan = 'Wajib diisi';
    if (!form.tanggalAcara) newErrors.tanggalAcara = 'Wajib diisi';
    if (!form.noHp.trim()) newErrors.noHp = 'Wajib diisi';
    if (!form.temaAcara.trim()) newErrors.temaAcara = 'Wajib diisi';
    if (!form.warnaAcara) newErrors.warnaAcara = 'Pilih warna';
    if (form.warnaAcara === 'Custom' && !form.warnaCustom.trim()) newErrors.warnaCustom = 'Wajib diisi';
    if (!form.tempatAcara) newErrors.tempatAcara = 'Pilih tempat';
    if (!form.budgetAcara) newErrors.budgetAcara = 'Pilih budget';
    if (form.budgetAcara === 'Custom' && !form.budgetCustom.trim()) newErrors.budgetCustom = 'Wajib diisi';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {
      // Scroll to top of modal to see errors
      const modalContent = document.getElementById('modal-content-scroll');
      if (modalContent) modalContent.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const finalWarna = form.warnaAcara === 'Custom' ? form.warnaCustom : form.warnaAcara;
    const finalBudget = form.budgetAcara === 'Custom' ? form.budgetCustom : form.budgetAcara;

    // Build WhatsApp message from form
    const lines = [
      `Halo dhe.dekorasi! 👋`,
      `Saya ingin order untuk ${selectedService}`,
      ``,
      `📋 *DATA PESANAN*`,
      `━━━━━━━━━━━━━━━`,
      `👤 Nama Pemesan: ${form.namaLengkap}`,
      `💑 Nama Acara Untuk: ${form.namaPasangan}`,
      `📅 Tanggal: ${form.tanggalAcara}`,
      `📱 No. HP: ${form.noHp}`,
      `🎨 Tema Acara: ${form.temaAcara}`,
      `🎨 Warna Acara: ${finalWarna}`,
      `📍 Tempat: ${form.tempatAcara}`,
      `💰 Budget: ${finalBudget}`,
      form.catatan ? `\n📝 *CATATAN:*\n${form.catatan}` : null,
      ``,
      `Mohon info lebih lanjut. Terima kasih! 🙏`,
    ].filter(Boolean).join('\n');

    const waUrl = getWhatsAppLink(lines);
    setSubmitted(true);

    setTimeout(() => {
      window.open(waUrl, '_blank');
      setSubmitted(false);
      closeModal();
    }, 800);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 animate-[fadeIn_300ms_ease]">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-espresso/80 backdrop-blur-md" 
        onClick={closeModal}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-[scaleIn_300ms_var(--ease-out-expo)]">
        
        {/* Header */}
        <div className="bg-champagne/10 border-b border-champagne/20 p-5 sm:p-6 flex items-center justify-between shrink-0">
          <div>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-charcoal">
              Form Pemesanan
            </h3>
            <p className="text-warm-gray text-sm font-medium mt-1">
              Layanan: <span className="text-champagne-dark font-bold">{selectedService}</span>
            </p>
          </div>
          <button 
            onClick={closeModal}
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-charcoal shadow-sm hover:bg-champagne hover:text-white transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Form Content Scrollable */}
        <div id="modal-content-scroll" className="overflow-y-auto p-5 sm:p-8 custom-scrollbar">
          <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
            
            {/* Row: Nama Order & Nama Acara */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              <FormField label="Nama Lengkap Order" required error={errors.namaLengkap}>
                <input
                  type="text"
                  placeholder="Nama pemesan"
                  value={form.namaLengkap}
                  onChange={(e) => handleChange('namaLengkap', e.target.value)}
                  className="modal-input"
                />
              </FormField>
              <FormField label="Nama Lengkap Yang Jadi Acara" required error={errors.namaPasangan}>
                <input
                  type="text"
                  placeholder="Contoh: Budi & Sari"
                  value={form.namaPasangan}
                  onChange={(e) => handleChange('namaPasangan', e.target.value)}
                  className="modal-input"
                />
              </FormField>
            </div>

            {/* Row: Tanggal & No HP */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              <FormField label="Tanggal Acara" required error={errors.tanggalAcara}>
                <input
                  type="date"
                  value={form.tanggalAcara}
                  onChange={(e) => handleChange('tanggalAcara', e.target.value)}
                  className="modal-input"
                />
              </FormField>
              <FormField label="No. Handphone (WhatsApp)" required error={errors.noHp}>
                <input
                  type="tel"
                  placeholder="Contoh: 0812..."
                  value={form.noHp}
                  onChange={(e) => handleChange('noHp', e.target.value)}
                  className="modal-input"
                />
              </FormField>
            </div>

            <hr className="border-linen" />

            {/* Row: Tema & Warna */}
            <div className="space-y-6">
              <FormField label="Tema Acara" required error={errors.temaAcara}>
                <input
                  type="text"
                  placeholder="Contoh: Minimalis Modern, Rustic, Floral..."
                  value={form.temaAcara}
                  onChange={(e) => handleChange('temaAcara', e.target.value)}
                  className="modal-input"
                />
              </FormField>

              <FormField label="Pilih Warna Dekorasi" required error={errors.warnaAcara}>
                <div className="flex flex-wrap gap-3 mt-2">
                  {FORM_COLORS.map((theme) => (
                    <button
                      key={theme.label}
                      type="button"
                      onClick={() => handleChange('warnaAcara', theme.label)}
                      className={`relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl shadow-sm transition-all duration-300 ${
                        form.warnaAcara === theme.label
                          ? 'ring-4 ring-champagne ring-offset-2 scale-110 z-10'
                          : 'hover:scale-105 hover:shadow-md ring-1 ring-black/5'
                      }`}
                      style={{ background: theme.color }}
                      title={theme.label}
                    >
                      {/* Checkmark icon for selected */}
                      {form.warnaAcara === theme.label && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <svg className={`w-5 h-5 ${['Maroon', 'Navy Blue'].includes(theme.label) ? 'text-white' : 'text-charcoal'}`} fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      )}
                    </button>
                  ))}
                </div>
                <div className="mt-2 text-xs text-warm-gray">
                  Terpilih: <span className="font-semibold text-charcoal">{form.warnaAcara || '-'}</span>
                </div>
              </FormField>

              {/* Custom Color Input - Conditional */}
              {form.warnaAcara === 'Custom' && (
                <div className="animate-[fadeIn_300ms_ease]">
                  <FormField label="Masukkan Warna Custom" required error={errors.warnaCustom}>
                    <input
                      type="text"
                      placeholder="Contoh: Peach & White, Merah Bata..."
                      value={form.warnaCustom}
                      onChange={(e) => handleChange('warnaCustom', e.target.value)}
                      className="modal-input"
                    />
                  </FormField>
                </div>
              )}
            </div>

            <hr className="border-linen" />

            {/* Row: Budget & Tempat */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              <FormField label="Range Budget" required error={errors.budgetAcara}>
                <div className="relative">
                  <select
                    value={form.budgetAcara}
                    onChange={(e) => handleChange('budgetAcara', e.target.value)}
                    className="modal-input appearance-none pr-10"
                  >
                    <option value="" disabled>Pilih Budget</option>
                    {FORM_BUDGETS.map((b) => (
                      <option key={b} value={b}>{b}</option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-warm-gray">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                  </div>
                </div>
              </FormField>

              <FormField label="Tempat Acara" required error={errors.tempatAcara}>
                <div className="relative">
                  <select
                    value={form.tempatAcara}
                    onChange={(e) => handleChange('tempatAcara', e.target.value)}
                    className="modal-input appearance-none pr-10"
                  >
                    <option value="" disabled>Pilih Tempat</option>
                    {FORM_VENUES.map((v) => (
                      <option key={v} value={v}>{v}</option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-warm-gray">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                  </div>
                </div>
              </FormField>
            </div>

            {/* Custom Budget Input - Conditional */}
            {form.budgetAcara === 'Custom' && (
              <div className="animate-[fadeIn_300ms_ease]">
                <FormField label="Nominal Budget Custom" required error={errors.budgetCustom}>
                  <input
                    type="text"
                    placeholder="Contoh: Rp 350.000"
                    value={form.budgetCustom}
                    onChange={(e) => handleChange('budgetCustom', e.target.value)}
                    className="modal-input"
                  />
                </FormField>
              </div>
            )}

            {/* Catatan */}
            <FormField label="Catatan Tambahan (Opsional)">
              <textarea
                rows={3}
                placeholder="Ada request khusus?"
                value={form.catatan}
                onChange={(e) => handleChange('catatan', e.target.value)}
                className="modal-input resize-y min-h-[80px]"
              />
            </FormField>
          </form>
        </div>

        {/* Footer CTA */}
        <div className="border-t border-linen p-5 sm:p-6 shrink-0 bg-white">
          <button
            type="button"
            onClick={handleSubmit}
            disabled={submitted}
            className={`w-full flex items-center justify-center gap-2 py-4 rounded-xl text-base font-bold tracking-wide transition-all duration-400 ${
              submitted
                ? 'bg-green-500 text-white scale-[0.98]'
                : 'bg-champagne text-white hover:bg-champagne-dark hover:scale-[1.01] shadow-lg shadow-champagne/30'
            }`}
          >
            {submitted ? (
              <>
                <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Memproses...
              </>
            ) : (
              <>
                Dekor Sekarang
                <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </>
            )}
          </button>
        </div>
      </div>

      <style>{`
        .modal-input {
          width: 100%;
          padding: 0.875rem 1rem;
          background: #FAF6F0;
          border: 1px solid #F0EBE3;
          border-radius: 12px;
          color: #2C2C2C;
          font-family: var(--font-body);
          font-size: 0.875rem;
          font-weight: 500;
          transition: all 0.3s;
          outline: none;
        }
        .modal-input::placeholder {
          color: #A09C9B;
          font-weight: 400;
        }
        .modal-input:focus {
          border-color: var(--color-champagne);
          box-shadow: 0 0 0 4px rgba(201, 169, 110, 0.1);
          background: #FFF;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #E5E0DA;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: var(--color-champagne-light);
        }
      `}</style>
    </div>
  );
}

function FormField({ label, required, error, children }) {
  return (
    <div>
      <label className="block text-sm text-charcoal font-bold mb-2">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      {children}
      {error && (
        <p className="text-red-500 text-xs mt-1.5 font-medium flex items-center gap-1">
          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          {error}
        </p>
      )}
    </div>
  );
}
