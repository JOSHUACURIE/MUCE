export interface Photo {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  album: string;
  date: string;
  tags: string[];
  featured: boolean;
  altText: string;
}

export interface Album {
  id: number;
  title: string;
  description: string;
  coverImage: string;
  photoCount: number;
  date: string;
  category: string;
  featured: boolean;
}

export interface Category {
  id: number;
  name: string;
  description: string;
  photoCount: number;
  coverImage: string;
}


export const photoCategories: Category[] = [
  {
    id: 1,
    name: "Education",
    description: "Classroom moments, learning activities, and educational events",
    photoCount: 120,
    coverImage: "https://imgur.com/Wmf0peo.jpg"
  },
  {
    id: 2,
    name: "Economic Empowerment",
    description: "Business training, entrepreneurship, and livelihood programs",
    photoCount: 85,
    coverImage: "https://imgur.com/yIUnpLG.jpg"
  },
  {
    id: 3,
    name: "Environment & Sustainability",
    description: "Conservation projects, tree planting, and clean energy initiatives",
    photoCount: 65,
    coverImage: "https://imgur.com/0hR9jCw.jpg"
  },
  {
    id: 4,
    name: "Community Events",
    description: "Festivals, meetings, and community gatherings",
    photoCount: 200,
    coverImage: "https://imgur.com/t6JG34b.jpg"
  },
  {
    id: 5,
    name: "Health & Wellness",
    description: "Medical camps, health education, and wellness programs",
    photoCount: 75,
    coverImage: "https://imgur.com/GdyAgXz.jpg"
  },
  {
    id: 6,
    name: "Youth Programs",
    description: "Youth empowerment, sports, and skill development",
    photoCount: 90,
    coverImage: "https://imgur.com/4XeWm6T.jpg"
  }
];


export const photoAlbums: Album[] = [
  {
    id: 1,
    title: "Annual Community Festival 2024",
    description: "Celebrating another year of community achievements and milestones",
    coverImage: "https://imgur.com/GdyAgXz.jpg",
    photoCount: 45,
    date: "2024-03-15",
    category: "Community Events",
    featured: true
  },
  {
    id: 2,
    title: "Education Transformation",
    description: "Documenting our educational initiatives and student success stories",
    coverImage: "https://imgur.com/uOOuZ4n.jpg",
    photoCount: 45,
    date: "2024-03-10",
    category: "Education",
    featured: false
  },
  {
    id: 3,
    title: "Women Empowerment",
    description: "Empowering women through skill development and entrepreneurship",
    coverImage: "https://imgur.com/J0jipYe.jpg",
    photoCount: 32,
    date: "2024-02-28",
    category: "Economic Empowerment",
    featured: false
  },
  {
    id: 4,
    title: "Green Communities",
    description: "Environmental conservation and sustainability projects",
    coverImage: "https://imgur.com/pSpeXgf.jpg",
    photoCount: 28,
    date: "2024-02-15",
    category: "Environment & Sustainability",
    featured: false
  },
  {
    id: 5,
    title: "Annual Events 2023",
    description: "Highlights from all major events throughout 2023",
    coverImage: "https://imgur.com/PqY2TVm.jpg",
    photoCount: 67,
    date: "2023-12-20",
    category: "Community Events",
    featured: false
  },
  {
    id: 6,
    title: "Digital Literacy Program",
    description: "Bridging the digital divide in our communities",
    coverImage: "https://imgur.com/SS9NyXW.jpg",
    photoCount: 38,
    date: "2024-01-25",
    category: "Education",
    featured: false
  }
];


