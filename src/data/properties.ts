export interface Property {
  id: string;
  name: string;
  location: string;
  city: string;
  state: string;
  type: string;
  category: 'residence' | 'penthouse' | 'commercial' | 'estate';
  bedrooms?: number;
  bathrooms?: number;
  sqft: number;
  priceDisplay: string;
  status: 'Private Treaty' | 'Exclusive Advisory' | 'Under Offer';
  isFlagship?: boolean;
  image: string;
  gallery: string[];
  description: string;
  architecturalHighlights: string[];
  features: string[];
}

export const PROPERTIES_DATA: Property[] = [
  {
    id: 'the-grey-residence',
    name: 'The Grey Residence',
    location: 'Sadashivanagar, Bengaluru',
    city: 'Bengaluru',
    state: 'Karnataka',
    type: 'Signature Architectural Residence',
    category: 'residence',
    bedrooms: 4,
    bathrooms: 4,
    sqft: 3200,
    priceDisplay: 'Price Upon Request',
    status: 'Private Treaty',
    isFlagship: true,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85'
    ],
    description: 'A monolithic private sanctum pairing brutalist purity with tranquil garden courtyards. Hand-dressed basalt stone, acoustic floor-to-ceiling glass, and warm European walnut deliver effortless serenity in Bengaluru’s premier diplomatic corridor.',
    architecturalHighlights: [
      'Cantilevered basalt stone terrace overlooking private grove',
      'Custom fluted walnut joinery & bookmatched Italian marble',
      'Biophilic double-height atrium with motorized solar louvers',
      'Climate-controlled subterranean wine cellar & 4-bay vault'
    ],
    features: ['Heated Reflection Pool', 'Double-Height Living Salon', 'Automated Microclimate Control', 'Private Staff Quarters', '24/7 Fiduciary Concierge']
  },
  {
    id: 'the-sovereign-penthouse',
    name: 'The Sovereign Penthouse',
    location: 'Indiranagar Prime, Bengaluru',
    city: 'Bengaluru',
    state: 'Karnataka',
    type: 'Sky Penthouse Suite',
    category: 'penthouse',
    bedrooms: 5,
    bathrooms: 6,
    sqft: 5400,
    priceDisplay: 'Price Upon Request',
    status: 'Exclusive Advisory',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1400&q=85'
    ],
    description: 'Suspended above the tree-lined canopy of Indiranagar, this duplex sky estate commands panoramic 360-degree skyline vistas. Featuring dual cantilevered entertaining decks, a heated glass-edge sky pool, and private high-speed biometric elevator access.',
    architecturalHighlights: [
      'Wraparound cantilevered viewing promenade with frameless glass',
      'Italian Statuario marble slab flooring throughout primary levels',
      'Dedicated biometric high-speed elevator opening directly into private gallery'
    ],
    features: ['Infinity Sky Plunge Pool', 'Dual Panoramic Terraces', 'Chef-Grade Gaggenau Kitchen', 'Private Spa Suite & Sauna']
  },
  {
    id: 'solstice-pavilion-villa',
    name: 'Solstice Pavilion Villa',
    location: 'Whitefield Enclave, Bengaluru',
    city: 'Bengaluru',
    state: 'Karnataka',
    type: 'Private Garden Estate',
    category: 'estate',
    bedrooms: 5,
    bathrooms: 6,
    sqft: 7800,
    priceDisplay: 'Price Upon Request',
    status: 'Private Treaty',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1400&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1400&q=85'
    ],
    description: 'Secluded within an expansive 1.2-acre mature botanical grove, Solstice Pavilion harmonizes Scandinavian architectural discipline with lush tropical courtyards, perimeter stone water channels, and discrete guest pavilions.',
    architecturalHighlights: [
      'Exposed board-formed architectural concrete and seasoned Burma teak pavilions',
      'Passive geothermal airflow cooling with natural water misting channels',
      'Perimeter reflecting pools framing tranquil Japanese zen courtyards'
    ],
    features: ['1.2-Acre Private Botanical Grounds', 'Olympic Heated Lap Pool', 'Private Screening Salon', 'Championship Tennis Court']
  },
  {
    id: 'the-apex-horizon-suites',
    name: 'The Apex Horizon Suites',
    location: 'Central Business District, Bengaluru',
    city: 'Bengaluru',
    state: 'Karnataka',
    type: 'Prime Grade-A Commercial Asset',
    category: 'commercial',
    sqft: 12500,
    priceDisplay: 'Price Upon Request',
    status: 'Exclusive Advisory',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=85'
    ],
    description: 'A preeminent corporate trophy asset holding LEED Platinum credentials in Bengaluru’s core business district. Designed with column-free flexible floor plates, motorized intelligent solar louvers, and private boardroom terraces.',
    architecturalHighlights: [
      'Triple-height monumental lobby with cascading black granite water wall',
      'High-performance German acoustic double-glazed curtain envelope',
      'Intelligent destination-dispatch elevator core with touchless security'
    ],
    features: ['LEED Platinum Certified', 'Private Executive Boardroom Lounge', 'High-Speed EV Superchargers', 'Medical-Grade HEPA Air Purification']
  },
  {
    id: 'verdurous-country-manor',
    name: 'Verdurous Country Manor',
    location: 'North Bengaluru Country Estates',
    city: 'Bengaluru',
    state: 'Karnataka',
    type: 'Heritage Contemporary Manor',
    category: 'estate',
    bedrooms: 6,
    bathrooms: 7,
    sqft: 9200,
    priceDisplay: 'Price Upon Request',
    status: 'Private Treaty',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1400&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85'
    ],
    description: 'Set amidst rolling orchards on Bengaluru’s northern airport growth corridor, this distinguished estate blends Tuscan masonry with crisp contemporary glass architecture, creating a multi-generational countryside sanctuary.',
    architecturalHighlights: [
      'Reclaimed quarry stone masonry paired with minimalist structural steelwork',
      'Private organic fruit orchard, olive grove, and equestrian stables',
      'Underground wellness sanctuary featuring cedar hot tubs and thermal plunge'
    ],
    features: ['2.5-Acre Private Gated Grounds', 'Organic Orchard & Stables', 'Thermal Wellness Spa', 'Helipad Access Provision']
  },
  {
    id: 'aeris-sky-villas',
    name: 'Aeris Sky Villas',
    location: 'Koramangala 3rd Block, Bengaluru',
    city: 'Bengaluru',
    state: 'Karnataka',
    type: 'Bespoke Duplex Penthouse',
    category: 'penthouse',
    bedrooms: 4,
    bathrooms: 5,
    sqft: 4800,
    priceDisplay: 'Price Upon Request',
    status: 'Exclusive Advisory',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1400&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85'
    ],
    description: 'An ultra-exclusive sky residence located in the city’s premier billionaire enclave. Featuring 22-foot double-volume ceilings, private rooftop reflection deck, and interior appointments curated by Italian design ateliers.',
    architecturalHighlights: [
      'Double-height formal living salon framed by floor-to-ceiling glass',
      'Bespoke Boffi kitchen and Poliform custom walk-in wardrobe suites',
      'Private temperature-regulated outdoor sky terrace with plunge lounge'
    ],
    features: ['Private Rooftop Plunge Pool', 'Double-Height Glass Atrium', 'Italian Designer Interiors', 'Bespoke Fiduciary Butler Service']
  }
];
