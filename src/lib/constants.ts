export const SITE = {
  name: "Gitansh Manaktala",
  title: "Gitansh Manaktala | Event Coordinator & Strategic Partnerships",
  description:
    "Event Coordinator and Strategic Partnerships professional in Higher Education. Building meaningful connections across institutions, industry, and global organizations.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://gitanshmanaktala.com",
  phone: "+91 8799728286",
  phoneHref: "tel:+918799728286",
  email: "manaktalagitansh@gmail.com",
  linkedin: "https://www.linkedin.com/in/gitanshmanaktala/",
  roles: [
    "Event Coordinator",
    "Strategic Partnerships",
    "Higher Education Engagement",
    "Conference & Exhibition Management",
  ],
  headline:
    "Building Meaningful Connections Across Higher Education, Industry and Global Institutions",
  heroDescription:
    "I work at the intersection of higher education, strategic partnerships, international engagement and large-scale event management, helping institutions, organizations and leaders connect through impactful platforms and conferences.",
} as const;

export const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#events", label: "Events" },
  { href: "#partnerships", label: "Partnerships" },
  { href: "#skills", label: "Skills" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
] as const;

export const ABOUT_STAKEHOLDERS = {
  organizations: [
    "Universities",
    "Colleges",
    "Schools",
    "Accreditation Bodies",
    "Associations",
    "International Organizations",
    "Embassies",
    "Trade Offices",
    "Education Leaders",
  ],
  leaders: [
    "Vice Chancellors",
    "Directors",
    "Registrars",
    "Academic Leaders",
    "Government Representatives",
    "International Delegations",
  ],
} as const;

export const PROFILE_CARDS = [
  {
    title: "Higher Education Partnerships",
    description:
      "Forging strategic alliances between institutions to advance academic excellence and collaborative growth.",
    icon: "GraduationCap",
  },
  {
    title: "International Collaborations",
    description:
      "Facilitating cross-border partnerships with embassies, trade offices, and global education organizations.",
    icon: "Globe",
  },
  {
    title: "Conference Management",
    description:
      "End-to-end planning and execution of large-scale education conferences and leadership summits.",
    icon: "Calendar",
  },
  {
    title: "Stakeholder Engagement",
    description:
      "Building trusted relationships with vice chancellors, academic leaders, and government representatives.",
    icon: "Users",
  },
  {
    title: "Institutional Outreach",
    description:
      "Connecting universities, colleges, and academic bodies with meaningful partnership opportunities.",
    icon: "Building2",
  },
  {
    title: "Speaker Management",
    description:
      "Curating and coordinating distinguished speakers, panelists, and thought leaders for premier events.",
    icon: "Mic",
  },
  {
    title: "Association Partnerships",
    description:
      "Developing collaborations with industry and academic associations to amplify institutional impact.",
    icon: "Handshake",
  },
  {
    title: "Exhibition Operations",
    description:
      "Managing exhibition floors, sponsor engagements, and partner showcases at major education events.",
    icon: "LayoutGrid",
  },
] as const;

export const EXPERIENCE = {
  organization: "Education Growth Network (EGN)",
  role: "Event Coordinator",
  period: "Present",
  responsibilities: [
    "Strategic Partnerships",
    "Institutional Outreach",
    "Conference Management",
    "Speaker Coordination",
    "International Engagement",
    "Higher Education Collaborations",
    "Association Partnerships",
    "Stakeholder Management",
  ],
} as const;

export const EVENTS = [
  {
    title: "EGN ConnectX 2026",
    location: "Mumbai",
    type: "Flagship Conference",
    stats: { attendees: "500+", speakers: "40+", partners: "25+" },
    featured: true,
  },
  {
    title: "Education Leadership Conference",
    location: "Hyderabad",
    type: "Leadership Summit",
    stats: { attendees: "300+", speakers: "25+", partners: "15+" },
    featured: false,
  },
  {
    title: "Higher Education Summit",
    location: "Indore",
    type: "Academic Summit",
    stats: { attendees: "250+", speakers: "20+", partners: "12+" },
    featured: false,
  },
  {
    title: "Excellence Awards Ceremony",
    location: "Noida",
    type: "Award Ceremony",
    stats: { attendees: "400+", speakers: "15+", partners: "20+" },
    featured: false,
  },
  {
    title: "Round Table Discussions",
    location: "Ranchi",
    type: "Executive Roundtable",
    stats: { attendees: "50+", speakers: "10+", partners: "8+" },
    featured: false,
  },
  {
    title: "Regional Education Forum",
    location: "Mumbai",
    type: "Regional Event",
    stats: { attendees: "200+", speakers: "18+", partners: "10+" },
    featured: false,
  },
] as const;

