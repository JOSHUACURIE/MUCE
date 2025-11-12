import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/globals.css';

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // EmailJS service parameters
      const templateParams = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
        date_time: new Date().toLocaleString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          timeZoneName: 'short'
        }),
        is_urgent: formData.subject.includes('emergency') || formData.message.toLowerCase().includes('urgent')
      };

   
      await emailjs.send(
        'service_gxnc7f9',      
        'template_qjjc7ve',     
        templateParams,
        'EmonCbOLCGXqFDhe3'      
      );

      console.log('Email sent successfully:', formData);
      alert('Thank you for your message! We will get back to you soon.');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });

    } catch (error) {
      console.error('Error sending email:', error);
      alert('Sorry, there was an error sending your message. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <div className="breadcrumb">
          <a href="/">Home</a> &gt; <span>Contact Us</span>
        </div>
        <h1 className="page-title">Contact Us</h1>
        <p className="page-subtitle">
          Get in touch with Millimani United Community Empowerment. We're here to help and collaborate.
        </p>
      </div>

      <div className="page-content">
        {/* Contact Introduction */}
        <section className="content-section">
          <div className="section-header">
            <h2>Let's Connect</h2>
            <div className="section-divider"></div>
            <p className="section-description">
              Whether you're looking to volunteer, partner with us, or learn more about our programs, 
              we'd love to hear from you. Reach out through any of the channels below.
            </p>
          </div>
        </section>

        {/* Contact Methods Grid - Updated to 6 cards */}
        <section className="content-section">
          <div className="contact-methods-grid">
            <div className="contact-method-card">
              <div className="contact-icon">📞</div>
              <h3>Call Us</h3>
              <p>Speak directly with our team members</p>
              <div className="contact-details">
                <div className="contact-detail">
                  <strong>Primary:</strong> +254 706 494506
                </div>
                <div className="contact-detail">
                  <strong>Alternative:</strong> +254 797 495504
                </div>
              </div>
              <div className="contact-hours">
                <strong>Available:</strong> Mon - Fri, 8:00 AM - 5:00 PM
              </div>
            </div>

            <div className="contact-method-card">
              <div className="contact-icon">✉️</div>
              <h3>Email Us</h3>
              <p>Send us a detailed message</p>
              <div className="contact-details">
                <div className="contact-detail">
                  <strong>General Inquiries:</strong>
                </div>
                <a href="mailto:millmanimitedcommunityempower@gmail.com" className="contact-link">
                  millmanimitedcommunityempower@gmail.com
                </a>
                <div className="contact-detail">
                  <strong>Response Time:</strong> Within 24 hours
                </div>
              </div>
            </div>

            <div className="contact-method-card">
              <div className="contact-icon">📍</div>
              <h3>Visit Us</h3>
              <p>Find us at our locations</p>
              <div className="contact-details">
                <div className="contact-detail">
                  <strong>Main Office:</strong> Kisumu East
                </div>
                <div className="contact-detail">
                  <strong>Field Office:</strong> Kolwa Central
                </div>
                <div className="contact-detail">
                  <strong>Community Center:</strong> Renja Primary
                </div>
              </div>
              <div className="contact-hours">
                <strong>Office Hours:</strong> Mon - Fri, 8:00 AM - 5:00 PM
              </div>
            </div>

            <div className="contact-method-card">
              <div className="contact-icon">💬</div>
              <h3>Social Media</h3>
              <p>Connect with us online</p>
              <div className="contact-details">
                <div className="social-contact">
                  <a 
                    href="https://www.facebook.com/profile.php?id=61582098536116" 
                    className="social-contact-link"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <span className="social-contact-icon">📘</span>
                    Facebook
                  </a>
                </div>
                <div className="social-contact">
                  <a 
                    href="https://linkedin.com" 
                    className="social-contact-link"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <span className="social-contact-icon">💼</span>
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>

            {/* New Contact Cards */}
            <div className="contact-method-card">
              <div className="contact-icon">🤝</div>
              <h3>Partnerships</h3>
              <p>Collaborate with our organization</p>
              <div className="contact-details">
                <div className="contact-detail">
                  <strong>Partnership Inquiries:</strong>
                </div>
                <a href="mailto:partnerships@millimani.org" className="contact-link">
                  partnerships@millimani.org
                </a>
                <div className="contact-detail">
                  <strong>Process:</strong> Initial meeting scheduled within 48 hours
                </div>
              </div>
            </div>

            <div className="contact-method-card">
              <div className="contact-icon">📋</div>
              <h3>Program Info</h3>
              <p>Learn about our initiatives</p>
              <div className="contact-details">
                <div className="contact-detail">
                  <strong>Program Director:</strong> +254 723 456789
                </div>
                <div className="contact-detail">
                  <strong>Information Sessions:</strong> Every Wednesday, 3:00 PM
                </div>
                <div className="contact-detail">
                  <strong>Location:</strong> Community Center
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="content-section">
          <div className="contact-form-section">
            <div className="form-header">
              <h2>Send Us a Message</h2>
              <p>Fill out the form below and we'll get back to you as soon as possible.</p>
            </div>
            
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    required
                    placeholder="Enter your full name"
                    disabled={isSubmitting}
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    required
                    placeholder="Enter your email address"
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone" className="form-label">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Enter your phone number"
                    disabled={isSubmitting}
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject" className="form-label">Subject *</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="form-select"
                    required
                    disabled={isSubmitting}
                  >
                    <option value="">Select a subject</option>
                    <option value="volunteer">Volunteer Opportunities</option>
                    <option value="partnership">Partnership Inquiry</option>
                    <option value="donation">Donation Information</option>
                    <option value="program">Program Information</option>
                    <option value="general">General Inquiry</option>
                    <option value="feedback">Feedback & Suggestions</option>
                    <option value="emergency">Emergency / Urgent Matter</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea"
                  required
                  rows={6}
                  placeholder="Tell us how we can help you..."
                  disabled={isSubmitting}
                ></textarea>
              </div>

              <div className="form-submit">
                <button 
                  type="submit" 
                  className="submit-button"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending Message...' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* FAQ Section - Updated to 6 items */}
        <section className="content-section">
          <div className="section-header">
            <h2>Frequently Asked Questions</h2>
            <div className="section-divider"></div>
          </div>
          
          <div className="faq-grid">
            <div className="faq-item">
              <h3>How can I volunteer with Millimani United?</h3>
              <p>
                We welcome volunteers in various capacities. You can fill out the contact form above 
                specifying your interest in volunteering, and our team will reach out with available 
                opportunities matching your skills and interests. We have both regular and one-time volunteering opportunities.
              </p>
            </div>

            <div className="faq-item">
              <h3>What areas do you serve?</h3>
              <p>
                Our primary service areas include Kisumu East, Kolwa Central, and Renja Primary 
                communities. We're continuously expanding to reach more communities in need across 
                the larger Kisumu County region.
              </p>
            </div>

            <div className="faq-item">
              <h3>How can my organization partner with you?</h3>
              <p>
                We're always open to strategic partnerships. Please use the contact form and select 
                "Partnership Inquiry" as the subject. Our partnership team will schedule a meeting 
                to discuss potential collaboration, shared goals, and how we can work together effectively.
              </p>
            </div>

            <div className="faq-item">
              <h3>Do you accept donations?</h3>
              <p>
                Yes, we gratefully accept donations to support our programs. You can contact us 
                through the form above or visit our offices to learn more about donation options 
                and how your contribution will make an impact. We accept both monetary and in-kind donations.
              </p>
            </div>

            <div className="faq-item">
              <h3>What types of programs do you offer?</h3>
              <p>
                We offer various community empowerment programs including educational support, 
                vocational training, healthcare initiatives, environmental conservation projects, 
                and youth development programs. Each program is designed to address specific community 
                needs and create sustainable impact.
              </p>
            </div>

            <div className="faq-item">
              <h3>How can I stay updated with your activities?</h3>
              <p>
                You can stay connected through our social media channels, subscribe to our newsletter 
                by contacting us, or visit our community center for regular updates. We also hold 
                monthly community meetings where we share progress reports and future plans.
              </p>
            </div>
          </div>
        </section>

        {/* Emergency Contact */}
        <section className="emergency-contact-section">
          <div className="emergency-content">
            <div className="emergency-icon">🚨</div>
            <div className="emergency-text">
              <h3>Emergency Contact</h3>
              <p>
                For urgent matters requiring immediate attention outside of office hours, 
                please call: <strong>+254 706 494506</strong>
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactUs;