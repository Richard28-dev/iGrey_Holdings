export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  capabilities: string[];
  image: string;
  highlightStat: string;
  highlightLabel: string;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'residential',
    number: '01',
    title: 'Residential',
    subtitle: 'Signature Living Spaces',
    description: 'Bespoke acquisition and representation for premier penthouses, private villas, and design-led architectural residences. We connect discerning homeowners with residences crafted for generational longevity.',
    capabilities: [
      'Off-market trophy residence access',
      'Architectural integrity assessment',
      'Discrete private buyer representation',
      'Bespoke interior & fit-out advisory'
    ],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    highlightStat: '₹1,200+ Cr',
    highlightLabel: 'Curated Residential Portfolio'
  },
  {
    id: 'commercial',
    number: '02',
    title: 'Commercial',
    subtitle: 'High-Performance Assets',
    description: 'Institutional-grade corporate headquarters, prime retail flagships, and premium commercial workspaces positioned in key urban economic corridors with sustained tenant demand.',
    capabilities: [
      'Grade-A corporate floor-plate sourcing',
      'Tenant covenant & yield evaluation',
      'Retail flagship leasing strategies',
      'Adaptive reuse architectural guidance'
    ],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    highlightStat: '1.4M+ sq.ft.',
    highlightLabel: 'Prime Commercial Spaces'
  },
  {
    id: 'property-advisory',
    number: '03',
    title: 'Property Advisory',
    subtitle: 'Strategic Real-Estate Counsel',
    description: 'Unbiased advisory designed around capital preservation, regulatory due diligence, title structuring, and portfolio valuation for family offices and institutional investors.',
    capabilities: [
      'Comprehensive title & land-use verification',
      'Tax-efficient asset holding structuring',
      'Market intelligence & price indexing',
      'Independent valuation & feasibility'
    ],
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    highlightStat: '100%',
    highlightLabel: 'Independent Fiduciary Due Diligence'
  },
  {
    id: 'investments',
    number: '04',
    title: 'Investment Opportunities',
    subtitle: 'Rigorous Capital Deployment',
    description: 'Carefully vetted real-estate co-investments, pre-lease commercial assets, and structured land positions calibrated for asymmetric upside and capital safety.',
    capabilities: [
      'Pre-vetted private equity real estate',
      'Targeted IRR underwriting (16-22%)',
      'Co-investment syndication structuring',
      'Quarterly performance & asset auditing'
    ],
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80',
    highlightStat: '18.4%',
    highlightLabel: 'Historical Portfolio IRR'
  },
  {
    id: 'property-management',
    number: '05',
    title: 'Property Management',
    subtitle: 'End-to-End Asset Stewardship',
    description: 'Full-spectrum asset maintenance, tenant lifecycle management, financial reporting, and preventive facility preservation to protect and compound asset valuation.',
    capabilities: [
      'High-touch tenant concierge services',
      'Preventative mechanical & structural maintenance',
      'Automated rental yields and financial accounting',
      'Sustainability & energy optimization audits'
    ],
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
    highlightStat: '99.2%',
    highlightLabel: 'Average Portfolio Occupancy'
  },
  {
    id: 'land-development',
    number: '06',
    title: 'Land & Development',
    subtitle: 'From Groundbreak to Handover',
    description: 'Strategic land parcel identification, joint-venture structuring, zoning approvals, and master planning advisory for landmark residential and mixed-use developments.',
    capabilities: [
      'Macro parcel assembly and acquisition',
      'Zoning, FAR, and regulatory entitlement',
      'Master planning & architectural collaboration',
      'Development joint-venture negotiation'
    ],
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
    highlightStat: '320+ Acres',
    highlightLabel: 'Land Transacted & Evaluated'
  }
];
