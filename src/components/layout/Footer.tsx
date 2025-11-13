import React from 'react';
import '../../styles/globals.css';
import { FaFacebookF, FaLinkedinIn, FaEnvelope, FaPhoneAlt, FaHandHoldingHeart, FaUsers, FaGraduationCap, FaShieldAlt } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Top Section - Main Info, Quick Links, Connect With Us */}
        <div className="footer-top-sections">
          {/* Organization Information */}
          <div className="footer-section main-info">
            <h3 className="footer-title">
              Millimani United <br /> Community Empowerment
            </h3>
            <p className="footer-tagline">
              United We Create, Nurture and Transform Lives
            </p>

            <div className="footer-contact">
              <div className="contact-item">
                <span className="contact-icon">
                  <FaEnvelope size={22} />
                </span>
                <span>millmanimitedcommunityempower@gmail.com</span>
              </div>

              <div className="contact-item">
                <span className="contact-icon">
                  <FaPhoneAlt size={22} />
                </span>
                <span>254706494506 / +254 797 495504</span>
              </div>

              <div className="contact-item">
                <span className="contact-icon">
                  <HiLocationMarker size={24} />
                </span>
                <span>Kisumu East, Kolwa Central, Renja Primary</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section quick-links">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="/about/who-we-are">About Us</a></li>
              <li><a href="/governance/board">Our Team</a></li>
              <li><a href="/knowledge/news">News & Updates</a></li>
              <li><a href="/opportunities/jobs">Career Opportunities</a></li>
              <li><a href="/media/gallery">Photo Gallery</a></li>
            </ul>
          </div>

          {/* Connect With Us */}
          <div className="footer-section connect-section">
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
                <span className="social-icon">
                  <FaFacebookF />
                </span>
                <span className="social-text">Facebook</span>
              </a>

              <a 
                href="https://linkedin.com" 
                className="social-link"
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Follow us on LinkedIn"
              >
                <span className="social-icon">
                  <FaLinkedinIn />
                </span>
                <span className="social-text">LinkedIn</span>
              </a>

              <a 
                href="mailto:millmanimitedcommunityempower@gmail.com"
                className="social-link"
                aria-label="Send us an email"
              >
                <span className="social-icon">
                  <FaEnvelope />
                </span>
                <span className="social-text">Email</span>
              </a>
            </div>
          </div>
        </div>

        {/* Middle Section - Our Programs, Stay Updated, Additional Content */}
        <div className="footer-middle-sections">
          {/* Our Programs */}
          <div className="footer-section programs-section">
            <h4 className="footer-heading">Our Programs</h4>
            <div className="programs-grid">
              <div className="program-item">
                <span className="program-icon">
                  <FaHandHoldingHeart />
                </span>
                <div className="program-content">
                  <h5>Economic Empowerment</h5>
                  <p>Creating sustainable livelihoods and business opportunities</p>
                </div>
              </div>
              
              <div className="program-item">
                <span className="program-icon">
                  <FaGraduationCap />
                </span>
                <div className="program-content">
                  <h5>Education & Skills</h5>
                  <p>Empowering through knowledge and vocational training</p>
                </div>
              </div>
              
              <div className="program-item">
                <span className="program-icon">
                  <FaUsers />
                </span>
                <div className="program-content">
                  <h5>Community Engagement</h5>
                  <p>Building stronger, more connected communities</p>
                </div>
              </div>
              
             
              <div className="program-item">
                <span className="program-icon">
                  <FaShieldAlt />
                </span>
                <div className="program-content">
                  <h5>Human Rights</h5>
                  <p>Advocating for equality and social justice</p>
                </div>
              </div>
            </div>
          </div>

        <div className="footer-section newsletter-main">
  <div className="newsletter-section">
    <h5 className="newsletter-title">Stay Updated</h5>
    <p className="newsletter-description">
      Join our growing community of changemakers and stay informed about our latest
      programs, community initiatives, and success stories.
    </p>

    <ul className="newsletter-benefits">
      <li>📢 Be the first to know about our upcoming events and projects.</li>
      <li>💡 Get inspiring stories and real impact updates.</li>
     
    </ul>

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
        Subscribe Now
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