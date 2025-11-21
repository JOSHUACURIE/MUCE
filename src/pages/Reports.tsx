import React from 'react';
import '../styles/globals.css';

const Reports: React.FC = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <div className="breadcrumb">
          <a href="/">Home</a> &gt; <a href="/knowledge">Knowledge Hub</a> &gt; <span>Reports</span>
        </div>
        <h1 className="page-title">Reports</h1>
        <p className="page-subtitle">
          Comprehensive reports on our programs, impact, and organizational performance.
        </p>
      </div>

      <div className="page-content">
        {/* Annual Report */}
        <section className="content-section">
          <div className="section-header">
            <h2>Annual Report 2024</h2>
            <div className="section-divider"></div>
          </div>
          
          <div className="annual-report">
            <div className="report-cover">
              <div className="cover-title">
                <div className="year">2024</div>
                <div className="title">Annual Impact Report</div>
                <div className="subtitle">Building Resilient Communities</div>
              </div>
            </div>
            <div className="report-highlights">
              <h3>Year in Review</h3>
              <p>
                2024 marked a significant milestone in our journey towards community 
                transformation. This report captures our achievements, challenges, 
                and the incredible impact made possible through your support.
              </p>
              
              <div className="key-metrics">
                <div className="metric">
                  <div className="metric-value">18,000+</div>
                  <div className="metric-label">Lives Impacted</div>
                </div>
                <div className="metric">
                  <div className="metric-value">52</div>
                  <div className="metric-label">Communities Served</div>
                </div>
                <div className="metric">
                  <div className="metric-value">2.8M</div>
                  <div className="metric-label">Program Investment</div>
                </div>
                <div className="metric">
                  <div className="metric-value">91%</div>
                  <div className="metric-label">Program Success Rate</div>
                </div>
              </div>
              
              <div className="report-downloads">
                <button className="download-btn full-report">
                  📘 Download Full Report
                </button>
                <button className="download-btn summary">
                  📄 Executive Summary
                </button>
                <button className="download-btn infographic">
                  📊 Impact Infographic
                </button>
              </div>
            </div>
          </div>
        </section>

       {/* Quarterly Reports */}
<section className="content-section">
  <div className="section-header">
    <h2>Quarterly Reports</h2>
    <div className="section-divider"></div>
  </div>
  
  <div className="quarterly-reports">
    <div className="quarter-card">
      <div className="quarter">Q4 2024</div>
      <h3>October - December 2024</h3>
      <p>Year-end performance and program completion report</p>
      <div className="report-stats">
        <span>✅ 18 programs completed</span>
        <span>📈 28% growth in impact</span>
      </div>
      <button className="download-quarter">Download Report</button>
    </div>
    
    <div className="quarter-card">
      <div className="quarter">Q3 2024</div>
      <h3>July - September 2024</h3>
      <p>Mid-year review and strategic adjustments</p>
      <div className="report-stats">
        <span>🎯 94% target achievement</span>
        <span>🤝 6 new partnerships</span>
      </div>
      <button className="download-quarter">Download Report</button>
    </div>
    
    <div className="quarter-card">
      <div className="quarter">Q2 2024</div>
      <h3>April - June 2024</h3>
      <p>Strategic expansion and impact assessment</p>
      <div className="report-stats">
        <span>🌱 8 new communities</span>
        <span>📊 15% efficiency gain</span>
      </div>
      <button className="download-quarter">Download Report</button>
    </div>
    
    <div className="quarter-card">
      <div className="quarter">Q1 2024</div>
      <h3>January - March 2024</h3>
      <p>Year beginning and strategic implementation</p>
      <div className="report-stats">
        <span>🚀 100% program kickoff</span>
        <span>🎓 550 training sessions</span>
      </div>
      <button className="download-quarter">Download Report</button>
    </div>

    <div className="quarter-card">
      <div className="quarter">Q4 2023</div>
      <h3>October - December 2023</h3>
      <p>Annual impact review and strategic planning</p>
      <div className="report-stats">
        <span>🏆 12,000+ lives impacted</span>
        <span>💼 85% budget utilization</span>
      </div>
      <button className="download-quarter">Download Report</button>
    </div>

    <div className="quarter-card">
      <div className="quarter">Q3 2023</div>
      <h3>July - September 2023</h3>
      <p>Operational excellence and community feedback</p>
      <div className="report-stats">
        <span>⭐ 98% satisfaction rate</span>
        <span>📈 22% program growth</span>
      </div>
      <button className="download-quarter">Download Report</button>
    </div>
  </div>

