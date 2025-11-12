import React, { useState } from 'react';
import './album.css';
import { albums, getFeaturedAlbums, getRecentAlbums, type Album, type AlbumImage } from '../data/album';

// Linked List Node for image navigation
class ImageNode {
  image: AlbumImage;
  next: ImageNode | null;
  prev: ImageNode | null;

  constructor(image: AlbumImage) {
    this.image = image;
    this.next = null;
    this.prev = null;
  }
}

// Linked List for image navigation
class ImageLinkedList {
  head: ImageNode | null;
  tail: ImageNode | null;
  current: ImageNode | null;

  constructor() {
    this.head = null;
    this.tail = null;
    this.current = null;
  }

  addImage(image: AlbumImage): void {
    const newNode = new ImageNode(image);
    
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.current = newNode;
    } else {
      if (this.tail) {
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
      }
    }
  }

  next(): void {
    if (this.current && this.current.next) {
      this.current = this.current.next;
    }
  }

  previous(): void {
    if (this.current && this.current.prev) {
      this.current = this.current.prev;
    }
  }

  getCurrent(): AlbumImage | null {
    return this.current ? this.current.image : null;
  }

  hasNext(): boolean {
    return this.current ? this.current.next !== null : false;
  }

  hasPrevious(): boolean {
    return this.current ? this.current.prev !== null : false;
  }

  getTotalImages(): number {
    let count = 0;
    let current = this.head;
    while (current) {
      count++;
      current = current.next;
    }
    return count;
  }

  getCurrentIndex(): number {
    let index = 0;
    let current = this.head;
    while (current && current !== this.current) {
      index++;
      current = current.next;
    }
    return index;
  }

  buildFromAlbum(albumImages: AlbumImage[]): void {
    this.head = null;
    this.tail = null;
    this.current = null;
    
    albumImages.forEach(image => this.addImage(image));
  }
}

// Image Viewer Component
interface ImageViewerProps {
  images: AlbumImage[];
  initialIndex: number;
  albumTitle: string;
  onClose: () => void;
}

const ImageViewer: React.FC<ImageViewerProps> = ({ images, initialIndex, albumTitle, onClose }) => {
  const [imageList] = useState(() => {
    const list = new ImageLinkedList();
    list.buildFromAlbum(images);
    
    // Set initial position
    let current = list.head;
    for (let i = 0; i < initialIndex && current; i++) {
      current = current.next;
    }
    list.current = current;
    
    return list;
  });

  const [currentImage, setCurrentImage] = useState(imageList.getCurrent());

  const handleNext = () => {
    imageList.next();
    setCurrentImage(imageList.getCurrent());
  };

  const handlePrevious = () => {
    imageList.previous();
    setCurrentImage(imageList.getCurrent());
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose();
    if (e.key === 'ArrowRight') handleNext();
    if (e.key === 'ArrowLeft') handlePrevious();
  };

  React.useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, []);

  if (!currentImage) return null;

  return (
    <div className="image-viewer-overlay" onClick={onClose}>
      <div className="image-viewer-container" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="image-viewer-header">
          <h3>{albumTitle}</h3>
          <span className="image-counter">
            {imageList.getCurrentIndex() + 1} / {imageList.getTotalImages()}
          </span>
          <button className="close-button" onClick={onClose}>
            ×
          </button>
        </div>

        {/* Main Image */}
        <div className="image-viewer-content">
          <button 
            className="nav-button prev-button"
            onClick={handlePrevious}
            disabled={!imageList.hasPrevious()}
          >
            ‹
          </button>

          <div className="image-container">
            <img 
              src={currentImage.imageUrl} 
              alt={`${albumTitle} - Image ${imageList.getCurrentIndex() + 1}`}
              className="viewer-image"
            />
          </div>

          <button 
            className="nav-button next-button"
            onClick={handleNext}
            disabled={!imageList.hasNext()}
          >
            ›
          </button>
        </div>

        {/* Thumbnail Navigation */}
        <div className="thumbnail-container">
          {images.map((image, index) => (
            <div
              key={image.id}
              className={`thumbnail ${index === imageList.getCurrentIndex() ? 'active' : ''}`}
              onClick={() => {
                // Navigate to specific image
                const list = imageList;
                let current = list.head;
                for (let i = 0; i < index && current; i++) {
                  current = current.next;
                }
                list.current = current;
                setCurrentImage(list.getCurrent());
              }}
            >
              <img src={image.imageUrl} alt={`Thumbnail ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Main Album Gallery Component
const AlbumGallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedAlbum, setSelectedAlbum] = useState<Album | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
  const [isViewerOpen, setIsViewerOpen] = useState<boolean>(false);

  const featuredAlbums = getFeaturedAlbums();
  const recentAlbums = getRecentAlbums();
  const categories = [...new Set(albums.map(album => album.category))];

  const filteredAlbums = selectedCategory === 'all' 
    ? albums 
    : albums.filter(album => album.category === selectedCategory);

  const handleViewAlbum = (albumId: number, imageIndex: number = 0) => {
    const album = albums.find(a => a.id === albumId);
    if (album && album.images.length > 0) {
      setSelectedAlbum(album);
      setSelectedImageIndex(imageIndex);
      setIsViewerOpen(true);
    } else {
      alert(`Album "${album?.title}" doesn't contain any images yet.`);
    }
  };

  const handleCloseViewer = () => {
    setIsViewerOpen(false);
    setSelectedAlbum(null);
  };

  const renderAlbumCard = (album: Album) => (
    <div key={album.id} className="album-card">
      <div 
        className="album-cover-image"
        style={{ backgroundImage: `url(${album.coverImage})` }}
      >
        <div className="album-overlay">
          <div className="album-actions">
            <button 
              className="view-album-btn"
              onClick={() => handleViewAlbum(album.id)}
              aria-label={`View ${album.title} album`}
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
        <div className="album-preview">
          {album.images.slice(0, 3).map((image, index) => (
            <div 
              key={image.id}
              className="preview-image"
              style={{ backgroundImage: `url(${image.imageUrl})` }}
              onClick={() => handleViewAlbum(album.id, index)}
            />
          ))}
          {album.images.length > 3 && (
            <div 
              className="more-photos"
              onClick={() => handleViewAlbum(album.id)}
            >
              +{album.images.length - 3} more
            </div>
          )}
          {album.images.length === 0 && (
            <div className="no-photos">No photos yet</div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="page-container">
      <div className="page-header">
        <div className="breadcrumb">
          <a href="/">Home</a> &gt; <a href="/media">Media</a> &gt; <span>Photo Albums</span>
        </div>
        <h1 className="page-title">Photo Albums</h1>
        <p className="page-subtitle">
          Browse our collection of curated photo albums capturing community moments
        </p>
      </div>

      <div className="page-content">
        {/* Featured Albums */}
        {featuredAlbums.length > 0 && (
          <section className="content-section">
            <div className="section-header">
              <h2>Featured Albums</h2>
              <div className="section-divider"></div>
              <p className="section-description">
                Highlighted collections showcasing our most impactful moments
              </p>
            </div>
            
            <div className="featured-albums-grid">
              {featuredAlbums.map(renderAlbumCard)}
            </div>
          </section>
        )}

        {/* All Albums */}
        <section className="content-section">
          <div className="section-header">
            <h2>All Albums</h2>
            <div className="section-divider"></div>
          </div>

          {/* Category Filter */}
          <div className="category-filters">
            <button 
              className={`filterr-btn ${selectedCategory === 'all' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('all')}
            >
              All Albums
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
            {filteredAlbums.map(renderAlbumCard)}
          </div>
        </section>

        {/* Recent Albums */}
        {recentAlbums.length > 0 && (
          <section className="content-section">
            <div className="section-header">
              <h2>Recently Updated</h2>
              <div className="section-divider"></div>
            </div>
            
            <div className="albums-grid">
              {recentAlbums.map(renderAlbumCard)}
            </div>
          </section>
        )}

        {/* Stats Section */}
        <section className="content-section stats-section">
          <div className="section-header">
            <h2>Our Gallery</h2>
            <div className="section-divider"></div>
          </div>
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">{albums.length}</div>
              <div className="stat-label">Albums</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">
                {albums.reduce((total, album) => total + album.images.length, 0)}
              </div>
              <div className="stat-label">Photos</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">{categories.length}</div>
              <div className="stat-label">Categories</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">
                {new Date().getFullYear() - 2023}
              </div>
              <div className="stat-label">Years</div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="cta-section">
          <div className="cta-content">
            <h2>Missing Something?</h2>
            <p>
              Can't find the photos you're looking for? Contact us to request specific albums 
              or share your own community photos with us.
            </p>
            <div className="cta-buttons">
              <a href="/contact" className="cta-button primary">
                Request Photos
              </a>
              <a href="/media/photos" className="cta-button secondary">
                View All Photos
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* Image Viewer Modal */}
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