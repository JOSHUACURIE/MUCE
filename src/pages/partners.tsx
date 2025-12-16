import './Partners.css'


function Partners ()  {
  return (
    <div className="partners-section">
      <div className="partners-header">
        
      
        <h1 className="partner-main-title">OUR PARTNERS</h1>
        <div className="partner-tagline">EDUCATE, EMPOWER AND EXPLORE</div>
      </div>
      
      <div className="partners-content">
        <div className="partner-info-card">
          <h3>Our Partners in Progress</h3>
          <p>
            We collaborate with forward-thinking organizations, institutions, 
            and industry leaders who share our vision for sustainable development 
            and youth empowerment.
          </p>
        </div>
        
        <div className="partner-logos">
          <div className="logo-grid">
            <div className="logo-placeholder">Partner Logo 1</div>
      
          </div>
        </div>
      </div>
      
      <div className="partners-cta">
        <p>Interested in partnering with us?</p>
        <button className="partner-cta-btn">Become a Partner</button>
      </div>
    </div>
  );
};

export default Partners;