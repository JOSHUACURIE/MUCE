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

// Photo Categories
export const photoCategories: Category[] = [
  {
    id: 1,
    name: "Education",
    description: "Classroom moments, learning activities, and educational events",
    photoCount: 120,
    coverImage: "/classroom.jpg"
  },
  {
    id: 2,
    name: "Economic Empowerment",
    description: "Business training, entrepreneurship, and livelihood programs",
    photoCount: 85,
    coverImage: "/economic.jpg"
  },
  {
    id: 3,
    name: "Environment & Sustainability",
    description: "Conservation projects, tree planting, and clean energy initiatives",
    photoCount: 65,
    coverImage: "/environment.jpg"
  },
  {
    id: 4,
    name: "Community Events",
    description: "Festivals, meetings, and community gatherings",
    photoCount: 200,
    coverImage: "/community.jpg"
  },
  {
    id: 5,
    name: "Health & Wellness",
    description: "Medical camps, health education, and wellness programs",
    photoCount: 75,
    coverImage: "/health.jpg"
  },
  {
    id: 6,
    name: "Youth Programs",
    description: "Youth empowerment, sports, and skill development",
    photoCount: 90,
    coverImage: "/yudhe.jpg"
  }
];

// Photo Albums
export const photoAlbums: Album[] = [
  {
    id: 1,
    title: "Annual Community Festival 2024",
    description: "Celebrating another year of community achievements and milestones",
    coverImage: "/annual.jpg",
    photoCount: 45,
    date: "2024-03-15",
    category: "Community Events",
    featured: true
  },
  {
    id: 2,
    title: "Education Transformation",
    description: "Documenting our educational initiatives and student success stories",
    coverImage: "/transformation.jpg",
    photoCount: 45,
    date: "2024-03-10",
    category: "Education",
    featured: false
  },
  {
    id: 3,
    title: "Women Empowerment",
    description: "Empowering women through skill development and entrepreneurship",
    coverImage: "/women.jpg",
    photoCount: 32,
    date: "2024-02-28",
    category: "Economic Empowerment",
    featured: false
  },
  {
    id: 4,
    title: "Green Communities",
    description: "Environmental conservation and sustainability projects",
    coverImage: "/green.jpg",
    photoCount: 28,
    date: "2024-02-15",
    category: "Environment & Sustainability",
    featured: false
  },
  {
    id: 5,
    title: "Annual Events 2023",
    description: "Highlights from all major events throughout 2023",
    coverImage: "/sports.jpg",
    photoCount: 67,
    date: "2023-12-20",
    category: "Community Events",
    featured: false
  },
  {
    id: 6,
    title: "Digital Literacy Program",
    description: "Bridging the digital divide in our communities",
    coverImage: "/digital.jpg",
    photoCount: 38,
    date: "2024-01-25",
    category: "Education",
    featured: false
  }
];

// Sample Photos Data (You can expand this to 100+ images)
export const photos: Photo[] = [
  // Education Category

  {
    id: 2,
    title: "Classroom Learning",
    description: "Students engaged in interactive learning session with our volunteers",
    imageUrl: "/class.jpg",
    category: "Education",
    album: "Education Transformation",
    date: "2024-03-08",
    tags: ["classroom", "learning", "students", "education"],
    featured: false,
    altText: "Students learning in classroom environment"
  },


  // Economic Empowerment Category
  {
    id: 4,
    title: "Vocational Training Session",
    description: "Community members learning tailoring and fashion design skills",
    imageUrl: "/vocational.jpg",
    category: "Economic Empowerment",
    album: "Women Empowerment",
    date: "2024-02-25",
    tags: ["vocational", "training", "skills", "empowerment"],
    featured: false,
    altText: "Vocational training session for community members"
  },
 

  // Environment & Sustainability Category
  {
    id: 6,
    title: "Community Tree Planting",
    description: "Volunteers planting trees for environmental conservation",
    imageUrl: "/tree.jpg",
    category: "Environment & Sustainability",
    album: "Green Communities",
    date: "2024-02-12",
    tags: ["tree planting", "environment", "conservation", "volunteers"],
    featured: true,
    altText: "Community members planting trees together"
  },
  {
    id: 7,
    title: "Clean Energy Workshop",
    description: "Demonstrating solar power solutions for rural households",
    imageUrl: "/energy.jpg",
    category: "Environment & Sustainability",
    album: "Green Communities",
    date: "2024-02-08",
    tags: ["solar", "clean energy", "workshop", "sustainability"],
    featured: false,
    altText: "Solar energy workshop demonstration"
  },

  // Community Events Category
  {
    id: 8,
    title: "Cultural Festival Performance",
    description: "Traditional dancers performing at annual community festival",
    imageUrl: "/sing.jpg",
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
    imageUrl: "/communit.jpg",
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
    imageUrl: "/women.jpg",
    category: "Health & Wellness",
    album: "Health Outreach 2024",
    date: "2024-02-16",
    tags: ["health education", "prevention", "wellness", "community"],
    featured: false,
    altText: "Health education session in progress"
  },

  // Youth Programs Category
  {
    id: 12,
    title: "Youth Sports Tournament",
    description: "Young athletes competing in community sports tournament",
    imageUrl: "/sports.jpg",
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
    imageUrl: "/leaders.jpg",
    category: "Youth Programs",
    album: "Youth Development 2024",
    date: "2024-01-25",
    tags: ["leadership", "youth", "training", "development"],
    featured: false,
    altText: "Youth leadership training session"
  }

  // Continue adding more photos here up to 100+
  // You can organize them by category and album
];

// Helper functions
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