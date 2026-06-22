/**
 * CGE content. Non-placeholder copy is used verbatim per spec.
 * Items tagged [PLACEHOLDER] are stand-ins — replace with the real brief.
 */

import blackBrainBlack from "@/assets/blackbrain-logo-black.png.asset.json";
import blackBrainRed from "@/assets/blackbrain-logo-red.png.asset.json";


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
  image?: string;
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
    image: "/__l5e/assets-v1/b7b03f08-63dd-467e-b907-829479eaa896/keith-l-craig.png",
    placeholderBio: false,
    subtitle:
      "Retired U.S. Army Sergeant Major, former Walt Disney Studios Motion Pictures executive, award-winning International Best Selling Author, and Co-Founder of Porter + Craig Film and Media Distribution — builder of pathways for creators ready to move with discipline and scale with purpose.",
    bio: "Founder and Chief Executive Officer. A retired Sergeant Major whose 32 years of military service, studio-level distribution leadership, and servant ethos define how CGE holds and builds.",
    fullBio: [
      "Sergeant Major Keith L. Craig embodies service-driven leadership across extraordinary domains. As a former Walt Disney Studios Motion Pictures executive, he orchestrated theatrical distribution strategies that contributed to Disney's historic $3.7 billion domestic box office record in 2019; distributing over 50 major releases that collectively generated more than $42 billion globally during his tenure, including Avengers: Endgame, The Lion King, Star Wars: The Rise of Skywalker, and the Oscar-winning Black Panther. Today, Craig serves as Co-Founder, Chairman, and Co-CEO of Porter + Craig Film and Media Distribution, a Beverly Hills-based powerhouse specializing in worldwide film and television sales with an annual slate of 50+ films.",
      "Craig's foundation rests in three decades of distinguished military service. Retiring as Sergeant Major after 32 years in the United States Army (1984-2016), he served six combat tours spanning more than 50 countries, including Operation Iraqi Freedom, where he led as First Sergeant of the 302nd Military Intelligence Battalion, and Operation Unified Response, coordinating humanitarian relief that sustained nearly three million Haitians following the devastating earthquake. His 52 military awards include three Bronze Stars (earned through distinguished combat performance), the Legion of Merit, and the prestigious Distinguished Order of Saint Martin. As the 12th Senior Enlisted Advisor to the Commander and Exchange CEO of the Army & Air Force Exchange Service for Europe and Southwest Asia, he oversaw a $10 billion retail operation serving 43,000 employees across 50 states, five territories, and more than 30 countries.",
      "An international bestselling author, Craig has written three books exploring leadership and entertainment strategy: Serving to Lead, Checkpoint Decoder: Unlocking the Film Distribution Codes, and BLACKOPS OF HOLLYWOOD: SECRETS OF THE MAGIC. His fourth book is scheduled for release in Summer 2026. Before his military and entertainment achievements, he excelled as one of European Football's most decorated receivers, winning six Division Championships while playing for teams including the Frankfurt Galaxy (NFL Europe/WLAF) under head coach Jack Elway (Father of Hall of Famer John Elway), where he shattered league records and earned All-Conference honors and Championship Game MVP.",
      "Through his convergence of military valor, entertainment expertise, athletic excellence, and business acumen, Craig continues to transform industries while honoring those who paved the way before him.",
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
      { value: "2018", label: "HAPA Trailblazer Award recipient and International Best Selling Author." },
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
        body: "His books Serving To Lead and Checkpoint Decoder — including an International Best Seller — distill decades of leadership under pressure into practical systems. On stage, he helps leaders and storytellers turn preparation into impact.",
        tags: ["Serving To Lead", "Checkpoint Decoder", "Keynotes", "International Best Seller"],
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
    name: "Taalib Saber, Esq.",
    role: "Chief Operating Officer",
    initials: "TS",
    slug: "taalib-saber",
    placeholderBio: false,
    image: "/__l5e/assets-v1/9b87e633-ef26-4c12-af9d-12e8c7fc7f7d/taalib-saber.png",
    subtitle:
      "Strategic Legal Advisor and FIFA-licensed sports agent. Principal attorney at The Saber Firm, counseling investors, business owners, and athletes who build wealth with a conscience — legal infrastructure for people building wealth while staying true to their principles and purpose.",
    bio: "Chief Operating Officer and strategic legal advisor. Principal attorney at The Saber Firm and FIFA-licensed agent, aligning operating discipline with wealth-building counsel across the portfolio.",
    fullBio: [
      "Taalib Saber provides strategic legal counsel to investors, business owners, and athletes who have built wealth with a conscience. As principal attorney at The Saber Firm, he advises clients on business acquisitions, entity structuring, partnership agreements, trademark protection, and wealth-building transactions — legal infrastructure for people building wealth while staying true to their principles and purpose.",
      "As a FIFA-licensed sports agent, Saber represents professional athletes navigating contract negotiations, image rights, brand protection, and long-term financial strategy. His client portfolio includes executives transitioning from C-suite roles, real estate investors, and creatives building businesses at the intersection of media, influence, and impact.",
      "Saber's approach is rooted in the belief that wealth and mission are not mutually exclusive. His clients are proof: high earners who leverage their resources to create opportunity, build community wealth, and leave legacies that extend beyond personal success. This philosophy shapes both his legal practice and his work as Executive Director of Kazi za Wahenga, a nonprofit focused on empowerment for people of African descent through African Birthright Tours, Swahili language education, and criminal expungement clinics.",
      "As an activist and global thought leader, Saber has addressed the United Nations Permanent Forum for People of African Descent (2022), delivered keynotes on leadership in Uganda (2017), and led entrepreneurship workshops in Ghana (2018). His work has been featured in ABC, FOX, Yahoo! Finance, Black Enterprise, The Intercept, and The Afro. He has been recognized as a 2025 Emerging Leader by Who's Who in Black Baltimore, a 2018 Men Impact Change Award recipient, and a 2020-2021 Washington Bar Association Rising Star.",
      "Born and raised in Prince George's County, Maryland, Saber earned his B.S. in Political Science from Morgan State University (2010) and his J.D. from North Carolina Central University School of Law (2015). He is admitted to practice in Maryland and the District of Columbia.",
    ],
    focus: [
      "Business & transactional law",
      "Sports & athlete representation",
      "Trademark & brand protection",
      "Wealth-building strategy",
    ],
    stats: [
      { value: "FIFA", label: "Licensed sports agent representing professional athletes worldwide." },
      { value: "2", label: "Jurisdictions of practice — Maryland and the District of Columbia." },
      { value: "UN", label: "Addressed the United Nations Permanent Forum for People of African Descent (2022)." },
      { value: "2025", label: "Emerging Leader, Who's Who in Black Baltimore — among multiple honors." },
    ],
    chapters: [
      {
        title: "The Saber Firm",
        note: "Business, entities, transactions",
        heading: "Legal infrastructure for purpose.",
        body: "As principal attorney at The Saber Firm, Taalib advises clients on business acquisitions, entity structuring, partnership agreements, trademark protection, and wealth-building transactions — building the legal infrastructure for people growing wealth while staying true to their principles.",
        tags: ["Business acquisitions", "Entity structuring", "Trademark protection"],
      },
      {
        title: "Sports Agency",
        note: "FIFA license, athletes, image rights",
        heading: "Representing the long game.",
        body: "As a FIFA-licensed sports agent, Taalib represents professional athletes navigating contract negotiations, image rights, brand protection, and long-term financial strategy — guiding clients from C-suite transitions to creatives building at the intersection of media, influence, and impact.",
        tags: ["FIFA licensed", "Contract negotiation", "Image rights"],
      },
      {
        title: "Activism",
        note: "Kazi za Wahenga, global advocacy",
        heading: "Wealth and mission, together.",
        body: "As Executive Director of Kazi za Wahenga, Taalib advances empowerment for people of African descent through African Birthright Tours, Swahili language education, and criminal expungement clinics — proof that wealth and mission are not mutually exclusive.",
        tags: ["Kazi za Wahenga", "Birthright Tours", "Expungement clinics"],
      },
      {
        title: "Global Voice",
        note: "UN, keynotes, media",
        heading: "A platform with reach.",
        body: "A global thought leader, Taalib has addressed the United Nations Permanent Forum for People of African Descent (2022), delivered leadership keynotes in Uganda (2017), and led entrepreneurship workshops in Ghana (2018). His work has been featured in ABC, FOX, Yahoo! Finance, Black Enterprise, The Intercept, and The Afro.",
        tags: ["United Nations", "Keynotes", "Featured in media"],
      },
    ],
    playbook: [
      { number: "01", title: "Wealth with a conscience.", body: "Build for high earners who leverage resources to create opportunity and community wealth." },
      { number: "02", title: "Structure first.", body: "Sound entities, agreements, and protections are the foundation of every lasting transaction." },
      { number: "03", title: "Protect the brand.", body: "Image rights and trademark protection safeguard the value clients spend years building." },
      { number: "04", title: "Serve the mission.", body: "Legal practice and advocacy work toward legacies that extend beyond personal success." },
    ],
    quote:
      "Wealth and mission are not mutually exclusive — the goal is to build both, and leave a legacy that extends beyond personal success.",
    quoteAttribution: "Taalib Saber, Esq.",
  },
  {
    name: "Lynn E. Roberts III, Esq.",
    role: "Chief Strategy Officer / Chief Legal Officer",
    initials: "LR",
    slug: "lynn",
    placeholderBio: false,
    image: "/__l5e/assets-v1/c08e96d0-d73c-4efa-9ef2-2d66fe650bbc/lynn-roberts.png",
    subtitle:
      "Award-winning intellectual property attorney, governance strategist, and economic empowerment advocate. Founder & Principal Attorney of Roberts Legal Group, advising small businesses, creatives, and emerging enterprises on trademark protection, brand strategy, and sustainable development across the Mid-Atlantic and Tri-State regions.",
    bio: "Chief Strategy Officer and Chief Legal Officer, steering long-view strategy and governance. An award-winning IP attorney and governance strategist who safeguards the structures and standards that let CGE commit with conviction and care.",
    fullBio: [
      "Lynn E. Roberts III is an award-winning intellectual property attorney, governance strategist, and civic leader whose work centers on strengthening institutions that support entrepreneurship, economic mobility, and community-rooted enterprise. He is the Founder and Principal Attorney of Roberts Legal Group (RLG), where he advises small businesses, creatives, and emerging enterprises on trademark protection, brand strategy, and sustainable business development across the Mid-Atlantic and Tri-State regions.",
      "Lynn brings a governance-first lens to his work, with particular focus on how legal infrastructure, policy, and institutional decision-making can expand equitable access to economic opportunity. His practice and civic engagement sit at the intersection of law, entrepreneurship, and public policy, with an emphasis on long-term organizational stewardship rather than short-term transactional outcomes.",
      "His professional excellence has been recognized at both the regional and national levels. Lynn is a 2026–2027 honoree of Best Lawyers: Ones to Watch in America, a 2025 Lawyers on the Fast Track honoree by The Legal Intelligencer, and a Delaware Business Times 40 Under 40 honoree for his impact on intellectual property and entrepreneurship. He has also been consistently recognized by The National Black Lawyers as a Top 40 Under 40 Attorney in Intellectual Property and Business Law.",
      "Lynn is a DiverseForce On Boards Fellow, where he received formal training in nonprofit governance, fiduciary responsibility, and strategic oversight through the University of Pennsylvania School of Social Policy & Practice. He is currently pursuing an Executive Master of Public Administration (EMPA) at the University of Pennsylvania's Fels Institute of Government, deepening his expertise in public governance, policy development, and institutional leadership.",
      "A proud double HBCU graduate, Lynn earned his B.A. in Philosophy, Politics, and Economics (cum laude) from Lincoln University of Pennsylvania and his Juris Doctor from North Carolina Central University School of Law. He is admitted to practice in Pennsylvania, New Jersey, and New York, including the U.S. District Court for the Southern District of New York. His long-term vision is to advance policies and institutional practices that foster inclusive entrepreneurship, equitable economic access, and durable legal protections for small and minority-owned businesses.",
    ],
    focus: [
      "Intellectual property law",
      "Governance & policy strategy",
      "Economic empowerment",
      "Long-view strategy",
    ],
    stats: [
      { value: "3", label: "Jurisdictions of practice — Pennsylvania, New Jersey, and New York." },
      { value: "40", label: "Under 40 honoree — National Black Lawyers and Delaware Business Times." },
      { value: "2026", label: "Best Lawyers: Ones to Watch in America honoree (2026–2027)." },
      { value: "2x", label: "Double HBCU graduate — Lincoln University and NCCU School of Law." },
    ],
    chapters: [
      {
        title: "Roberts Legal Group",
        note: "IP, trademarks, brand strategy",
        heading: "Legal infrastructure for enterprise.",
        body: "As Founder and Principal Attorney of Roberts Legal Group, Lynn advises small businesses, creatives, and emerging enterprises on trademark protection, brand strategy, and sustainable business development across the Mid-Atlantic and Tri-State regions — building durable legal protections for community-rooted enterprise.",
        tags: ["Roberts Legal Group", "Trademark protection", "Brand strategy"],
      },
      {
        title: "Governance",
        note: "Policy, fiduciary oversight, strategy",
        heading: "A governance-first lens.",
        body: "Lynn brings a governance-first approach to legal infrastructure, policy, and institutional decision-making — expanding equitable access to economic opportunity. A DiverseForce On Boards Fellow trained through the University of Pennsylvania, he is pursuing an Executive Master of Public Administration at Penn's Fels Institute of Government.",
        tags: ["DiverseForce On Boards", "EMPA — Penn Fels", "Fiduciary oversight"],
      },
      {
        title: "Civic Leadership",
        note: "Boards, committees, advocacy",
        heading: "Stewardship in practice.",
        body: "Lynn serves in several governance and advisory capacities — Board Director and Legal Advisor for the Monday Club (MC917 Foundation); Board Member, Secretary, and HR Committee Chair for the Metropolitan Wilmington Urban League; Chair of the Strategic Governance Committee at the Center for Families and Relationships; Service Partner Associate with the Pete duPont Freedom Foundation; and a Strategic Planning Committee member for Ebony Tie Affair.",
        tags: ["Urban League", "MC917 Foundation", "Pete duPont Foundation"],
      },
      {
        title: "Recognition",
        note: "National & regional honors",
        heading: "Excellence, recognized.",
        body: "Lynn's professional excellence has been recognized at both the regional and national levels — a 2026–2027 honoree of Best Lawyers: Ones to Watch in America, a 2025 Lawyers on the Fast Track honoree by The Legal Intelligencer, a Delaware Business Times 40 Under 40 honoree, and consistently named a Top 40 Under 40 Attorney by The National Black Lawyers.",
        tags: ["Best Lawyers", "Lawyers on the Fast Track", "40 Under 40"],
      },
    ],
    playbook: [
      { number: "01", title: "Govern first.", body: "Strong legal infrastructure and institutional stewardship outlast short-term transactional wins." },
      { number: "02", title: "Protect the brand.", body: "Trademark and brand strategy safeguard the value entrepreneurs spend years building." },
      { number: "03", title: "Expand access.", body: "Policy and counsel should widen equitable access to economic opportunity." },
      { number: "04", title: "Build to last.", body: "Keep community-based organizations strong, credible, and future-ready." },
    ],
    quote:
      "The goal is to advance policies and institutional practices that foster inclusive entrepreneurship and durable legal protections — ensuring community-based organizations remain strong, credible, and future-ready.",
    quoteAttribution: "Lynn E. Roberts III, Esq.",
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
    name: "David S. Ash",
    role: "Chief of Staff",
    initials: "DA",
    slug: "david-ash",
    placeholderBio: false,
    subtitle:
      "Visionary entrepreneur, media executive, and philanthropist whose influence spans entertainment, business, and community advocacy — a native of Demopolis, Alabama, now based in Atlanta, Georgia.",
    bio: "Chief of Staff and a builder of brands. President & CEO across media, music, and insurance ventures, bridging creativity with disciplined business leadership.",
    fullBio: [
      "David S. Ash is a visionary entrepreneur, media executive, and philanthropist whose influence spans the worlds of entertainment, business, and community advocacy. A native of Demopolis, Alabama, and now based in Atlanta, Georgia, Mr. Ash has built a reputation as a dynamic leader whose career embodies innovation, strategic thinking, and an unwavering commitment to excellence.",
      "As President and CEO of Worldwide Media Group, Worldwide Music Group, and DSA Insurance Services, Inc., Mr. Ash has successfully cultivated brands and managed multimillion-dollar assets while providing leadership across diverse industries. His unique understanding of global film, music, media, and the insurance sector has enabled him to bridge creativity with business, positioning him as a respected voice among executives and emerging leaders alike.",
      "Driven by a passion for service, Mr. Ash is the co-founder of the We Fight Against Male Related Diseases Organization, a nonprofit dedicated to raising awareness, promoting education, and creating opportunities for support and advocacy surrounding men's health issues. Through strategic partnerships and community engagement, the organization continues to make a meaningful impact on lives nationwide.",
      "With more than two decades in the music industry, Mr. Ash has played an instrumental role in shaping culture through artist development, consulting, and strategic guidance. His early affiliations with Arista Records and the legendary D&D Studios established him as a respected architect within hip-hop, contributing to the growth and success of numerous artists and helping define a generation of music.",
      "Today, Mr. Ash continues to expand his influence through talent development, music, media ventures, and television productions. More than a businessman, he is a builder of brands, a champion of people, and a catalyst for change — leaving an enduring impact across industries and communities for generations to come.",
    ],
    focus: [
      "Media & entertainment",
      "Music & artist development",
      "Insurance solutions",
      "Philanthropy & advocacy",
    ],
    stats: [
      { value: "20+", label: "Years shaping the music industry through artist development and consulting." },
      { value: "3", label: "Companies led as President & CEO — media, music, and insurance." },
      { value: "1", label: "Nonprofit co-founded to advance men's health awareness and advocacy." },
      { value: "U.S.", label: "Nationwide insurance solutions delivered through DSA Insurance Services." },
    ],
    chapters: [
      {
        title: "Media",
        note: "Worldwide Media Group",
        heading: "Brands built with intent.",
        body: "As President and CEO of Worldwide Media Group, David cultivates brands and manages multimillion-dollar assets across film, media, and television productions — bridging creative vision with disciplined business leadership.",
        tags: ["Worldwide Media Group", "Film & television", "Brand building"],
      },
      {
        title: "Music",
        note: "Arista, D&D Studios, Worldwide Music",
        heading: "An architect of culture.",
        body: "With more than two decades in the music industry, David has shaped culture through artist development, consulting, and strategic guidance. His early affiliations with Arista Records and the legendary D&D Studios established him as a respected architect within hip-hop.",
        tags: ["Arista Records", "D&D Studios", "Artist development"],
      },
      {
        title: "Insurance",
        note: "DSA Insurance Services, Inc.",
        heading: "Integrity at scale.",
        body: "Under David's leadership, DSA Insurance Services, Inc. has become synonymous with integrity, innovation, and personalized service — providing comprehensive insurance solutions to clients across the United States while consistently exceeding expectations.",
        tags: ["DSA Insurance Services", "Nationwide reach", "Personalized service"],
      },
      {
        title: "Philanthropy",
        note: "We Fight Against Male Related Diseases",
        heading: "Service as a standard.",
        body: "Co-founder of the We Fight Against Male Related Diseases Organization, David channels strategic partnerships and community engagement into a nonprofit dedicated to raising awareness, promoting education, and creating advocacy around men's health nationwide.",
        tags: ["Men's health", "Advocacy", "Community engagement"],
      },
    ],
    playbook: [
      { number: "01", title: "Bridge creativity and business.", body: "Pair artistic vision with disciplined strategy so ideas become enduring brands." },
      { number: "02", title: "Champion people.", body: "Develop talent and mentor emerging leaders as the real measure of success." },
      { number: "03", title: "Serve the community.", body: "Turn influence into advocacy, education, and meaningful impact on lives." },
      { number: "04", title: "Pursue excellence.", body: "Exceed expectations through integrity, innovation, and personalized service." },
    ],
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

// Holdings / Portfolio
export type Holding = {
  name: string;
  sector: string;
  description: string;
  established: string;
  website?: string;
  logo?: string;
  logoHover?: string;
};

export const holdings: Holding[] = [
  {
    name: "Black Brain Pictures International",
    sector: "Film & Television",
    description:
      "A multi-award-winning South African film and television studio crafting drama, comedy, and world-class storytelling for Netflix, Showmax, Amazon Prime Video, and the SABC — a recognized hub for innovative, award-winning creative communications.",
    established: "[Year]",
    website: "https://www.blackbrain.co.za/",
    logo: blackBrainBlack.url,
    logoHover: blackBrainRed.url,
  },
  {
    name: "[Holding Two]",
    sector: "[Sector]",
    description: "[One-line description PLACEHOLDER]",
    established: "[Year]",
  },
  {
    name: "[Holding Three]",
    sector: "[Sector]",
    description: "[One-line description PLACEHOLDER]",
    established: "[Year]",
  },
  {
    name: "[Holding Four]",
    sector: "[Sector]",
    description: "[One-line description PLACEHOLDER]",
    established: "[Year]",
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
