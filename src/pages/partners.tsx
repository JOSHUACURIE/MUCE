import './Partners.css'
import { Link } from 'react-router-dom';

function Partners ()  {
  return (
    <div className="partners-section">
      <div className="partners-header">
        
      
        <h1 className="partner-main-title">OUR PARTNERS</h1>
        <div className="partner-tagline">Partnering for Education, Empowerment, and Sustainable Development</div>
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
            <div className="logo-placeholder"><img src='https://imgur.com/8EgOYQM.jpg'/></div>
      
          </div>
        </div>
      </div>
      
      <div className="partners-cta">
        <p>Interested in partnering with us?</p>
      <Link to="/contact"><button className="partner-cta-btn">Become a Partner</button></Link>  
      </div>
    </div>
  );
};

export default Partners;