export const photos: Photo[] = [


  {
    id: 2,
    title: "Classroom Learning",
    description: "Students engaged in interactive learning session with our volunteers",
    imageUrl: "https://imgur.com/yxtuJWT.jpg",
    category: "Education",
    album: "Education Transformation",
    date: "2024-03-08",
    tags: ["classroom", "learning", "students", "education"],
    featured: false,
    altText: "Students learning in classroom environment"
  },


 
  {
    id: 4,
    title: "Vocational Training Session",
    description: "Community members learning tailoring and fashion design skills",
    imageUrl: "https://imgur.com/iq76XbS.jpg",
    category: "Economic Empowerment",
    album: "Women Empowerment",
    date: "2024-02-25",
    tags: ["vocational", "training", "skills", "empowerment"],
    featured: false,
    altText: "Vocational training session for community members"
  },
 


  {
    id: 6,
    title: "Community Tree Planting",
    description: "Volunteers planting trees for environmental conservation",
    imageUrl: "https://imgur.com/ho5qaPr.jpg",
    category: "Environment & Sustainability",
    album: "Green Communities",
    date: "2024-02-12",
    tags: ["tree planting", "environment", "conservation", "volunteers"],
    featured: true,
    altText: "Community members planting trees together"
  },
  {
    id: 7,
    title: "Peer to Peer learning Workshops",
    description: "Demonstrating solar power solutions for rural households",
    imageUrl: "https://imgur.com/lPtfYfH.jpg",
    category: "Environment & Sustainability",
    album: "Green Communities",
    date: "2024-02-08",
    tags: ["solar", "clean energy", "workshop", "sustainability"],
    featured: false,
    altText: "Solar energy workshop demonstration"
  },

  
  {
    id: 8,
    title: "Cultural Festival Performance",
    description: "Traditional dancers performing at annual community festival",
    imageUrl: "https://imgur.com/3dp5xc7.jpg",
    category: "Community Events",
    album: "Annual Community Festival 2024",
    date: "2024-03-15",
    tags: ["festival", "culture", "performance", "celebration"],
    featured: true,
    altText: "Traditional dancers at community festival"
  },
  {
    id: 9,
    title: "Community Meeting",
    description: "Residents discussing community development projects",
    imageUrl: "https://imgur.com/uqSP2xp.jpg",
    category: "Community Events",
    album: "Annual Events 2023",
    date: "2023-11-10",
    tags: ["meeting", "discussion", "community", "planning"],
    featured: false,
    altText: "Community members in development meeting"
  },


  {
    id: 11,
    title: "Health Education Session",
    description: "Community health worker educating residents about preventive healthcare",
    imageUrl: "https://imgur.com/J0jipYe.jpg",
    category: "Health & Wellness",
    album: "Health Outreach 2024",
    date: "2024-02-16",
    tags: ["health education", "prevention", "wellness", "community"],
    featured: false,
    altText: "Health education session in progress"
  },

 
  {
    id: 12,
    title: "Youth Sports Tournament",
    description: "Young athletes competing in community sports tournament",
    imageUrl: "https://imgur.com/PqY2TVm.jpg",
    category: "Youth Programs",
    album: "Youth Development 2024",
    date: "2024-01-30",
    tags: ["sports", "youth", "tournament", "competition"],
    featured: true,
    altText: "Youth participating in sports tournament"
  },
  {
    id: 13,
    title: "Leadership Training",
    description: "Young leaders developing skills for community impact",
    imageUrl: "https://imgur.com/lPtfYfH.jpg",
    category: "Youth Programs",
    album: "Youth Development 2024",
    date: "2024-01-25",
    tags: ["leadership", "youth", "training", "development"],
    featured: false,
    altText: "Youth leadership training session"
  },
{
  id: 14,
  title: "Integenerational Dialogue on Youth Climate Action",
  description: "A panel discussion bringing together youth activists, environmental experts, and policymakers.",
  imageUrl: "https://imgur.com/ohuAlpS.jpg",
  category: "Events",
  album: "Climate Action Forum 2025",
  date: "2025-11-25",
  tags: ["climate change", "youth activism", "sustainability", "panel discussion", "environment"],
  featured: false,
  altText: "Panelists speaking at the Intergenerational Dialogue on Youth Climate Action event"
},
{
  "id": 15,
  "title": "Environmental Cleanup Dunga Hill Camp",
  "description": "A community-driven cleanup initiative at Dunga Hill Camp, bringing together volunteers to remove waste, restore natural habitats.",
  "imageUrl": "https://imgur.com/xmlhPIh.jpg",
  "category": "Events",
  "album": "Community Cleanup Projects",
  "date": "2025-11-26",
  "tags": ["cleanup drive", "community service", "environmental conservation", "waste management", "volunteerism"],
  "featured": false,
  "altText": "Volunteers collecting trash during the environmental cleanup at Dunga Hill Camp"
},
{
  "id": 16,
  "title": "Wisehub Biashara Pawa Youth Empowerment",
  "description": "A youth empowerment workshop focused on entrepreneurship, business skills, and financial literacy, equipping young people with practical tools to start and grow their own ventures.",
  "imageUrl": "https://imgur.com/5ckhkxk.jpg",
  "category": "Events",
  "album": "Youth Empowerment",
  "date": "2025-11-26",
  "tags": ["entrepreneurship", "youth empowerment", "financial literacy", "business skills", "startup training"],
  "featured": false,
  "altText": "Participants engaged in a Wisehub Biashara Pawa Youth Empowerment workshop session"
}
];


export const getFeaturedPhotos = (): Photo[] => {
  return photos.filter(photo => photo.featured);
};

export const getPhotosByCategory = (category: string): Photo[] => {
  return photos.filter(photo => photo.category === category);
};

export const getPhotosByAlbum = (album: string): Photo[] => {
  return photos.filter(photo => photo.album === album);
};

export const getRecentPhotos = (count: number = 12): Photo[] => {
  return photos
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
};

export const getAllCategories = (): string[] => {
  return [...new Set(photos.map(photo => photo.category))];
};