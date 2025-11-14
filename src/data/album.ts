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
    MAZINGIRA: "https://imgur.com/TiPsWoC.jpg",
    TRANSFORMATION: "https://imgur.com/uOOuZ4n.jpg",
    WOMEN: "https://imgur.com/J0jipYe.jpg",
    GREEN: "https://imgur.com/pSpeXgf.jpg",
    SPORTS: "https://imgur.com/PqY2TVm.jpg",
    DIGITAL: "https://imgur.com/SS9NyXW.jpg",
    CLEANING: "https://imgur.com/eGt9Kqv.jpg"
  },
  ALBUMS: {
    ENERGY: "https://imgur.com/lPtfYfH.jpg",
    CLASS: "https://imgur.com/yxtuJWT.jpg",
    VOCATIONAL: "https://imgur.com/iq76XbS.jpg",
    TREE: "https://imgur.com/ho5qaPr.jpg",
    COMMUNITY: "https://imgur.com/TJuwh3J.jpg",
    LEADERS: "https://imgur.com/rDHYb9Y.jpg"
  },

  CLEANING: {
    WORK1: "https://imgur.com/eGt9Kqv.jpg",
    WORK2: "https://imgur.com/aNFFWhb.jpg",
    WORK3: "https://imgur.com/dN33KQc.jpg",
    WORK4: "https://imgur.com/7AwvxYS.jpg",
    WORK5: "https://imgur.com/YL7IKdR.jpg",
    WORK6: "https://imgur.com/YL7IKdR.jpg",
    WORK7: "https://imgur.com/ltT1IhX.jpg",
    WORK8: "https://imgur.com/wQ1IKso.jpg",
    WORK9: "https://imgur.com/5qS5MMa.jpg",
    WORK10: "https://imgur.com/TelkQ2y.jpg",
    WORK11: "https://imgur.com/KZiaX0d.jpg",
    WORK12: "https://imgur.com/YzSw6nV.jpg",
    WORK13: "https://imgur.com/M4TStqy.jpg",
    WORK14: "https://imgur.com/Az1F2lX.jpg",
    WORK15: "https://imgur.com/uB3dZl1.jpg",
    WORK16: "https://imgur.com/YCJcvJw.jpg",
    WORK17: "https://imgur.com/K0P0Hr5.jpg",
    WORK18: "https://imgur.com/NMiuWrl.jpg",
    WORK19: "https://imgur.com/yF8BSoL.jpg",
    WORK20: "https://imgur.com/4BB5EhB.jpg",
    WORK21: "https://imgur.com/PbjMwUY.jpg",
    WORK22: "https://imgur.com/ExgBZwZ.jpg",
    WORK23: "https://imgur.com/NwHWlTj.jpg",
    WORK24: "https://imgur.com/m45N27S.jpg",
    WORK25: "https://imgur.com/X4R53vN.jpg",
    WORK26: "https://imgur.com/y3dJ5Aj.jpg",
    WORK27: "https://imgur.com/RV9eTRF.jpg",
    WORK28: "https://imgur.com/Etw6ikq.jpg",
    WORK29: "https://imgur.com/kpND1mt.jpg",
    WORK30: "https://imgur.com/cO5VBTM.jpg",
    WORK31: "https://imgur.com/4oJMKcm.jpg",
    WORK32: "https://imgur.com/OawI4Ic.jpg",
    WORK33: "https://imgur.com/g7QSKP6.jpg",
    WORK34: "https://imgur.com/dBH8OKH.jpg",
    WORK35: "https://imgur.com/Wtf9orq.jpg",
    WORK36: "https://imgur.com/jK9P2bN.jpg",
 
    WORK37: "https://imgur.com/bJg8TBq.jpg",
    WORK38: "https://imgur.com/FW2VZYV.jpg",
    WORK39: "https://imgur.com/AvMlnvY.jpg",
    WORK40: "https://imgur.com/cADN6xw.jpg",
    WORK41: "https://imgur.com/mvPkydv.jpg",
    WORK42: "https://imgur.com/fK98KOJ.jpg",
    WORK43: "https://imgur.com/m2tbZ4k.jpg",
    WORK44: "https://imgur.com/LgJ7C6e.jpg",
    WORK45: "https://imgur.com/o958dop.jpg",
    WORK46: "https://imgur.com/VVQEA0n.jpg",
    WORK47: "https://imgur.com/ctzwjI2.jpg",
    WORK48: "https://imgur.com/ZzY47QF.jpg",
    WORK49: "https://imgur.com/OyIFvvo.jpg",
    WORK50: "https://imgur.com/ZnywZ4C.jpg",
    WORK51: "https://imgur.com/gWcS7uD.jpg",
    WORK52: "https://imgur.com/OmWQdZB.jpg",
    WORK53: "https://imgur.com/LdOEd6L.jpg",
    WORK54: "https://imgur.com/rP0kHqn.jpg",
    WORK55: "https://imgur.com/lgv8DsK.jpg",
    WORK56: "https://imgur.com/RGZagUx.jpg",
    WORK57: "https://imgur.com/vWDXvAY.jpg",
    WORK58: "https://imgur.com/SCdhJpN.jpg",
    WORK59: "https://imgur.com/9oxLS2V.jpg",
    WORK60: "https://imgur.com/pvHcuaJ.jpg",
    WORK61: "https://imgur.com/isTjluU.jpg",
    WORK62: "https://imgur.com/mLqe9UT.jpg",
    WORK63: "https://imgur.com/nyaQ65A.jpg",
    WORK64: "https://imgur.com/KVbeoIW.jpg",
    WORK65: "https://imgur.com/LaOmHxV5.jpg",
    WORK66: "https://imgur.com/r0i0pcT.jpg",
    WORK67: "https://imgur.com/Hk0U6WO.jpg",
    WORK68: "https://imgur.com/jPGlC9z.jpg",
    WORK69: "https://imgur.com/UD0WZPu.jpg",
    WORK70: "https://imgur.com/gh6qDQV.jpg",
    WORK71: "https://imgur.com/u7GfpHa.jpg",
    WORK72: "https://imgur.com/S9k8Hzp.jpg"
  },

  ADDITIONAL: {
    ANNUAL: "https://imgur.com/GdyAgXz.jpg",
    SING: "https://imgur.com/V6pLctm.jpg",
    HEALTH: "https://imgur.com/V6pLctm.jpg",
    CLASSROOM: "https://imgur.com/Wmf0peo.jpg",
    ECONOMIC: "https://imgur.com/yIUnpLG.jpg",
    ENVIRONMENT: "https://imgur.com/0hR9jCw.jpg",
    COMMUNITY_EVENTS: "https://imgur.com/t6JG34b.jpg",
    YOUTH: "https://imgur.com/4XeWm6T.jpg"
  }
} as const;


