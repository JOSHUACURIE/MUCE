export interface AlbumImage {
  id: number;
  imageUrl: string;
  featured: boolean;
}

export interface Album {
  id: number;
  title: string;
  coverImage: string;
  photoCount: number;
  date: string;
  category: string;
  featured: boolean;
  images: AlbumImage[];
}

// Common image paths
const IMAGE_PATHS = {
  COVERS: {
    MAZINGIRA: "/mazingira.jpg",
    TRANSFORMATION: "/transformation.jpg",
    WOMEN: "/women.jpg",
    GREEN: "/green.jpg",
    SPORTS: "/sports.jpg",
    DIGITAL: "/digital.jpg",
    CLEANING: "/work1.jpg"
  },
  ALBUMS: {
    ENERGY: "/energy.jpg",
    CLASS: "/class.jpg",
    VOCATIONAL: "/vocational.jpg",
    TREE: "/tree.jpg",
    COMMUNITY: "/communit.jpg",
    LEADERS: "/leaders.jpg"
  },
  // Environment cleaning work images - all 36 images
  CLEANING: {
    WORK1: "/work1.jpg",
    WORK2: "/work2.jpg",
    WORK3: "/work3.jpg",
    WORK4: "/work4.jpg",
    WORK5: "/work5.jpg",
    WORK6: "/work6.jpg",
    WORK7: "/work7.jpg",
    WORK8: "/work8.jpg",
    WORK9: "/work9.jpg",
    WORK10: "/work10.jpg",
    WORK11: "/work11.jpg",
    WORK12: "/work12.jpg",
    WORK13: "/work13.jpg",
    WORK14: "/work14.jpg",
    WORK15: "/work15.jpg",
    WORK16: "/work16.jpg",
    WORK17: "/work17.jpg",
    WORK18: "/work18.jpg",
    WORK19: "/work19.jpg",
    WORK20: "/work20.jpg",
    WORK21: "/work21.jpg",
    WORK22: "/work22.jpg",
    WORK23: "/work23.jpg",
    WORK24: "/work24.jpg",
    WORK25: "/work25.jpg",
    WORK26: "/work26.jpg",
    WORK27: "/work27.jpg",
    WORK28: "/work28.jpg",
    WORK29: "/work29.jpg",
    WORK30: "/work30.jpg",
    WORK31: "/work31.jpg",
    WORK32: "/work32.jpg",
    WORK33: "/work33.jpg",
    WORK34: "/work34.jpg",
    WORK35: "/work35.jpg",
    WORK36: "/work36.jpg"
  },
  // Additional images
  ADDITIONAL: {
    ANNUAL: "/annual.jpg",
    SING: "/sing.jpg",
    HEALTH: "/health.jpg",
    CLASSROOM: "/classroom.jpg",
    ECONOMIC: "/economic.jpg",
    ENVIRONMENT: "/environment.jpg",
    COMMUNITY_EVENTS: "/community.jpg",
    YOUTH: "/yudhe.jpg"
  }
} as const;

