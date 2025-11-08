import React from 'react';
import '../../styles/globals.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Main Footer Sections */}
        <div className="footer-sections">
          
          {/* Organization Information */}
          <div className="footer-section">
            <h3 className="footer-title">Millimani United <br />Community Empowerment</h3>
            <p className="footer-tagline">
              United We Create, Nurture and Transform Lives
            </p>
            <div className="footer-contact">
              <div className="contact-item">
                <strong>Email:</strong> millmanimitedcommunityempower@gmail.com
              </div>
              <div className="contact-item">
                <strong>Phone:</strong> 254706494506 / +254 797 495504
              </div>
              <div className="contact-item">
                <strong>Locations:</strong> Kisumu East, Kolwa Central, Renja Primary
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="/about/who-we-are">About Us</a></li>
              <li><a href="/governance/board">Our Team</a></li>
              <li><a href="/knowledge/news">News & Updates</a></li>
              <li><a href="/opportunities/jobs">Career Opportunities</a></li>
              <li><a href="/media/gallery">Photo Gallery</a></li>
            </ul>
          </div>

          {/* Our Programs */}
          <div className="footer-section">
            <h4 className="footer-heading">Our Programs</h4>
            <ul className="footer-links">
              <li><a href="/programs/economic-empowerment">Economic Empowerment</a></li>
              <li><a href="/programs/education">Education & Skills</a></li>
              <li><a href="/programs/community">Community Engagement</a></li>
              <li><a href="/programs/sustainability">Sustainability</a></li>
              <li><a href="/programs/human-rights">Human Rights</a></li>
            </ul>
          </div>

          {/* Connect With Us */}
          <div className="footer-section">
            <h4 className="footer-heading">Connect With Us</h4>
            
            {/* Social Media Links */}
            <div className="social-links">
              <a 
                href="https://www.facebook.com/profile.php?id=61582098536116" 
                className="social-link"
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Follow us on Facebook"
              >
                <span className="social-icon">📘</span>
                <span className="social-text">Facebook</span>
              </a>
              
              <a 
                href="https://linkedin.com" 
                className="social-link"
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Follow us on LinkedIn"
              >
                <span className="social-icon">💼</span>
                <span className="social-text">LinkedIn</span>
              </a>
              
              <a 
                href="mailto:millmanimitedcommunityempower@gmail.com"
                className="social-link"
                aria-label="Send us an email"
              >
                <span className="social-icon">✉️</span>
                <span className="social-text">Email</span>
              </a>
            </div>

            {/* Newsletter Section */}
            <div className="newsletter-section">
              <h5 className="newsletter-title">Stay Updated</h5>
              <p className="newsletter-description">
                Subscribe to our newsletter for updates on our programs and impact.
              </p>
              <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="newsletter-input"
                  aria-label="Email address for newsletter"
                  required
                />
                <button 
                  type="submit" 
                  className="newsletter-button"
                  aria-label="Subscribe to newsletter"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="copyright">
              <p>&copy; {currentYear} Millimani United Community Empowerment. All rights reserved.</p>
            </div>

            <div className="legal-links">
              <a href="/privacy-policy" className="legal-link">Privacy Policy</a>
              <a href="/terms-of-service" className="legal-link">Terms of Service</a>
              <a href="/transparency" className="legal-link">Transparency</a>
              <a href="/contact" className="legal-link">Contact Us</a>
            </div>

            <div className="footer-info">
              <p>Registered Non-Profit Organization | Dedicated to Community Transformation</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;