export interface BoardMember {
  id: number;
  name: string;
  title: string;
  role: string;
  bio: string;
  expertise: string[];
  emoji: string;
  featured: boolean;
  imageUrl: string;
  altText: string;
}

export const boardMembers: BoardMember[] = [
  {
    id: 1,
    name: "Director Syphero Okello",
    title: "Senior Partner, Community Development Associates",
    role: "Chairperson",
    bio: "With over 20 years of experience in community development and strategic leadership, Director Syphero provides visionary guidance to our organization. His expertise in sustainable development and stakeholder engagement has been instrumental in our growth.",
    expertise: ["Strategic Planning", "Community Development", "Stakeholder Engagement"],
    emoji: "👨‍💼",
    featured: true,
    imageUrl: "https://imgur.com/NFpzNLo.jpg",
    altText: "Director Syphero Okello - Chairperson"
  },
  {
    id: 2,
    name: "Bill Clinton",
    title: "Agricultural Economist & Sustainability Expert",
    role: "Board Member",
    bio: "Specializing in sustainable agriculture and rural development, Mr. Bill provides crucial guidance on our environmental and economic empowerment programs with over 15 years of experience in agricultural policy and food security initiatives.",
    expertise: ["Sustainable Agriculture", "Rural Development", "Environmental Conservation"],
    emoji: "👨‍🌾",
    featured: false,
    imageUrl: "https://imgur.com/43vcZnx.jpg",
    altText: "Bill Clinton - Agricultural Economist"
  },
  {
    id: 3,
    name: "Nancy Kaunda",
    title: "Public Health Specialist",
    role: "Board Member",
    bio: "A public health expert with extensive experience in community health initiatives. Dr. Nancy oversees our health and wellness programs, ensuring they meet community needs through evidence-based interventions and preventive healthcare strategies.",
    expertise: ["Public Health", "Community Wellness", "Healthcare Access"],
    emoji: "👩‍⚕️",
    featured: false,
    imageUrl: "https://imgur.com/2vr0w6l.jpg",
    altText: "Dr. Nancy Kaunda - Public Health Specialist"
  },
  {
    id: 4,
    name: "Michael Odhiambo",
    title: "Technology Entrepreneur",
    role: "Board Member",
    bio: "A tech innovator passionate about digital inclusion. Mr. Michael guides our digital transformation initiatives and technology adoption strategies, bringing 12 years of experience in software development and digital infrastructure.",
    expertise: ["Technology", "Digital Inclusion", "Innovation"],
    emoji: "👨‍💻",
    featured: false,
    imageUrl: "https://imgur.com/ae7MWy5.jpg",
    altText: "Michael Odhiambo- Technology Entrepreneur"
  },
  {
    id: 5,
    name: "Victor Otieno",
    title: "Financial Strategist & Investment Advisor",
    role: "Board Member",
    bio: "With extensive experience in corporate finance and investment management, Mr. Otieno provides strategic financial guidance and ensures sustainable resource allocation for our organizational growth and program expansion.",
    expertise: ["Financial Strategy", "Investment Management", "Risk Assessment"],
    emoji: "💼",
    featured: false,
    imageUrl: "https://imgur.com/UxRYumO.jpg",
    altText: "Victor Otieno - Financial Strategist"
  },
  {
    id: 6,
    name: "Agiye Felix",
    title: "Education Policy Expert",
    role: "Board Member",
    bio: "An accomplished educator and policy expert, Mr. Agiye brings 18 years of experience in educational reform and curriculum development, ensuring our educational programs align with national standards and community needs.",
    expertise: ["Education Policy", "Curriculum Development", "Teacher Training"],
    emoji: "📚",
    featured: false,
    imageUrl: "https://imgur.com/pRwxAZu.jpg",
    altText: "Mr Agiye - Education Policy Expert"
  },
  {
    id: 7,
    name: "Joseph Orlale",
    title: "Legal Counsel & Governance Specialist",
    role: "Board Member",
    bio: "As a seasoned legal professional, Mr. Joseph ensures our organization maintains the highest standards of legal compliance and ethical governance while providing strategic counsel on regulatory matters and corporate governance.",
    expertise: ["Legal Compliance", "Corporate Governance", "Regulatory Affairs"],
    emoji: "⚖️",
    featured: false,
    imageUrl: "/images/board/michael-odhiambo.jpg",
    altText: "Joseph Orlale - Legal Counsel"
  }
];
export interface BoardCommittee {
   id: number;
  name: string;
  title: string;
  role: string;
  bio: string;
  expertise: string[];
  emoji: string;
  featured: boolean;
  imageUrl: string;
  altText: string;
}

