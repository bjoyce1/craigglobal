/**
 * CGE content. Non-placeholder copy is used verbatim per spec.
 * Items tagged [PLACEHOLDER] are stand-ins — replace with the real brief.
 */

export type Stat = { value: string; label: string };
export type Chapter = {
  title: string;
  note: string;
  heading: string;
  body: string;
  tags?: string[];
};
export type FilmCredit = { title: string; note: string };
export type PlaybookEntry = { number: string; title: string; body: string };

export type Person = {
  name: string;
  role: string;
  initials: string;
  bio: string;
  placeholderBio?: boolean;
  slug?: string;
  // Extended profile fields — surfaced on the individual profile page.
  subtitle?: string;
  fullBio?: string[];
  focus?: string[];
  quote?: string;
  quoteAttribution?: string;
  stats?: Stat[];
  chapters?: Chapter[];
  films?: FilmCredit[];
  playbook?: PlaybookEntry[];
};

// Executive Leadership — names/roles real; surnames/bios [PLACEHOLDER] where noted.
export const executives: Person[] = [
  {
    name: "Sergeant Major Keith L. Craig",
    role: "Chief Executive Officer",
    initials: "KC",
    slug: "keith-l-craig",
    // [PLACEHOLDER] bio — founder/CEO; rank retained with name.
    bio: "Founder and Chief Executive Officer. A Sergeant Major whose ethos of earned discipline, chain of command, and stewardship defines how CGE holds and builds. [PLACEHOLDER bio]",
    placeholderBio: true,
    fullBio: [
      "Founder and Chief Executive Officer of CGE Corporate. A Sergeant Major whose ethos of earned discipline, chain of command, and stewardship defines how CGE holds and builds. [PLACEHOLDER bio]",
      "Under his leadership, CGE measures in decades rather than quarters — committing capital and counsel to businesses worth building for the long term. [PLACEHOLDER bio]",
    ],
    focus: ["Capital stewardship", "Long-view strategy", "Operating discipline"],
    quote:
      "Ownership is a responsibility before it is an asset. [PLACEHOLDER quote]",
  },
  {
    name: "Taalib", // [surname PLACEHOLDER]
    role: "Chief Operating Officer",
    initials: "T",
    slug: "taalib",
    bio: "Chief Operating Officer, accountable for operating discipline across the portfolio. [PLACEHOLDER bio]",
    placeholderBio: true,
    fullBio: [
      "Chief Operating Officer, accountable for operating discipline across the portfolio. [PLACEHOLDER bio]",
      "He aligns cadence, standards, and execution so that every business CGE holds operates to the standard. [PLACEHOLDER bio]",
    ],
    focus: ["Operations", "Portfolio oversight", "Execution"],
  },
  {
    name: "Lynn", // [surname PLACEHOLDER]
    role: "Chief Strategy Officer / Chief Legal Officer",
    initials: "L",
    slug: "lynn",
    bio: "Chief Strategy Officer and Chief Legal Officer, steering long-view strategy and governance. [PLACEHOLDER bio]",
    placeholderBio: true,
    fullBio: [
      "Chief Strategy Officer and Chief Legal Officer, steering long-view strategy and governance. [PLACEHOLDER bio]",
      "She safeguards the structures and standards that let CGE commit with conviction and care. [PLACEHOLDER bio]",
    ],
    focus: ["Strategy", "Governance", "Legal"],
  },
  {
    name: "Ken Merritt",
    role: "Chief Financial Officer",
    initials: "KM",
    slug: "ken-merritt",
    bio: "Chief Financial Officer, responsible for capital allocation and financial stewardship. [PLACEHOLDER bio]",
    placeholderBio: true,
    fullBio: [
      "Chief Financial Officer, responsible for capital allocation and financial stewardship. [PLACEHOLDER bio]",
      "He brings the financial discipline that keeps every position governed by process and accountability. [PLACEHOLDER bio]",
    ],
    focus: ["Capital allocation", "Financial stewardship", "Risk"],
  },
  {
    name: "David Ash",
    role: "Chief of Staff",
    initials: "DA",
    slug: "david-ash",
    bio: "Chief of Staff, aligning leadership, cadence, and execution across CGE. [PLACEHOLDER bio]",
    placeholderBio: true,
    fullBio: [
      "Chief of Staff, aligning leadership, cadence, and execution across CGE. [PLACEHOLDER bio]",
      "He connects the leadership team to the work, ensuring intent translates into outcomes. [PLACEHOLDER bio]",
    ],
    focus: ["Leadership cadence", "Alignment", "Execution"],
  },
];

