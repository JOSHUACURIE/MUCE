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
    CLEANING: "/work1.jpg" // Using first work image as cover
  },
  ALBUMS: {
    ENERGY: "/energy.jpg",
    CLASS: "/class.jpg",
    VOCATIONAL: "/vocational.jpg",
    TREE: "/tree.jpg",
    COMMUNITY: "/communit.jpg",
    LEADERS: "/leaders.jpg"
  },
  // Environment cleaning work images
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
    WORK13: "/work13.jpg"
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
        id: 2,
        imageUrl: IMAGE_PATHS.ALBUMS.CLASS,
        featured: false
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
        id: 3,
        imageUrl: IMAGE_PATHS.ALBUMS.VOCATIONAL,
        featured: false
      },
      {
        id: 4,
        imageUrl: IMAGE_PATHS.COVERS.WOMEN,
        featured: false
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
        id: 5,
        imageUrl: IMAGE_PATHS.ALBUMS.TREE,
        featured: true
      },
      {
        id: 6,
        imageUrl: IMAGE_PATHS.ALBUMS.ENERGY,
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
    images: []
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
        id: 7,
        imageUrl: IMAGE_PATHS.COVERS.SPORTS,
        featured: true
      },
      {
        id: 8,
        imageUrl: IMAGE_PATHS.ALBUMS.LEADERS,
        featured: false
      }
    ]
  },
  // NEW: Environment Cleaning Album
  {
    id: 7,
    title: "Community Environment Cleaning",
    coverImage: IMAGE_PATHS.COVERS.CLEANING,
    photoCount: 13,
    date: "2025-11-12",
    category: "Environment & Sustainability",
    featured: true,
    images: [
      {
        id: 9,
        imageUrl: IMAGE_PATHS.CLEANING.WORK1,
        featured: true
      },
      {
        id: 10,
        imageUrl: IMAGE_PATHS.CLEANING.WORK2,
        featured: false
      },
      {
        id: 11,
        imageUrl: IMAGE_PATHS.CLEANING.WORK3,
        featured: false
      },
      {
        id: 12,
        imageUrl: IMAGE_PATHS.CLEANING.WORK4,
        featured: false
      },
      {
        id: 13,
        imageUrl: IMAGE_PATHS.CLEANING.WORK5,
        featured: false
      },
      {
        id: 14,
        imageUrl: IMAGE_PATHS.CLEANING.WORK6,
        featured: false
      },
      {
        id: 15,
        imageUrl: IMAGE_PATHS.CLEANING.WORK7,
        featured: false
      },
      {
        id: 16,
        imageUrl: IMAGE_PATHS.CLEANING.WORK8,
        featured: false
      },
      {
        id: 17,
        imageUrl: IMAGE_PATHS.CLEANING.WORK9,
        featured: false
      },
      {
        id: 18,
        imageUrl: IMAGE_PATHS.CLEANING.WORK10,
        featured: false
      },
      {
        id: 19,
        imageUrl: IMAGE_PATHS.CLEANING.WORK11,
        featured: false
      },
      {
        id: 20,
        imageUrl: IMAGE_PATHS.CLEANING.WORK12,
        featured: false
      },
      {
        id: 21,
        imageUrl: IMAGE_PATHS.CLEANING.WORK13,
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
    "/annual.jpg",
    "/sing.jpg",
    "/health.jpg"
  ])
];

// Category cover images
export const categoryCoverImages = {
  "Education": "/classroom.jpg",
  "Economic Empowerment": "/economic.jpg",
  "Environment & Sustainability": "/environment.jpg",
  "Community Events": "/community.jpg",
  "Health & Wellness": "/health.jpg",
  "Youth Programs": "/yudhe.jpg"
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