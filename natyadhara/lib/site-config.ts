// Central place for editable content. Kept plain and typed so it ports
// cleanly to an Angular/.NET front-end later.

export const siteConfig = {
  name: 'Natyadhara',
  fullName: 'Natyadhara Nirthya Peetam',
  teacher: 'Ms. Monicaa',
  slogan: 'In every gesture, a story. In every step, a prayer.',
  style: 'Pandanallur & Vazhuvoor Style',
  ageLimit: '4 years and above',
  contact: {
    // Placeholders — replace with real details later.
    email: 'hello@natyadhara.example',
    phonePrimary: '+91 90000 00000',
    phoneSecondary: '+91 90000 00001',
    instagram: 'https://instagram.com/',
    instagramHandle: '@natyadhara',
    address:
      'Child Pre School, No 14A, 5th Street, ICL Home Town (near park), Noombal, Chennai-600077',
  },
} as const

export const navLinks = [
  { label: 'About Us', href: '/#about' },
  { label: 'Gallery', href: '/#gallery' },
  { label: 'Registration', href: '/registration' },
  { label: 'Contact Us', href: '/#contact' },
] as const

export const schedule = [
  {
    title: 'Weekday Batch',
    days: 'Monday – Friday',
    time: '6:00 PM – 8:00 PM',
    note: 'Ideal for school-going children after class hours.',
  },
  {
    title: 'Weekend Batch',
    days: 'Saturday & Sunday',
    time: '10:00 AM – 12:00 PM',
    note: 'A relaxed morning session for all age groups.',
  },
] as const

export const galleryImages = [
  { src: '/images/gallery-1.png', alt: 'A young student practising a basic Bharatanatyam adavu stance' },
  { src: '/images/gallery-2.png', alt: 'Close-up of ghungroo bell anklets on a dancer resting on a wooden floor' },
  { src: '/images/gallery-3.png', alt: 'A dancer performing an expressive abhinaya facial expression' },
  { src: '/images/gallery-4.png', alt: 'A group of young students performing together at a recital' },
  { src: '/images/gallery-5.png', alt: 'A dancer in the classical Natyarambha pose' },
  { src: '/images/gallery-6.png', alt: 'A brass oil lamp glowing beside a Nataraja statue with flowers' },
] as const