</section>
        {/* Program Reports */}
<section className="content-section">
  <div className="section-header">
    <h2>Program Reports</h2>
    <div className="section-divider"></div>
  </div>
  
  <div className="program-reports">
    <div className="program-report">
      <div className="program-category">Education</div>
      <h3>Scholarship Program Impact Report 2024</h3>
      <p>
        Comprehensive analysis of our educational support initiatives 
        and their impact on student outcomes and community development.
      </p>
      <div className="program-metrics">
        <div className="program-metric">
          <strong>550</strong> students supported
        </div>
        <div className="program-metric">
          <strong>96%</strong> completion rate
        </div>
        <div className="program-metric">
          <strong>48%</strong> university enrollment
        </div>
      </div>
      <div className="program-report-footer">
        <button className="download-program">Download Report</button>
      </div>
    </div>
    
    <div className="program-report">
      <div className="program-category">Economic Empowerment</div>
      <h3>Entrepreneurship Development Final Report 2024</h3>
      <p>
        Evaluation of our business training and startup support programs 
        and their contribution to local economic development.
      </p>
      <div className="program-metrics">
        <div className="program-metric">
          <strong>280</strong> businesses started
        </div>
        <div className="program-metric">
          <strong>900</strong> jobs created
        </div>
        <div className="program-metric">
          <strong>78%</strong> business survival rate
        </div>
      </div>
      <div className="program-report-footer">
        <button className="download-program">Download Report</button>
      </div>
    </div>
    
    <div className="program-report">
      <div className="program-category">Environment</div>
      <h3>Sustainability Initiatives Progress Report 2024</h3>
      <p>
        Assessment of environmental conservation programs and their 
        impact on community resilience and ecosystem health.
      </p>
      <div className="program-metrics">
        <div className="program-metric">
          <strong>60,000</strong> trees planted
        </div>
        <div className="program-metric">
          <strong>18</strong> clean energy projects
        </div>
        <div className="program-metric">
          <strong>87%</strong> community participation
        </div>
      </div>
      <div className="program-report-footer">
        <button className="download-program">Download Report</button>
      </div>
    </div>
  </div>
</section>

        {/* Financial Reports */}
        <section className="content-section">
          <div className="section-header">
            <h2>Financial Reports</h2>
            <div className="section-divider"></div>
            <p className="section-description">
              Transparent financial reporting and accountability
            </p>
          </div>
          
          <div className="financial-reports">
            <div className="financial-report">
              <div className="report-year">2024</div>
              <h3>Audited Financial Statements</h3>
              <p>Complete financial audit conducted by independent auditors</p>
              <div className="financial-highlights">
                <div className="highlight">✅ Clean audit opinion</div>
                <div className="highlight">📊 93% program spending</div>
                <div className="highlight">💼 7% administrative costs</div>
              </div>
              <button className="download-financial">Download Financials</button>
            </div>
            
            <div className="financial-report">
              <div className="report-year">2023</div>
              <h3>Financial Performance Report</h3>
              <p>Annual financial review and performance analysis</p>
              <div className="financial-highlights">
                <div className="highlight">📈 27% revenue growth</div>
                <div className="highlight">🎯 100% budget utilization</div>
                <div className="highlight">🔄 16% reserve fund</div>
              </div>
              <button className="download-financial">Download Financials</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Reports;