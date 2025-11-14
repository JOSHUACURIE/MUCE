import React, { useMemo } from 'react';
import '../styles/globals.css';
import { Link } from 'react-router-dom';
import { photoAlbums, photoCategories, getRecentPhotos } from '../data/images';

const Photos: React.FC = () => {
  const featuredAlbum = useMemo(() => photoAlbums.find(album => album.featured), []);
  const recentPhotos = useMemo(() => getRecentPhotos(9), []);

  return (
    <div className="page-container">
      <div className="page-header">
        <div className="breadcrumb">
          <a href="/">Home</a> &gt; <a href="/media">Media</a> &gt; <span>Photo Gallery</span>
        </div>
        <h1 className="page-title">Photo Gallery</h1>
        <p className="page-subtitle">
          Capturing moments of transformation, hope, and community empowerment
        </p>
      </div>

      <div className="page-content">
        {/* Featured Album */}
        {featuredAlbum && (
          <section className="content-section">
            <div className="section-header">
              <h2>Featured Album</h2>
              <div className="section-divider"></div>
            </div>
            
            <div className="featured-album">
              <div className="album-cover">
                <div 
                  className="cover-image"
                  style={{ backgroundImage: `url(${featuredAlbum.coverImage})` }}
                >
                  <div className="image-count">{featuredAlbum.photoCount} photos</div>
                </div>
              </div>
              <div className="album-info">
                <h3>{featuredAlbum.title}</h3>
                <p>{featuredAlbum.description}</p>
                <div className="album-stats">
                  <div className="stat">
                    <div className="stat-number">{featuredAlbum.photoCount}</div>
                    <div className="stat-label">Photos</div>
                  </div>
                  <div className="stat">
                    <div className="stat-number">500+</div>
                    <div className="stat-label">Participants</div>
                  </div>
                  <div className="stat">
                    <div className="stat-number">15</div>
                    <div className="stat-label">Communities</div>
                  </div>
                </div>
              <Link to="/album" className="view-album-button">
  View Full Album →
</Link>
              </div>
            </div>
          </section>
        )}

        {/* Photo Categories */}
        <section className="content-section">
          <div className="section-header">
            <h2>Photo Categories</h2>
            <div className="section-divider"></div>
          </div>
          
          <div className="photo-categories">
            {photoCategories.map(category => (
              <div key={category.id} className="category-card photo-category">
                <div 
                  className="category-image"
                  style={{ backgroundImage: `url(${category.coverImage})` }}
                ></div>
                <div className="category-content">
                  <h3>{category.name}</h3>
                  <p>{category.description}</p>
                 
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Recent Photos Grid */}
        <section className="content-section">
          <div className="section-header">
            <h2>Recent Photos</h2>
            <div className="section-divider"></div>
            <p className="section-description">
              Latest captures from our programs and community activities
            </p>
          </div>
          
          <div className="photo-grid">
            {recentPhotos.map(photo => (
              <div key={photo.id} className="photo-item">
                <div 
                  className="photo-thumbnail"
                  style={{ backgroundImage: `url(${photo.imageUrl})` }}
                ></div>
                <div className="photo-info">
                  <h4>{photo.title}</h4>
                  <p>{photo.description}</p>
                  <span className="photo-date">
                    {new Date(photo.date).toLocaleDateString('en-US', { 
                      month: 'long', 
                      year: 'numeric' 
                    })}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Photo Albums */}
        <section className="content-section">
          <div className="section-header">
            <h2>Photo Albums</h2>
            <div className="section-divider"></div>
          </div>
          
          <div className="albums-grid">
            {photoAlbums.map(album => (
              <div key={album.id} className="album-card">
                <div 
                  className="album-cover-image"
                  style={{ backgroundImage: `url(${album.coverImage})` }}
                ></div>
                <div className="album-details">
                  <h3>{album.title}</h3>
                  <p>{album.photoCount} photos • Updated {new Date(album.date).toLocaleDateString()}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="cta-section">
          <div className="cta-content">
            <h2>Share Your Moments With Us</h2>
            <p>
              Have photos from our events or programs? We'd love to see them! Share your captures 
              and help us tell the complete story of community transformation.
            </p>
            <div className="cta-buttons">
              <a href="/contact" className="cta-button primary">
                Share Your Photos
              </a>
              <a href="/media/videos" className="cta-button secondary">
                Watch Our Videos
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Photos;