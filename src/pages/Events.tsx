import React from 'react';
import '../styles/globals.css';

const Events: React.FC = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <div className="breadcrumb">
          <a href="/">Home</a> &gt; <a href="/knowledge">Knowledge Hub</a> &gt; <span>Events</span>
        </div>
        <h1 className="page-title">Events</h1>
        <p className="page-subtitle">
          Upcoming events, workshops, and community gatherings
        </p>
      </div>

      <div className="page-content">
      
        <section className="content-section">
          <div className="section-header">
            <h2>Featured Event</h2>
            <div className="section-divider"></div>
          </div>
          
          <div className="featured-event">
            <div className="event-banner">
              <div className="event-date">
                <div className="date-month">APR</div>
                <div className="date-day">15</div>
                <div className="date-year">2024</div>
              </div>
              <div className="event-details">
                <div className="event-category">Annual Conference</div>
                <h2>Community Transformation Summit 2024</h2>
                <p className="event-tagline">
                  "Building Resilient Communities for Sustainable Development"
                </p>
                <div className="event-meta">
                  <div className="meta-item">
                    <span className="icon">⏰</span>
                    <span>9:00 AM - 5:00 PM EAT</span>
                  </div>
                  <div className="meta-item">
                    <span className="icon">📍</span>
                    <span>Nairobi Convention Center</span>
                  </div>
                  <div className="meta-item">
                    <span className="icon">👥</span>
                    <span>500+ Expected Attendees</span>
                  </div>
                </div>
                <p className="event-description">
                  Join us for our flagship annual conference bringing together community leaders, 
                  development partners, policymakers, and stakeholders to share insights, 
                  celebrate achievements, and chart the course for sustainable community development.
                </p>
                <div className="event-actions">
                  <button className="register-btn">Register Now</button>
                  <button className="learn-more-btn">Learn More</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="content-section">
          <div className="section-header">
            <h2>Upcoming Events</h2>
            <div className="section-divider"></div>
          </div>
          
          <div className="upcoming-events">
            
            <div className="event-card">
              <div className="event-date-small">
                <div className="month">NOV</div>
                <div className="day">20-21</div>
              </div>
              <div className="event-info">
                <div className="event-type">Workshop</div>
                <h3>Digital Marketting and Soft SKills</h3>
                <div className="event-meta-small">
                  <span>🕒2:00 PM - 5:00 PM</span>
                  <br></br>
                  <span>📍 Renja Village, Kisumu East</span>
                </div>
                <p>
                  Hands-on training session on digital tools and platforms by AJIRA digital.
                </p>
                <div className="event-stats">
                  <span>🎯 100+ seats available</span>
                  <span>💰 Free admission</span>
                </div>
                <button className="event-action">Register</button>
              </div>
            </div>

           
 
            <div className="event-card">
              <div className="event-date-small">
                <div className="month">DEC</div>
                <div className="day">12</div>
              </div>
              <div className="event-info">
                <div className="event-type">Training</div>
                <h3>Sustainable Agriculture Workshop</h3>
                <div className="event-meta-small">
                  <span>🕒 8:00 AM - 4:00 PM</span>
                  <span>📍 Green Farms Demonstration Site</span>
                </div>
                <p>
                  Practical training on climate-smart agriculture techniques, 
                  organic farming, and sustainable land management practices.
                </p>
                <div className="event-stats">
                  <span>🌱 Hands-on training</span>
                  <span>📚 Take-home materials</span>
                </div>
                <button className="event-action">Register</button>
              </div>
            </div>

        
            <div className="event-card">
              <div className="event-date-small">
                <div className="month">JAN</div>
                <div className="day">20</div>
              </div>
              <div className="event-info">
                <div className="event-type">Networking</div>
                <h3>Women in Business Mixer</h3>
                <div className="event-meta-small">
                  <span>🕒 6:00 PM - 8:00 PM</span>
                  <span>📍 Business Incubator Lounge</span>
                </div>
                <p>
                  Networking event for women entrepreneurs to connect, share 
                  experiences, and explore collaboration opportunities.
                </p>
                <div className="event-stats">
                  <span>💼 Business networking</span>
                  <span>🎉 Light refreshments</span>
                </div>
                <button className="event-action">Register</button>
              </div>
            </div>
          </div>
        </section>


        <section className="content-section">
          <div className="section-header">
            <h2>Past Events</h2>
            <div className="section-divider"></div>
            <p className="section-description">
              Missed an event? Access materials and recordings from our previous gatherings
            </p>
          </div>
          
          <div className="past-events">
            <div className="past-event">
              <div className="event-year">2025</div>
              <h3>Environmental Conservation Symposium</h3>
              <p>February 15, 2025 • 250 attendees</p>
              <div className="event-resources">
                <button className="resource-btn">📊 Presentations</button>
                <button className="resource-btn">📷 Photos</button>
                <button className="resource-btn">🎥 Recording</button>
              </div>
            </div>
            
            <div className="past-event">
              <div className="event-year">2025</div>
              <h3>Annual Stakeholder Meeting</h3>
              <p>January 5, 2025 • 180 attendees</p>
              <div className="event-resources">
                <button className="resource-btn">📊 Presentations</button>
                <button className="resource-btn">📄 Report</button>
                <button className="resource-btn">📷 Photos</button>
              </div>
            </div>
            
            <div className="past-event">
              <div className="event-year">2023</div>
              <h3>Education Innovation Fair</h3>
              <p>October 20, 2024 • 300+ attendees</p>
              <div className="event-resources">
                <button className="resource-btn">📊 Presentations</button>
                <button className="resource-btn">📷 Photos</button>
                <button className="resource-btn">🎥 Highlights</button>
              </div>
            </div>
          </div>
        </section>

        <section className="content-section">
          <div className="section-header">
            <h2>Event Calendar</h2>
            <div className="section-divider"></div>
          </div>
          
          <div className="event-calendar">
            <div className="calendar-header">
              <h3>April 2024</h3>
              <div className="calendar-nav">
                <button>←</button>
                <button>Today</button>
                <button>→</button>
              </div>
            </div>
            <div className="calendar-grid">
              <div className="calendar-week">
                <div className="day-header">Sun</div>
                <div className="day-header">Mon</div>
                <div className="day-header">Tue</div>
                <div className="day-header">Wed</div>
                <div className="day-header">Thu</div>
                <div className="day-header">Fri</div>
                <div className="day-header">Sat</div>
              </div>
              <div className="calendar-days">
               
                <div className="day empty"></div>
                <div className="day empty"></div>
                <div className="day">
                  <div className="day-number">1</div>
                </div>
                <div className="day">
                  <div className="day-number">2</div>
                </div>
                <div className="day">
                  <div className="day-number">3</div>
                </div>
                <div className="day">
                  <div className="day-number">4</div>
                </div>
                <div className="day has-event">
                  <div className="day-number">5</div>
                  <div className="event-dot">Youth Leadership</div>
                </div>
                <div className="day">
                  <div className="day-number">6</div>
                </div>
                <div className="day">
                  <div className="day-number">7</div>
                </div>
                <div className="day">
                  <div className="day-number">8</div>
                </div>
                <div className="day">
                  <div className="day-number">9</div>
                </div>
                <div className="day">
                  <div className="day-number">10</div>
                </div>
                <div className="day">
                  <div className="day-number">11</div>
                </div>
                <div className="day has-event">
                  <div className="day-number">12</div>
                  <div className="event-dot">Agriculture Workshop</div>
                </div>
                <div className="day has-event featured">
                  <div className="day-number">15</div>
                  <div className="event-dot">Transformation Summit</div>
                </div>

              </div>
            </div>
          </div>
        </section>

    
        <section className="cta-section">
          <div className="cta-content">
            <h2>Host an Event With Us</h2>
            <p>
              Interested in collaborating on an event? We partner with organizations 
              and communities to host workshops, seminars, and gatherings that drive 
              positive change.
            </p>
            <div className="cta-buttons">
              <a href="/contact" className="cta-button primary">
                Propose an Event
              </a>
              <a href="/partners" className="cta-button secondary">
                Become a Partner
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Events;