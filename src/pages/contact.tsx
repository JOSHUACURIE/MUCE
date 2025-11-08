import React from 'react';
import '../styles/globals.css';

const ContactUs: React.FC = () => {
  return (
    <div className="contact-us-section">
      {/* Organization Information */}
      <div className="contact-section">
        <h3 className="contact-title">Millimani United <br />Community Empowerment</h3>
        <p className="contact-tagline">
          United We Create, Nurture and Transform Lives
        </p>
        <div className="contact-info">
          <div className="contact-item">
            <strong>Email:</strong> millmanimitedcommunityempower@gmail.com
          </div>
          <div className="contact-item">
            <strong>Phone:</strong> 254706494506 / +254 797 495504
          </div>
        </div>
      </div>

      {/* Connect With Us */}
      <div className="contact-section">
        <h4 className="contact-heading">Connect With Us</h4>
        
        {/* Social Media Links */}
        <div className="social-links">
          <a 
            href="https://facebook.com" 
            className="social-link facebook"
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Follow us on Facebook"
          >
            <span className="social-icon">📘</span>
            <span className="social-text">Facebook</span>
          </a>
          
          <a 
            href="https://linkedin.com" 
            className="social-link linkedin"
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Follow us on LinkedIn"
          >
            <span className="social-icon">💼</span>
            <span className="social-text">LinkedIn</span>
          </a>
          
          <a 
            href="mailto:millmanimitedcommunityempower@gmail.com"
            className="social-link email"
            aria-label="Send us an email"
          >
            <span className="social-icon">✉️</span>
            <span className="social-text">Email</span>
          </a>
        </div>

        {/* Newsletter Signup */}
        <div className="newsletter-section">
          <h5 className="newsletter-title">Stay Updated</h5>
          <p className="newsletter-description">
            Subscribe to our newsletter for updates on our programs and impact.
          </p>
          <div className="newsletter-form">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="newsletter-input"
              aria-label="Email address for newsletter"
            />
            <button 
              type="button" 
              className="newsletter-button"
              aria-label="Subscribe to newsletter"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;