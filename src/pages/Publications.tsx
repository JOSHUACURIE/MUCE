import React from 'react';
import '../styles/globals.css';

const Publications: React.FC = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <div className="breadcrumb">
          <a href="/">Home</a> &gt; <a href="/knowledge">Knowledge Hub</a> &gt; <span>Publications</span>
        </div>
        <h1 className="page-title">Publications</h1>
        <p className="page-subtitle">
          Research papers, policy briefs, and academic publications documenting our work and impact
        </p>
      </div>

      <div className="page-content">
        {/* Featured Publication */}
        <section className="content-section">
          <div className="section-header">
            <h2>Featured Publication</h2>
            <div className="section-divider"></div>
          </div>
          
          <div className="featured-publication">
            <div className="publication-cover">
              <div className="cover-placeholder">📘</div>
            </div>
            <div className="publication-details">
              <div className="publication-type">Research Report</div>
              <h2>Community-Led Development: A Sustainable Approach to Poverty Alleviation</h2>
              <p className="publication-authors">
                By Dr. Michael Njoroge, Prof. Elizabeth Nyong'o, & Research Team
              </p>
              <p className="publication-abstract">
                This comprehensive study examines the effectiveness of community-led development 
                models in achieving sustainable poverty reduction. Based on five years of data 
                from 50 communities, the research demonstrates how participatory approaches 
                lead to more lasting and meaningful impact compared to traditional aid models.
              </p>
              <div className="publication-meta">
                <div className="meta-item">
                  <strong>Published:</strong> February 2024
                </div>
                <div className="meta-item">
                  <strong>Pages:</strong> 156
                </div>
                <div className="meta-item">
                  <strong>DOI:</strong> 10.1234/millimani.2024.001
                </div>
              </div>
              <div className="publication-actions">
                <button className="download-button primary">
                  📥 Download Full Report (PDF)
                </button>
                <button className="download-button secondary">
                  📄 Executive Summary
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Publication Categories */}
        <section className="content-section">
          <div className="section-header">
            <h2>Publication Categories</h2>
            <div className="section-divider"></div>
          </div>
          
          <div className="categories-grid">
            <div className="category-item">
              <div className="category-icon">📊</div>
              <h3>Research Reports</h3>
              <p>In-depth studies and empirical research findings</p>
              <span className="count">15 publications</span>
            </div>
            
            <div className="category-item">
              <div className="category-icon">📋</div>
              <h3>Policy Briefs</h3>
              <p>Concise recommendations for policymakers and stakeholders</p>
              <span className="count">8 publications</span>
            </div>
            
            <div className="category-item">
              <div className="category-icon">🎓</div>
              <h3>Academic Papers</h3>
              <p>Peer-reviewed articles in academic journals</p>
              <span className="count">12 publications</span>
            </div>
            
            <div className="category-item">
              <div className="category-icon">📖</div>
              <h3>Case Studies</h3>
              <p>Detailed analyses of specific programs and interventions</p>
              <span className="count">20 publications</span>
            </div>
          </div>
        </section>

       
        <section className="content-section">
          <div className="section-header">
            <h2>Recent Publications</h2>
            <div className="section-divider"></div>
          </div>
          
          <div className="publications-list">
            {/* Publication 1 */}
            <div className="publication-item">
              <div className="pub-type">Policy Brief</div>
              <h3>Integrating Climate Resilience in Community Development Programs</h3>
              <p className="pub-authors">Environmental Research Team, Millimani United</p>
              <p className="pub-description">
                Practical framework for incorporating climate adaptation strategies into 
                existing community development initiatives.
              </p>
              <div className="pub-meta">
                <span>January 2024</span>
                <span>•</span>
                <span>28 pages</span>
                <span>•</span>
                <span>PDF</span>
              </div>
              <button className="download-link">Download</button>
            </div>

            {/* Publication 2 */}
            <div className="publication-item">
              <div className="pub-type">Research Report</div>
              <h3>Impact of Digital Literacy on Economic Mobility in Rural Communities</h3>
              <p className="pub-authors">Dr. Paul Kamau, Technology & Innovation Unit</p>
              <p className="pub-description">
                Longitudinal study tracking the economic impact of digital skills 
                training across 15 rural communities over three years.
              </p>
              <div className="pub-meta">
                <span>December 2023</span>
                <span>•</span>
                <span>45 pages</span>
                <span>•</span>
                <span>PDF</span>
              </div>
              <button className="download-link">Download</button>
            </div>

            {/* Publication 3 */}
            <div className="publication-item">
              <div className="pub-type">Case Study</div>
              <h3>Women's Entrepreneurship Program: 5-Year Impact Assessment</h3>
              <p className="pub-authors">Gender & Economic Empowerment Department</p>
              <p className="pub-description">
                Comprehensive evaluation of our flagship women's entrepreneurship 
                initiative and its transformative effects on participants and communities.
              </p>
              <div className="pub-meta">
                <span>November 2023</span>
                <span>•</span>
                <span>62 pages</span>
                <span>•</span>
                <span>PDF</span>
              </div>
              <button className="download-link">Download</button>
            </div>

            {/* Publication 4 */}
            <div className="publication-item">
              <div className="pub-type">Academic Paper</div>
              <h3>Community Participation in Sustainable Development: Lessons from East Africa</h3>
              <p className="pub-authors">Published in Journal of Development Studies</p>
              <p className="pub-description">
                Peer-reviewed article analyzing the role of community participation 
                in achieving sustainable development outcomes.
              </p>
              <div className="pub-meta">
                <span>October 2023</span>
                <span>•</span>
                <span>22 pages</span>
                <span>•</span>
                <span>PDF</span>
              </div>
              <button className="download-link">Download</button>
            </div>
          </div>
        </section>

        {/* Research Partners */}
        <section className="content-section">
          <div className="section-header">
            <h2>Research Partners</h2>
            <div className="section-divider"></div>
            <p className="section-description">
              Collaborating with leading academic institutions and research organizations
            </p>
          </div>
          
          <div className="partners-grid">
            <div className="partner-logo">University of Nairobi</div>
            <div className="partner-logo">Kenya Institute of Development Studies</div>
            <div className="partner-logo">African Economic Research Consortium</div>
            <div className="partner-logo">International Development Research Centre</div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Publications;