import React from 'react';
import '../styles/globals.css'

const WhoWeAre: React.FC = () => {
  return (
    <div className="about-page-wrapper">
      <div className="about-page-header">
        <div className="about-breadcrumb">
          <a href="/">Home</a> &gt; <a href="/about">About Us</a> &gt; <span>Who We Are</span>
        </div>
        <h1 className="about-main-heading">Who We Are</h1>
        <p className="about-subheading">
          Learn about Millimani United's journey, values, and commitment to community transformation
        </p>
      </div>

      <div className="about-page-content">
        {/* Organization Story Section */}
        <section className="about-content-block">
          <div className="about-section-header">
            <h2>Our Story</h2>
            <div className="about-divider"></div>
          </div>
          <div className="about-story-content">
            <div className="about-story-text">
              <p>
                Millimani United was born from a deep-seated commitment to address the pressing needs 
                of vulnerable communities. Founded on the principles of unity, compassion, and sustainable 
                development, our organization has grown from a small community initiative to a respected 
                force for positive change.
              </p>
              <p>
                Our journey began with a simple vision: to create a platform where community members 
                could come together to identify challenges and co-create solutions. Over time, this 
                vision evolved into a comprehensive approach to community empowerment that addresses 
                economic, educational, social, and environmental aspects of development.
              </p>
              <p>
                Today, Millimani United stands as a testament to what can be achieved when communities 
                unite with purpose and determination. Our work continues to be guided by the voices 
                and needs of the people we serve.
              </p>
            </div>
            <div className="about-story-visual">
              <div className="about-image-wrapper">
                <img 
                  src='https://imgur.com/d7LOFpR.jpg' 
                  alt="Millimani United History and Journey"
                  className="about-story-image"
                />
              </div>
            </div>
          </div>
        </section>
{/* Our Approach Section */}
<section className="about-content-block">
  <div className="about-section-header">
    <h2>Our Approach</h2>
    <div className="about-divider"></div>
  </div>
  <div className="about-approach-grid">
    <div className="about-approach-card">
      <div className="about-approach-icon">🤝</div>
      <h3>Community-Led</h3>
      <p>
        We believe in empowering communities to drive their own development. 
        Our programs are designed in collaboration with community members, 
        ensuring local ownership and relevance.
      </p>
    </div>
    <div className="about-approach-card">
      <div className="about-approach-icon">🌱</div>
      <h3>Sustainable Solutions</h3>
      <p>
        We focus on creating long-term, sustainable change rather than 
        temporary fixes. Our interventions are designed for lasting impact 
        that continues to benefit communities for generations.
      </p>
    </div>
    <div className="about-approach-card">
      <div className="about-approach-icon">🔍</div>
      <h3>Evidence-Based</h3>
      <p>
        Our programs are informed by research and data. We continuously 
        monitor and evaluate our impact to ensure effectiveness and 
        adapt our strategies based on evidence.
      </p>
    </div>
    <div className="about-approach-card">
      <div className="about-approach-icon">🤲</div>
      <h3>Holistic Support</h3>
      <p>
        We address multiple aspects of community development simultaneously 
        to create comprehensive and integrated solutions that transform 
        lives from all angles.
      </p>
    </div>
    <div className="about-approach-card">
      <div className="about-approach-icon">🌟</div>
      <h3>Innovation & Adaptation</h3>
      <p>
        We embrace innovative solutions and continuously adapt to changing 
        community needs and environmental challenges, ensuring our 
        approaches remain relevant and effective.
      </p>
    </div>
    <div className="about-approach-card">
      <div className="about-approach-icon">🌍</div>
      <h3>Partnership & Collaboration</h3>
      <p>
        We work hand-in-hand with local organizations, government agencies, 
        and international partners to leverage resources and expertise 
        for maximum community impact.
      </p>
    </div>
  </div>
</section>

        {/* Impact Statistics Section */}
        <section className="about-content-block about-stats-section">
          <div className="about-section-header">
            <h2>Our Impact</h2>
            <div className="about-divider"></div>
          </div>
          <div className="about-stats-grid">
            <div className="about-stat-item">
              <div className="about-stat-number">5,000+</div>
              <div className="about-stat-label">Lives Touched</div>
            </div>
            <div className="about-stat-item">
              <div className="about-stat-number">50+</div>
              <div className="about-stat-label">Communities Served</div>
            </div>
            <div className="about-stat-item">
              <div className="about-stat-number">200+</div>
              <div className="about-stat-label">Projects Completed</div>
            </div>
            <div className="about-stat-item">
              <div className="about-stat-number">15+</div>
              <div className="about-stat-label">Partner Organizations</div>
            </div>
          </div>
        </section>

        {/* Team Preview Section */}
        <section className="about-content-block">
          <div className="about-section-header">
            <h2>Our Leadership</h2>
            <div className="about-divider"></div>
            <p className="about-section-description">
              Meet the dedicated team driving our mission forward
            </p>
          </div>
          <div className="about-team-preview">
            <div className="about-team-card">
              <div className="about-team-avatar">👤</div>
              <h3>Board of Directors</h3>
              <p>
                Our experienced board provides strategic guidance and oversight 
                to ensure we remain true to our mission and values.
              </p>
              <a href="/governance/board" className="about-cta-link">
                Meet the Board →
              </a>
            </div>
            <div className="about-team-card">
              <div className="about-team-avatar">👥</div>
              <h3>Senior Management</h3>
              <p>
                Our leadership team brings decades of combined experience in 
                community development and non-profit management.
              </p>
              <a href="/governance/management" className="about-cta-link">
                Meet the Team →
              </a>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="about-cta-section">
          <div className="about-cta-content">
            <h2>Join Our Journey</h2>
            <p>
              Whether you're looking to volunteer, partner with us, or support our work, 
              there are many ways to get involved and make a difference.
            </p>
            <div className="about-cta-buttons">
              <a href="/contact" className="about-cta-button about-cta-primary">
                Get Involved
              </a>
              <a href="/about/our-journal" className="about-cta-button about-cta-secondary">
                Read Our Journal
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default WhoWeAre;