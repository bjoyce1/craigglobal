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
    placeholderBio: false,
    subtitle:
      "Retired U.S. Army Sergeant Major, film distribution executive, author, speaker, and builder of pathways for creators ready to move with discipline and scale with purpose.",
    bio: "Founder and Chief Executive Officer. A Sergeant Major whose ethos of earned discipline, chain of command, and stewardship defines how CGE holds and builds.",
    fullBio: [
      "Keith L. Craig brings battlefield-tested logistics, studio-level distribution strategy, and a servant-leader mindset into one rare profile. As Founder and Chief Executive Officer of CGE Corporate, his ethos of earned discipline, chain of command, and stewardship defines how CGE holds and builds.",
      "After 32 years in the U.S. Army and a parallel career in professional football, he moved into entertainment leadership at Walt Disney Studios Motion Pictures, where his work touched major releases across Marvel, Pixar, Lucasfilm, and Disney.",
      "Today, through Porter + Craig Film and Media Distribution and his books Serving To Lead and Checkpoint Decoder, he helps leaders and storytellers turn preparation into impact — committing capital and counsel to businesses worth building for the long term.",
    ],
    focus: [
      "Capital stewardship",
      "Distribution strategy",
      "Servant leadership",
      "Long-view strategy",
    ],
    stats: [
      { value: "32", label: "Years serving in the U.S. Army before retiring as Sergeant Major." },
      { value: "6", label: "Combat campaigns, plus humanitarian and disaster relief operations." },
      { value: "50+", label: "Countries reached and high-profile films connected to his distribution career." },
      { value: "2", label: "Published leadership and distribution books." },
    ],
    chapters: [
      {
        title: "Service",
        note: "Discipline, logistics, leadership",
        heading: "Service built the system.",
        body: "Keith's leadership foundation was forged through 32 years in the U.S. Army, including combat campaigns, humanitarian operations, and senior enlisted roles. The through-line is simple: move people, resources, and morale where they need to be, when they need to be there.",
        tags: ["Sergeant Major", "Combat campaigns", "Senior enlisted leadership"],
      },
      {
        title: "Studio Strategy",
        note: "Disney, theaters, audience reach",
        heading: "Strategy met the big screen.",
        body: "At Walt Disney Studios Motion Pictures he managed major theatrical market areas in the Central Division, helping connect record-setting releases to audiences across the country — translating logistics discipline into studio-level distribution strategy.",
        tags: ["Walt Disney Studios", "Theatrical distribution", "Central Division"],
      },
      {
        title: "Founder Mode",
        note: "Porter + Craig and creator access",
        heading: "Access for the next wave.",
        body: "Through Porter + Craig Film and Media Distribution, Keith works to broaden distribution access for independent creators — using hard-won experience and relationships to open doors that have traditionally stayed closed.",
        tags: ["Porter + Craig", "Independent film", "Creator access"],
      },
      {
        title: "Author & Speaker",
        note: "Books, stages, practical wisdom",
        heading: "Lessons made usable.",
        body: "His books Serving To Lead and Checkpoint Decoder distill decades of leadership under pressure into practical systems. On stage, he helps leaders and storytellers turn preparation into impact.",
        tags: ["Serving To Lead", "Checkpoint Decoder", "Keynotes"],
      },
      {
        title: "Athlete",
        note: "Football, resilience, team speed",
        heading: "A team-speed mindset.",
        body: "A parallel career in professional football shaped his instinct for resilience, preparation, and the speed of a team that trusts its system — discipline he carries into every venture.",
        tags: ["Professional football", "Resilience", "Team speed"],
      },
    ],
    films: [
      { title: "Black Panther", note: "Marvel release associated with his Disney distribution work." },
      { title: "Coco", note: "Oscar-winning Pixar title connected to his theatrical distribution career." },
      { title: "Avengers: Endgame", note: "Part of Disney's record-setting 2019 domestic box office year." },
      { title: "The Lion King", note: "Major Disney release in the Central Division portfolio era." },
      { title: "Star Wars", note: "Lucasfilm titles appear throughout public profiles of his work." },
      { title: "Independent Film", note: "Porter + Craig focus: broader distribution access for creators." },
    ],
    playbook: [
      { number: "01", title: "Serve first.", body: "Lead by making the mission clearer and the people around you stronger." },
      { number: "02", title: "Execute clean.", body: "Great strategy is disciplined logistics with a human outcome attached." },
      { number: "03", title: "Open doors.", body: "Use experience and relationships to create access for the next wave of voices." },
      { number: "04", title: "Build bridges.", body: "Collaboration beats gatekeeping when the goal is lasting industry change." },
      { number: "05", title: "Translate pressure.", body: "Turn high-stakes moments into systems other people can actually use." },
    ],
    quote:
      "From the battlefield to the box office, the edge is disciplined storytelling: know the mission, understand the audience, and deliver.",
    quoteAttribution: "Keith L. Craig",
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
