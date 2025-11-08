import React, { useState } from 'react';
import './album.css';
import { albums, getFeaturedAlbums, getRecentAlbums, type Album } from '../data/album';

const AlbumGallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const featuredAlbums = getFeaturedAlbums();
  const recentAlbums = getRecentAlbums();
  

  const categories = [...new Set(albums.map(album => album.category))];


  const filteredAlbums = selectedCategory === 'all' 
    ? albums 
    : albums.filter(album => album.category === selectedCategory);

  const handleViewAlbum = (albumId: number) => {
    const album = albums.find(a => a.id === albumId);
    if (album) {
      alert(`Opening album: ${album.title}\nThis would navigate to the album detail page.`);
    }
  };

  const renderAlbumCard = (album: Album) => (
    <div key={album.id} className="album-card">
      <div 
        className="album-cover-image"
        style={{ backgroundImage: `url(${album.coverImage})` }}
      >
        <div className="album-overlay">
          
          <button 
            className="view-album-btn"
            onClick={() => handleViewAlbum(album.id)}
            aria-label={`View ${album.title} album`}
          >
            View Album
          </button>
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
          {album.images.slice(0, 3).map((image) => (
            <div 
              key={image.id}
              className="preview-image"
              style={{ backgroundImage: `url(${image.imageUrl})` }}
            />
          ))}
          {album.images.length > 3 && (
            <div className="more-photos">+{album.images.length - 3} more</div>
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
    </div>
  );
};

export default AlbumGallery;