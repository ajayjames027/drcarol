import React from 'react';
import { Link } from 'react-router-dom';
import { FiLinkedin, FiMail, FiGlobe, FiFacebook, FiInstagram } from 'react-icons/fi';
import '../styles/footer.css';
import { mentorData } from '../data/mentorData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>{mentorData.personalInfo.name}</h3>
            <p>{mentorData.personalInfo.designation}</p>
            <p>{mentorData.personalInfo.department}</p>
            <p>{mentorData.personalInfo.institution}</p>
            <p>{mentorData.personalInfo.location}</p>
            
            <div className="social-links">
              {mentorData.socialLinks.linkedin && (
                <a href={mentorData.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <FiLinkedin />
                </a>
              )}
              {mentorData.socialLinks.facebook && (
                <a href={mentorData.socialLinks.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <FiFacebook />
                </a>
              )}
              {mentorData.socialLinks.instagram && (
                <a href={mentorData.socialLinks.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <FiInstagram />
                </a>
              )}
              {mentorData.personalInfo.email && (
                <Link to="/contact?source=email" aria-label="Email">
                  <FiMail />
                </Link>
              )}
            
            </div>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <div className="footer-links">
              <Link to="/">Home</Link>
              <Link to="/qualification-experience">Qualification & Experience</Link>
              <Link to="/special-talks">Special Talks</Link>
              <Link to="/patents">Patents</Link>
            </div>
          </div>

          <div className="footer-section">
            <h3>More Info</h3>
            <div className="footer-links">
              <Link to="/publications/paper">Publications</Link>
              <Link to="/conference/attended">Conference</Link>
              <Link to="/gallery">Gallery</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