const generateCleaningImages = (): AlbumImage[] => {
  const images: AlbumImage[] = [];
  let id = 17; 
  

  for (let i = 1; i <= 72; i++) {
    images.push({
      id: id++,
      imageUrl: IMAGE_PATHS.CLEANING[`WORK${i}` as keyof typeof IMAGE_PATHS.CLEANING],
      featured: i === 1 
    });
  }
  
  return images;
};


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
 
  {
    id: 7,
    title: "Community Environment Cleaning",
    coverImage: IMAGE_PATHS.COVERS.CLEANING,
    photoCount: 72, 
    date: "2025-11-12",
    category: "Environment & Sustainability",
    featured: true,
    images: generateCleaningImages()
  },

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
        id: 89, 
        imageUrl: IMAGE_PATHS.ADDITIONAL.HEALTH,
        featured: true
      },
      {
        id: 90,
        imageUrl: IMAGE_PATHS.ADDITIONAL.COMMUNITY_EVENTS,
        featured: false
      }
    ]
  },

  {
    id: 9,
    title: "Tree Planting Initiative 2024",
    coverImage: IMAGE_PATHS.ALBUMS.TREE,
    photoCount: 18,
    date: "2024-04-05",
    category: "Environment & Sustainability",
    featured: false,
    images: [
      {
        id: 91,
        imageUrl: IMAGE_PATHS.ALBUMS.TREE,
        featured: true
      },
      {
        id: 92,
        imageUrl: IMAGE_PATHS.CLEANING.WORK1,
        featured: false
      }
    ]
  },
  
];


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


export const allImageFiles: string[] = [
  ...new Set([
    ...Object.values(IMAGE_PATHS.COVERS),
    ...Object.values(IMAGE_PATHS.ALBUMS),
    ...Object.values(IMAGE_PATHS.CLEANING),
    ...Object.values(IMAGE_PATHS.ADDITIONAL)
  ])
];


export const categoryCoverImages = {
  "Education": IMAGE_PATHS.ADDITIONAL.CLASSROOM,
  "Economic Empowerment": IMAGE_PATHS.ADDITIONAL.ECONOMIC,
  "Environment & Sustainability": IMAGE_PATHS.ADDITIONAL.ENVIRONMENT,
  "Community Events": IMAGE_PATHS.ADDITIONAL.COMMUNITY_EVENTS,
  "Health & Wellness": IMAGE_PATHS.ADDITIONAL.HEALTH,
  "Youth Programs": IMAGE_PATHS.ADDITIONAL.YOUTH
};


export const getEnvironmentCleaningImages = (): AlbumImage[] => {
  const cleaningAlbum = albums.find(album => album.id === 7);
  return cleaningAlbum?.images || [];
};


export const getFeaturedAlbumsWithCleaning = (): Album[] => 
  albums.filter(album => album.featured);


export const getEnvironmentAlbums = (): Album[] => 
  albums.filter(album => album.category === "Environment & Sustainability");


export const getTotalPhotoCount = (): number => 
  albums.reduce((total, album) => total + album.photoCount, 0);


export const getAlbumsByDateRange = (startDate: string, endDate: string): Album[] => 
  albums.filter(album => album.date >= startDate && album.date <= endDate);


export const getUniqueCategories = (): string[] => 
  [...new Set(albums.map(album => album.category))];


export const getRandomFeaturedImage = (): string => {
  const featuredImages = albums.flatMap(album => 
    album.images.filter(img => img.featured).map(img => img.imageUrl)
  );
  return featuredImages[Math.floor(Math.random() * featuredImages.length)] || IMAGE_PATHS.COVERS.MAZINGIRA;
};


export const getImageById = (imageId: number): AlbumImage | undefined => {
  for (const album of albums) {
    const image = album.images.find(img => img.id === imageId);
    if (image) return image;
  }
  return undefined;
};


export const getCleaningImagesCount = (): number => {
  const cleaningAlbum = albums.find(album => album.id === 7);
  return cleaningAlbum?.images.length || 0;
};


export const getAlbumsWithMostImages = (count: number = 5): Album[] => 
  [...albums]
    .sort((a, b) => b.images.length - a.images.length)
    .slice(0, count);


export const searchAlbums = (query: string): Album[] => 
  albums.filter(album => 
    album.title.toLowerCase().includes(query.toLowerCase())
  );


export const getImagesByCategory = (category: string): AlbumImage[] => 
  albums
    .filter(album => album.category === category)
    .flatMap(album => album.images);


export const getTotalUniqueImagesCount = (): number => 
  new Set(albums.flatMap(album => album.images.map(img => img.imageUrl))).size;