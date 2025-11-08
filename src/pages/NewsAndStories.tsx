import React from 'react';
import './news.css';

// Data structures to remove repetition
const featuredStory = {
  title: "From Street Vendor to Business Owner: Mary's Journey",
  summary: "How our economic empowerment program transformed Mary's life from struggling street vendor to successful business owner, creating opportunities for her entire community in the process.",
  category: "Success Story",
  date: "March 15, 2024",
  readTime: "5 min read",
  facts: [
    { label: "Impact", value: "15 new jobs created in the community" },
    { label: "Duration", value: "18-month support program" },
    { label: "Location", value: "Kibera Community" }
  ],
  link: "/news/marys-journey"
};

const newsArticles = [
  {
    id: 1,
    title: "50 Students Receive Scholarships for Higher Education",
    summary: "Millimani United awards full scholarships to 50 deserving students from vulnerable backgrounds to pursue university education across various disciplines.",
    category: "Education",
    date: "March 12, 2024",
    icon: "🎓",
    link: "/news/scholarships-2024"
  },
  {
    id: 2,
    title: "Community Plants 10,000 Trees in Climate Action Initiative",
    summary: "Over 500 community members participate in massive tree planting exercise to combat climate change and promote environmental conservation in urban areas.",
    category: "Environment",
    date: "March 8, 2024",
    icon: "🌱",
    link: "/news/tree-planting"
  },
  {
    id: 3,
    title: "New Vocational Training Center Opens in Rural Community",
    summary: "State-of-the-art vocational training facility launched to provide practical skills to youth and women in underserved communities across the region.",
    category: "Economic Empowerment",
    date: "March 5, 2024",
    icon: "💼",
    link: "/news/vocational-center"
  },
  {
    id: 4,
    title: "Strategic Partnership with Tech Giant Boosts Digital Literacy",
    summary: "New collaboration brings digital skills training and technology resources to 10,000 community members across 20 locations in Kenya.",
    category: "Partnership",
    date: "February 28, 2024",
    icon: "🤝",
    link: "/news/tech-partnership"
  },
  {
    id: 5,
    title: "Women's Entrepreneurship Program Launches with 200 Participants",
    summary: "New initiative empowers women entrepreneurs with business skills, mentorship, and startup capital to launch sustainable small businesses.",
    category: "Economic Empowerment",
    date: "February 22, 2024",
    icon: "👩‍💼",
    link: "/news/women-entrepreneurship"
  },
  {
    id: 6,
    title: "Community Health Outreach Reaches 5,000 Residents",
    summary: "Free medical camp provides health screenings, vaccinations, and health education to thousands of community members in remote areas.",
    category: "Health & Wellness",
    date: "February 18, 2024",
    icon: "🏥",
    link: "/news/health-outreach"
  }
];

const successStories = [
  {
    id: 1,
    title: "Breaking Barriers: John's Path to Education",
    summary: "Overcoming poverty and disability to become the first university graduate in his family, inspiring his entire community to value education.",
    label: "Personal Journey",
    details: ["📚 First graduate in family", "🌟 10 siblings inspired"],
    link: "/stories/john-education"
  },
  {
    id: 2,
    title: "Women's Cooperative Transforms Local Economy",
    summary: "How a group of 30 women started a successful agricultural cooperative that now supplies produce to major markets in the region.",
    label: "Community Impact",
    details: ["👩‍🌾 30 women empowered", "💰 Income increased by 300%"],
    link: "/stories/women-cooperative"
  },
  {
    id: 3,
    title: "From Dropout to Tech Entrepreneur",
    summary: "A young man's journey from school dropout to successful tech entrepreneur through our digital skills training program.",
    label: "Youth Empowerment",
    details: ["💻 Tech business started", "👥 5 employees hired"],
    link: "/stories/youth-tech"
  },
  {
    id: 4,
    title: "Single Mother Builds Construction Business",
    summary: "From struggling to feed her family to owning a successful construction company employing 15 people in her community.",
    label: "Economic Empowerment",
    details: ["🏗️ Construction business", "👷 15 jobs created"],
    link: "/stories/construction-business"
  },
  {
    id: 5,
    title: "Youth Group Cleans Up Community River",
    summary: "Young environmental activists mobilize their community to restore a polluted river, creating a cleaner environment for all.",
    label: "Environment",
    details: ["🌊 River cleaned", "👥 200 volunteers mobilized"],
    link: "/stories/river-cleanup"
  },
  {
    id: 6,
    title: "Grandmother Starts Community Library",
    summary: "At 65 years old, she transformed her small home into a community library serving over 100 children daily.",
    label: "Education",
    details: ["📖 Community library", "👧 100+ children served"],
    link: "/stories/community-library"
  }
];

