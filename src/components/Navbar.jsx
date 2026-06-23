import { useState } from 'react';
import { NAV_LINKS, getWhatsAppLink } from '../data/constants';
import { useNavbarScroll, useActiveSection } from '../hooks/useAnimations';

export default function Navbar() {
  const scrolled = useNavbarScroll(60);
  const activeSection = useActiveSection(['beranda', 'layanan', 'galeri', 'tentang', 'kontak']);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      // Add offset for fixed navbar
      const y = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <nav
      id="main-nav"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex items-center justify-between h-20">
        {/* Logo */}
        <a
          href="#beranda"
          onClick={(e) => handleNavClick(e, '#beranda')}
          className="flex items-center gap-2 sm:gap-3 group"
        >
          <img src="/LogoDheDekor NoTextnobg.png" alt="Logo dhe.dekorasi" className="h-8 md:h-10 w-auto object-contain drop-shadow-md" />
          <span className="text-xl md:text-2xl font-display font-bold tracking-tight">
            <span className={scrolled ? 'text-charcoal' : 'text-white'}>dhe.</span>
            <span className="text-champagne">dekorasi</span>
          </span>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`relative text-[15px] font-medium transition-colors duration-300 hover:text-champagne ${
                scrolled ? 'text-charcoal' : 'text-white/90'
              } ${activeSection === link.href.slice(1) ? 'text-champagne' : ''}`}
            >
              {link.label}
              <span
                className={`absolute -bottom-1 left-0 h-[2px] bg-champagne transition-all duration-300 ${
                  activeSection === link.href.slice(1) ? 'w-full' : 'w-0'
                }`}
              />
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <a
          href={getWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-flex items-center gap-2 bg-champagne text-white px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide hover:bg-champagne-dark transition-all duration-300 hover:scale-105 shadow-md"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Hubungi Kami
        </a>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden flex flex-col gap-[6px] p-2"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-7 h-[2px] rounded-full transition-all duration-300 ${
              scrolled ? 'bg-charcoal' : 'bg-white'
            } ${menuOpen ? 'rotate-45 translate-y-[8px]' : ''}`}
          />
          <span
            className={`block w-7 h-[2px] rounded-full transition-all duration-300 ${
              scrolled ? 'bg-charcoal' : 'bg-white'
            } ${menuOpen ? 'opacity-0' : ''}`}
          />
          <span
            className={`block w-7 h-[2px] rounded-full transition-all duration-300 ${
              scrolled ? 'bg-charcoal' : 'bg-white'
            } ${menuOpen ? '-rotate-45 -translate-y-[8px]' : ''}`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-out ${
          menuOpen ? 'max-h-[400px] opacity-100 shadow-lg' : 'max-h-0 opacity-0'
        } bg-white`}
      >
        <div className="px-6 py-4 flex flex-col">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`py-4 text-base font-medium border-b border-gray-100 transition-colors ${
                activeSection === link.href.slice(1) ? 'text-champagne' : 'text-charcoal'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 flex items-center justify-center gap-2 bg-champagne text-white py-3.5 rounded-full text-base font-semibold shadow-md hover:bg-champagne-dark"
          >
            Hubungi via WhatsApp
          </a>
        </div>
      </div>
    </nav>
  );
}
