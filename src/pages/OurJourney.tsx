import React from 'react';
import '../styles/globals.css';

const OurJourney: React.FC = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <div className="breadcrumb">
          <a href="/">Home</a> &gt; <a href="/about">About Us</a> &gt; <span>Our Journey</span>
        </div>
        <h1 className="page-title">Our Journey</h1>
        <p className="page-subtitle">
          Tracing our path from humble beginnings to becoming a catalyst for community transformation
        </p>
      </div>

      <div className="page-content">
        {/* Timeline Section */}
        <section className="content-section">
          <div className="section-header">
            <h2>Our Timeline</h2>
            <div className="section-divider"></div>
            <p className="section-description">
              A visual journey through our key milestones and achievements
            </p>
          </div>
          
          <div className="timeline">
            {/* Timeline Item 1 */}
            <div className="timeline-item">
              <div className="timeline-marker">
             
                <div className="timeline-dot"></div>
              </div>
              <div className="timeline-content">
                <h3>The Beginning</h3>
                <p>
                  Millimani United was founded by a group of community volunteers 
                  who recognized the need for organized support systems in vulnerable 
                  neighborhoods. Our first initiative focused on educational support 
                  for underprivileged children.
                </p>
                <div className="timeline-achievements">
                  <span className="achievement-tag">First 100 children supported</span>
                  <span className="achievement-tag">Community learning center established</span>
                </div>
              </div>
            </div>

            {/* Timeline Item 2 */}
            <div className="timeline-item">
              <div className="timeline-marker">
                
                <div className="timeline-dot"></div>
              </div>
              <div className="timeline-content">
                <h3>Expanding Our Reach</h3>
                <p>
                  Recognizing the interconnected nature of community challenges, 
                  we expanded our programs to include economic empowerment and 
                  healthcare initiatives. This marked our transition from a single-focus 
                  organization to a holistic community development partner.
                </p>
                <div className="timeline-achievements">
                  <span className="achievement-tag">Economic empowerment program launched</span>
                  <span className="achievement-tag">Healthcare outreach initiated</span>
                  <span className="achievement-tag">500+ families served</span>
                </div>
              </div>
            </div>

            {/* Timeline Item 3 */}
            <div className="timeline-item">
              <div className="timeline-marker">
                
                <div className="timeline-dot"></div>
              </div>
              <div className="timeline-content">
                <h3>Strategic Partnerships</h3>
                <p>
                  We formed strategic partnerships with local government agencies, 
                  international NGOs, and corporate sponsors. These collaborations 
                  enabled us to scale our impact and introduce more sustainable 
                  development models.
                </p>
                <div className="timeline-achievements">
                  <span className="achievement-tag">5 major partnerships formed</span>
                  <span className="achievement-tag">Funding secured for expansion</span>
                  <span className="achievement-tag">Professional team established</span>
                </div>
              </div>
            </div>

            {/* Timeline Item 4 */}
            <div className="timeline-item">
              <div className="timeline-marker">
                
                <div className="timeline-dot"></div>
              </div>
              <div className="timeline-content">
                <h3>Digital Transformation</h3>
                <p>
                  Embracing technology to enhance our operations, we launched digital 
                  platforms for program management, community engagement, and impact 
                  tracking. This period also saw the formalization of our sustainability 
                  and environmental programs.
                </p>
                <div className="timeline-achievements">
                  <span className="achievement-tag">Digital monitoring systems implemented</span>
                  <span className="achievement-tag">Environmental programs launched</span>
                  <span className="achievement-tag">2,000+ direct beneficiaries</span>
                </div>
              </div>
            </div>

            {/* Timeline Item 5 */}
            <div className="timeline-item">
              <div className="timeline-marker">
               
                <div className="timeline-dot"></div>
              </div>
              <div className="timeline-content">
                <h3>Community Resilience Focus</h3>
                <p>
                  Shifting towards building long-term community resilience, we 
                  introduced programs focused on climate adaptation, disaster 
                  preparedness, and sustainable livelihoods. Our approach evolved 
                  to address emerging global challenges while maintaining local relevance.
                </p>
                <div className="timeline-achievements">
                  <span className="achievement-tag">Climate resilience programs</span>
                  <span className="achievement-tag">Disaster response training</span>
                  <span className="achievement-tag">5,000+ lives impacted</span>
                </div>
              </div>
            </div>

            {/* Timeline Item 6 - Present */}
            <div className="timeline-item current">
              <div className="timeline-marker">
                
                <div className="timeline-dot current"></div>
              </div>
              <div className="timeline-content">
                <h3>Today & Beyond</h3>
                <p>
                  Millimani United continues to grow and adapt, always guided by 
                  our core mission of community empowerment. We're currently 
                  expanding our human rights advocacy, digital literacy programs, 
                  and cross-community collaboration initiatives.
                </p>
                <div className="timeline-achievements">
                  <span className="achievement-tag">Human rights advocacy</span>
                  <span className="achievement-tag">Digital inclusion programs</span>
                  <span className="achievement-tag">Multi-community partnerships</span>
                </div>
              </div>
            </div>
          </div>
        </section>
{/* Key Achievements Section */}
<section className="about-content-block">
  <div className="about-section-header">
    <h2>Key Achievements</h2>
    <div className="about-divider"></div>
  </div>
  <div className="about-achievements-grid">
    <div className="about-achievement-card">
      <div className="about-achievement-icon">🎓</div>
      <div className="about-achievement-content">
        <h3>Education Impact</h3>
        <ul>
          <li>2,500+ children supported with educational materials</li>
          <li>15 community learning centers established</li>
          <li>300+ scholarships awarded</li>
          <li>Digital literacy programs in 20 communities</li>
        </ul>
      </div>
    </div>
    <div className="about-achievement-card">
      <div className="about-achievement-icon">💼</div>
      <div className="about-achievement-content">
        <h3>Economic Empowerment</h3>
        <ul>
          <li>1,200+ small businesses supported</li>
          <li>500+ vocational training graduates</li>
          <li>50+ community savings groups formed</li>
          <li>Access to microfinance for 800+ families</li>
        </ul>
      </div>
    </div>
    <div className="about-achievement-card">
      <div className="about-achievement-icon">🏥</div>
      <div className="about-achievement-content">
        <h3>Health & Wellness</h3>
        <ul>
          <li>10,000+ medical screenings conducted</li>
          <li>Community health worker network established</li>
          <li>Mental health support programs launched</li>
          <li>Nutrition programs for 2,000+ children</li>
        </ul>
      </div>
    </div>
    <div className="about-achievement-card">
      <div className="about-achievement-icon">🌱</div>
      <div className="about-achievement-content">
        <h3>Environmental Impact</h3>
        <ul>
          <li>50,000+ trees planted</li>
          <li>Clean water access for 5 communities</li>
          <li>Renewable energy projects implemented</li>
          <li>Waste management systems established</li>
        </ul>
      </div>
    </div>
    <div className="about-achievement-card">
      <div className="about-achievement-icon">👨‍👩‍👧‍👦</div>
      <div className="about-achievement-content">
        <h3>Community Development</h3>
        <ul>
          <li>100+ community infrastructure projects completed</li>
          <li>25 youth centers established across regions</li>
          <li>5,000+ families reached with social programs</li>
          <li>Community leadership training for 300+ individuals</li>
        </ul>
      </div>
    </div>
    <div className="about-achievement-card">
      <div className="about-achievement-icon">🤝</div>
      <div className="about-achievement-content">
        <h3>Partnership & Advocacy</h3>
        <ul>
          <li>Strategic partnerships with 30+ organizations</li>
          <li>Advocacy campaigns reaching 1M+ people</li>
          <li>Policy influence in 5 key development areas</li>
          <li>International recognition for community work</li>
        </ul>
      </div>
    </div>
  </div>