// Fixed album data with unique IDs and proper mappings
export const albums: Album[] = [
  {
    id: 1,
    title: "Annual Community Festival 2024",
    coverImage: IMAGE_PATHS.COVERS.MAZINGIRA,
    photoCount: 45,
    date: "2024-03-15",
    category: "Community Events",
    featured: true,
    images: [
      {
        id: 1,
        imageUrl: IMAGE_PATHS.ALBUMS.ENERGY,
        featured: true
      },
      {
        id: 2,
        imageUrl: IMAGE_PATHS.ADDITIONAL.ANNUAL,
        featured: false
      },
      {
        id: 3,
        imageUrl: IMAGE_PATHS.ADDITIONAL.SING,
        featured: false
      }
    ]
  },
  {
    id: 2,
    title: "Education Transformation",
    coverImage: IMAGE_PATHS.COVERS.TRANSFORMATION,
    photoCount: 45,
    date: "2024-03-10",
    category: "Education",
    featured: false,
    images: [
      {
        id: 4,
        imageUrl: IMAGE_PATHS.ALBUMS.CLASS,
        featured: false
      },
      {
        id: 5,
        imageUrl: IMAGE_PATHS.ADDITIONAL.CLASSROOM,
        featured: true
      }
    ]
  },
  {
    id: 3,
    title: "Women Empowerment",
    coverImage: IMAGE_PATHS.COVERS.WOMEN,
    photoCount: 32,
    date: "2024-02-28",
    category: "Economic Empowerment",
    featured: false,
    images: [
      {
        id: 6,
        imageUrl: IMAGE_PATHS.ALBUMS.VOCATIONAL,
        featured: false
      },
      {
        id: 7,
        imageUrl: IMAGE_PATHS.COVERS.WOMEN,
        featured: false
      },
      {
        id: 8,
        imageUrl: IMAGE_PATHS.ADDITIONAL.ECONOMIC,
        featured: true
      }
    ]
  },
  {
    id: 4,
    title: "Green Communities",
    coverImage: IMAGE_PATHS.COVERS.GREEN,
    photoCount: 28,
    date: "2024-02-15",
    category: "Environment & Sustainability",
    featured: false,
    images: [
      {
        id: 9,
        imageUrl: IMAGE_PATHS.ALBUMS.TREE,
        featured: true
      },
      {
        id: 10,
        imageUrl: IMAGE_PATHS.ALBUMS.ENERGY,
        featured: false
      },
      {
        id: 11,
        imageUrl: IMAGE_PATHS.ADDITIONAL.ENVIRONMENT,
        featured: false
      }
    ]
  },
  {
    id: 5,
    title: "Digital Literacy Program",
    coverImage: IMAGE_PATHS.COVERS.DIGITAL,
    photoCount: 38,
    date: "2024-01-25",
    category: "Education",
    featured: false,
    images: [
      {
        id: 12,
        imageUrl: IMAGE_PATHS.COVERS.DIGITAL,
        featured: true
      },
      {
        id: 13,
        imageUrl: IMAGE_PATHS.ALBUMS.CLASS,
        featured: false
      }
    ]
  },
  {
    id: 6,
    title: "Youth Development 2024",
    coverImage: IMAGE_PATHS.COVERS.SPORTS,
    photoCount: 25,
    date: "2024-01-30",
    category: "Youth Programs",
    featured: false,
    images: [
      {
        id: 14,
        imageUrl: IMAGE_PATHS.COVERS.SPORTS,
        featured: true
      },
      {
        id: 15,
        imageUrl: IMAGE_PATHS.ALBUMS.LEADERS,
        featured: false
      },
      {
        id: 16,
        imageUrl: IMAGE_PATHS.ADDITIONAL.YOUTH,
        featured: false
      }
    ]
  },
  // NEW: Environment Cleaning Album with ALL 36 images
  {
    id: 7,
    title: "Community Environment Cleaning",
    coverImage: IMAGE_PATHS.COVERS.CLEANING,
    photoCount: 36, // Updated to reflect all 36 images
    date: "2025-11-12",
    category: "Environment & Sustainability",
    featured: true,
    images: [
      {
        id: 17,
        imageUrl: IMAGE_PATHS.CLEANING.WORK1,
        featured: true
      },
      {
        id: 18,
        imageUrl: IMAGE_PATHS.CLEANING.WORK2,
        featured: false
      },
      {
        id: 19,
        imageUrl: IMAGE_PATHS.CLEANING.WORK3,
        featured: false
      },
      {
        id: 20,
        imageUrl: IMAGE_PATHS.CLEANING.WORK4,
        featured: false
      },
      {
        id: 21,
        imageUrl: IMAGE_PATHS.CLEANING.WORK5,
        featured: false
      },
      {
        id: 22,
        imageUrl: IMAGE_PATHS.CLEANING.WORK6,
        featured: false
      },
      {
        id: 23,
        imageUrl: IMAGE_PATHS.CLEANING.WORK7,
        featured: false
      },
      {
        id: 24,
        imageUrl: IMAGE_PATHS.CLEANING.WORK8,
        featured: false
      },
      {
        id: 25,
        imageUrl: IMAGE_PATHS.CLEANING.WORK9,
        featured: false
      },
      {
        id: 26,
        imageUrl: IMAGE_PATHS.CLEANING.WORK10,
        featured: false
      },
      {
        id: 27,
        imageUrl: IMAGE_PATHS.CLEANING.WORK11,
        featured: false
      },
      {
        id: 28,
        imageUrl: IMAGE_PATHS.CLEANING.WORK12,
        featured: false
      },
      {
        id: 29,
        imageUrl: IMAGE_PATHS.CLEANING.WORK13,
        featured: false
      },
      {
        id: 30,
        imageUrl: IMAGE_PATHS.CLEANING.WORK14,
        featured: false
      },
      {
        id: 31,
        imageUrl: IMAGE_PATHS.CLEANING.WORK15,
        featured: false
      },
      {
        id: 32,
        imageUrl: IMAGE_PATHS.CLEANING.WORK16,
        featured: false
      },
      {
        id: 33,
        imageUrl: IMAGE_PATHS.CLEANING.WORK17,
        featured: false
      },
      {
        id: 34,
        imageUrl: IMAGE_PATHS.CLEANING.WORK18,
        featured: false
      },
      {
        id: 35,
        imageUrl: IMAGE_PATHS.CLEANING.WORK19,
        featured: false
      },
      {
        id: 36,
        imageUrl: IMAGE_PATHS.CLEANING.WORK20,
        featured: false
      },
      {
        id: 37,
        imageUrl: IMAGE_PATHS.CLEANING.WORK21,
        featured: false
      },
      {
        id: 38,
        imageUrl: IMAGE_PATHS.CLEANING.WORK22,
        featured: false
      },
      {
        id: 39,
        imageUrl: IMAGE_PATHS.CLEANING.WORK23,
        featured: false
      },
      {
        id: 40,
        imageUrl: IMAGE_PATHS.CLEANING.WORK24,
        featured: false
      },
      {
        id: 41,
        imageUrl: IMAGE_PATHS.CLEANING.WORK25,
        featured: false
      },
      {
        id: 42,
        imageUrl: IMAGE_PATHS.CLEANING.WORK26,
        featured: false
      },
      {
        id: 43,
        imageUrl: IMAGE_PATHS.CLEANING.WORK27,
        featured: false
      },
      {
        id: 44,
        imageUrl: IMAGE_PATHS.CLEANING.WORK28,
        featured: false
      },
      {
        id: 45,
        imageUrl: IMAGE_PATHS.CLEANING.WORK29,
        featured: false
      },
      {
        id: 46,
        imageUrl: IMAGE_PATHS.CLEANING.WORK30,
        featured: false
      },
      {
        id: 47,
        imageUrl: IMAGE_PATHS.CLEANING.WORK31,
        featured: false
      },
      {
        id: 48,
        imageUrl: IMAGE_PATHS.CLEANING.WORK32,
        featured: false
      },
      {
        id: 49,
        imageUrl: IMAGE_PATHS.CLEANING.WORK33,
        featured: false
      },
      {
        id: 50,
        imageUrl: IMAGE_PATHS.CLEANING.WORK34,
        featured: false
      },
      {
        id: 51,
        imageUrl: IMAGE_PATHS.CLEANING.WORK35,
        featured: false
      },
      {
        id: 52,
        imageUrl: IMAGE_PATHS.CLEANING.WORK36,
        featured: false
      }
    ]
  },
  // Additional album for Community Events
  {
    id: 8,
    title: "Community Health & Wellness",
    coverImage: IMAGE_PATHS.ADDITIONAL.HEALTH,
    photoCount: 22,
    date: "2024-02-10",
    category: "Health & Wellness",
    featured: false,
    images: [
      {
        id: 53,
        imageUrl: IMAGE_PATHS.ADDITIONAL.HEALTH,
        featured: true
      },
      {
        id: 54,
        imageUrl: IMAGE_PATHS.ADDITIONAL.COMMUNITY_EVENTS,
        featured: false
      }
    ]
  }
];

