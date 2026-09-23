import React from 'react';
import { mentorData } from '../data/mentorData';
import { FiExternalLink, FiUsers, FiCalendar, FiFileText } from 'react-icons/fi';

const Patents = () => {
  const { patents } = mentorData;

  return (
    <div className="animate-fade-in">
      <div className="page-header">
        <div className="container">
          <h1>Patents</h1>
          <p>Intellectual property and research patents</p>
        </div>
      </div>

      <div className="container section pt-0">
        <div className="card-grid">
          {patents.map((patent, index) => (
            <div className="card" key={index}>
              <div className="card-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <h3 className="card-title">{patent.title}</h3>
                  <div className="card-subtitle">{patent.patentNumber}</div>
                </div>
                <span className={`badge ${patent.status.toLowerCase() === 'granted' ? 'badge-success' : 'badge-primary'}`}>
                  {patent.status}
                </span>
              </div>
              
              <div className="card-body">
                <p>{patent.description}</p>
                
                <div className="card-meta">
                  <div className="card-meta-item">
                    <FiUsers className="contact-icon" style={{ fontSize: '1.2rem', flexShrink: 0 }} />
                    <span><strong>Inventors:</strong> {patent.inventors.join(', ')}</span>
                  </div>
                  <div className="card-meta-item">
                    <FiCalendar className="contact-icon" style={{ fontSize: '1.2rem', flexShrink: 0 }} />
                    <span><strong>Filing Date:</strong> {patent.filingDate}</span>
                  </div>
                  <div className="card-meta-item">
                    <FiFileText className="contact-icon" style={{ fontSize: '1.2rem', flexShrink: 0 }} />
                    <span><strong>Publication Date:</strong> {patent.publicationDate}</span>
                  </div>
                </div>
              </div>
              
              {patent.link !== "#" && (
                <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--color-border)' }}>
                  <a href={patent.link} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
                    View Patent <FiExternalLink />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Patents;
