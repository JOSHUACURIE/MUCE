import React from 'react';
import '../styles/globals.css';
import { boardCommittees } from '../data/board';

const SeniorManagement: React.FC = () => {
  // Get the board members data
  const executiveDirector = boardCommittees.find(member => member.id === 1); // Director Syphero Okello as Executive Director
  const programDirector = boardCommittees.find(member => member.id === 2); // Bill Clinton as Program Director
  const financeDirector = boardCommittees.find(member => member.id === 5); // Victor Otieno as Finance Director
  const communityDirector = boardCommittees.find(member => member.id === 3); // Agiye Felix as Community Engagement
  const medDirector = boardCommittees.find(member => member.id === 4); // Joseph Orlale as M&E Director
  const hrDirector = boardCommittees.find(member => member.id === 7); // Michael Odhiambo as HR Director
  const communicationsDirector = boardCommittees.find(member => member.id === 6); // Nancy Kaunda as Communications

  return (
    <div className="page-container">
      <div className="page-header">
        <div className="breadcrumb">
          <a href="/">Home</a> &gt; <a href="/governance">Governance</a> &gt; <span>Senior Management</span>
        </div>
        <h1 className="page-title">Senior Management</h1>
        <p className="page-subtitle">
          Meet the dedicated professionals driving our day-to-day operations and program implementation
        </p>
      </div>

      <div className="page-content">
        {/* Management Introduction */}
        <section className="content-section">
          <div className="section-header">
            <h2>Operational Leadership</h2>
            <div className="section-divider"></div>
            <p className="section-description">
              Our Senior Management Team brings together diverse expertise and passionate commitment 
              to transform our strategic vision into tangible community impact.
            </p>
          </div>
        </section>

        {/* Executive Director */}
        <section className="content-section">
          <div className="">
            <div className="executive-photo">
              <div className="photo-placeholder">{executiveDirector?.emoji || "👨‍💼"}</div>
              <div className="executive-role">Executive Director</div>
            </div>
            <div className="executive-info">
              <h2>{executiveDirector?.name || "Director Syphero Okello"}</h2>
              <p className="executive-tagline">{executiveDirector?.title || "Senior Partner, Community Development Associates"}</p>
              <div className="executive-bio">
                <p>
                  {executiveDirector?.bio || "With over 20 years of experience in community development and strategic leadership, Director Syphero provides visionary guidance to our organization. His expertise in sustainable development and stakeholder engagement has been instrumental in our growth."}
                </p>
              </div>
              <div className="executive-highlights">
                <div className="highlight-item">
                  <div className="highlight-number">20+</div>
                  <div className="highlight-label">Years Experience</div>
                </div>
                <div className="highlight-item">
                  <div className="highlight-number">50+</div>
                  <div className="highlight-label">Communities Served</div>
                </div>
                <div className="highlight-item">
                  <div className="highlight-number">200+</div>
                  <div className="highlight-label">Team Members Led</div>
                </div>
              </div>
              <div className="executive-expertise">
                <h4>Key Expertise</h4>
                <div className="expertise-tags">
                  {executiveDirector?.expertise.map((skill, index) => (
                    <span key={index} className="expertise-tag">{skill}</span>
                  )) || (
                    <>
                      <span className="expertise-tag">Strategic Planning</span>
                      <span className="expertise-tag">Community Development</span>
                      <span className="expertise-tag">Stakeholder Engagement</span>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Management Team Grid */}
        <section className="content-section">
          <div className="section-header">
            <h2>Management Team</h2>
            <div className="section-divider"></div>
          </div>

          <div className="management-grid">
            {/* Program Director */}
            <div className="management-card">
              <div className="management-photo">
                <div className="photo-placeholder">{programDirector?.emoji || "👨‍🌾"}</div>
                <div className="management-role">Program Director</div>
              </div>
              <div className="management-info">
                <h3>{programDirector?.name || "Bill Clinton"}</h3>
                <p className="management-title">{programDirector?.title || "Agricultural Economist & Sustainability Expert"}</p>
                <p className="management-bio">
                  {programDirector?.bio || "Specializing in sustainable agriculture and rural development, provides crucial guidance on our environmental and economic empowerment programs with over 15 years of experience in agricultural policy and food security initiatives."}
                </p>
                <div className="management-responsibilities">
                  <h4>Key Responsibilities</h4>
                  <ul>
                    <li>Program design and implementation</li>
                    <li>Impact assessment and evaluation</li>
                    <li>Team leadership and capacity building</li>
                    <li>Donor reporting and compliance</li>
                  </ul>
                </div>
                <div className="management-stats">
                  <div className="stat">
                    <div className="stat-number">15+</div>
                    <div className="stat-label">Programs</div>
                  </div>
                  <div className="stat">
                    <div className="stat-number">5,000+</div>
                    <div className="stat-label">Beneficiaries</div>
                  </div>
                  <div className="stat">
                    <div className="stat-number">8</div>
                    <div className="stat-label">Team Leads</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Finance & Operations Director */}
            <div className="management-card">
              <div className="management-photo">
                <div className="photo-placeholder">{financeDirector?.emoji || "💼"}</div>
                <div className="management-role">Finance & Operations Director</div>
              </div>
              <div className="management-info">
                <h3>{financeDirector?.name || "Victor Otieno"}</h3>
                <p className="management-title">{financeDirector?.title || "Financial Strategist & Investment Advisor"}</p>
                <p className="management-bio">
                  {financeDirector?.bio || "With extensive experience in corporate finance and investment management, provides strategic financial guidance and ensures sustainable resource allocation for our organizational growth and program expansion."}
                </p>
                <div className="management-responsibilities">
                  <h4>Key Responsibilities</h4>
                  <ul>
                    <li>Financial planning and budgeting</li>
                    <li>Grant management and compliance</li>
                    <li>Operational systems development</li>
                    <li>Risk management and internal controls</li>
                  </ul>
                </div>
                <div className="management-stats">
                  <div className="stat">
                    <div className="stat-number">2M+</div>
                    <div className="stat-label">Budget Managed</div>
                  </div>
                  <div className="stat">
                    <div className="stat-number">100%</div>
                    <div className="stat-label">Audit Compliance</div>
                  </div>
                  <div className="stat">
                    <div className="stat-number">15+</div>
                    <div className="stat-label">Grants Managed</div>
                  </div>
                </div>
              </div>
            </div>

  
            <div className="management-card">
              <div className="management-photo">
                <div className="photo-placeholder">{communityDirector?.emoji || "👩‍⚕️"}</div>
                <div className="management-role">Community Engagement Director</div>
              </div>
              <div className="management-info">
                <h3>{communityDirector?.name || "Agiye Felix"}</h3>
                <p className="management-title">{communityDirector?.title || "Public Health Specialist"}</p>
                <p className="management-bio">
                  {communityDirector?.bio || "A public health expert with extensive experience in community health initiatives. Oversees our health and wellness programs, ensuring they meet community needs through evidence-based interventions and preventive healthcare strategies."}
                </p>
                <div className="management-responsibilities">
                  <h4>Key Responsibilities</h4>
                  <ul>
                    <li>Stakeholder engagement and relations</li>
                    <li>Community needs assessment</li>
                    <li>Partnership development</li>
                    <li>Volunteer coordination</li>
                  </ul>
                </div>
                <div className="management-stats">
                  <div className="stat">
                    <div className="stat-number">50+</div>
                    <div className="stat-label">Communities</div>
                  </div>
                  <div className="stat">
                    <div className="stat-number">200+</div>
                    <div className="stat-label">Partners</div>
                  </div>
                  <div className="stat">
                    <div className="stat-number">500+</div>
                    <div className="stat-label">Volunteers</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Monitoring & Evaluation Director */}
            <div className="management-card">
              <div className="management-photo">
                <div className="photo-placeholder">{medDirector?.emoji || "👨‍💻"}</div>
                <div className="management-role">M&E Director</div>
              </div>
              <div className="management-info">
                <h3>{medDirector?.name || "Joseph Orlale"}</h3>
                <p className="management-title">{medDirector?.title || "Technology Entrepreneur"}</p>
                <p className="management-bio">
                  {medDirector?.bio || "A tech innovator passionate about digital inclusion. Guides our digital transformation initiatives and technology adoption strategies, bringing 12 years of experience in software development and digital infrastructure."}
                </p>
                <div className="management-responsibilities">
                  <h4>Key Responsibilities</h4>
                  <ul>
                    <li>M&E system design and implementation</li>
                    <li>Data analysis and impact assessment</li>
                    <li>Research and learning initiatives</li>
                    <li>Performance reporting</li>
                  </ul>
                </div>
                <div className="management-stats">
                  <div className="stat">
                    <div className="stat-number">95%</div>
                    <div className="stat-label">Data Accuracy</div>
                  </div>
                  <div className="stat">
                    <div className="stat-number">50+</div>
                    <div className="stat-label">Impact Reports</div>
                  </div>
                  <div className="stat">
                    <div className="stat-number">10+</div>
                    <div className="stat-label">Research Studies</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Human Resources Director */}
            <div className="management-card">
              <div className="management-photo">
                <div className="photo-placeholder">{hrDirector?.emoji || "⚖️"}</div>
                <div className="management-role">HR & Administration Director</div>
              </div>
              <div className="management-info">
                <h3>{hrDirector?.name || "Michael Odhiambo"}</h3>
                <p className="management-title">{hrDirector?.title || "Legal Counsel & Governance Specialist"}</p>
                <p className="management-bio">
                  {hrDirector?.bio || "As a seasoned legal professional, ensures our organization maintains the highest standards of legal compliance and ethical governance while providing strategic counsel on regulatory matters and corporate governance."}
                </p>
                <div className="management-responsibilities">
                  <h4>Key Responsibilities</h4>
                  <ul>
                    <li>Talent acquisition and retention</li>
                    <li>Performance management</li>
                    <li>Staff development and training</li>
                    <li>Organizational culture development</li>
                  </ul>
                </div>
                <div className="management-stats">
                  <div className="stat">
                    <div className="stat-number">85%</div>
                    <div className="stat-label">Staff Retention</div>
                  </div>
                  <div className="stat">
                    <div className="stat-number">200+</div>
                    <div className="stat-label">Team Members</div>
                  </div>
                  <div className="stat">
                    <div className="stat-number">50+</div>
                    <div className="stat-label">Training Sessions</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Communications Director */}
            <div className="management-card">
              <div className="management-photo">
                <div className="photo-placeholder">{communicationsDirector?.emoji || "📚"}</div>
                <div className="management-role">Communications Director</div>
              </div>
              <div className="management-info">
                <h3>{communicationsDirector?.name || "Nancy Kaunda"}</h3>
                <p className="management-title">{communicationsDirector?.title || "Education Policy Expert"}</p>
                <p className="management-bio">
                  {communicationsDirector?.bio || "An accomplished educator and policy expert, brings 18 years of experience in educational reform and curriculum development, ensuring our educational programs align with national standards and community needs."}
                </p>
                <div className="management-responsibilities">
                  <h4>Key Responsibilities</h4>
                  <ul>
                    <li>Brand management and positioning</li>
                    <li>Digital media strategy</li>
                    <li>Public relations and media engagement</li>
                    <li>Content development and storytelling</li>
                  </ul>
                </div>
                <div className="management-stats">
                  <div className="stat">
                    <div className="stat-number">10K+</div>
                    <div className="stat-label">Social Reach</div>
                  </div>
                  <div className="stat">
                    <div className="stat-number">50+</div>
                    <div className="stat-label">Media Features</div>
                  </div>
                  <div className="stat">
                    <div className="stat-number">100+</div>
                    <div className="stat-label">Success Stories</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Structure */}
        <section className="content-section">
          <div className="section-header">
            <h2>Organizational Structure</h2>
            <div className="section-divider"></div>
            <p className="section-description">
              Clear reporting lines and collaborative relationships that ensure efficient operations
            </p>
          </div>

          <div className="org-structure">
            <div className="structure-level executive">
              <div className="level-label">Executive Leadership</div>
              <div className="position executive-director">
                <div className="position-title">Executive Director</div>
                <div className="position-name">{executiveDirector?.name || "Director Syphero Okello"}</div>
              </div>
            </div>

            <div className="structure-connector"></div>

            <div className="structure-level directors">
              <div className="level-label">Director Level</div>
              <div className="directors-grid">
                <div className="position director">
                  <div className="position-title">Program Director</div>
                  <div className="position-name">{programDirector?.name || "Bill Clinton"}</div>
                </div>
                <div className="position director">
                  <div className="position-title">Finance & Operations</div>
                  <div className="position-name">{financeDirector?.name || "Victor Otieno"}</div>
                </div>
                <div className="position director">
                  <div className="position-title">Community Engagement</div>
                  <div className="position-name">{communityDirector?.name || "Agiye Felix"}</div>
                </div>
                <div className="position director">
                  <div className="position-title">M&E Director</div>
                  <div className="position-name">{medDirector?.name || "Joseph Orlale"}</div>
                </div>
                <div className="position director">
                  <div className="position-title">HR & Administration</div>
                  <div className="position-name">{hrDirector?.name || "Michael Odhiambo"}</div>
                </div>
                <div className="position director">
                  <div className="position-title">Communications</div>
                  <div className="position-name">{communicationsDirector?.name || "Nancy Kaunda"}</div>
                </div>
              </div>
            </div>

            <div className="structure-connector"></div>
