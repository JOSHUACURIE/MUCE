import React, { useState } from 'react';
import emailjs from '@emailjs/browser'
import '../styles/globals.css';
import './Volunteers.css';

interface VolunteerPosition {
  id: number;
  title: string;
  department: string;
  location: string;
  commitment: 'Full-time' | 'Part-time' | 'Flexible' | 'One-time';
  description: string;
  requirements: string[];
  responsibilities: string[];
  postedDate: string;
  deadline: string;
  duration?: string;
  experience: string;
}

interface VolunteerFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  position: string;
  otherPosition: string;
  availability: string;
  experience: string;
  motivation: string;
  skills: string;
  reference: string;
  hearAboutUs: string;
}

const Volunteers: React.FC = () => {
  const [selectedPosition, setSelectedPosition] = useState<VolunteerPosition | null>(null);
  const [filter, setFilter] = useState<string>('all');
  const [showForm, setShowForm] = useState<boolean>(false);
  const [formData, setFormData] = useState<VolunteerFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    position: '',
    otherPosition: '',
    availability: '',
    experience: '',
    motivation: '',
    skills: '',
    reference: '',
    hearAboutUs: ''
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const volunteerPositions: VolunteerPosition[] = [
    {
      id: 1,
      title: "Media Relations Volunteer",
      department: "Communications",
      location: "Kisumu",
      commitment: "Part-time",
      description: "Help us build and maintain relationships with media outlets to share our mission and impact stories.",
      requirements: [
        "Strong communication and interpersonal skills",
        "Experience or interest in media relations",
        "Ability to draft press releases and media kits",
        "Knowledge of social media platforms",
        "Organized and detail-oriented"
      ],
      responsibilities: [
        "Assist in developing media contact lists",
        "Help draft press releases and media alerts",
        "Support media outreach campaigns",
        "Track media coverage",
        "Assist with media event coordination"
      ],
      postedDate: "2025-11-15",
      deadline: "2026-01-15",
      duration: "6 months minimum",
      experience: "No experience required"
    },
    {
      id: 2,
      title: "Research Volunteer",
      department: "Research & Development",
      location: "Kisumu",
      commitment: "Flexible",
      description: "Support our research initiatives by gathering data, analyzing information, and preparing reports.",
      requirements: [
        "Strong analytical and critical thinking skills",
        "Attention to detail",
        "Ability to work independently",
        "Basic computer skills",
        "Interest in community development"
      ],
      responsibilities: [
        "Collect and organize data",
        "Conduct literature reviews",
        "Assist in survey development",
        "Help analyze research findings",
        "Support report preparation"
      ],
        postedDate: "2025-11-15",
      deadline: "2026-01-15",
      duration: "3 months minimum",
      experience: "No experience required"
    },
    {
      id: 3,
      title: "Social Media Volunteer",
      department: "Communications",
      location: "Remote",
      commitment: "Flexible",
      description: "Help us grow our online presence and engage with our community through social media platforms.",
      requirements: [
        "Familiarity with major social media platforms",
        "Creative content creation skills",
        "Good written communication",
        "Basic graphic design skills a plus",
        "Passion for digital storytelling"
      ],
      responsibilities: [
        "Create and schedule social media posts",
        "Engage with our online community",
        "Help develop social media campaigns",
        "Monitor social media analytics",
        "Assist with content planning"
      ],
      postedDate: "2025-11-15",
      deadline: "2026-01-15",
      duration: "3 months minimum",
      experience: "No experience required"
    },
    {
      id: 4,
      title: "Marketing Volunteer",
      department: "Communications",
      location: "Kisumu",
      commitment: "Part-time",
      description: "Support our marketing efforts to promote our programs and increase community engagement.",
      requirements: [
        "Interest in marketing and communications",
        "Creative thinking skills",
        "Good written and verbal communication",
        "Basic knowledge of marketing principles",
        "Team player attitude"
      ],
      responsibilities: [
        "Assist in developing marketing materials",
        "Support promotional campaigns",
        "Help with audience research",
        "Participate in brainstorming sessions",
        "Assist with event promotion"
      ],
       postedDate: "2025-11-15",
      deadline: "2026-01-15",
      duration: "4 months minimum",
      experience: "No experience required"
    },
    {
      id: 5,
      title: "Event Management Volunteer",
      department: "Operations",
      location: "Kisumu",
      commitment: "One-time",
      description: "Help us plan and execute community events that bring people together for meaningful causes.",
      requirements: [
        "Strong organizational skills",
        "Ability to work in a fast-paced environment",
        "Good problem-solving skills",
        "Team player with positive attitude",
        "Flexibility with scheduling"
      ],
      responsibilities: [
        "Assist with event planning and logistics",
        "Help with event setup and teardown",
        "Support registration and guest services",
        "Coordinate with vendors and partners",
        "Help manage event activities"
      ],
       postedDate: "2025-11-15",
      deadline: "2026-01-15",
      duration: "Event-based",
      experience: "No experience required"
    },
    {
      id: 6,
      title: "Sponsorship Volunteer",
      department: "Partnerships",
      location: "Kisumu",
      commitment: "Part-time",
      description: "Support our efforts to build relationships with sponsors and partners who believe in our mission.",
      requirements: [
        "Good communication and relationship-building skills",
        "Professional demeanor",
        "Organized and detail-oriented",
        "Interest in partnership development",
        "Basic research skills"
      ],
      responsibilities: [
        "Research potential sponsorship opportunities",
        "Help prepare sponsorship proposals",
        "Assist with sponsor communications",
        "Support sponsor recognition activities",
        "Help maintain partnership databases"
      ],
       postedDate: "2025-11-15",
      deadline: "2026-01-15",
      duration: "4 months minimum",
      experience: "No experience required"
    },
    {
      id: 7,
      title: "Administration Volunteer",
      department: "Operations",
      location: "Kisumu",
      commitment: "Full-time",
      description: "Provide essential administrative support to help our organization run smoothly and efficiently.",
      requirements: [
        "Strong organizational skills",
        "Proficiency with office software",
        "Attention to detail",
        "Good communication skills",
        "Reliable and punctual"
      ],
      responsibilities: [
        "Assist with data entry and record keeping",
        "Help with filing and document organization",
        "Support mail processing and distribution",
        "Answer phones and greet visitors",
        "Help prepare meeting materials"
      ],
        postedDate: "2025-11-15",
      deadline: "2026-01-15",
      duration: "6 months minimum",
      experience: "No experience required"
    }
  ];

  const positionOptions = [
    "Media Relations",
    "Research",
    "Social Media",
    "Marketing",
    "Event Management",
    "Sponsorship",
    "Administration",
    "Other"
  ];

  const filteredPositions = filter === 'all' 
    ? volunteerPositions 
    : volunteerPositions.filter(position => position.commitment.toLowerCase() === filter.toLowerCase());

  const openPositionDetails = (position: VolunteerPosition) => {
    setSelectedPosition(position);
  };

  const closePositionDetails = () => {
    setSelectedPosition(null);
  };

  const openForm = (position?: VolunteerPosition) => {
    if (position) {
      setFormData(prev => ({
        ...prev,
        position: position.title
      }));
    }
    setShowForm(true);
    setSubmitStatus('idle');
  };

  const closeForm = () => {
    setShowForm(false);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      position: '',
      otherPosition: '',
      availability: '',
      experience: '',
      motivation: '',
      skills: '',
      reference: '',
      hearAboutUs: ''
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Replace these with your actual EmailJS credentials
      const templateParams = {
        to_email: 'sypharopse64@gmail.com',
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        phone: formData.phone,
        address: `${formData.address}, ${formData.city}`,
        position: formData.position === 'Other' ? formData.otherPosition : formData.position,
        availability: formData.availability,
        experience: formData.experience,
        motivation: formData.motivation,
        skills: formData.skills,
        reference: formData.reference,
        hear_about: formData.hearAboutUs,
        reply_to: formData.email
      };

      // Send email using EmailJS
      await emailjs.send(
        'service_gxnc7f9', // Replace with your EmailJS service ID
        'template_1a5bjun', // Replace with your EmailJS template ID
        templateParams,
        'EmonCbOLCGXqFDhe3' // Replace with your EmailJS public key
      );

      setSubmitStatus('success');
      setTimeout(() => {
        closeForm();
      }, 3000);
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="page-container">
      <div className="page-header volunteer-header">
        <div className="breadcrumb">
          <a href="/">Home</a> &gt; <a href="/opportunities">Opportunities</a> &gt; <span>Volunteer Positions</span>
        </div>
        <h1 className="page-title">Volunteer With Us</h1>
        <p className="page-subtitle">
          When you volunteer with MUCE, you will have the opportunity to volunteer with all of our entities and also with our partners from around the world. Remember – "unique and engaging".
        </p>
        
        <div className="contact-info">
          <h3>MUCE</h3>
          
          <p>+254 797 495504</p>
          <p>milimaniunitedcommunityempower@gmail.com</p>
        </div>

        <button className="cta-button" onClick={() => openForm()}>
          Apply to Volunteer
        </button>
      </div>

      <div className="page-content">
        {/* Volunteer Statistics */}
        <section className="content-section">
          <div className="volunteer-stats">
            <div className="stat-card">
              <div className="stat-number">{volunteerPositions.length}</div>
              <div className="stat-label">Available Positions</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">4</div>
              <div className="stat-label">Departments</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">2</div>
              <div className="stat-label">Locations</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">50+</div>
              <div className="stat-label">Active Volunteers</div>
            </div>
          </div>
        </section>

        {/* Volunteer Filters */}
        <section className="content-section">
          <div className="section-header">
            <h2>Choose Your Volunteer Position</h2>
            <div className="section-divider"></div>
          </div>

          <div className="volunteer-filters">
            <button 
              className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All Positions
            </button>
            <button 
              className={`filter-btn ${filter === 'full-time' ? 'active' : ''}`}
              onClick={() => setFilter('full-time')}
            >
              Full-time
            </button>
            <button 
              className={`filter-btn ${filter === 'part-time' ? 'active' : ''}`}
              onClick={() => setFilter('part-time')}
            >
              Part-time
            </button>
            <button 
              className={`filter-btn ${filter === 'flexible' ? 'active' : ''}`}
              onClick={() => setFilter('flexible')}
            >
              Flexible
            </button>
            <button 
              className={`filter-btn ${filter === 'one-time' ? 'active' : ''}`}
              onClick={() => setFilter('one-time')}
            >
              One-time
            </button>
          </div>

          {/* Volunteer Positions List */}
          <div className="volunteer-positions-list">
            {filteredPositions.map(position => (
              <div key={position.id} className="position-card">
                <div className="position-header">
                  <h3 className="position-title">{position.title}</h3>
                  <span className={`position-commitment ${position.commitment.toLowerCase()}`}>
                    {position.commitment}
                  </span>
                </div>
                
                <div className="position-meta">
                  <div className="meta-item">
                    <span className="meta-icon">🏢</span>
                    <span>{position.department}</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-icon">📍</span>
                    <span>{position.location}</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-icon">⏱️</span>
                    <span>{position.experience}</span>
                  </div>
                  {position.duration && (
                    <div className="meta-item">
                      <span className="meta-icon">📅</span>
                      <span>{position.duration}</span>
                    </div>
                  )}
                </div>

                <p className="position-description">{position.description}</p>

                <div className="position-footer">
                  <div className="position-dates">
                    <span>Posted: {formatDate(position.postedDate)}</span>
                    <span className="deadline">Apply by: {formatDate(position.deadline)}</span>
                  </div>
                  <div className="position-actions">
                    <button 
                      className="view-details-btn"
                      onClick={() => openPositionDetails(position)}
                    >
                      View Details
                    </button>
                    <button 
                      className="apply-now-btn"
                      onClick={() => openForm(position)}
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Volunteer Process */}
        <section className="content-section process-section">
          <div className="section-header">
            <h2>Volunteer Process</h2>
            <div className="section-divider"></div>
          </div>
          
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <h4>Find Your Role</h4>
              <p>Browse available positions and find one that matches your interests and availability</p>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h4>Submit Application</h4>
              <p>Send your application to our volunteer coordinator</p>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h4>Orientation</h4>
              <p>Attend a volunteer orientation session to learn about our organization</p>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <h4>Start Volunteering</h4>
              <p>Begin your volunteer journey and make a difference in the community</p>
            </div>
          </div>
        </section>
      </div>

      {/* Position Details Modal */}
      {selectedPosition && (
        <div className="modal-overlay" onClick={closePositionDetails}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>{selectedPosition.title}</h2>
              <button className="close-modal" onClick={closePositionDetails}>×</button>
            </div>
            
            <div className="modal-body">
              <div className="position-detail-meta">
                <div className="detail-item">
                  <strong>Department:</strong> {selectedPosition.department}
                </div>
                <div className="detail-item">
                  <strong>Location:</strong> {selectedPosition.location}
                </div>
                <div className="detail-item">
                  <strong>Time Commitment:</strong> {selectedPosition.commitment}
                </div>
                <div className="detail-item">
                  <strong>Experience Needed:</strong> {selectedPosition.experience}
                </div>
                {selectedPosition.duration && (
                  <div className="detail-item">
                    <strong>Duration:</strong> {selectedPosition.duration}
                  </div>
                )}
                <div className="detail-item">
                  <strong>Application Deadline:</strong> {formatDate(selectedPosition.deadline)}
                </div>
              </div>

              <div className="position-detail-section">
                <h3>Position Description</h3>
                <p>{selectedPosition.description}</p>
              </div>

              <div className="position-detail-section">
                <h3>Key Responsibilities</h3>
                <ul>
                  {selectedPosition.responsibilities.map((responsibility, index) => (
                    <li key={index}>{responsibility}</li>
                  ))}
                </ul>
              </div>

              <div className="position-detail-section">
                <h3>Requirements</h3>
                <ul>
                  {selectedPosition.requirements.map((requirement, index) => (
                    <li key={index}>{requirement}</li>
                  ))}
                </ul>
              </div>

              <div className="application-actions">
                <button 
                  className="apply-btn primary"
                  onClick={() => {
                    closePositionDetails();
                    openForm(selectedPosition);
                  }}
                >
                  Apply for this Position
                </button>
                <button className="apply-btn secondary" onClick={closePositionDetails}>
                  Download Position Description
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Volunteer Application Form Modal */}
      {showForm && (
        <div className="modal-overlay" onClick={closeForm}>
          <div className="modal-content form-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Volunteer Application</h2>
              <button className="close-modal" onClick={closeForm}>×</button>
            </div>
            
            <div className="modal-body">
              {submitStatus === 'success' ? (
                <div className="submit-success">
                  <div className="success-icon">✓</div>
                  <h3>Application Submitted Successfully!</h3>
                  <p>Thank you for your interest in volunteering with us. We'll review your application and get back to you soon.</p>
                </div>
              ) : (
                <form className="volunteer-form" onSubmit={handleSubmit}>
                  <div className="form-section">
                    <h3>Personal Information</h3>
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="firstName">First Name *</label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="lastName">Last Name *</label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="email">Email Address *</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="phone">Phone Number *</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="address">Address</label>
                        <input
                          type="text"
                          id="address"
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="city">City</label>
                        <input
                          type="text"
                          id="city"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-section">
                    <h3>Volunteer Preferences</h3>
                    <div className="form-group">
                      <label htmlFor="position">Preferred Volunteer Position *</label>
                      <select
                        id="position"
                        name="position"
                        value={formData.position}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="">Select a position</option>
                        {positionOptions.map(option => (
                          <option key={option} value={option}>{option}</option>
                        ))}
                      </select>
                    </div>

                    {formData.position === 'Other' && (
                      <div className="form-group">
                        <label htmlFor="otherPosition">Please specify</label>
                        <input
                          type="text"
                          id="otherPosition"
                          name="otherPosition"
                          value={formData.otherPosition}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    )}

                    <div className="form-group">
                      <label htmlFor="availability">Availability *</label>
                      <textarea
                        id="availability"
                        name="availability"
                        value={formData.availability}
                        onChange={handleInputChange}
                        placeholder="Please indicate your available days and times..."
                        rows={3}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-section">
                    <h3>Background & Experience</h3>
                    <div className="form-group">
                      <label htmlFor="experience">Relevant Experience</label>
                      <textarea
                        id="experience"
                        name="experience"
                        value={formData.experience}
                        onChange={handleInputChange}
                        placeholder="Describe any relevant volunteer or work experience..."
                        rows={3}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="skills">Skills & Qualifications</label>
                      <textarea
                        id="skills"
                        name="skills"
                        value={formData.skills}
                        onChange={handleInputChange}
                        placeholder="List any skills, certifications, or qualifications..."
                        rows={3}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="motivation">Motivation for Volunteering *</label>
                      <textarea
                        id="motivation"
                        name="motivation"
                        value={formData.motivation}
                        onChange={handleInputChange}
                        placeholder="Why do you want to volunteer with us?..."
                        rows={4}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-section">
                    <h3>Additional Information</h3>
                    <div className="form-group">
                      <label htmlFor="reference">Reference</label>
                      <input
                        type="text"
                        id="reference"
                        name="reference"
                        value={formData.reference}
                        onChange={handleInputChange}
                        placeholder="Name and contact of someone who can provide a reference"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="hearAboutUs">How did you hear about us?</label>
                      <select
                        id="hearAboutUs"
                        name="hearAboutUs"
                        value={formData.hearAboutUs}
                        onChange={handleInputChange}
                      >
                        <option value="">Select an option</option>
                        <option value="Website">Website</option>
                        <option value="Social Media">Social Media</option>
                        <option value="Friend/Colleague">Friend/Colleague</option>
                        <option value="Event">Event</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  {submitStatus === 'error' && (
                    <div className="error-message">
                      There was an error submitting your application. Please try again or contact us directly.
                    </div>
                  )}

                  <div className="form-actions">
                    <button 
                      type="button" 
                      className="cancel-btn"
                      onClick={closeForm}
                    >
                      Cancel
                    </button>
                    <button 
                      type="submit" 
                      className="submit-btn"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Application'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Volunteers;