const NewsAndStories: React.FC = () => {
  return (
    <div className="news-container">
      <div className="news-header">
        <div className="news-breadcrumb">
          <a href="/">Home</a> &gt; <a href="/knowledge">Knowledge Hub</a> &gt; <span>News & Stories</span>
        </div>
        <h1 className="news-main-title">News & Stories</h1>
        <p className="news-subtitle">
          Latest updates, inspiring stories, and impactful news from our community transformation journey
        </p>
      </div>

      <div className="news-main-content">
        {/* Featured Story */}
        <section className="news-section">
          <div className="section-title-block">
            <h2 className="section-main-title">Featured Story</h2>
            <div className="title-underline"></div>
          </div>
          
          <div className="highlight-story">
            <div className="story-visual">
              <div className="visual-placeholder">📖</div>
            </div>
            <div className="story-info">
              <div className="story-tags">
                <span className="tag-category">{featuredStory.category}</span>
                <span className="tag-date">{featuredStory.date}</span>
                <span className="tag-duration">{featuredStory.readTime}</span>
              </div>
              <h2 className="story-headline">{featuredStory.title}</h2>
              <p className="story-summary">{featuredStory.summary}</p>
              <div className="story-facts">
                {featuredStory.facts.map((fact, index) => (
                  <div key={index} className="fact-item">
                    <strong>{fact.label}:</strong> {fact.value}
                  </div>
                ))}
              </div>
              <a href={featuredStory.link} className="action-button">
                Read Full Story →
              </a>
            </div>
          </div>
        </section>

        {/* Latest News */}
        <section className="news-section">
          <div className="section-title-block">
            <h2 className="section-main-title">Latest News</h2>
            <div className="title-underline"></div>
          </div>
          
          <div className="articles-grid">
            {newsArticles.map((article) => (
              <article key={article.id} className="article-card">
                <div className="article-image">
                  <div className="image-box small">{article.icon}</div>
                </div>
                <div className="article-body">
                  <div className="article-meta">
                    <span className="meta-category">{article.category}</span>
                    <span className="meta-date">{article.date}</span>
                  </div>
                  <h3 className="article-title">{article.title}</h3>
                  <p className="article-preview">{article.summary}</p>
                  <a href={article.link} className="link-more">Read More</a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Success Stories */}
        <section className="news-section">
          <div className="section-title-block">
            <h2 className="section-main-title">Success Stories</h2>
            <div className="title-underline"></div>
            <p className="section-description-text">
              Inspiring stories of transformation from the communities we serve
            </p>
          </div>
          
          <div className="stories-cards-grid">
            {successStories.map((story) => (
              <div key={story.id} className="story-block">
                <div className="story-label">{story.label}</div>
                <h3 className="story-block-title">{story.title}</h3>
                <p className="story-block-text">{story.summary}</p>
                <div className="story-details">
                  {story.details.map((detail, index) => (
                    <span key={index}>{detail}</span>
                  ))}
                </div>
                <a href={story.link} className="story-action-link">Read Story →</a>
              </div>
            ))}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="subscribe-section">
          <div className="subscribe-content">
            <h2 className="subscribe-title">Stay Updated</h2>
            <p className="subscribe-text">
              Never miss a story or important update from Millimani United. 
              Subscribe to our newsletter and be the first to know about our impact.
            </p>
            <div className="subscribe-form">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="email-input"
              />
              <button className="submit-button">Subscribe</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default NewsAndStories;