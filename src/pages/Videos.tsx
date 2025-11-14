import React from 'react';
import '../styles/globals.css';
import { photos, photoCategories } from '../data/images'; // Adjust import path as needed
import FacebookVideo from '../components/FBVideos';
const Videos: React.FC = () => {
  // Map photos to video cards
  const videoCards = [
    {
      id: 1,
      title: "Scholarship Award Ceremony 2024",
      description: "Celebrating 50 students receiving educational scholarships",
      duration: "5:30",
      views: "1.2K views",
      date: "2 weeks ago",
      image: photos.find(p => p.id === 2)?.imageUrl || "https://imgur.com/yxtuJWT.jpg" // Classroom Learning
    },
    {
      id: 2,
      title: "Women Entrepreneurship Program",
      description: "Empowering women through business skills training",
      duration: "8:15",
      views: "2.1K views",
      date: "1 month ago",
      image: photos.find(p => p.id === 4)?.imageUrl || "https://imgur.com/iq76XbS.jpg" // Vocational Training
    },
    {
      id: 3,
      title: "Tree Planting Initiative",
      description: "Community coming together for environmental conservation",
      duration: "12:45",
      views: "3.5K views",
      date: "2 months ago",
      image: photos.find(p => p.id === 6)?.imageUrl || "https://imgur.com/ho5qaPr.jpg" // Community Tree Planting
    },
    {
      id: 4,
      title: "Digital Literacy Program",
      description: "Bridging the digital divide in rural communities",
      duration: "6:20",
      views: "1.8K views",
      date: "3 months ago",
      image: photos.find(p => p.id === 13)?.imageUrl || "/leaders.jpg" // Leadership Training
    },
    {
      id: 5,
      title: "Health Camp Success Story",
      description: "Medical outreach serving 500+ community members",
      duration: "10:10",
      views: "4.2K views",
      date: "4 months ago",
      image: photos.find(p => p.id === 11)?.imageUrl || "https://imgur.com/J0jipYe.jpg" // Health Education
    },
    {
      id: 6,
      title: "Youth Leadership Forum",
      description: "Empowering the next generation of community leaders",
      duration: "7:35",
      views: "2.9K views",
      date: "5 months ago",
      image: photos.find(p => p.id === 12)?.imageUrl || "https://imgur.com/PqY2TVm.jpg" // Youth Sports
    }
  ];

  // Map categories to video categories
  const videoCategoryCards = [
    {
      icon: "🎓",
      title: "Education Programs",
      description: "Classroom transformations, scholarship stories, and learning initiatives",
      count: "12 videos",
      image: photoCategories.find(c => c.id === 1)?.coverImage || "https://imgur.com/Wmf0peo.jpg"
    },
    {
      icon: "💼",
      title: "Economic Empowerment",
      description: "Entrepreneurship success stories and vocational training highlights",
      count: "8 videos",
      image: photoCategories.find(c => c.id === 2)?.coverImage || "https://imgur.com/yIUnpLG.jpg"
    },
    {
      icon: "🌱",
      title: "Environmental Projects",
      description: "Sustainability initiatives and community conservation efforts",
      count: "6 videos",
      image: photoCategories.find(c => c.id === 3)?.coverImage || "https://imgur.com/0hR9jCw.jpg"
    }

  ];

  return (
    <div className="page-container">
      <div className="page-header">
        <div className="breadcrumb">
          <a href="/">Home</a> &gt; <a href="/media">Media</a> &gt; <span>Videos</span>
        </div>
        <h1 className="page-title">Videos</h1>
        <p className="page-subtitle">
          Watch our journey, impact stories, and community transformations in motion
        </p>
      </div>

      <div className="page-content">
        {/* Featured Video */}
        <section className="content-section">
          <div className="section-header">
            <h2>Featured Video</h2>
            <div className="section-divider"></div>
          </div>
          
          <div className="featured-video">
            <div className="video-container">
              <div 
                className="video-placeholder featured-video-bg"
             
              >
                <div className="play-icon">▶</div>
                <div className="video-overlay">
                  <h3>Millimani United: Our Impact Story</h3>
                  <p>Watch how we're transforming communities across the region</p>
                </div>
              </div>
            </div>
            <div className="video-info">
              <h3>Our Impact Story</h3>
              <p>
                This documentary showcases the incredible journey of Millimani United over the past 
                five years. From humble beginnings to becoming a catalyst for community transformation, 
                witness the stories of hope, resilience, and empowerment.
              </p>
              <div className="video-meta">
                <span className="duration">15:30</span>
                <span className="views">2,500+ views</span>
                <span className="date">Posted: March 15, 2024</span>
              </div>
            </div>
          </div>
        </section>
{/* Facebook Videos */}
<section className="content-section">
  <div className="section-header">
    <h2>Facebook Videos</h2>
    <div className="section-divider"></div>
    <p className="section-description">
      Watch our latest stories and events directly from our official Facebook page
    </p>
  </div>

  <div className="facebook-videos-grid">
    <FacebookVideo videoUrl="https://www.facebook.com/reel/2329624127499180/" />
    <FacebookVideo videoUrl="https://www.facebook.com/reel/1335377031572278/" />
     
  </div>
</section>

        {/* Video Categories */}
        <section className="content-section">
          <div className="section-header">
            <h2>Video Categories</h2>
            <div className="section-divider"></div>
          </div>
          
          <div className="video-categories">
            {videoCategoryCards.map((category, index) => (
              <div 
                key={index}
                className="category-card"
               
              >
                <div className="category-icon">{category.icon}</div>
                <h3>{category.title}</h3>
                <p>{category.description}</p>
                
              </div>
            ))}
          </div>
        </section>

        {/* Video Gallery */}
        <section className="content-section">
          <div className="section-header">
            <h2>Video Gallery</h2>
            <div className="section-divider"></div>
            <p className="section-description">
              Explore our collection of videos showcasing programs, events, and success stories
            </p>
          </div>
          
          <div className="video-gallery">
            {videoCards.map((video) => (
              <div key={video.id} className="video-card">
                <div className="video-thumbnail">
                  <div 
                    className="thumbnail-image"
                    style={{
                      backgroundImage: `url(${video.image})`
                    }}
                  >
                    <div className="play-button">▶</div>
                    <div className="video-duration">{video.duration}</div>
                  </div>
                </div>
                <div className="video-details">
                  <h3>{video.title}</h3>
                  <p>{video.description}</p>
                  <div className="video-meta">
                    <span className="views">{video.views}</span>
                    <span className="date">{video.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* YouTube Channel CTA */}
        <section className="cta-section youtube-cta">
          <div className="cta-content">
            <div className="youtube-icon">📺</div>
            <h2>Subscribe to Our YouTube Channel</h2>
            <p>
              Stay updated with our latest videos, success stories, and community impact updates. 
              Be the first to watch new content and join our growing community of supporters.
            </p>
            <div className="cta-buttons">
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="cta-button primary"
              >
                Visit Our Channel
              </a>
              <a href="/media/gallery" className="cta-button secondary">
                View Photo Gallery
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Videos;