export const boardCommittees: BoardCommittee[] = [
    {
    id: 1,
    name: "Director Syphero Okello",
    title: "Senior Partner, Community Development Associates",
    role: "Chairperson",
    bio: "With over 20 years of experience in community development and strategic leadership, Director Syphero provides visionary guidance to our organization. His expertise in sustainable development and stakeholder engagement has been instrumental in our growth.",
    expertise: ["Strategic Planning", "Community Development", "Stakeholder Engagement"],
    emoji: "👨‍💼",
    featured: true,
    imageUrl: "https://imgur.com/NFpzNLo.jpg",
    altText: "Director Syphero Okello - Chairperson"
  },
  {
    id: 2,
    name: "Bill Clinton",
    title: "Agricultural Economist & Sustainability Expert",
    role: "Board Member",
    bio: "Specializing in sustainable agriculture and rural development, Mr. Bill provides crucial guidance on our environmental and economic empowerment programs with over 15 years of experience in agricultural policy and food security initiatives.",
    expertise: ["Sustainable Agriculture", "Rural Development", "Environmental Conservation"],
    emoji: "👨‍🌾",
    featured: false,
    imageUrl: "https://imgur.com/43vcZnx.jpg",
    altText: "Bill Clinton - Agricultural Economist"
  },
  {
    id: 3,
    name: "Nancy Kaunda",
    title: "Public Health Specialist",
    role: "Board Member",
    bio: "A public health expert with extensive experience in community health initiatives. Dr. Nancy oversees our health and wellness programs, ensuring they meet community needs through evidence-based interventions and preventive healthcare strategies.",
    expertise: ["Public Health", "Community Wellness", "Healthcare Access"],
    emoji: "👩‍⚕️",
    featured: false,
    imageUrl: "https://imgur.com/2vr0w6l.jpg",
    altText: "Dr. Nancy Kaunda - Public Health Specialist"
  },
  {
    id: 4,
    name: "Michael Odhiambo",
    title: "Technology Entrepreneur",
    role: "Board Member",
    bio: "A tech innovator passionate about digital inclusion. Mr. Michael guides our digital transformation initiatives and technology adoption strategies, bringing 12 years of experience in software development and digital infrastructure.",
    expertise: ["Technology", "Digital Inclusion", "Innovation"],
    emoji: "👨‍💻",
    featured: false,
    imageUrl: "https://imgur.com/ae7MWy5.jpg",
    altText: "Michael Odhiambo- Technology Entrepreneur"
  },
  {
    id: 5,
    name: "Victor Otieno",
    title: "Financial Strategist & Investment Advisor",
    role: "Board Member",
    bio: "With extensive experience in corporate finance and investment management, Mr. Otieno provides strategic financial guidance and ensures sustainable resource allocation for our organizational growth and program expansion.",
    expertise: ["Financial Strategy", "Investment Management", "Risk Assessment"],
    emoji: "💼",
    featured: false,
    imageUrl: "https://imgur.com/UxRYumO.jpg",
    altText: "Victor Otieno - Financial Strategist"
  },
  {
    id: 6,
    name: "Agiye Felix",
    title: "Education Policy Expert",
    role: "Board Member",
    bio: "An accomplished educator and policy expert, Mr. Agiye brings 18 years of experience in educational reform and curriculum development, ensuring our educational programs align with national standards and community needs.",
    expertise: ["Education Policy", "Curriculum Development", "Teacher Training"],
    emoji: "📚",
    featured: false,
    imageUrl: "https://imgur.com/pRwxAZu.jpg",
    altText: "Mr Agiye - Education Policy Expert"
  },
  {
    id: 7,
    name: "Joseph Orlale",
    title: "Legal Counsel & Governance Specialist",
    role: "Board Member",
    bio: "As a seasoned legal professional, Mr. Joseph ensures our organization maintains the highest standards of legal compliance and ethical governance while providing strategic counsel on regulatory matters and corporate governance.",
    expertise: ["Legal Compliance", "Corporate Governance", "Regulatory Affairs"],
    emoji: "⚖️",
    featured: false,
    imageUrl: "/images/board/michael-odhiambo.jpg",
    altText: "Joseph Orlale - Legal Counsel"
  }
];

export interface BoardResponsibility {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export const boardResponsibilities: BoardResponsibility[] = [
  {
    id: 1,
    title: "Strategic Direction",
    description: "Setting long-term vision and strategic priorities for the organization",
    icon: "🎯"
  },
  {
    id: 2,
    title: "Fiduciary Oversight",
    description: "Ensuring proper financial management and resource allocation",
    icon: "🛡️"
  },
  {
    id: 3,
    title: "Performance Monitoring",
    description: "Evaluating organizational performance and impact measurement",
    icon: "📈"
  },
  {
    id: 4,
    title: "Legal Compliance",
    description: "Ensuring adherence to legal requirements and ethical standards",
    icon: "⚖️"
  },
  {
    id: 5,
    title: "Stakeholder Representation",
    description: "Representing community interests and building strategic partnerships",
    icon: "🤝"
  },
  {
    id: 6,
    title: "Sustainability Assurance",
    description: "Ensuring long-term organizational sustainability and relevance",
    icon: "🌱"
  }
];