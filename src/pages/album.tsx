import React, { useState, useEffect, useCallback, useMemo } from 'react';
import './album.css';
import { albums, getFeaturedAlbums, getRecentAlbums, type Album, type AlbumImage } from '../data/album';

const CONFIG = {
  IMAGES_PER_PAGE: 12,
  LAZY_LOAD_THRESHOLD: 100,
} as const;

// Lazy loading image component
interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  onLoad?: () => void;
  onError?: () => void;
}

const LazyImage: React.FC<LazyImageProps> = ({ 
  src, 
  alt, 
  className = '', 
  onLoad,
  onError 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = React.useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { 
        rootMargin: `${CONFIG.LAZY_LOAD_THRESHOLD}px`,
        threshold: 0.1
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  return (
    <img
      ref={imgRef}
      src={isInView ? src : 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmM2YzIi8+PC9zdmc+'}
      alt={alt}
      className={`${className} ${isLoaded ? 'image-loaded' : 'image-loading'}`}
      loading="lazy"
      onLoad={handleLoad}
      onError={onError}
    />
  );
};

// Pagination Hook
const usePagination = <T,>(items: T[], itemsPerPage: number) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(items.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedItems = items.slice(startIndex, startIndex + itemsPerPage);

  const goToPage = (page: number) => {
    setCurrentPage(Math.max(1, Math.min(page, totalPages)));
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const resetPagination = () => {
    setCurrentPage(1);
  };

  return {
    currentPage,
    totalPages,
    paginatedItems,
    goToPage,
    nextPage,
    prevPage,
    resetPagination,
    hasNextPage: currentPage < totalPages,
    hasPrevPage: currentPage > 1,
  };
};

// Image Viewer Component
interface ImageViewerProps {
  images: AlbumImage[];
  initialIndex: number;
  albumTitle: string;
  onClose: () => void;
}

const ImageViewer: React.FC<ImageViewerProps> = ({ images, initialIndex, albumTitle, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const currentImage = images[currentIndex];

  const handleNext = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose();
    if (e.key === 'ArrowRight') handleNext();
    if (e.key === 'ArrowLeft') handlePrevious();
  }, [onClose, handleNext, handlePrevious]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [handleKeyDown]);

  if (!currentImage) return null;

  return (
    <div className="image-viewer-overlay" onClick={onClose}>
      <div className="image-viewer-container" onClick={(e) => e.stopPropagation()}>
        <div className="image-viewer-header">
          <h3>{albumTitle}</h3>
          <span className="image-counter">
            {currentIndex + 1} / {images.length}
          </span>
          <button className="close-button" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="image-viewer-content">
          <button 
            className="nav-button prev-button"
            onClick={handlePrevious}
            disabled={currentIndex === 0}
          >
            ‹
          </button>

          <div className="image-container">
            <LazyImage
              src={currentImage.imageUrl}
              alt={`${albumTitle} - Image ${currentIndex + 1}`}
              className="viewer-image"
            />
          </div>

          <button 
            className="nav-button next-button"
            onClick={handleNext}
            disabled={currentIndex === images.length - 1}
          >
            ›
          </button>
        </div>

        <div className="thumbnail-container">
          {images.map((image, index) => (
            <div
              key={image.id}
              className={`thumbnail ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            >
              <LazyImage
                src={image.imageUrl}
                alt={`Thumbnail ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Album Card Component
interface AlbumCardProps {
  album: Album;
  onViewAlbum: (albumId: number, imageIndex?: number) => void;
}

const AlbumCard: React.FC<AlbumCardProps> = React.memo(({ album, onViewAlbum }) => {
  return (
    <div className="album-card">
      <div className="album-cover">
        <LazyImage
          src={album.coverImage}
          alt={`Cover for ${album.title}`}
          className="album-cover-image"
        />
        <div className="album-overlay">
          <div className="album-actions">
            <button 
              className="view-album-btn"
              onClick={() => onViewAlbum(album.id)}
            >
              {album.images.length > 0 ? `View Album (${album.images.length})` : 'No Images'}
            </button>
          </div>
        </div>
      </div>
      <div className="album-details">
        <h3>{album.title}</h3>
        <div className="album-meta">
          <span className="album-category">{album.category}</span>
          <span className="album-date">
            {new Date(album.date).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'short', 
              day: 'numeric' 
            })}
          </span>
        </div>
       
      </div>
    </div>
  );
});

AlbumCard.displayName = 'AlbumCard';

// Main Album Gallery Component
const AlbumGallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedAlbum, setSelectedAlbum] = useState<Album | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
  const [isViewerOpen, setIsViewerOpen] = useState<boolean>(false);

  const featuredAlbums = useMemo(() => getFeaturedAlbums(), []);
  const recentAlbums = useMemo(() => getRecentAlbums(), []);
  const categories = useMemo(() => [...new Set(albums.map(album => album.category))], []);

  const filteredAlbums = useMemo(() => 
    selectedCategory === 'all' 
      ? albums 
      : albums.filter(album => album.category === selectedCategory),
    [selectedCategory]
  );

  const {
    currentPage,
    totalPages,
    paginatedItems: paginatedAlbums,
    goToPage,
    nextPage,
    prevPage,
    resetPagination,
    hasNextPage,
    hasPrevPage,
  } = usePagination(filteredAlbums, CONFIG.IMAGES_PER_PAGE);

  useEffect(() => {
    resetPagination();
  }, [selectedCategory, resetPagination]);

  const handleViewAlbum = useCallback((albumId: number, imageIndex: number = 0) => {
    const album = albums.find(a => a.id === albumId);
    if (album && album.images.length > 0) {
      setSelectedAlbum(album);
      setSelectedImageIndex(imageIndex);
      setIsViewerOpen(true);
    }
  }, []);

  const handleCloseViewer = useCallback(() => {
    setIsViewerOpen(false);
    setSelectedAlbum(null);
  }, []);

  const renderPagination = () => {
    if (totalPages <= 1) return null;

    const pageNumbers = [];
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    return (
      <div className="pagination">
        <button 
          className="pagination-btn"
          onClick={prevPage}
          disabled={!hasPrevPage}
        >
          Previous
        </button>

        <div className="page-numbers">
          {pageNumbers.map(page => (
            <button
              key={page}
              className={`page-number ${currentPage === page ? 'active' : ''}`}
              onClick={() => goToPage(page)}
            >
              {page}
            </button>
          ))}
        </div>

        <button 
          className="pagination-btn"
          onClick={nextPage}
          disabled={!hasNextPage}
        >
          Next
        </button>
      </div>
    );
  };

  const totalPhotos = useMemo(() => 
    albums.reduce((total, album) => total + album.images.length, 0),
    []
  );

  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">Photo Albums</h1>
        <p className="page-subtitle">
          Browse our collection of curated photo albums
        </p>
      </div>

      <div className="page-content">
        {featuredAlbums.length > 0 && (
          <section className="content-section">
            <div className="section-header">
              <h2>Featured Albums</h2>
            </div>
            
            <div className="featured-albums-grid">
              {featuredAlbums.map(album => (
                <AlbumCard
                  key={album.id}
                  album={album}
                  onViewAlbum={handleViewAlbum}
                />
              ))}
            </div>
          </section>
        )}

        <section className="content-section">
          <div className="section-header">
            <h2>All Albums</h2>
          </div>

          <div className="category-filters">
            <button 
              className={`filterr-btn ${selectedCategory === 'all' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('all')}
            >
              All
            </button>
            {categories.map(category => (
              <button 
                key={category} 
                className={`filterr-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="albums-grid">
            {paginatedAlbums.map(album => (
              <AlbumCard
                key={album.id}
                album={album}
                onViewAlbum={handleViewAlbum}
              />
            ))}
          </div>

          {renderPagination()}

          <div className="results-info">
            Showing {paginatedAlbums.length} of {filteredAlbums.length} albums 
          </div>
        </section>

        {recentAlbums.length > 0 && (
          <section className="content-section">
            <div className="section-header">
              <h2>Recent Albums</h2>
            </div>
            
            <div className="albums-grid">
              {recentAlbums.map(album => (
                <AlbumCard
                  key={album.id}
                  album={album}
                  onViewAlbum={handleViewAlbum}
                />
              ))}
            </div>
          </section>
        )}

        <section className="content-section stats-section">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">{albums.length}</div>
              <div className="stat-label">Albums</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">{totalPhotos}</div>
              <div className="stat-label">Photos</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">{categories.length}</div>
              <div className="stat-label">Categories</div>
            </div>
          </div>
        </section>
      </div>

      {isViewerOpen && selectedAlbum && (
        <ImageViewer
          images={selectedAlbum.images}
          initialIndex={selectedImageIndex}
          albumTitle={selectedAlbum.title}
          onClose={handleCloseViewer}
        />
      )}
    </div>
  );
};

export default AlbumGallery;