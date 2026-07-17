// Single source of truth for copy + build-time flags.
// See spec §7: /Users/shulmeister/docs/superpowers/specs/2026-07-15-hesed-holding-site-design.md

export const siteConfig = {
  // flags
  showPortrait: true as const,
  posterClose: true as const,

  brand: { name: 'Hesed' as const },

  nav: {
    links: [
      { label: 'The name', href: '#name' },
      { label: 'Approach', href: '#practice' },
      { label: 'Holdings', href: '#holdings' },
    ],
    contactLabel: 'Contact' as const,
    contactHref: '#contact' as const,
  },

  hero: {
    eyebrow: 'A private investment holding company · Boulder, Colorado',
    monument: 'חֶסֶד',  // rendered dir="rtl" lang="he"
    phonetic: 'he·sed',
    pronunciation: 'noun · Hebrew · ',
    pronunciationHebrew: 'חֶסֶד',
    h1: 'We hold and build companies in software and services — patiently, and for good.',
    subLead: 'Hesed is a private investment holding company. The wealth came first, and we always meant it to do good. We deploy it into two things we understand — ',
    subEmphasis: 'software and services',
    subTail: ' — and we hold what we buy. Today that is Pipestaff, LokiMode and Colorado CareAssist.',
    actions: [
      { label: 'Our holdings →', href: '#holdings', variant: 'secondary' as const },
      { label: 'Contact', href: '#contact', variant: 'secondary' as const },
    ],
  },

  nameSection: {
    kicker: 'The name',
    headline: 'The word came first.',
    paragraphs: [
      'In Hebrew, <em>hesed</em> means loving-kindness — a steadfast, covenantal kind of love, measured in what you actually do for another person, not in what you feel.',
      'It is our name because it is our standard. Built on Jewish values and ethics, Hesed holds its capital to a plain test: that it be useful, and that it do measurable good. The companies came after. The word set the terms.',
    ],
  },

  approach: {
    kicker: 'Our approach',
    intro: 'Tradition draws a careful line between <em>tzedakah</em> — charity, given with money — and <em>gemilut hasadim</em>, the practice of hesed, <strong>given with your hands and your presence.</strong> We are a holding company, not a foundation: we deploy capital, and we stay to do the work. Three things the tradition says about hesed describe how we own a business.',
    principles: [
      { n: '01', title: 'It is done with the person, not the checkbook.',
        body: 'We are owners, not allocators. We back the operators who run our companies and we stay beside them — with capital, patience, and work. Not financial engineering, and not a spreadsheet held at arm\'s length.' },
      { n: '02', title: 'It is owed to everyone.',
        body: 'A company earns its keep for everyone it touches — its customers, its people, the community around it — not for its owners alone. We hold to that as a condition of ownership, not a program bolted on afterward.' },
      { n: '03', title: 'It does not end at the exit.',
        body: 'We are not building to sell. Hesed is permanent capital — held through the good years and the hard ones — because the work worth doing is measured in decades, not in a holding period.' },
    ],
  },

  quote: {
    text: 'The world stands on three things: on Torah, on service, and on acts of loving-kindness.',
    attribution: 'Pirkei Avot 1:2. Loving-kindness is named among the pillars of the world — and it is the one we chose to build on.',
  },

  photoBand: {
    caption: 'Held, not traded.',
  },

  holdings: {
    kicker: 'Our holdings',
    headline: 'Two things we understand: software and services.',
    intro: 'We invest where we have operating knowledge, and we hold what we buy. Today Hesed owns one company in each.',
    rows: [
      {
        tag: { label: 'Software', variant: 'accent' as const },
        company: 'Pipestaff',
        body: 'Exclusive caregiver hiring leads for home care agencies — CNAs, HHAs and aides routed to one agency each, delivered in thirty-plus cities.',
        linkLabel: 'pipestaff.com →',
        href: 'https://pipestaff.com',
      },
      {
        tag: { label: 'Software', variant: 'accent' as const },
        company: 'LokiMode',
        body: 'The operating system for modern home care agencies — scheduling, payroll operations, billing and compliance in one system of record. Built and proven inside Colorado CareAssist; in early access.',
        linkLabel: 'lokimode.com →',
        href: 'https://lokimode.com',
      },
      {
        tag: { label: 'Services', variant: 'neutral' as const },
        company: 'Colorado CareAssist',
        body: 'A licensed Colorado home care agency — personal, dementia, live-in, veterans\' and end-of-life care across the Front Range, since 2012.',
        linkLabel: 'coloradocareassist.com →',
        href: 'https://coloradocareassist.com',
      },
    ],
    footnote: {
      lead: 'Giving is done separately, through the ',
      linkLabel: 'Hesed Foundation',
      href: 'http://www.hesedfoundation.org/',
      tail: ' — the family\'s philanthropy, built on the same idea.',
    },
  },

  close: {
    kicker: 'Hesed',
    h2: 'We know we are doing good. We intend to keep doing it.',
    buttons: [
      { label: 'Pipestaff →', href: 'https://pipestaff.com' },
      { label: 'LokiMode →', href: 'https://lokimode.com' },
      { label: 'Colorado CareAssist →', href: 'https://coloradocareassist.com' },
    ],
  },

  footer: {
    brandLine: { brand: 'Hesed', tail: '· a private investment holding company' },
    addressLine: 'Hesed Home Care LLC, d/b/a Colorado CareAssist · 1911 11th St, Fl 2, Boulder, CO 80302 · ',
    phone: { label: '(303) 757-1777', href: 'tel:+13037571777' },
    licenseLine: 'Colorado Home Care Agency (Class B) · License #04Y296',
    holdingsLine: [
      { label: 'Pipestaff', href: 'https://pipestaff.com' },
      { label: 'Colorado CareAssist', href: 'https://coloradocareassist.com' },
    ],
    holdingsLeadLabel: 'Holdings:',
  },

  metadata: {
    siteUrl: 'https://hesedhomecare.org',
    description: 'Hesed holds and builds companies in software and services — patiently, and for good. Today: Pipestaff, LokiMode and Colorado CareAssist.',
  },
} as const;
