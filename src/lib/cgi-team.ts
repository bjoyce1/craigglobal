/**
 * CGI (Craig Global International Ltd) team registry.
 * Approved client biographies are stored verbatim. Members without an
 * approved biography carry a `bioStatus` flag and a role description only.
 */

import ikechukwuNnamani from "@/assets/ikechukwu-nnamani-pfp.png.asset.json";
import patriciaBebia from "@/assets/patricia-bebia-pfp.png.asset.json";

export type CgiTeamMember = {
  id: string;
  organization: "CGI";
  name: string;
  title: string;
  location: string;
  country: string;
  photo?: string;
  initials: string;
  shortBio: string;
  /** Approved biography, paragraph by paragraph. Empty when awaiting client copy. */
  fullBio: string[];
  /** Temporary role description used when fullBio is empty. */
  roleDescription?: string;
  expertise: string[];
  awards: string[];
  currentRoles: string[];
  videoUrl?: string;
  appointmentDate?: string;
  bioStatus: "Approved" | "Awaiting Client Bio";
  displayOrder: number;
  featured: boolean;
  level: "executive" | "operations" | "legal";
  coords: { lat: number; lng: number };
};

/** Confirmed CGI incorporation / director appointment date (CAC extract). */
const CGI_APPOINTMENT_DATE = "17 July 2026";

