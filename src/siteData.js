export const categories = [
  { id: 'vehicle', label: 'Vehicle Work' },
  { id: 'gates', label: 'Gate Work' },
  { id: 'railings', label: 'Railing Work' },
  { id: 'aluminum', label: 'Aluminum Work' },
  { id: 'industrial', label: 'Industrial Work' },
  { id: 'steel', label: 'Steel Work' },
];

export const stats = [
  { value: '12+', label: 'साल Experience' },
  { value: '450+', label: 'Complete Projects' },
  { value: '6', label: 'Main Services' },
];

export const leaders = [
  {
    name: 'Amjad Bhai',
    role: 'Founder & CEO',
    image: '/assets/team/amjadbhai.jpg',
    description: 'Amjad Bhai leads workshop operations, client relations, custom design development, and ensures exceptional quality craftsmanship in every project.',
  },
  {
    name: 'Imran Bhai',
    role: 'Management Head',
    image: '/assets/categories/imranbhai.jpg',
    description: 'Imran Bhai leads project planning, material coordination, team operations, and timely project delivery, ensuring smooth execution from start to finish..',
  },
];

export const services = [
  {
    category: 'vehicle',
    title: 'DJ Vehicle Fabrication',
    tag: 'Popular Work',
    images: ['/assets/categories/dj-vehicle.svg'],
    description: 'Bolero, pickup और mini truck के लिए strong sound body, LED frame, speaker mount और custom finishing.',
  },
  {
    category: 'vehicle',
    title: 'Band Vehicle Manufacturing',
    tag: 'Real Photos',
    images: ['/assets/categories/bandgadi1.jpg', '/assets/categories/bandgadi2.jpg'],
    description: 'Band baja vehicle के लिए decorative body, equipment support, railing, canopy और durable steel frame work.',
  },
  {
    category: 'gates',
    title: 'Main Gate Design',
    tag: 'Real Photos',
    images: ['/assets/categories/maingat1.jpg', '/assets/categories/maingat2.jpg'],
    description: 'Home, shop और factory के लिए MS/SS main gate, channel gate और sliding gate with clean welding finish.',
  },
  {
    category: 'railings',
    title: 'Steel Railing Work',
    tag: 'Real Photos',
    images: ['/assets/categories/steelrailing1.jpg', '/assets/categories/steelrailing2.jpg'],
    description: 'Balcony, staircase और terrace के लिए safe grip, smooth edges और modern steel railing design.',
  },
  {
    category: 'aluminum',
    title: 'Aluminum Windows & Doors',
    tag: 'Modern',
    images: ['/assets/categories/aluminum-work.svg'],
    description: 'Sliding windows, office doors, partition और glass fitting के साथ customized aluminum section work.',
  },
  {
    category: 'industrial',
    title: 'CNC Sheet & Industrial Work',
    tag: 'Custom',
    images: ['/assets/categories/cncsheet.jpg', '/assets/categories/industrial-shed.svg'],
    description: 'CNC sheet, factory shed, parking shade और structural fabrication के लिए heavy duty metal work.',
  },
  {
    category: 'steel',
    title: 'MS & SS Fabrication',
    tag: 'Custom',
    images: ['/assets/categories/steel-fabrication.svg'],
    description: 'Mild steel और stainless steel में custom frame, furniture, structure और repair work measurement के हिसाब से.',
  },
];

export const galleryImages = services.flatMap((service) =>
  service.images.map((image, index) => ({
    category: service.category,
    title: service.images.length > 1 ? `${service.title} ${index + 1}` : service.title,
    image,
  })),
);

export const whyChoose = [
  { icon: '01', title: 'Strong Material', text: 'हर project के लिए सही gauge, section और finishing practical तरीके से suggest की जाती है.' },
  { icon: '02', title: 'Custom Design', text: 'Vehicle body, gate pattern और railing design आपके size और requirement के according बनता है.' },
  { icon: '03', title: 'Clean Finishing', text: 'Welding के बाद grinding, polish, paint और fitting पर proper attention दिया जाता है.' },
  { icon: '04', title: 'Quick Response', text: 'Call या WhatsApp पर requirement भेजते ही project discussion quickly start हो जाता है.' },
];