// Helper functions
export const getFeaturedAlbums = (): Album[] => albums.filter(album => album.featured);

export const getAlbumsByCategory = (category: string): Album[] => 
  albums.filter(album => album.category === category);

export const getAlbumById = (id: number): Album | undefined => 
  albums.find(album => album.id === id);

export const getAlbumImages = (albumId: number): AlbumImage[] => 
  getAlbumById(albumId)?.images || [];

export const getAllAlbumImages = (): AlbumImage[] => 
  albums.flatMap(album => album.images);

export const getRecentAlbums = (count: number = 6): Album[] => 
  [...albums]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);

// Extract all unique image file names
export const allImageFiles: string[] = [
  ...new Set([
    ...Object.values(IMAGE_PATHS.COVERS),
    ...Object.values(IMAGE_PATHS.ALBUMS),
    ...Object.values(IMAGE_PATHS.CLEANING),
    ...Object.values(IMAGE_PATHS.ADDITIONAL)
  ])
];

// Category cover images
export const categoryCoverImages = {
  "Education": IMAGE_PATHS.ADDITIONAL.CLASSROOM,
  "Economic Empowerment": IMAGE_PATHS.ADDITIONAL.ECONOMIC,
  "Environment & Sustainability": IMAGE_PATHS.ADDITIONAL.ENVIRONMENT,
  "Community Events": IMAGE_PATHS.ADDITIONAL.COMMUNITY_EVENTS,
  "Health & Wellness": IMAGE_PATHS.ADDITIONAL.HEALTH,
  "Youth Programs": IMAGE_PATHS.ADDITIONAL.YOUTH
};

// NEW: Get environment cleaning images specifically
export const getEnvironmentCleaningImages = (): AlbumImage[] => {
  const cleaningAlbum = albums.find(album => album.id === 7);
  return cleaningAlbum?.images || [];
};

// NEW: Get albums by featured status with environment cleaning
export const getFeaturedAlbumsWithCleaning = (): Album[] => 
  albums.filter(album => album.featured);

// NEW: Get all environment-related albums
export const getEnvironmentAlbums = (): Album[] => 
  albums.filter(album => album.category === "Environment & Sustainability");

// NEW: Get total photo count across all albums
export const getTotalPhotoCount = (): number => 
  albums.reduce((total, album) => total + album.photoCount, 0);

// NEW: Get albums by date range
export const getAlbumsByDateRange = (startDate: string, endDate: string): Album[] => 
  albums.filter(album => album.date >= startDate && album.date <= endDate);

// NEW: Get unique categories
export const getUniqueCategories = (): string[] => 
  [...new Set(albums.map(album => album.category))];

// NEW: Get random featured image
export const getRandomFeaturedImage = (): string => {
  const featuredImages = albums.flatMap(album => 
    album.images.filter(img => img.featured).map(img => img.imageUrl)
  );
  return featuredImages[Math.floor(Math.random() * featuredImages.length)] || IMAGE_PATHS.COVERS.MAZINGIRA;
};

// NEW: Get image by ID
export const getImageById = (imageId: number): AlbumImage | undefined => {
  for (const album of albums) {
    const image = album.images.find(img => img.id === imageId);
    if (image) return image;
  }
  return undefined;
};