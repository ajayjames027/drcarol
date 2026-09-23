import React from 'react';
import { Link } from 'react-router-dom';
import { mentorData } from '../data/mentorData';

const Home = () => {
  const { personalInfo } = mentorData;

  return (
    <div className="home-page animate-fade-in">
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-content">
          <div className="hero-text">
            <h1>{personalInfo.name}</h1>
            <h2 className="hero-designation">{personalInfo.designation}</h2>
            <div className="hero-department">
              {personalInfo.department} <br/>
              {personalInfo.institution}, {personalInfo.location}
            </div>
            <p className="hero-bio">
              {personalInfo.bio}
            </p>
            <div className="hero-actions">
              <Link to="/qualification-experience" className="btn btn-primary">
                View Profile
              </Link>
              <Link to="/contact" className="btn btn-outline">
                Contact Me
              </Link>
            </div>
          </div>
          <div className="hero-image-container">
            {/* Placeholder for professional portrait */}
            <img 
              src="/carol.png" 
              alt={personalInfo.name} 
              className="hero-image" 
            />
          </div>
        </div>
      </section>

      {/* Short About Section */}
      <section className="section section-bg-alt">
        <div className="container">
          <div className="section-title">
            <h2>About</h2>
          </div>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', color: 'var(--color-text-main)', fontSize: '1.05rem', lineHeight: '1.8' }}>
            <p>
              With extensive experience as an {personalInfo.designation} at {personalInfo.institution}, my work focuses on teaching, research, and mentoring students in the {personalInfo.department}.
            </p>
            <p>
              I hold a {personalInfo.qualifications} and am actively involved in several academic and professional initiatives aimed at bridging the gap between theoretical knowledge and practical applications in Information Technology.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