export const PARTNERSHIP_CATEGORIES = [
  {
    title: "Higher Education",
    items: ["Universities", "Institutions", "Academic Bodies"],
    icon: "GraduationCap",
  },
  {
    title: "International",
    items: ["Embassies", "Trade Offices", "International Education Organizations"],
    icon: "Globe2",
  },
  {
    title: "Associations",
    items: ["Industry Associations", "Academic Associations", "Professional Bodies"],
    icon: "Award",
  },
  {
    title: "Corporate",
    items: ["Education Companies", "EdTech Companies", "Industry Partners"],
    icon: "Briefcase",
  },
] as const;

export const INTERNATIONAL_REGIONS = [
  { name: "India", x: 72, y: 48, hub: true },
  { name: "United Kingdom", x: 48, y: 28 },
  { name: "Germany", x: 52, y: 30 },
  { name: "Canada", x: 22, y: 28 },
  { name: "New Zealand", x: 92, y: 78 },
  { name: "Southeast Asia", x: 78, y: 52 },
] as const;

export const SKILLS = [
  "Event Management",
  "Conference Planning",
  "Strategic Partnerships",
  "Stakeholder Management",
  "Public Relations",
  "Higher Education Outreach",
  "International Relations",
  "Association Partnerships",
  "Leadership Coordination",
  "Project Management",
  "Communication",
  "Relationship Building",
  "Exhibition Management",
  "Speaker Management",
] as const;

export const METRICS = [
  { label: "Events Coordinated", value: 50, suffix: "+" },
  { label: "Institutions Engaged", value: 120, suffix: "+" },
  { label: "Partnership Discussions", value: 200, suffix: "+" },
  { label: "Stakeholders Connected", value: 500, suffix: "+" },
  { label: "Conferences Supported", value: 35, suffix: "+" },
] as const;

export const GALLERY_ITEMS = [
  { id: 1, title: "Leadership Summit Opening", category: "Conference", aspect: "tall" },
  { id: 2, title: "Vice Chancellor Panel", category: "Speaker Interaction", aspect: "wide" },
  { id: 3, title: "International Delegation Meet", category: "Leadership Meeting", aspect: "square" },
  { id: 4, title: "EGN ConnectX Stage", category: "Event Photo", aspect: "wide" },
  { id: 5, title: "Partnership Signing", category: "Leadership Meeting", aspect: "tall" },
  { id: 6, title: "Exhibition Floor", category: "Event Photo", aspect: "square" },
  { id: 7, title: "Round Table Discussion", category: "Conference", aspect: "wide" },
  { id: 8, title: "Award Ceremony", category: "Event Photo", aspect: "tall" },
  { id: 9, title: "Academic Leaders Networking", category: "Speaker Interaction", aspect: "square" },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "Gitansh brings exceptional professionalism to every engagement. His ability to connect academic leaders with the right stakeholders has been invaluable to our institution's growth strategy.",
    author: "Dr. Rajesh Verma",
    role: "Vice Chancellor",
    organization: "Leading University, India",
  },
  {
    quote:
      "Working with Gitansh on our international education summit was seamless. His attention to detail, stakeholder management, and cross-cultural sensitivity set a new standard for event coordination.",
    author: "Sarah Mitchell",
    role: "Director of International Relations",
    organization: "Global Education Network",
  },
  {
    quote:
      "Gitansh consistently delivers beyond expectations. His strategic approach to partnership development and conference management has significantly amplified our association's reach and impact.",
    author: "Prof. Anil Kapoor",
    role: "President",
    organization: "National Education Association",
  },
] as const;
