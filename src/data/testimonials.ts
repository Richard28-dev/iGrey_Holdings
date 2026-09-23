export interface TestimonialItem {
  id: string;
  clientName: string;
  role: string;
  location: string;
  quote: string;
  portfolioType: string;
  isPlaceholderNotice: boolean;
}

// NOTE: The testimonials below are structured client experience placeholders
// designated for demonstration and ready to be replaced with verified client feedback.
export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'test-1',
    clientName: 'Aditya & Radhika Singhania',
    role: 'Private Investor & Technology Entrepreneur',
    location: 'Bengaluru, India',
    portfolioType: 'Prime Residence Acquisition',
    quote: 'iGrey Holdings approached our residence acquisition with unprecedented discretion and architectural discernment. They eliminated noise and presented properties that precisely respected our family privacy and spatial requirements.',
    isPlaceholderNotice: true
  },
  {
    id: 'test-2',
    clientName: 'Devang V. Mehta',
    role: 'Managing Partner, Sovereign Capital Partners',
    location: 'Mumbai / Bengaluru',
    portfolioType: 'Grade-A Commercial Portfolio',
    quote: 'In institutional real estate, transparency is non-negotiable. The due diligence, yield projections, and title verification provided by the iGrey team were the most meticulous we have encountered in South India.',
    isPlaceholderNotice: true
  },
  {
    id: 'test-3',
    clientName: 'Nandita K. Rao',
    role: 'Principal Architect & Urban Designer',
    location: 'Bengaluru, India',
    portfolioType: 'Development & Land Advisory',
    quote: 'What sets iGrey apart is their rare respect for architectural intent. They do not merely transact square footage; they genuinely understand craftsmanship, material integrity, and lasting communal value.',
    isPlaceholderNotice: true
  }
];
