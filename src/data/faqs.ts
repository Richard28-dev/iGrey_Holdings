export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const FAQS_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What types of properties does iGrey Holdings offer?',
    answer: 'iGrey Holdings curates an exclusive portfolio comprising luxury residences, sky penthouses, bespoke architectural villas, Grade-A commercial headquarters, and strategic development land parcels. Each property undergoes rigorous architectural, structural, and legal evaluation prior to inclusion in our portfolio.',
    category: 'Portfolio'
  },
  {
    id: 'faq-2',
    question: 'How can I enquire about a property?',
    answer: 'You can submit an enquiry directly through our website using the "Enquire Now" button or contact form on any listing. Alternatively, our private client desk is accessible via direct phone (+91 80 4920 8800) or email (advisory@igreyholdings.com). A senior portfolio advisor will coordinate with you within 24 business hours.',
    category: 'Process'
  },
  {
    id: 'faq-3',
    question: 'Do you assist with property investments?',
    answer: 'Yes. Our specialized Investment Advisory practice assists private clients, single-family offices, and institutional investors in identifying pre-vetted co-investments, income-generating commercial assets, and high-growth land positions. We provide institutional-grade underwriting, risk profiling, and yield modeling.',
    category: 'Investment'
  },
  {
    id: 'faq-4',
    question: 'Do you provide property advisory services?',
    answer: 'Yes. We provide comprehensive strategic property advisory, encompassing title and regulatory due diligence, asset valuation, portfolio rebalancing, tax-efficient holding structures, and bespoke acquisition representation—operating under complete fiduciary discretion.',
    category: 'Advisory'
  },
  {
    id: 'faq-5',
    question: 'How can I schedule a property visit?',
    answer: 'Private viewings are arranged strictly by appointment to preserve privacy and discretion. Once you indicate interest in a property, our team arranges a discreet, private on-site inspection accompanied by a senior architectural advisor who can walk you through technical specifications, zoning, and interior details.',
    category: 'Viewings'
  },
  {
    id: 'faq-6',
    question: 'How can I contact iGrey Holdings?',
    answer: 'Our corporate headquarters is located at The Pavilion, 4th Floor, Vittal Mallya Road, Bengaluru, Karnataka 560001. You can reach our executive desk at +91 80 4920 8800 or via email at contact@igreyholdings.com. Dedicated consultation appointments may be scheduled in person or via private video conference.',
    category: 'Contact'
  }
];