export function executiveBySlug(slug: string): Person | undefined {
  return executives.find((p) => p.slug === slug);
}

// Board of Directors — [ENTIRE BOARD IS PLACEHOLDER]
export const board: Person[] = [
  { name: "[Placeholder Name]", role: "Chairman of the Board", initials: "—", bio: "", placeholderBio: true },
  { name: "[Placeholder Name]", role: "Vice Chairman", initials: "—", bio: "", placeholderBio: true },
  { name: "[Placeholder Name]", role: "Director", initials: "—", bio: "", placeholderBio: true },
  { name: "[Placeholder Name]", role: "Director", initials: "—", bio: "", placeholderBio: true },
  { name: "[Placeholder Name]", role: "Director", initials: "—", bio: "", placeholderBio: true },
  { name: "[Placeholder Name]", role: "Independent Director", initials: "—", bio: "", placeholderBio: true },
];

// Holdings / Portfolio — [ALL PLACEHOLDER]
export type Holding = {
  name: string;
  sector: string;
  description: string;
  established: string;
  ownership: string;
};

export const holdings: Holding[] = [
  {
    name: "[Holding One]",
    sector: "[Sector]",
    description: "[One-line description PLACEHOLDER]",
    established: "[Year]",
    ownership: "[Ownership %]",
  },
  {
    name: "[Holding Two]",
    sector: "[Sector]",
    description: "[One-line description PLACEHOLDER]",
    established: "[Year]",
    ownership: "[Ownership %]",
  },
  {
    name: "[Holding Three]",
    sector: "[Sector]",
    description: "[One-line description PLACEHOLDER]",
    established: "[Year]",
    ownership: "[Ownership %]",
  },
  {
    name: "[Holding Four]",
    sector: "[Sector]",
    description: "[One-line description PLACEHOLDER]",
    established: "[Year]",
    ownership: "[Ownership %]",
  },
];

// The Standard — four principles (usable as written).
export const principles = [
  {
    number: "01",
    title: "Stewardship over speculation",
    body: "We hold what we believe in, and we hold it for the long term. Ownership is a responsibility before it is an asset.",
  },
  {
    number: "02",
    title: "Discipline as default",
    body: "Every position is governed by process, accountability, and standards that do not move with the market's mood.",
  },
  {
    number: "03",
    title: "The long view",
    body: "We measure in decades, not quarters. Patience is a position.",
  },
  {
    number: "04",
    title: "Operators, not bystanders",
    body: "We build alongside the businesses we hold — capital, structure, and counsel, applied with intent.",
  },
];

// How we work — process strip [PLACEHOLDER refinement]
export const process = [
  { number: "01", title: "Identify", body: "We seek businesses worth building for the long term. [PLACEHOLDER]" },
  { number: "02", title: "Acquire", body: "We commit capital and structure with conviction and care. [PLACEHOLDER]" },
  { number: "03", title: "Strengthen", body: "We bring operating discipline, counsel, and standards. [PLACEHOLDER]" },
  { number: "04", title: "Hold", body: "We stay — measuring in decades, not quarters. [PLACEHOLDER]" },
];

// Newsroom — [ALL PLACEHOLDER]
export const press = [
  { date: "[Date]", headline: "[Announcement headline PLACEHOLDER]", excerpt: "[One-line excerpt PLACEHOLDER]" },
  { date: "[Date]", headline: "[Announcement headline PLACEHOLDER]", excerpt: "[One-line excerpt PLACEHOLDER]" },
  { date: "[Date]", headline: "[Announcement headline PLACEHOLDER]", excerpt: "[One-line excerpt PLACEHOLDER]" },
];

// Contact / brand strings — [PLACEHOLDER]
export const contact = {
  email: "[contact@PLACEHOLDER.com]",
  phone: "[PLACEHOLDER]",
  address: "[Registered office / address PLACEHOLDER]",
  legalEntity: "CGE Corporate", // [full legal entity name PLACEHOLDER]
};
