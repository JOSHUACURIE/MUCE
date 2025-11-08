import React from 'react';
import '../styles/globals.css';

const VisionMissionSpirit: React.FC = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <div className="breadcrumb">
          <a href="/">Home</a> &gt; <a href="/about">About Us</a> &gt; <span>Vision, Mission & Spirit</span>
        </div>
        <h1 className="page-title">Vision, Mission & Spirit</h1>
        <p className="page-subtitle">
          The guiding principles that define who we are and drive everything we do
        </p>
      </div>

      <div className="page-content">
        {/* Vision Section */}
        <section className="content-section">
          <div className="principle-card vision-card">
            <div className="principle-icon">🔭</div>
            <div className="principle-content">
              <h2>Our Vision</h2>
              <div className="principle-statement">
                "A Just, Equal & Sustainable Community"
              </div>
              <p className="principle-description">
                We envision communities where every individual has equal opportunities, 
                where justice prevails in all aspects of life, and where sustainable 
                practices ensure prosperity for generations to come. Our vision is a 
                world where communities are empowered to shape their own destinies.
              </p>
              <div className="vision-pillars">
                <div className="pillar">
                  <h4>Justice</h4>
                  <p>Fairness and equity in access to resources and opportunities</p>
                </div>
                <div className="pillar">
                  <h4>Equality</h4>
                  <p>Equal rights and treatment for all community members</p>
                </div>
                <div className="pillar">
                  <h4>Sustainability</h4>
                  <p>Long-term solutions that benefit both people and planet</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="content-section">
          <div className="principle-card mission-card">
            <div className="principle-icon">🎯</div>
            <div className="principle-content">
              <h2>Our Mission</h2>
              <div className="principle-statement">
                "To Provide Holistic Support To Vulnerable Populations, Promoting Dignity, 
                Self-sufficiency, And Community Resilience"
              </div>
              <p className="principle-description">
                Our mission is implemented through comprehensive programs that address 
                the interconnected needs of vulnerable communities. We believe in 
                empowering individuals and communities to become architects of their 
                own development.
              </p>
             <div className="mission-approach">
  <h3>Our Approach</h3>
  <div className="approach-grid">
    <div className="approach-item">
      <div className="approach-number">01</div>
      <div className="approach-text">
        <h4>Holistic Support</h4>
        <p>Addressing economic, social, educational, and environmental needs simultaneously</p>
      </div>
    </div>
    <div className="approach-item">
      <div className="approach-number">02</div>
      <div className="approach-text">
        <h4>Dignity Preservation</h4>
        <p>Ensuring all interventions respect and enhance individual and community dignity</p>
      </div>
    </div>
    <div className="approach-item">
      <div className="approach-number">03</div>
      <div className="approach-text">
        <h4>Self-sufficiency Focus</h4>
        <p>Building capacity for communities to sustain their own development</p>
      </div>
    </div>
    <div className="approach-item">
      <div className="approach-number">04</div>
      <div className="approach-text">
        <h4>Resilience Building</h4>
        <p>Strengthening communities to withstand and adapt to challenges</p>
      </div>
    </div>
    <div className="approach-item">
      <div className="approach-number">05</div>
      <div className="approach-text">
        <h4>Community-Led Design</h4>
        <p>Involving community members in planning and decision-making processes</p>
      </div>
    </div>
    <div className="approach-item">
      <div className="approach-number">06</div>
      <div className="approach-text">
        <h4>Sustainable Impact</h4>
        <p>Creating lasting change through environmentally conscious programs</p>
      </div>
    </div>
  </div>
