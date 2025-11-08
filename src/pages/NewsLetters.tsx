import React from 'react';
import '../styles/globals.css';

const Newsletters: React.FC = () => {
  return (
    <div className="newsletter-page-container">
      <div className="newsletter-page-header">
        <div className="newsletter-breadcrumb">
          <a href="/">Home</a> &gt; <a href="/knowledge">Knowledge Hub</a> &gt; <span>Newsletters</span>
        </div>
        <h1 className="newsletter-page-title">Newsletters</h1>
        <p className="newsletter-page-subtitle">
          Monthly updates, inspiring stories, and impact reports delivered straight to your inbox
        </p>
      </div>

      <div className="newsletter-page-content">
        {/* Latest Newsletter */}
        <section className="newsletter-content-section">
          <div className="newsletter-section-header">
            <h2>Latest Edition</h2>
            <div className="newsletter-section-divider"></div>
          </div>
          
          <div className="newsletter-featured-edition">
            <div className="newsletter-edition-cover">
              <div className="newsletter-edition-info">
                <div className="newsletter-edition-month">March 2024</div>
                <div className="newsletter-edition-title">Spring of Transformation</div>
                <div className="newsletter-edition-theme">Celebrating Women's Impact & Environmental Stewardship</div>
                <div className="newsletter-edition-badge">New</div>
              </div>
            </div>
            <div className="newsletter-edition-content">
              <div className="newsletter-content-highlights">
                <h3>In This Edition</h3>
                <ul>
                  <li>🌟 <strong>Women Leading Change:</strong> Success stories from our women empowerment programs</li>
                  <li>🌳 <strong>Green Revolution:</strong> 10,000 trees planted in community conservation drive</li>
                  <li>🎓 <strong>Education Milestone:</strong> 50 students receive university scholarships</li>
                  <li>🤝 <strong>Partnership Spotlight:</strong> New collaboration with TechForward Inc.</li>
                  <li>📅 <strong>Upcoming Events:</strong> Community festival and youth leadership forum</li>
                </ul>
              </div>
              
              <div className="newsletter-featured-story">
                <h4>Featured Story: Women Transforming Communities</h4>
                <p>
                  Meet Sarah, a single mother who transformed her small vegetable stand into a thriving 
                  agricultural business, creating jobs for 15 other women in her community. Her journey 
                  from struggle to success exemplifies the power of our economic empowerment programs.
                </p>
                <div className="newsletter-story-stats">
                  <span>💼 15 new jobs created</span>
                  <span>📈 300% income growth</span>
                  <span>🌱 Sustainable farming practices</span>
                </div>
              </div>
              
              <div className="newsletter-impact-spotlight">
                <h4>Impact Spotlight</h4>
                <div className="newsletter-impact-metrics">
                  <div className="newsletter-impact-metric">
                    <div className="newsletter-metric-value">2,500+</div>
                    <div className="newsletter-metric-label">Lives Impacted This Month</div>
                  </div>
                  <div className="newsletter-impact-metric">
                    <div className="newsletter-metric-value">15</div>
                    <div className="newsletter-metric-label">New Programs Launched</div>
                  </div>
                  <div className="newsletter-impact-metric">
                    <div className="newsletter-metric-value">89%</div>
                    <div className="newsletter-metric-label">Program Success Rate</div>
                  </div>
                </div>
              </div>
              
              <div className="newsletter-edition-actions">
                <button className="newsletter-edition-btn newsletter-btn-primary">
                  <span className="newsletter-btn-icon">📖</span>
                  Read Online Edition
                </button>
                <button className="newsletter-edition-btn newsletter-btn-secondary">
                  <span className="newsletter-btn-icon">📥</span>
                  Download PDF Version
                </button>
                <button className="newsletter-edition-btn newsletter-btn-outline">
                  <span className="newsletter-btn-icon">📤</span>
                  Share with Friends
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Archive */}
        <section className="newsletter-content-section">
          <div className="newsletter-section-header">
            <h2>Newsletter Archive</h2>
            <div className="newsletter-section-divider"></div>
            <p className="newsletter-section-description">
              Browse through our previous editions and discover the journey of transformation
            </p>
          </div>
          
          <div className="newsletter-archive-grid">
            {/* 2024 Archive */}
            <div className="newsletter-archive-year">
              <h3 className="newsletter-year-title">2024</h3>
              <div className="newsletter-archive-items">
                <div className="newsletter-archive-item">
                  <div className="newsletter-item-header">
                    <div className="newsletter-item-month">February</div>
                    <div className="newsletter-item-category">Education Focus</div>
                  </div>
                  <h4>Education Revolution: Digital Learning Breakthroughs</h4>
                  <p className="newsletter-item-excerpt">
                    How technology is transforming education in rural communities, featuring 
                    our new digital literacy programs and scholarship success stories.
                  </p>
                  <div className="newsletter-item-stats">
                    <span className="newsletter-stat">📚 500 students reached</span>
                    <span className="newsletter-stat">💻 15 computer labs established</span>
                  </div>
                  <div className="newsletter-item-actions">
                    <button className="newsletter-action-btn newsletter-action-read">Read</button>
                    <button className="newsletter-action-btn newsletter-action-download">PDF</button>
                  </div>
                </div>
                
                <div className="newsletter-archive-item">
                  <div className="newsletter-item-header">
                    <div className="newsletter-item-month">January</div>
                    <div className="newsletter-item-category">Annual Outlook</div>
                  </div>
                  <h4>New Beginnings: Our 2024 Strategic Vision</h4>
                  <p className="newsletter-item-excerpt">
                    2024 strategic outlook, new program launches, and ambitious goals for 
                    community transformation in the coming year.
                  </p>
                  <div className="newsletter-item-stats">
                    <span className="newsletter-stat">🎯 10 new communities</span>
                    <span className="newsletter-stat">🚀 5 innovative programs</span>
                  </div>
                  <div className="newsletter-item-actions">
                    <button className="newsletter-action-btn newsletter-action-read">Read</button>
                    <button className="newsletter-action-btn newsletter-action-download">PDF</button>
                  </div>
                </div>
              </div>
            </div>

            {/* 2023 Archive */}
            <div className="newsletter-archive-year">
              <h3 className="newsletter-year-title">2023</h3>
              <div className="newsletter-archive-items">
                <div className="newsletter-archive-item">
                  <div className="newsletter-item-header">
                    <div className="newsletter-item-month">December</div>
                    <div className="newsletter-item-category">Year in Review</div>
                  </div>
                  <h4>2023: A Year of Transformative Impact</h4>
                  <p className="newsletter-item-excerpt">
                    Comprehensive review of our achievements, challenges overcome, and the 
                    incredible impact made possible through community partnerships.
                  </p>
                  <div className="newsletter-item-stats">
                    <span className="newsletter-stat">🌟 15,000 lives touched</span>
                    <span className="newsletter-stat">📈 45% growth in impact</span>
                  </div>
                  <div className="newsletter-item-actions">
                    <button className="newsletter-action-btn newsletter-action-read">Read</button>
                    <button className="newsletter-action-btn newsletter-action-download">PDF</button>
                  </div>
                </div>
                
                <div className="newsletter-archive-item">
                  <div className="newsletter-item-header">
                    <div className="newsletter-item-month">November</div>
                    <div className="newsletter-item-category">Community Focus</div>
                  </div>
                  <h4>Community First: Grassroots Success Stories</h4>
                  <p className="newsletter-item-excerpt">
                    Celebrating community-led initiatives and local leadership that are 
                    driving sustainable change from the ground up.
                  </p>
                  <div className="newsletter-item-stats">
                    <span className="newsletter-stat">🤝 20 community projects</span>
                    <span className="newsletter-stat">🏆 5 leadership awards</span>
                  </div>
                  <div className="newsletter-item-actions">
                    <button className="newsletter-action-btn newsletter-action-read">Read</button>
                    <button className="newsletter-action-btn newsletter-action-download">PDF</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Series */}
        <section className="newsletter-content-section">
          <div className="newsletter-section-header">
            <h2>Newsletter Series</h2>
            <div className="newsletter-section-divider"></div>
            <p className="newsletter-section-description">
              Choose the updates that matter most to you with our specialized newsletter series
            </p>
          </div>
          
          <div className="newsletter-series-grid">
            <div className="newsletter-series-card">
              <div className="newsletter-series-icon">📊</div>
              <div className="newsletter-series-content">
                <h3>Impact Updates</h3>
                <p>Quarterly impact measurements, program results, and data-driven insights into our work</p>
                <div className="newsletter-series-details">
                  <span className="newsletter-series-frequency">📅 Quarterly</span>
                  <span className="newsletter-series-subscribers">👥 2,500+ subscribers</span>
                </div>
              </div>
            </div>
            
            <div className="newsletter-series-card">
              <div className="newsletter-series-icon">🎙️</div>
              <div className="newsletter-series-content">
                <h3>Community Voices</h3>
                <p>Stories, experiences, and perspectives directly from the communities we serve</p>
                <div className="newsletter-series-details">
                  <span className="newsletter-series-frequency">📅 Monthly</span>
                  <span className="newsletter-series-subscribers">👥 5,000+ subscribers</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Subscription Section */}
        <section className="newsletter-subscription-section">
          <div className="newsletter-subscription-content">
            <div className="newsletter-subscription-header">
              <div className="newsletter-subscription-icon">📬</div>
              <h2>Stay Connected with Our Journey</h2>
            </div>
            <p className="newsletter-subscription-description">
              Join our community of 15,000+ subscribers who receive exclusive updates, 
              inspiring stories, and opportunities to make a difference.
            </p>
            
            <div className="newsletter-subscription-form">
              <div className="newsletter-form-group">
                <input 
                  type="text" 
                  placeholder="Your Full Name" 
                  className="newsletter-form-input"
                />
              </div>
              <div className="newsletter-form-group">
                <input 
                  type="email" 
                  placeholder="Your Email Address" 
                  className="newsletter-form-input"
                />
              </div>
              
              <button className="newsletter-subscribe-btn">
                <span className="newsletter-btn-text">Subscribe to Newsletter</span>
                <span className="newsletter-btn-arrow">→</span>
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Newsletters;