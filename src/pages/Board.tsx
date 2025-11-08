import React from 'react';
import '../styles/globals.css';
import { boardCommittees } from '../data/board';

const SeniorManagement: React.FC = () => {
  // Get the board members data
  const executiveDirector = boardCommittees.find(member => member.id === 1);
  const programDirector = boardCommittees.find(member => member.id === 2);
  const financeDirector = boardCommittees.find(member => member.id === 5);
  const communityDirector = boardCommittees.find(member => member.id === 3);
  const medDirector = boardCommittees.find(member => member.id === 4);
  const hrDirector = boardCommittees.find(member => member.id === 7);
  const communicationsDirector = boardCommittees.find(member => member.id === 6);

  return (
    <div className="management-page-container">
      <div className="management-page-header">
        <div className="management-breadcrumb">
          <a href="/">Home</a> &gt; <a href="/governance">Governance</a> &gt; <span>Senior Management</span>
        </div>
        <h1 className="management-page-title">Senior Management</h1>
        <p className="management-page-subtitle">
          Meet the dedicated professionals driving our day-to-day operations and program implementation
        </p>
      </div>

      <div className="management-page-content">
        {/* Management Introduction */}
        <section className="management-content-section">
          <div className="management-section-header">
            <h2>Operational Leadership</h2>
            <div className="management-section-divider"></div>
            <p className="management-section-description">
              Our Senior Management Team brings together diverse expertise and passionate commitment 
              to transform our strategic vision into tangible community impact.
            </p>
          </div>
        </section>

        {/* Executive Director - Top Position */}
        <section className="management-content-section">
          <div className="management-executive-director">
            <div className="management-executive-photo">
              {executiveDirector?.imageUrl ? (
                <img 
                  src={executiveDirector.imageUrl} 
                  alt={executiveDirector.altText}
                  className="management-executive-image"
                />
              ) : (
                <div className="management-photo-placeholder">{executiveDirector?.emoji || "👨‍💼"}</div>
              )}
              <div className="management-executive-role">Executive Director</div>
            </div>
            <div className="management-executive-info">
              <h2>{executiveDirector?.name || "Director Syphero Okello"}</h2>
              <p className="management-executive-tagline">{executiveDirector?.title || "Senior Partner, Community Development Associates"}</p>
              <div className="management-executive-bio">
                <p>
                  {executiveDirector?.bio || "With over 20 years of experience in community development and strategic leadership, Director Syphero provides visionary guidance to our organization. His expertise in sustainable development and stakeholder engagement has been instrumental in our growth."}
                </p>
              </div>
              <div className="management-executive-highlights">
                <div className="management-highlight-item">
                  <div className="management-highlight-number">20+</div>
                  <div className="management-highlight-label">Years Experience</div>
                </div>
                <div className="management-highlight-item">
                  <div className="management-highlight-number">50+</div>
                  <div className="management-highlight-label">Communities Served</div>
                </div>
                <div className="management-highlight-item">
                  <div className="management-highlight-number">200+</div>
                  <div className="management-highlight-label">Team Members Led</div>
                </div>
              </div>
              <div className="management-executive-expertise">
                <h4>Key Expertise</h4>
                <div className="management-expertise-tags">
                  {executiveDirector?.expertise.map((skill, index) => (
                    <span key={index} className="management-expertise-tag">{skill}</span>
                  )) || (
                    <>
                      <span className="management-expertise-tag">Strategic Planning</span>
                      <span className="management-expertise-tag">Community Development</span>
                      <span className="management-expertise-tag">Stakeholder Engagement</span>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Management Team Grid - Side by Side */}
        <section className="management-content-section">
          <div className="management-section-header">
            <h2>Management Team</h2>
            <div className="management-section-divider"></div>
          </div>

          <div className="management-team-grid">
            {/* Program Director */}
            <div className="management-team-card">
              <div className="management-team-photo">
                {programDirector?.imageUrl ? (
                  <img 
                    src={programDirector.imageUrl} 
                    alt={programDirector.altText}
                    className="management-team-image"
                  />
                ) : (
                  <div className="management-team-photo-placeholder">{programDirector?.emoji || "👨‍🌾"}</div>
                )}
                <div className="management-team-role">Program Director</div>
              </div>
              <div className="management-team-info">
                <h3>{programDirector?.name || "Bill Clinton"}</h3>
                <p className="management-team-title">{programDirector?.title || "Agricultural Economist & Sustainability Expert"}</p>
                <p className="management-team-bio">
                  {programDirector?.bio || "Specializing in sustainable agriculture and rural development, provides crucial guidance on our environmental and economic empowerment programs with over 15 years of experience in agricultural policy and food security initiatives."}
                </p>
                <div className="management-team-responsibilities">
                  <h4>Key Responsibilities</h4>
                  <ul>
                    <li>Program design and implementation</li>
                    <li>Impact assessment and evaluation</li>
                    <li>Team leadership and capacity building</li>
                    <li>Donor reporting and compliance</li>
                  </ul>
                </div>
                <div className="management-team-stats">
                  <div className="management-team-stat">
                    <div className="management-stat-number">15+</div>
                    <div className="management-stat-label">Programs</div>
                  </div>
                  <div className="management-team-stat">
                    <div className="management-stat-number">5,000+</div>
                    <div className="management-stat-label">Beneficiaries</div>
                  </div>
                  <div className="management-team-stat">
                    <div className="management-stat-number">8</div>
                    <div className="management-stat-label">Team Leads</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Finance & Operations Director */}
            <div className="management-team-card">
              <div className="management-team-photo">
                {financeDirector?.imageUrl ? (
                  <img 
                    src={financeDirector.imageUrl} 
                    alt={financeDirector.altText}
                    className="management-team-image"
                  />
                ) : (
                  <div className="management-team-photo-placeholder">{financeDirector?.emoji || "💼"}</div>
                )}
                <div className="management-team-role">Finance & Operations Director</div>
              </div>
              <div className="management-team-info">
                <h3>{financeDirector?.name || "Victor Otieno"}</h3>
                <p className="management-team-title">{financeDirector?.title || "Financial Strategist & Investment Advisor"}</p>
                <p className="management-team-bio">
                  {financeDirector?.bio || "With extensive experience in corporate finance and investment management, provides strategic financial guidance and ensures sustainable resource allocation for our organizational growth and program expansion."}
                </p>
                <div className="management-team-responsibilities">
                  <h4>Key Responsibilities</h4>
                  <ul>
                    <li>Financial planning and budgeting</li>
                    <li>Grant management and compliance</li>
                    <li>Operational systems development</li>
                    <li>Risk management and internal controls</li>
                  </ul>
                </div>
                <div className="management-team-stats">
                  <div className="management-team-stat">
                    <div className="management-stat-number">2M+</div>
                    <div className="management-stat-label">Budget Managed</div>
                  </div>
                  <div className="management-team-stat">
                    <div className="management-stat-number">100%</div>
                    <div className="management-stat-label">Audit Compliance</div>
                  </div>
                  <div className="management-team-stat">
                    <div className="management-stat-number">15+</div>
                    <div className="management-stat-label">Grants Managed</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Community Engagement Director */}
            <div className="management-team-card">
              <div className="management-team-photo">
                {communityDirector?.imageUrl ? (
                  <img 
                    src={communityDirector.imageUrl} 
                    alt={communityDirector.altText}
                    className="management-team-image"
                  />
                ) : (
                  <div className="management-team-photo-placeholder">{communityDirector?.emoji || "👩‍⚕️"}</div>
                )}
                <div className="management-team-role">Community Engagement Director</div>
              </div>
              <div className="management-team-info">
                <h3>{communityDirector?.name || "Agiye Felix"}</h3>
                <p className="management-team-title">{communityDirector?.title || "Public Health Specialist"}</p>
                <p className="management-team-bio">
                  {communityDirector?.bio || "A public health expert with extensive experience in community health initiatives. Oversees our health and wellness programs, ensuring they meet community needs through evidence-based interventions and preventive healthcare strategies."}
                </p>
                <div className="management-team-responsibilities">
                  <h4>Key Responsibilities</h4>
                  <ul>
                    <li>Stakeholder engagement and relations</li>
                    <li>Community needs assessment</li>
                    <li>Partnership development</li>
                    <li>Volunteer coordination</li>
                  </ul>
                </div>
                <div className="management-team-stats">
                  <div className="management-team-stat">
                    <div className="management-stat-number">50+</div>
                    <div className="management-stat-label">Communities</div>
                  </div>
                  <div className="management-team-stat">
                    <div className="management-stat-number">200+</div>
                    <div className="management-stat-label">Partners</div>
                  </div>
                  <div className="management-team-stat">
                    <div className="management-stat-number">500+</div>
                    <div className="management-stat-label">Volunteers</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Monitoring & Evaluation Director */}
            <div className="management-team-card">
              <div className="management-team-photo">
                {medDirector?.imageUrl ? (
                  <img 
                    src={medDirector.imageUrl} 
                    alt={medDirector.altText}
                    className="management-team-image"
                  />
                ) : (
                  <div className="management-team-photo-placeholder">{medDirector?.emoji || "👨‍💻"}</div>
                )}
                <div className="management-team-role">M&E Director</div>
              </div>
              <div className="management-team-info">
                <h3>{medDirector?.name || "Joseph Orlale"}</h3>
                <p className="management-team-title">{medDirector?.title || "Technology Entrepreneur"}</p>
                <p className="management-team-bio">
                  {medDirector?.bio || "A tech innovator passionate about digital inclusion. Guides our digital transformation initiatives and technology adoption strategies, bringing 12 years of experience in software development and digital infrastructure."}
                </p>
                <div className="management-team-responsibilities">
                  <h4>Key Responsibilities</h4>
                  <ul>
                    <li>M&E system design and implementation</li>
                    <li>Data analysis and impact assessment</li>
                    <li>Research and learning initiatives</li>
                    <li>Performance reporting</li>
                  </ul>
                </div>
                <div className="management-team-stats">
                  <div className="management-team-stat">
                    <div className="management-stat-number">95%</div>
                    <div className="management-stat-label">Data Accuracy</div>
                  </div>
                  <div className="management-team-stat">
                    <div className="management-stat-number">50+</div>
                    <div className="management-stat-label">Impact Reports</div>
                  </div>
                  <div className="management-team-stat">
                    <div className="management-stat-number">10+</div>
                    <div className="management-stat-label">Research Studies</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Human Resources Director */}
            <div className="management-team-card">
              <div className="management-team-photo">
                {hrDirector?.imageUrl ? (
                  <img 
                    src={hrDirector.imageUrl} 
                    alt={hrDirector.altText}
                    className="management-team-image"
                  />
                ) : (
                  <div className="management-team-photo-placeholder">{hrDirector?.emoji || "⚖️"}</div>
                )}
                <div className="management-team-role">HR & Administration Director</div>
              </div>
              <div className="management-team-info">
                <h3>{hrDirector?.name || "Michael Odhiambo"}</h3>
                <p className="management-team-title">{hrDirector?.title || "Legal Counsel & Governance Specialist"}</p>
                <p className="management-team-bio">
                  {hrDirector?.bio || "As a seasoned legal professional, ensures our organization maintains the highest standards of legal compliance and ethical governance while providing strategic counsel on regulatory matters and corporate governance."}
                </p>
                <div className="management-team-responsibilities">
                  <h4>Key Responsibilities</h4>
                  <ul>
                    <li>Talent acquisition and retention</li>
                    <li>Performance management</li>
                    <li>Staff development and training</li>
                    <li>Organizational culture development</li>
                  </ul>
                </div>
                <div className="management-team-stats">
                  <div className="management-team-stat">
                    <div className="management-stat-number">85%</div>
                    <div className="management-stat-label">Staff Retention</div>
                  </div>
                  <div className="management-team-stat">
                    <div className="management-stat-number">200+</div>
                    <div className="management-stat-label">Team Members</div>
                  </div>
                  <div className="management-team-stat">
                    <div className="management-stat-number">50+</div>
                    <div className="management-stat-label">Training Sessions</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Communications Director */}
            <div className="management-team-card">
              <div className="management-team-photo">
                {communicationsDirector?.imageUrl ? (
                  <img 
                    src={communicationsDirector.imageUrl} 
                    alt={communicationsDirector.altText}
                    className="management-team-image"
                  />
                ) : (
                  <div className="management-team-photo-placeholder">{communicationsDirector?.emoji || "📚"}</div>
                )}
                <div className="management-team-role">Communications Director</div>
              </div>
              <div className="management-team-info">
                <h3>{communicationsDirector?.name || "Nancy Kaunda"}</h3>
                <p className="management-team-title">{communicationsDirector?.title || "Education Policy Expert"}</p>
                <p className="management-team-bio">
                  {communicationsDirector?.bio || "An accomplished educator and policy expert, brings 18 years of experience in educational reform and curriculum development, ensuring our educational programs align with national standards and community needs."}
                </p>
                <div className="management-team-responsibilities">
                  <h4>Key Responsibilities</h4>
                  <ul>
                    <li>Brand management and positioning</li>
                    <li>Digital media strategy</li>
                    <li>Public relations and media engagement</li>
                    <li>Content development and storytelling</li>
                  </ul>
                </div>
                <div className="management-team-stats">
                  <div className="management-team-stat">
                    <div className="management-stat-number">10K+</div>
                    <div className="management-stat-label">Social Reach</div>
                  </div>
                  <div className="management-team-stat">
                    <div className="management-stat-number">50+</div>
                    <div className="management-stat-label">Media Features</div>
                  </div>
                  <div className="management-team-stat">
                    <div className="management-stat-number">100+</div>
                    <div className="management-stat-label">Success Stories</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Rest of your sections... */}
      </div>
    </div>
  );
};

export default SeniorManagement;