</section>
        {/* Future Vision Section */}
        <section className="content-section future-section">
          <div className="section-header">
            <h2>Our Future Vision</h2>
            <div className="section-divider"></div>
          </div>
          <div className="future-content">
            <div className="vision-card">
              <h3>2025 Goals</h3>
              <ul>
                <li>Expand to serve 50 additional communities</li>
                <li>Establish a youth innovation hub</li>
                <li>Launch cross-border partnership programs</li>
                <li>Develop community-owned social enterprises</li>
                <li>Implement AI-powered impact assessment</li>
              </ul>
            </div>
            <div className="vision-card">
              <h3>2030 Vision</h3>
              <ul>
                <li>Become a regional center of excellence</li>
                <li>Scale replicable community development models</li>
                <li>Establish endowment fund for sustainability</li>
                <li>Create global knowledge sharing platform</li>
                <li>Influence national development policies</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="cta-section">
          <div className="cta-content">
            <h2>Be Part of Our Continuing Story</h2>
            <p>
              Our journey is far from over. Join us as we continue to write new chapters 
              of community transformation and sustainable development.
            </p>
            <div className="cta-buttons">
              <a href="/contact" className="cta-button primary">
                Partner With Us
              </a>
              <a href="/donate" className="cta-button secondary">
                Support Our Work
              </a>
              <a href="/opportunities/jobs" className="cta-button outline">
                Join Our Team
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default OurJourney;