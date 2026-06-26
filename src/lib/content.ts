/**
 * CGE content. Non-placeholder copy is used verbatim per spec.
 * Items tagged [PLACEHOLDER] are stand-ins — replace with the real brief.
 */

import blackBrainBlack from "@/assets/blackbrain-logo-black.png.asset.json";
import blackBrainRed from "@/assets/blackbrain-logo-red.png.asset.json";
import porterCraigLight from "@/assets/porter-craig-logo-light.jpg.asset.json";
import porterCraigDark from "@/assets/porter-craig-logo-dark.jpg.asset.json";
import odflixLogo from "@/assets/odflix-logo.png.asset.json";
import gotBagLogo from "@/assets/got-bag-logo.png.asset.json";
import gotBagAfricaLogo from "@/assets/got-bag-africa-logo.jpg.asset.json";
import paralightLogo from "@/assets/paralight-logo.png.asset.json";
import paralightLogoBlue from "@/assets/paralight-logo-blue.png.asset.json";
import granvilleLogoWhite from "@/assets/granville-logo-wht.png.asset.json";
import granvilleLogoBlack from "@/assets/granville-logo-black.png.asset.json";
import adventLogoBlack from "@/assets/advent-logo-black.png.asset.json";
import adventLogoWhite from "@/assets/advent-logo-white.png.asset.json";
import godfathersLogoColor from "@/assets/godfathers-logo-color.png.asset.json";
import godfathersLogoBlack from "@/assets/godfathers-logo-black.png.asset.json";
import davidAsh from "@/assets/david-ash-pfp.png.asset.json";
import kenMerritt from "@/assets/ken-merritt-pfp.png.asset.json";
import suaveRabb from "@/assets/suave-rabb-new.png.asset.json";
import ikechukwuNnamani from "@/assets/ikechukwu-nnamani-pfp.png.asset.json";



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
    image: "/__l5e/assets-v1/9580f997-8d67-4ed7-a181-07cfef991d5d/keith-l-craig-new.png",
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
      { value: "2026", label: "HAPA Trailblazer Award recipient and International Best Selling Author." },
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
      "As an activist and global thought leader, Saber has addressed the United Nations Permanent Forum for People of African Descent (2022), delivered keynotes on leadership in Uganda (2017), and led entrepreneurship workshops in Ghana (2026). His work has been featured in ABC, FOX, Yahoo! Finance, Black Enterprise, The Intercept, and The Afro. He has been recognized as a 2025 Emerging Leader by Who's Who in Black Baltimore, a 2026 Men Impact Change Award recipient, and a 2020-2021 Washington Bar Association Rising Star.",
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
        body: "A global thought leader, Taalib has addressed the United Nations Permanent Forum for People of African Descent (2022), delivered leadership keynotes in Uganda (2017), and led entrepreneurship workshops in Ghana (2026). His work has been featured in ABC, FOX, Yahoo! Finance, Black Enterprise, The Intercept, and The Afro.",
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
    role: "CHIEF FINANCIAL OFFICER",
    initials: "KM",
    slug: "ken-merritt",
    image: kenMerritt.url,
    placeholderBio: false,
    subtitle:
      "Founder and Managing Partner of Merritt Advisory Group, and a strategic leader with world-class financial acumen — helping executives align organizational goals, functional capabilities, and personal leadership gravitas.",
    bio: "Chief Financial Officer. A strategic advisor who brings enterprise discipline, deep functional prowess, and financial stewardship to every position.",
    fullBio: [
      "Ken Merritt is the Founder and Managing Partner of Merritt Advisory Group. He is a strategic leader with a unique combination of broad enterprise strategy expertise, deep functional prowess, and world-class financial acumen. His specific expertise includes helping executives align organizational goals, functional capabilities, and personal leadership gravitas.",
      "Ken has worked extensively in financial services, consumer and industrial products, and private equity. He has served as an advisory leader at Korn Ferry, Deloitte Consulting, and Accenture. He is a frequent speaker and strategic facilitator for conferences, universities, and leadership meetings. Ken served on the Beta Gamma Sigma Board of Governors from 2021 to 2025.",
      "He earned a Bachelor of Science in Accounting from the Willie A. Deese College of Business & Economics at North Carolina A&T State University, and a Master of Business Administration in Finance, Strategy, and Marketing from the Kellogg School of Management at Northwestern University.",
    ],
    focus: ["Enterprise strategy", "Financial stewardship", "Leadership alignment", "Private equity"],
    stats: [
      { value: "3", label: "Top-tier advisory firms — Korn Ferry, Deloitte Consulting, and Accenture." },
      { value: "Kellogg", label: "MBA in Finance, Strategy & Marketing from Northwestern University." },
      { value: "NC A&T", label: "B.S. in Accounting from the Willie A. Deese College of Business & Economics." },
      { value: "2021–25", label: "Served on the Beta Gamma Sigma Board of Governors." },
    ],
    chapters: [
      {
        title: "Strategy",
        note: "Merritt Advisory Group",
        heading: "Alignment at the top.",
        body: "As Founder and Managing Partner of Merritt Advisory Group, Ken helps executives align organizational goals, functional capabilities, and personal leadership gravitas — turning vision into disciplined execution.",
        tags: ["Enterprise strategy", "Leadership alignment", "Organizational design"],
      },
      {
        title: "Advisory",
        note: "Korn Ferry, Deloitte, Accenture",
        heading: "Advisory leadership at scale.",
        body: "Ken has served as an advisory leader at Korn Ferry, Deloitte Consulting, and Accenture — bringing deep expertise across financial services, consumer and industrial products, and private equity to the world's most complex organizations.",
        tags: ["Korn Ferry", "Deloitte", "Accenture", "Private equity"],
      },
      {
        title: "Finance",
        note: "Kellogg School of Management",
        heading: "World-class financial acumen.",
        body: "With an MBA in Finance, Strategy, and Marketing from the Kellogg School of Management at Northwestern University, Ken pairs rigorous financial discipline with strategic foresight to govern capital with care and conviction.",
        tags: ["Kellogg MBA", "Capital stewardship", "Financial discipline"],
      },
      {
        title: "Service",
        note: "Beta Gamma Sigma",
        heading: "Leadership beyond the boardroom.",
        body: "A frequent speaker and strategic facilitator for conferences, universities, and leadership meetings, Ken served on the Beta Gamma Sigma Board of Governors from 2021 to 2025 — championing excellence in business education and honor society standards worldwide.",
        tags: ["Beta Gamma Sigma", "Speaking", "Leadership development"],
      },
    ],
    playbook: [
      { number: "01", title: "Align strategy with structure.", body: "Ensure organizational goals, functional capabilities, and leadership presence are in concert before committing capital." },
      { number: "02", title: "Govern with discipline.", body: "Apply world-class financial acumen and process so every position is held with accountability and long-view conviction." },
      { number: "03", title: "Lead from the front.", body: "Bring personal gravitas and servant leadership to every advisory engagement, boardroom, and strategic conversation." },
      { number: "04", title: "Measure in decades.", body: "Think beyond quarterly cycles — build structures and relationships that compound over time." },
    ],
  },
  {
    name: "David S. Ash",
    role: "Chief of Staff",
    initials: "DA",
    slug: "david-ash",
    image: davidAsh.url,
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
  {
    name: "Engr. Ikechukwu Nnamani",
    role: "Chief Innovation Officer",
    initials: "IN",
    slug: "ikechukwu-nnamani",
    image: ikechukwuNnamani.url,
    placeholderBio: false,
    subtitle:
      "Engineer, digital infrastructure pioneer, and boardroom leader with 23+ years shaping next-generation telecom and ICT across Africa — from carrier-neutral data centers to submarine cable landing stations.",
    bio: "Chief Innovation Officer and architect of digital infrastructure. A mechanical engineer whose two decades of building Africa's most interconnected data centers define how CGE scales technology with purpose.",
    fullBio: [
      "Ikechukwu Nnamani is an Engineer with business interests in Information Communications and Technology infrastructure development, multimedia platforms, oil and gas, power generation and distribution, financial technology services, cyber security, Artificial Intelligence, Internet of Things, and the digital economy. He has sat on the boards of several companies and organizations including TeleAfrica Communications, Medallion Data Centres, Demadiur Systems, ChiefSoft Inc, Innova Infrastructure, Thub Communications, AI Empowerment Foundation, East Mines & Steels Company, AfricaPlan Foundation, KlinicX Inc, Xpand Financials, the Nigerian Internet Registration Agency, Association of Telecommunications Companies of Nigeria, and the Association of Interconnect Operating Companies, amongst others. He serves as Silvertrust Media Inc West African Region Business Development Executive.",
      "For over 23 years, Engineer Nnamani has been at the forefront of digital infrastructure development across Africa, playing a pioneering role in the development of next generation digital infrastructure in several African markets. He has promoted the establishment of telecom and ICT infrastructure in Ghana, Togo, Liberia, Sierra Leone, Cote D'Ivoire, Senegal, Kenya, Uganda, Botswana, and Angola amongst others.",
      "For over 21 years under his leadership, the Medallion data centers in Lagos (LOS1, LOS2, LKK1, LKK2) are rated the most interconnected facility in the West African sub-region — the number 1 peering point for the region, hosting all submarine cables, long distance providers, metro fiber providers, mobile and fixed services providers, OTT providers, Internet Exchange, VAS providers, and global Tier 1 service providers. A major volume of all internet traffic exchanged at the Nigeria Internet Exchange takes place at LOS1 in Victoria Island, Lagos. The LKK campus hosts the 2AFRICA Submarine Cable PFE Module and support infrastructure for SLTEs and other critical network equipment. Medallion is the first Carrier Neutral Data Center operator with two campuses in Lagos, providing redundancy and service diversification.",
      "Under his leadership, the ABV1 data center in Abuja is one of Nigeria's most critical national infrastructures — the hub connecting the Southern and Northern parts of the country, hosting key service providers including Meta, Google, Netflix, and the Internet Exchange, ensuring digital infrastructure is well distributed across Nigeria.",
      "Engr. Nnamani has won over 60 national and international awards for his contribution to the growth of telecoms and ICT. He was recently awarded the 2025 ICT Growth Impact Award in Data Center Infrastructure Development at Africa's Beacon of ICT event, the 2025 Digital Economy ICON of the Year, the 2024 Lifetime Achievement Award for pioneering data center business in Nigeria, the 2024 Data Center Leader of the Year, and the 2024 ICT Entrepreneur Personality of the Year. He was also the 2022 ICT Man of the Year and the 2021 Outstanding Promoter of ICT for National Development. In 2020 he was inducted into the Nigeria@60 ICT Hall of Fame by TechTV.",
      "Engr. Nnamani worked as an optical systems engineer at Luxcore Networks Inc. in Atlanta, Georgia, USA. While at Luxcore, he helped design and manufacture the world's first integrated photonic wavelength converter chip — a semiconductor waveguide optical regenerative device guaranteeing non-blocking traffic flow in telecommunication networks. He also played a key role in designing Luxcore's LambdaXchange, the world's first demonstrated All-Optical Router, which won the best system award at the 2001 Optical Fiber Conference in Anaheim, California.",
      "As a researcher at the Design Methodologies Laboratory, Tennessee State University, he was involved in the conceptual design of the now-patented Expanded Accommodation Tool used in the Joint Strike Force project by the United States Military, executed on behalf of Boeing Aerospace in St. Louis, Missouri. He received numerous awards from Boeing Aerospace and also designed and successfully tested a prototype Trident II submarine umbilical retract mechanism used by the United States Navy Strategic Ballistic Missiles Defense Program. His work has been published in numerous international publications including the Boeing Aerospace newsletter and the Region XI technical journal of the American Society of Mechanical Engineers (ASME) International.",
      "Engr. Nnamani holds a bachelor's degree in Mechanical Engineering from the University of Nigeria, Nsukka and a Master's degree in Mechanical Engineering from Tennessee State University, Nashville, USA.",
    ],
    focus: [
      "Digital infrastructure & data centers",
      "Telecom & ICT development",
      "Board governance & strategy",
      "Engineering & innovation",
    ],
    stats: [
      { value: "23+", label: "Years pioneering digital infrastructure development across Africa." },
      { value: "60+", label: "National and international awards for contribution to telecoms and ICT." },
      { value: "4", label: "Carrier-neutral data centers under leadership in Lagos and Abuja." },
      { value: "10+", label: "African markets where he promoted telecom and ICT infrastructure." },
    ],
    chapters: [
      {
        title: "Infrastructure",
        note: "Data centers, cables, connectivity",
        heading: "The backbone of a continent.",
        body: "For over 21 years, Medallion data centers under his leadership have been rated the most interconnected facility in West Africa — the number 1 peering point hosting all submarine cables, global Tier 1 providers, and major internet exchanges. The ABV1 data center in Abuja connects North and South Nigeria, hosting Meta, Google, and Netflix.",
        tags: ["Medallion Data Centres", "2AFRICA Cable", "Carrier Neutral"],
      },
      {
        title: "Engineering",
        note: "Optical systems, military R&D",
        heading: "Engineering at the frontier.",
        body: "At Luxcore Networks, he co-designed the world's first integrated photonic wavelength converter chip and the LambdaXchange All-Optical Router — best system award at the 2001 Optical Fiber Conference. At Tennessee State University, he contributed to Boeing's Joint Strike Force project and designed a Trident II submarine umbilical retract mechanism for the U.S. Navy.",
        tags: ["Luxcore Networks", "Boeing Aerospace", "U.S. Navy"],
      },
      {
        title: "Boardroom",
        note: "Governance, strategy, multiple sectors",
        heading: "Leadership across industries.",
        body: "He has sat on the boards of companies spanning telecom, data centers, fintech, cybersecurity, AI, infrastructure, and media — including TeleAfrica Communications, Medallion Data Centres, ChiefSoft Inc, the Nigerian Internet Registration Agency, and the Association of Telecommunications Companies of Nigeria.",
        tags: ["TeleAfrica", "NIRA", "ATCON"],
      },
      {
        title: "Recognition",
        note: "Awards, hall of fame, global honors",
        heading: "Excellence, acknowledged.",
        body: "Over 60 national and international awards include the 2025 ICT Growth Impact Award, 2024 Lifetime Achievement Award for pioneering data center business in Nigeria, 2022 ICT Man of the Year, and induction into the Nigeria@60 ICT Hall of Fame by TechTV in 2020.",
        tags: ["Beacon of ICT", "Lifetime Achievement", "ICT Hall of Fame"],
      },
    ],
    playbook: [
      { number: "01", title: "Build the backbone first.", body: "Lasting innovation requires infrastructure that outlasts the hype cycle." },
      { number: "02", title: "Connect the continent.", body: "Digital equity starts with physical connectivity — cables, centers, and peering points." },
      { number: "03", title: "Engineer with purpose.", body: "Every system should serve people, not just process data." },
      { number: "04", title: "Govern with breadth.", body: "Sit on boards that span sectors — the best strategy is interdisciplinary." },
    ],
    quote:
      "For over two decades, the mission has been singular: build the digital backbone that connects Africa to the world and ensures no community is left behind.",
    quoteAttribution: "Engr. Ikechukwu Nnamani",
  },
  {
    name: "DeAngelo \u201CSuav\u2019e\u201D Rabb",
    role: "President of A&R",
    initials: "DR",
    slug: "suave-rabb",
    image: suaveRabb.url,
    placeholderBio: false,
    subtitle:
      "Dallas-raised rapper, songwriter, and producer whose music is engineered for visual storytelling and high-impact media — cinematic narratives, atmospheric textures, and luxury-grade production built for film, television, trailers, and digital content.",
    bio: "President of A&R and a cinematic songwriter-producer. Two decades of Southern-authentic, sync-ready music that elevates film, television, and brand storytelling.",
    fullBio: [
      "DeAngelo \u201CSuav\u2019e\u201D Rabb is a Dallas-raised rapper, songwriter, producer whose music is engineered for visual storytelling and high impact media. His signature sound blends cinematic narratives, atmospheric textures, and luxury grade production \u2014 creating emotionally resonant tracks that elevate film, television, trailers, and digital content.",
      "With a career spanning more than two decades, Suav\u2019e has developed a storytelling style defined by vivid imagery, emotional pacing, and Southern authenticity. His music enhances on-screen moments with depth, tension, and clarity, making his catalog ideal for dramatic scenes, character driven arcs, motivational sequences, and culturally grounded narratives.",
      "Musical works by Suav\u2019e have earned national recognition, including eight consecutive weeks at #1 on Minnesota\u2019s 99.7 KKCK and industry honors such as \u201CBest Performance\u201D in Dallas and \u201CBest Up and Coming Rap Group\u201D in Hollywood. His single \u201CLegend,\u201D co-produced with Grammy Award\u2013winning producer D-Moet, showcases his cinematic instincts through its dynamic arrangement and high-energy visual presentation featuring American actor/comedian Tony Rock and Dallas icon Fat Pimp.",
      "His socially impactful single \u201CBlack Man\u201D demonstrates his ability to create emotionally charged, documentary-ready music. The track sparked national conversation and led to a televised interview on the Black News Channel (BNC), highlighting the strength of Suav\u2019e in crafting culturally relevant, narrative-driven work.",
      "With an extensive catalog of independently released music, Suav\u2019e continues to expand his sound with compositions designed for sync \u2014 blending emotional weight, refined production, and a cinematic approach that aligns seamlessly with modern visual media.",
    ],
    focus: [
      "A&R & talent development",
      "Cinematic music & scoring",
      "Sync & visual media",
      "Songwriting & production",
    ],
    stats: [
      { value: "20+", label: "Years crafting Southern-authentic, cinematic music for visual media." },
      { value: "8", label: "Consecutive weeks at #1 on Minnesota\u2019s 99.7 KKCK." },
      { value: "2", label: "Industry honors \u2014 \u201CBest Performance\u201D (Dallas) and \u201CBest Up and Coming Rap Group\u201D (Hollywood)." },
      { value: "BNC", label: "National television feature for the socially impactful single \u201CBlack Man.\u201D" },
    ],
    chapters: [
      {
        title: "Sound",
        note: "Cinematic, sync-ready production",
        heading: "Music built for the screen.",
        body: "Suav\u2019e\u2019s signature sound blends cinematic narratives, atmospheric textures, and luxury-grade production \u2014 emotionally resonant tracks engineered to elevate film, television, trailers, and digital content.",
        tags: ["Cinematic", "Sync-ready", "Luxury production"],
      },
      {
        title: "Storytelling",
        note: "Southern authenticity, emotional pacing",
        heading: "Vivid imagery, real depth.",
        body: "Over two decades he has developed a storytelling style defined by vivid imagery, emotional pacing, and Southern authenticity \u2014 ideal for dramatic scenes, character-driven arcs, motivational sequences, and culturally grounded narratives.",
        tags: ["Southern authenticity", "Emotional pacing", "Narrative-driven"],
      },
      {
        title: "Recognition",
        note: "Charts, awards, collaborations",
        heading: "Honored across markets.",
        body: "His work has earned national recognition \u2014 eight consecutive weeks at #1 on 99.7 KKCK and honors in Dallas and Hollywood. His single \u201CLegend,\u201D co-produced with Grammy winner D-Moet, features Tony Rock and Fat Pimp.",
        tags: ["99.7 KKCK", "D-Moet", "\u201CLegend\u201D"],
      },
      {
        title: "Impact",
        note: "Culturally relevant work",
        heading: "Music that starts conversations.",
        body: "His socially impactful single \u201CBlack Man\u201D created emotionally charged, documentary-ready music that sparked national conversation and led to a televised interview on the Black News Channel (BNC).",
        tags: ["\u201CBlack Man\u201D", "Black News Channel", "Cultural relevance"],
      },
    ],
    playbook: [
      { number: "01", title: "Score the story.", body: "Build music around the visual moment so emotion, tension, and clarity land on screen." },
      { number: "02", title: "Stay authentic.", body: "Lead with Southern authenticity and vivid imagery that audiences feel as real." },
      { number: "03", title: "Make it sync-ready.", body: "Refine production so every track aligns seamlessly with modern visual media." },
      { number: "04", title: "Develop the next voice.", body: "Find and shape talent the way great A&R turns potential into lasting catalog." },
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
    established: "2004",
    website: "https://www.blackbrain.co.za/",
    logo: blackBrainBlack.url,
    logoHover: blackBrainRed.url,
  },
  {
    name: "Porter + Craig Film and Media",
    sector: "Film & Media Distribution",
    description:
      "A Beverly Hills-based worldwide film and television sales organization specializing in the financing, production, and distribution of commercial feature films — representing its own slate and third-party content across an annual slate of 50 to 100 films, with clients including Netflix, Amazon, Paramount, Hulu, Showtime, Starz, and Tubi.",
    established: "2022",
    website: "https://www.pcfilmandmedia.com/",
    logo: porterCraigLight.url,
    logoHover: porterCraigDark.url,
  },
  {
    name: "ZMA Odflix Production",
    sector: "Film Production & Streaming",
    description:
      "A Canada-based film production house and streaming platform where stories come alive — developing, producing, and distributing original feature films and series, including titles such as \"Unlucky to Love You\" and \"The Wizard Hunter,\" with a growing catalogue streamed directly on Odflix.",
    established: "2015",
    website: "https://odflix.com/",
    logo: odflixLogo.url,
  },
  {
    name: "GOT BAG - USA",
    sector: "Sustainable Bags & Accessories",
    description:
      "A Germany-founded sustainable goods brand creating minimalist travel bags, backpacks, and accessories made from Ocean Impact Plastic — partnering with coastal communities in Indonesia to recover discarded plastic waste and transform it into high-performance gear for everyday adventure.",
    established: "2018",
    website: "https://us.got-bag.com/",
    logo: gotBagLogo.url,
  },
  {
    name: "GOT BAG - AFRICA",
    sector: "Sustainable Bags & Accessories",
    description:
      "The African arm of the Germany-founded sustainable goods brand, bringing Ocean Impact Plastic backpacks, travel bags, and accessories to communities across the continent — partnering with coastal recovery networks to turn marine waste into high-performance everyday gear.",
    established: "2026",
    website: "https://got-bag.com/en/",
    logo: gotBagAfricaLogo.url,
  },
  {
    name: "Paralight Studios",
    sector: "AI Film Production & Creative Software",
    description:
      "An AI-powered creative studio turning imagination into finished, professional video — movies, television, commercials, music videos, and short-form content. From screenplay to scene breakdowns, AI characters, full storyboards, and export-ready production assets, Paralight is a complete script-to-screen system, already powering Hollywood productions including Stan Lee's \"Legion of 5.\"",
    established: "2024",
    website: "https://paralight.ai/",
    logo: paralightLogoBlue.url,
    logoHover: paralightLogo.url,
  },
  {
    name: "Granville",
    sector: "Hospitality & Restaurants",
    description:
      "A collection of modern-casual neighborhood restaurants specializing in wholesome, hand-crafted recipes and libations. With warm hospitality, globally-inspired food, and curated music, Granville is a culture, not a concept — supporting local, organic, and certified-humane practices while making everything from scratch daily across lunch, dinner, weekend breakfast, and full bar.",
    established: "2007",
    website: "https://www.granville.com/",
    logo: granvilleLogoWhite.url,
    logoHover: granvilleLogoBlack.url,
  },
  {
    name: "Advent Entertainment",
    sector: "Film, Television & Video Games",
    description:
      "A film, television, and video game studio building a slate of visually stunning projects with broad demographic appeal — anchored by Stan Lee's \"Legion of 5\" and \"Legion Champions,\" with founder Lee Baker's visual effects and animation house, Advent FX, contributing decades of feature-film and AAA game experience. Titles including \"Legion of 5\" and \"Hawarang Knights\" are in production for 2026 release.",
    established: "2017",
    website: "https://advententertainment.com/",
    logo: adventLogoBlack.url,
    logoHover: adventLogoWhite.url,
  },
  {
    name: "The Godfathers of Deep House SA",
    sector: "Music, Media & Commerce",
    description:
      "A South African deep house music and media house running label, catalogue, and commerce through one controlled digital environment — GF Radio and GFTV broadcasts, a deep release catalogue, a talent roster including T'TimeZer011, Lele, KK Mash, and R.E.A, plus the GF Nostalgear apparel line and membership access for direct audience ownership.",
    established: "2009",
    website: "https://www.thegodfathers.co.za/",
    logo: godfathersLogoColor.url,
    logoHover: godfathersLogoBlack.url,
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