<div className="structure-level managers">
  <div className="level-label">Management & Staff</div>
  <div className="managers-grid">
    <div className="department">
      <div className="department-name">Program Teams</div>
      <div className="staff-count">45 Team Members</div>
    </div>
    <div className="department">
      <div className="department-name">Field Operations</div>
      <div className="staff-count">35 Team Members</div>
    </div>
    <div className="department">
      <div className="department-name">Support Staff</div>
      <div className="staff-count">25 Team Members</div>
    </div>
    <div className="department">
      <div className="department-name">Volunteers</div>
      <div className="staff-count">500+ Volunteers</div>
    </div>
    <div className="department">
      <div className="department-name">Technical Specialists</div>
      <div className="staff-count">18 Team Members</div>
    </div>
    <div className="department">
      <div className="department-name">Community Liaisons</div>
      <div className="staff-count">22 Team Members</div>
    </div>
  </div>
</div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="cta-section">
          <div className="cta-content">
            <h2>Join Our Leadership Team</h2>
            <p>
              We're always looking for passionate professionals who want to make a difference. 
              Explore opportunities to grow with us and contribute to meaningful community transformation.
            </p>
            <div className="cta-buttons">
              <a href="/opportunities/jobs" className="cta-button primary">
                View Career Opportunities
              </a>
              <a href="/contact" className="cta-button secondary">
                Contact Our Team
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SeniorManagement;