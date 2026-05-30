/**
 * Constants & Data for dhe.dekorasi
 * Centralized data store — edit content here without touching components
 */

export const WHATSAPP_NUMBER = '6285396004674';

export const getWhatsAppLink = (message = '') => {
  const encodedMsg = encodeURIComponent(
    message || 'Halo dhe.dekorasi, saya tertarik dengan jasa dekorasi. Bisa info lebih lanjut?'
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMsg}`;
};

export const NAV_LINKS = [
  { label: 'Beranda', href: '#beranda' },
  { label: 'Layanan', href: '#layanan' },
  { label: 'Galeri', href: '#galeri' },
  { label: 'Tentang', href: '#tentang' },
  { label: 'Kontak', href: '#kontak' },
];

export const SECTION_IDS = ['beranda', 'layanan', 'galeri', 'tentang', 'kontak'];

export const SERVICES = [
  {
    id: 'lamaran',
    title: 'Dekorasi Lamaran',
    subtitle: 'THE PERFECT PROPOSAL',
    tagline: 'Momen Sakral Penuh Keindahan',
    description: 'Paket dekorasi lamaran yang dirancang dengan detail sempurna untuk momen paling berkesan dalam hidupmu.',
    priceStart: 'Rp 500.000',
    features: [
      'Backdrop custom desain (lebar maks 3m)',
      'Meja hantaran + dekorasi bunga',
      'Standing flower 4 pcs',
      'Karpet/aisle decoration',
      'Kursi pengantin 1 set',
      'Lighting warm white',
      'Welcome sign custom',
    ],
    complement: 'Free: Konsultasi desain & survei lokasi',
    icon: '💍',
    waMessage: 'Halo dhe.dekorasi, saya tertarik dengan paket Dekorasi Lamaran.',
  },
  {
    id: 'ulang-tahun',
    title: 'Dekorasi Ulang Tahun',
    subtitle: 'BIRTHDAY CELEBRATION',
    tagline: 'Rayakan dengan Penuh Warna',
    description: 'Dekorasi ulang tahun meriah yang bisa disesuaikan tema — dari anak-anak hingga dewasa.',
    priceStart: 'Rp 300.000',
    features: [
      'Backdrop tema custom (lebar maks 2m)',
      'Balon helium & balon dekorasi',
      'Meja dessert table setup',
      'Bunting flag & banner nama',
      'Lighting dekoratif',
      'Properti foto tambahan',
    ],
    complement: 'Free: Desain custom sesuai tema',
    icon: '🎂',
    waMessage: 'Halo dhe.dekorasi, saya ingin tanya paket Dekorasi Ulang Tahun.',
  },
  {
    id: '7-bulanan',
    title: 'Dekorasi 7 Bulanan',
    subtitle: 'BABY SHOWER',
    tagline: 'Sambut si Kecil dengan Hangat',
    description: 'Dekorasi 7 bulanan yang lembut dan penuh kehangatan untuk menyambut kehadiran buah hati.',
    priceStart: 'Rp 400.000',
    features: [
      'Backdrop pastel custom design',
      'Dekorasi meja utama',
      'Rangkaian bunga artifisial',
      'Balon dekoratif nuansa pastel',
      'Standing flower 2 pcs',
      'Welcome sign & photo corner',
    ],
    complement: 'Free: Koordinasi dengan vendor lain',
    icon: '🤱',
    waMessage: 'Halo dhe.dekorasi, saya tertarik dengan paket Dekorasi 7 Bulanan.',
  },
  {
    id: 'syukuran',
    title: 'Dekorasi Syukuran',
    subtitle: 'THANKSGIVING DECOR',
    tagline: 'Syukuran yang Berkesan',
    description: 'Dekorasi syukuran yang rapi dan estetik, cocok untuk acara keluarga dan komunitas.',
    priceStart: 'Rp 200.000',
    features: [
      'Backdrop simpel elegan',
      'Dekorasi meja prasmanan',
      'Rangkaian bunga meja',
      'Taplak & runner meja premium',
      'Lighting ambient',
      'Standing banner custom',
    ],
    complement: 'Free: Setup & bongkar di lokasi',
    icon: '🎊',
    waMessage: 'Halo dhe.dekorasi, saya ingin tanya tentang paket Dekorasi Syukuran.',
  },
  {
    id: 'aqiqah',
    title: 'Dekorasi Aqiqah',
    subtitle: 'AQIQAH CEREMONY',
    tagline: 'Perayaan Penuh Berkah',
    description: 'Dekorasi aqiqah cantik dan bermakna untuk merayakan momen kelahiran buah hati.',
    priceStart: 'Rp 300.000',
    features: [
      'Backdrop nuansa islami / pastel',
      'Dekorasi meja utama',
      'Rangkaian bunga segar/artifisial',
      'Balon dekorasi',
      'Welcome sign custom',
      'Photo corner setup',
    ],
    complement: 'Free: Revisi desain hingga 2x',
    icon: '🌙',
    waMessage: 'Halo dhe.dekorasi, saya tertarik dengan paket Dekorasi Aqiqah.',
  },
  {
    id: 'custom',
    title: 'Custom Event',
    subtitle: 'YOUR DREAM EVENT',
    tagline: 'Sesuai Imajinasi Anda',
    description: 'Acara spesial lainnya? Kami siap mewujudkan dekorasi sesuai impian dan budgetmu.',
    priceStart: 'Hubungi Kami',
    features: [
      'Konsultasi desain mendalam',
      'Custom layout & tema',
      'Dekorasi sesuai kebutuhan',
      'Koordinasi vendor',
      'Setup & bongkar profesional',
      'Dokumentasi dekorasi',
    ],
    complement: 'Free: Survey lokasi & konsultasi awal',
    icon: '✨',
    waMessage: 'Halo dhe.dekorasi, saya ingin konsultasi dekorasi untuk acara custom.',
  },
];

export const GALLERY_ITEMS = [
  { id: 1, src: '/portfolio/portfolio-01.jpg', category: 'Ulang Tahun', alt: 'Dekorasi lamaran romantis dhe.dekorasi' },
  { id: 2, src: '/portfolio/portfolio-02.jpg', category: 'Ulang Tahun', alt: 'Dekorasi lamaran elegan' },
  { id: 3, src: '/portfolio/portfolio-03.jpg', category: 'Ulang Tahun', alt: 'Dekorasi ulang tahun meriah' },
  { id: 4, src: '/portfolio/portfolio-04.jpg', category: 'Aqiqah', alt: 'Dekorasi lamaran mewah' },
  { id: 5, src: '/portfolio/portfolio-05.jpg', category: 'Aqiqah', alt: 'Dekorasi ulang tahun anak' },
  { id: 6, src: '/portfolio/portfolio-06.jpg', category: 'Khitanan', alt: 'Dekorasi tujuh bulanan pastel' },
  { id: 7, src: '/portfolio/portfolio-07.jpg', category: 'Pentas Seni', alt: 'Dekorasi aqiqah cantik' },
  { id: 8, src: '/portfolio/portfolio-08.jpg', category: 'HUT BRI', alt: 'Dekorasi baby shower' },
  { id: 9, src: '/portfolio/portfolio-09.jpg', category: 'Ulang Tahun', alt: 'Dekorasi syukuran elegan' },
  { id: 10, src: '/portfolio/portfolio-10.jpg', category: 'Ulang Tahun', alt: 'Dekorasi lamaran outdoor' },
  { id: 11, src: '/portfolio/portfolio-11.jpg', category: 'Grand Opening Fore', alt: 'Dekorasi ulang tahun dewasa' },
  { id: 12, src: '/portfolio/portfolio-12.jpg', category: 'Aqiqah', alt: 'Dekorasi syukuran keluarga' },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Sari Mohamad',
    event: 'Dekorasi Lamaran',
    text: 'Hasilnya luar biasa! Dekorasinya cantik banget, tamu-tamu pada kagum. Harganya juga sangat terjangkau. Terima kasih dhe.dekorasi! 💕',
    rating: 5,
  },
  {
    id: 2,
    name: 'Nona Husain',
    event: 'Dekorasi 7 Bulanan',
    text: 'Pelayanannya ramah, hasil dekorasinya rapi dan estetik. Suasana acaranya jadi terasa sangat spesial. Recommended banget!',
    rating: 5,
  },
  {
    id: 3,
    name: 'Fitri Daud',
    event: 'Dekorasi Ulang Tahun',
    text: 'Anak saya senang sekali dengan dekorasinya. Sesuai tema yang diminta, harga bersahabat. Pasti akan order lagi!',
    rating: 5,
  },
  {
    id: 4,
    name: 'Rahma Pakaya',
    event: 'Dekorasi Syukuran',
    text: 'Pertama kali pakai jasa dekorasi dan langsung puas. Tim dhe.dekorasi sangat profesional dan hasilnya mewah!',
    rating: 5,
  },
];

export const STATS = [
  { value: 20, suffix: '+', label: 'Acara Berhasil' },
  { value: 3, suffix: '+', label: 'Tahun Pengalaman' },
  { value: 98, suffix: '%', label: 'Klien Puas' },
  { value: 5, suffix: '', label: 'Kategori Layanan' },
];

export const FORM_COLORS = [
  { label: 'Pastel', color: '#F3E5F5' },
  { label: 'Gold/White', color: '#FFF8E1' },
  { label: 'Maroon', color: '#7B1F3A' },
  { label: 'Sage Green', color: '#A8B5A0' },
  { label: 'Navy Blue', color: '#1A237E' },
  { label: 'Blush Pink', color: '#F8BBD0' },
  { label: 'Lavender', color: '#CE93D8' },
  { label: 'Custom', color: 'linear-gradient(135deg, #f093fb, #f5576c, #4facfe)' },
];

export const FORM_BUDGETS = [
  'Rp 100.000',
  'Rp 200.000',
  'Rp 300.000',
  'Rp 400.000',
  'Rp 500.000',
  'Custom',
];

export const FORM_VENUES = [
  'Rumah / Indoor',
  'Gedung / Hall',
  'Outdoor / Taman',
  'Restoran / Cafe',
  'Hotel',
  'Lainnya',
];

export const MAPS_CONFIG = {
  lat: 0.6057783987446627,
  lng: 123.06260839570528,
  address: 'J347+72W, Jl. Dumati, Tinelo Ayula, Kec. Bulango Sel., Kabupaten Bone Bolango, Gorontalo 96181',
  embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1994.5!2d123.06260839570528!3d0.6057783987446627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMMKwMzYnMjAuOCJOIDEyM8KwMDMnNDUuNCJF!5e0!3m2!1sid!2sid!4v1',
  directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=0.6057783987446627,123.06260839570528',
};
