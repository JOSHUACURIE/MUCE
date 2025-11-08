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
    DIGITAL: "/digital.jpg"
  },
  ALBUMS: {
    ENERGY: "/energy.jpg",
    CLASS: "/class.jpg",
    VOCATIONAL: "/vocational.jpg",
    TREE: "/tree.jpg",
    COMMUNITY: "/communit.jpg",
    LEADERS: "/leaders.jpg"
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