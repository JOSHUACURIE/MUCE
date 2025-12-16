import React, { useState, useEffect } from 'react';
import '../../styles/globals.css';
import './hero.css'

interface HeroImage {
  id: number;
  url: string;
  alt: string;
  title?: string;
}


const heroImages: HeroImage[] = [
  {
    id: 1,
    url: '/lab.jpg',
    alt: 'Annual community festival celebration'
    
  },
  {
    id: 2,
    url: 'https://imgur.com/uOOuZ4n.jpg',
    alt: 'Education transformation initiatives'
  
  },
  {
    id: 3,
    url: 'https://imgur.com/5ytiBT5.jpg',
    alt: 'Women empowerment programs'
   
  },
  {
    id: 4,
    url: 'https://imgur.com/pSpeXgf.jpg',
    alt: 'Green community projects'
    
  },
  {
    id: 5,
    url: 'https://imgur.com/PqY2TVm.jpg',
    alt: 'Youth sports activities'
    
  },
  {
    id: 6,
    url: 'https://imgur.com/SS9NyXW.jpg',
    alt: 'Digital literacy training'
  
  },
  {
    id: 7,
    url: 'https://imgur.com/yxtuJWT.jpg',
    alt: 'Classroom learning session'
    
  },
  {
    id: 8,
    url: 'https://imgur.com/iq76XbS.jpg',
    alt: 'Vocational training workshop'
    
  },
  {
    id: 9,
    url: 'https://imgur.com/ho5qaPr.jpg',
    alt: 'Community tree planting activity'
 
  },
  {
    id: 10,
    url: 'https://imgur.com/lPtfYfH.jpg',
    alt: 'Clean energy workshop'
   
  },
  {
    id: 11,
    url: 'https://imgur.com/3dp5xc7.jpg',
    alt: 'Cultural festival performance'
    
  },
  {
    id: 12,
    url: '/communit.jpg',
    alt: 'Community meeting discussion'
    
  },
  {
    id: 13,
    url: 'https://imgur.com/VyD3mee.jpg',
    alt: 'Youth leadership training'

  },
  {
    id: 14,
    url: 'https://imgur.com/Wmf0peo.jpg',
    alt: 'Education category cover'
    
  },
  {
    id: 15,
    url: 'https://imgur.com/yIUnpLG.jpg',
    alt: 'Economic empowerment cover'

  },
  {
    id: 16,
    url: 'https://imgur.com/0hR9jCw.jpg',
    alt: 'Environment sustainability cover'
   
  },
  {
    id: 17,
    url: 'https://imgur.com/Sg5vJT1.jpg',
    alt: 'Community events cover'
  
  },
  {
    id: 18,
    url: 'https://imgur.com/oAMorAQ.jpg',
    alt: 'Health and wellness programs'
   
  },
  {
    id: 19,
    url: 'https://imgur.com/4XeWm6T',
    alt: 'Youth development programs'
   
  },
  {
    id: 20,
    url: 'https://imgur.com/fQ56AdA.jpg',
    alt: 'Millimani United background'

  }
];
const Hero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

 
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 5000); 

    return () => clearInterval(interval);
  }, [currentImageIndex]);

  const nextImage = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
      setIsTransitioning(false);
    }, 500);
  };

  const prevImage = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === 0 ? heroImages.length - 1 : prevIndex - 1
      );
      setIsTransitioning(false);
    }, 500);
  };

 

  return (
    <section className="hero">
     
      <div 
        className="hero-background"
        style={{
          backgroundImage: `url('https://imgur.com/ho5qaPr.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="hero-overlay"></div>
      </div>
      
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Millimani United
            <span className="hero-subtitle">Community Empowerment</span>
          </h1>
          
          <p className="hero-tagline">
            United We Create, Nurture and Transform Lives
          </p>
          
          <div className="hero-mission">
            <div className="vision-mission">
              <h3 className="vision-title">Our Vision</h3>
              <p className="vision-text">A Just, Equal & Sustainable Community.</p>
              
              <h3 className="mission-title">Our Mission</h3>
              <p className="mission-text">
                To Provide Holistic Support To Vulnerable Populations, Promoting Dignity, 
                Self-sufficiency, And Community Resilience.
              </p>
            </div>
          </div>

          
          <div className="hero-actions">
            <a href="/donate" className="ca-button ca-primary">
              Donate Now
            </a>
            <a href="/about" className="ca-button ca-secondary">
              Learn More
            </a>
            <a href="/contact" className="ca-button ca-outline">
              Get Involved
            </a>
          </div>
        </div>

        {/* Core Values Sidebar */}
        <div className="hero-value">
          <h3 className="value-title">Our Core Values</h3>
          <ul className="value-list">
            <li className="value-items">
              <span className="value-numbers">1</span>
              <span className="value-texts">Professionalism & Team work</span>
            </li>
            <li className="value-items">
              <span className="value-numbers">2</span>
              <span className="value-texts">Integrity & Accountability</span>
            </li>
            <li className="value-items">
              <span className="value-numbers">3</span>
              <span className="value-texts">Partnerships / Collaboration</span>
            </li>
            <li className="value-items">
              <span className="value-numbers">4</span>
              <span className="value-texts">Equity & Inclusivity</span>
            </li>
            <li className="value-items">
              <span className="value-numbers">5</span>
              <span className="value-texts">Dynamic in approach & opinion</span>
            </li>
          </ul>
        </div>
      </div>

      
      {/* Program Pillars Preview */}
      <div className="program-pillars">
        <div className="pillars-container">
          <h3 className="pillars-title">Our Focus Areas</h3>
          <div className="pillars-grid">
            <div className="pillar-card">
              <div className="pillar-icon">💼</div>
              <h4 className="pillar-name">Economic Empowerment</h4>
              <p className="pillar-description">
               Support women's economic empowerment through entrepreneurship, job creation and access to financial services
              </p>
            </div>
            
            <div className="pillar-card">
              <div className="pillar-icon">🎓</div>
              <h4 className="pillar-name">Education & Skills Development</h4>
              <p className="pillar-description">
                Provide education and skills training opportunities to enhance women's and girl's knowledge,skills and employability.
              </p>
            </div>
            
            <div className="pillar-card">
              <div className="pillar-icon">🤝</div>
              <h4 className="pillar-name">Community Engagement</h4>
              <p className="pillar-description">
                Engage with local communities to promote women's rights, challenge harmful cultural norms and support community-led activities.
              </p>
            </div>
            
            <div className="pillar-card">
              <div className="pillar-icon">🌱</div>
              <h4 className="pillar-name">Sustainability</h4>
              <p className="pillar-description">
                Protection: Consider the environmnetal impact of the organizations's work and promote sustainable practices.
              </p>
            </div>

            <div className="pillar-card">
              <div className="pillar-icon">🌈</div>
              <h4 className="pillar-name">Inclusion and Diversity</h4>
              <p className="pillar-description">
                Ensure inclusivity and diversity in all aspects of the organization, including programming, staffing and governace
              </p>
            </div>

            <div className="pillar-card">
              <div className="pillar-icon">⚖️</div>
              <h4 className="pillar-name">Human Rights</h4>
              <p className="pillar-description">
                Promote and protect women's human rights, includind aceess to justice and equality before the law.
              </p>
            </div>
          </div>
        </div>
      <div className="image-slider-section">
  <div className="slider-container">
    <h3 className="slider-section-title">Our Work in Action</h3>
    
    <div className="hero-slider">
      <div 
        className={`hero-slide ${isTransitioning ? 'transitioning' : ''}`}
        style={{
          backgroundImage: `url('${heroImages[currentImageIndex].url}')`
        }}
      >
        <div className="hero-slide-overlay"></div>
        
        <div className="slide-title">
          {heroImages[currentImageIndex].title}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button 
        className="slider-arrow slider-arrow-prev"
        onClick={prevImage}
        aria-label="Previous image"
      >
        ‹
      </button>
      <button 
        className="slider-arrow slider-arrow-next"
        onClick={nextImage}
        aria-label="Next image"
      >
        ›
      </button>
    </div>
  </div>
</div>
      
      

      </div>
    </section>
  );
};

export default Hero;