export const cgiTeam: CgiTeamMember[] = [
  {
    id: "ike-nnamani",
    organization: "CGI",
    name: "Engr. Ikechukwu Nnamani",
    title: "Chief Executive Officer",
    location: "Nigeria",
    country: "Nigeria",
    photo: ikechukwuNnamani.url,
    initials: "IN",
    shortBio:
      "Engr. Ikechukwu Nnamani is a visionary telecommunications and digital infrastructure leader whose work has helped shape Africa's rapidly evolving technology ecosystem. Through decades of industry leadership, he has focused on connectivity, network infrastructure, policy development, and expanding digital opportunity across the continent.",
    fullBio: [
      "Engr. Ikechukwu Nnamani, President and Chief Executive Officer of Medallion Communications Limited, is a visionary leader at the forefront of Africa's telecommunications and digital infrastructure landscape.",
      "Under his leadership, Medallion has become a cornerstone of Nigeria's telecom ecosystem, serving over 83 operators and hosting critical infrastructure for global technology giants, while operating one of the most interconnected data centers in West Africa.",
      "Driven by a mission to bridge the digital divide, he has spent over 15 years advancing core network infrastructure, shaping forward-thinking telecom policies, and fostering industry collaboration across the continent.",
      "A respected voice in the sector, he plays key roles within ATCON and NIRA and has contributed to expanding interconnect clearinghouse frameworks beyond Nigeria.",
      "His impact has earned him numerous national and international accolades, reflecting a career defined by innovation, technical excellence, and a deep commitment to expanding access, connectivity, and digital opportunity across Africa.",
    ],
    expertise: [
      "Telecommunications",
      "Digital Infrastructure",
      "Data Centers",
      "Connectivity",
      "Technology",
      "Network Infrastructure",
      "Africa",
      "Enterprise Strategy",
    ],
    awards: [],
    currentRoles: [
      "President & Chief Executive Officer, Medallion Communications Limited",
      "Chief Technology Officer, Craig Global Enterprises",
    ],
    appointmentDate: CGI_APPOINTMENT_DATE,
    bioStatus: "Approved",
    displayOrder: 1,
    featured: true,
    level: "executive",
    coords: { lat: 9.0765, lng: 7.3986 },
  },
  {
    id: "joel-dikgole",
    organization: "CGI",
    name: "Joel Dikgole",
    title: "Chief Operating Officer",
    location: "South Africa",
    country: "South Africa",
    initials: "JD",
    shortBio:
      "Joel Dikgole is a distinguished executive whose career spans wholesale and retail leadership, finance, workforce development, investment, and organizational transformation. His work in South Africa has centered on building institutions, developing executive talent, and creating sustainable opportunities across industry and underserved communities.",
    fullBio: [
      "A distinguished leader in the wholesale and retail sector, Joel Dikgole served as the longest-serving CEO in the 15-year history of the Wholesale and Retail Sector Education and Training Authority (W&RSETA), where he drove transformative initiatives that significantly advanced skills development and professionalization within the industry.",
      "Under his leadership, the International Leadership Development Programme (ILDP), launched in 2009, produced an alumni network of over 190 senior managers, many of whom have progressed into executive roles.",
      "He spearheaded innovative programs that elevated the sector as a viable career path, including the establishment of the first Retail Schools of Excellence in KwaZulu-Natal, the first Chair of Retail at the Cape Peninsula University of Technology, and the rollout of Master's and Doctoral bursaries.",
      "His tenure also saw expanded investment in rural development initiatives, creating opportunities for cooperatives and retailers in underserved communities.",
      "In recognition of his impact, he received the 2013 Planet Africa Leadership Award in Toronto for his role in driving meaningful transformation in South Africa.",
      "Earlier in his career, he served as Finance and Administration Director at Fabcos Investment Holding in Johannesburg, overseeing financial operations across multiple investments and serving on the boards of Thebe Financial Services and Fidelity Bank.",
      "Joel is currently the Managing Director of JTD Consulting.",
    ],
    expertise: [
      "Executive Operations",
      "Wholesale & Retail",
      "Finance",
      "Organizational Leadership",
      "Workforce Development",
      "Investment",
      "Rural Development",
      "Strategy",
      "South Africa",
    ],
    awards: ["2013 Planet Africa Leadership Award — Toronto"],
    currentRoles: ["Managing Director, JTD Consulting"],
    appointmentDate: CGI_APPOINTMENT_DATE,
    bioStatus: "Approved",
    displayOrder: 2,
    featured: true,
    level: "executive",
    coords: { lat: -26.2041, lng: 28.0473 },
  },
  {
    id: "patricia-bebia",
    organization: "CGI",
    name: "Patricia Bebia",
    title: "Chief Marketing Officer",
    location: "Toronto, Canada",
    country: "Canada",
    photo: patriciaBebia.url,
    initials: "PB",
    shortBio:
      "Patricia Bebia is an award-winning media executive, filmmaker, producer, publisher, and communications leader whose career spans television, film, broadcasting, publishing, marketing, and public speaking. Her international work combines storytelling, brand development, creative leadership, and media strategy.",
    fullBio: [
      "Patricia Bebia is an award-winning media executive and filmmaker whose work spans television, film, publishing, and public speaking.",
      "She is the President of Diamond Plus Media and the Executive Vice President of Afroglobal Television, Canada's 24-hour Black-owned channel.",
      "Patricia is the writer and director of the multiple award-winning feature film The Life Coach, which has won 13 international awards, including honors in London, Paris, Milan, India, and New York, and recently completed a successful theatrical run across Canada and the United States.",
      "With a career rooted in purpose, Patricia has created and produced over 15 television programs, including The Visionaries, Standing Ovation, and Omobella Palace.",
      "She is also the associate publisher of Excellence, Destiny, and Envision magazines.",
      "Named in Who's Who in Black Canada, Patricia is the recipient of numerous accolades, including the Queen Elizabeth II Diamond Jubilee Medal and the Harry Jerome Award for Media.",
      "She has served as Chair of the Reelworld Foundation and currently sits on the advisory board of Trebas College.",
      "Her acclaimed leadership and mentorship programs remain influential for the next generation of creatives and changemakers.",
    ],
    expertise: [
      "Global Marketing",
      "Broadcasting",
      "Film",
      "Television",
      "Media",
      "Brand Strategy",
      "Publishing",
      "Communications",
      "Creative Leadership",
      "Video Production",
      "Graphic Design",
      "Web Design",
      "Branding",
      "Canada",
    ],
    awards: [
      "Queen Elizabeth II Diamond Jubilee Medal",
      "Harry Jerome Award for Media",
      "13 international awards — The Life Coach",
      "Who's Who in Black Canada",
    ],
    currentRoles: [
      "President, Diamond Plus Media",
      "Executive Vice President, Afroglobal Television",
    ],
    videoUrl: "https://vimeo.com/1016146457",
    bioStatus: "Approved",
    displayOrder: 3,
    featured: true,
    level: "executive",
    coords: { lat: 43.6532, lng: -79.3832 },
  },
  {
    id: "rhoda-nzomambu",
    organization: "CGI",
    name: "Rhoda Deborah Nzomambu",
    title: "International Operations Officer",
    location: "Amsterdam",
    country: "Amsterdam",
    initials: "RN",
    shortBio:
      "Rhoda Deborah Nzomambu supports Craig Global International's international operations, cross-border coordination, strategic relationships, and market initiatives.",
    fullBio: [],
    roleDescription:
      "Rhoda Deborah Nzomambu supports Craig Global International's international operations, cross-border coordination, strategic relationships, and market initiatives. Based in Amsterdam, her role contributes to CGI's ability to coordinate opportunities and partnerships across European and international markets.",
    expertise: ["International Operations", "Cross-Border Coordination", "Partnerships"],
    awards: [],
    currentRoles: [],
    bioStatus: "Awaiting Client Bio",
    displayOrder: 4,
    featured: false,
    level: "operations",
    coords: { lat: 52.3676, lng: 4.9041 },
  },
  {
    id: "sonia-gonzalez",
    organization: "CGI",
    name: "Sonia Gonzalez",
    title: "International Operations Officer",
    location: "Spain",
    country: "Spain",
    initials: "SG",
    shortBio:
      "Sonia Gonzalez supports Craig Global International's international operations and market coordination in Spain.",
    fullBio: [],
    roleDescription:
      "Sonia Gonzalez supports Craig Global International's international operations and market coordination in Spain, contributing to cross-border business development, strategic partnerships, and CGI's expanding European presence.",
    expertise: ["International Operations", "Business Development", "European Markets"],
    awards: [],
    currentRoles: [],
    bioStatus: "Awaiting Client Bio",
    displayOrder: 5,
    featured: false,
    level: "operations",
    coords: { lat: 40.4168, lng: -3.7038 },
  },
  {
    id: "karen",
    organization: "CGI",
    name: "Karen",
    title: "International Legal Affairs",
    location: "PARIS, FRANCE",
    country: "France",
    initials: "K",
    shortBio:
      "Karen supports Craig Global International's international legal affairs and cross-border corporate coordination in France.",
    fullBio: [],
    roleDescription:
      "Karen supports Craig Global International's international legal affairs and cross-border corporate coordination in France, helping CGI navigate relationships and initiatives that involve multiple markets and jurisdictions.",
    expertise: ["International Legal Affairs", "Cross-Border Coordination", "Governance"],
    awards: [],
    currentRoles: [],
    bioStatus: "Awaiting Client Bio",
    displayOrder: 6,
    featured: false,
    level: "legal",
    coords: { lat: 48.8566, lng: 2.3522 },
  },
];

export const cgiExecutives = cgiTeam.filter((m) => m.level === "executive");
export const cgiOperations = cgiTeam.filter((m) => m.level === "operations");
export const cgiLegal = cgiTeam.filter((m) => m.level === "legal");