</div>
            </div>
          </div>
        </section>

        {/* Organizational Spirit Section */}
        <section className="content-section">
          <div className="principle-card spirit-card">
            <div className="principle-icon">💫</div>
            <div className="principle-content">
              <h2>Our Spirit</h2>
              <div className="principle-statement">
                "United We Create, Nurture and Transform Lives"
              </div>
              <p className="principle-description">
                The spirit of Millimani United is the heartbeat of our organization. 
                It represents our passion, our commitment, and the energy that drives 
                us forward. It's about the unity that makes our work possible and the 
                transformation that makes it meaningful.
              </p>
              
            <div className="spirit-manifestations">
  <div className="manifestation-grid">
    <div className="manifestation-item">
      <div className="manifestation-icon">✨</div>
      <div className="manifestation-content">
        <h4>Creativity</h4>
        <p>Innovative solutions to complex community challenges</p>
      </div>
    </div>
    <div className="manifestation-item">
      <div className="manifestation-icon">🌱</div>
      <div className="manifestation-content">
        <h4>Nurturing</h4>
        <p>Caring support that helps individuals and communities grow</p>
      </div>
    </div>
    <div className="manifestation-item">
      <div className="manifestation-icon">🔄</div>
      <div className="manifestation-content">
        <h4>Transformation</h4>
        <p>Meaningful change that creates lasting impact</p>
      </div>
    </div>
    <div className="manifestation-item">
      <div className="manifestation-icon">🤝</div>
      <div className="manifestation-content">
        <h4>Unity</h4>
        <p>Collaborative approach that multiplies our impact</p>
      </div>
    </div>
    <div className="manifestation-item">
      <div className="manifestation-icon">💪</div>
      <div className="manifestation-content">
        <h4>Resilience</h4>
        <p>Strength to overcome obstacles and adapt to change</p>
      </div>
    </div>
    <div className="manifestation-item">
      <div className="manifestation-icon">🌟</div>
      <div className="manifestation-content">
        <h4>Excellence</h4>
        <p>Commitment to highest standards in all our endeavors</p>
      </div>
    </div>
  </div>
</div>
            </div>
          </div>
        </section>

     {/* Core Values Integration */}
<section className="content-section">
  <div className="section-header">
    <h2>Living Our Values</h2>
    <div className="section-divider"></div>
    <p className="section-description">
      How our core values bring our vision, mission, and spirit to life
    </p>
  </div>
  
  <div className="values-integration">
    <div className="integration-card">
      <h3>Professionalism & Teamwork</h3>
      <p>
        Excellence in execution through collaborative efforts that 
        amplify our vision and advance our mission with integrity.
      </p>
    </div>
    <div className="integration-card">
      <h3>Integrity & Accountability</h3>
      <p>
        Transparent operations that build trust and ensure every 
        action aligns with our vision of a just community.
      </p>
    </div>
    <div className="integration-card">
      <h3>Partnerships & Collaboration</h3>
      <p>
        Strategic alliances that extend our reach and deepen our 
        impact, embodying our spirit of unity.
      </p>
    </div>
    <div className="integration-card">
      <h3>Equity & Inclusivity</h3>
      <p>
        Ensuring our mission serves all community members equally, 
        making our vision of equality a reality.
      </p>
    </div>
    <div className="integration-card">
      <h3>Dynamic Approach</h3>
      <p>
        Adaptive strategies that keep our mission relevant and our 
        spirit vibrant in a changing world.
      </p>
    </div>
    <div className="integration-card">
      <h3>Sustainability & Stewardship</h3>
      <p>
        Responsible management of resources that ensures long-term 
        impact and honors our commitment to future generations.
      </p>
    </div>
  </div>
</section>
        

        {/* Call to Action */}
        <section className="cta-section">
          <div className="cta-content">
            <h2>Embrace Our Purpose</h2>
            <p>
              Join us in bringing our vision to life, advancing our mission, 
              and sharing in our spirit of community transformation.
            </p>
            <div className="cta-buttons">
              <a href="/contact" className="cta-button primary">
                Connect With Us
              </a>
              <a href="/donate" className="cta-button secondary">
                Support Our Mission
              </a>
              <a href="/about/who-we-are" className="cta-button outline">
                Learn More About Us
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default VisionMissionSpirit;