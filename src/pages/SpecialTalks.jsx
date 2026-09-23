import React from 'react';
import { mentorData } from '../data/mentorData';
import { 
  FiCalendar, 
  FiMessageSquare, 
  FiTarget, 
  FiZap, 
  FiMonitor, 
  FiFlag 
} from 'react-icons/fi';

const iconMap = {
  calendar: <FiCalendar />,
  speech: <FiMessageSquare />,
  target: <FiTarget />,
  lightbulb: <FiZap />,
  computer: <FiMonitor />,
  flag: <FiFlag />
};

const SpecialTalks = () => {
  const { specialTalks } = mentorData;

  const containerStyle = {
    background: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
    overflow: 'hidden',
    border: '1px solid #e0e0e0',
    transition: 'box-shadow 0.3s ease',
    maxWidth: '900px',
    margin: '0 auto'
  };

  const headerStyle = {
    backgroundColor: '#1e2068',
    color: '#ffdd00',
    padding: '1.25rem',
    textAlign: 'center',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    borderBottom: '1px solid #111'
  };

  const listContainerStyle = {
    padding: '1.5rem 2rem'
  };

  const itemStyle = {
    display: 'flex',
    gap: '1.5rem',
    marginBottom: '2rem',
    position: 'relative',
    padding: '0.5rem 1rem',
    transition: 'all 0.3s ease',
    borderRadius: '4px',
    cursor: 'pointer'
  };

  // The custom left border for each item
  const leftBorderStyle = {
    position: 'absolute',
    left: '0',
    top: '0',
    bottom: '0',
    width: '4px',
    backgroundColor: '#1e2068',
    borderRadius: '4px'
  };

  return (
    <div className="animate-fade-in">
      <div className="page-header">
        <div className="container">
          <h1>Special Talks & Workshops</h1>
          <p>Guest lectures, invited talks, and special presentations</p>
        </div>
      </div>

      <div className="container section pt-0">
        
        {/* Main Box with hover effect via inline CSS classes trick (or just style) */}
        {/* Note: In standard React without styled-components, using a custom class is cleaner for hovers. 
            I will apply inline styles for layout and add standard CSS classes to handle hovers cleanly. */}
        <style>{`
          .talks-main-box:hover {
            box-shadow: 0 8px 24px rgba(0,0,0,0.12) !important;
          }
          .talk-item:hover {
            background-color: #f8f9fc;
            transform: translateX(6px);
          }
          .talk-item:hover .talk-icon {
            color: #2563eb !important;
            transform: scale(1.1);
          }
        `}</style>

        <div className="talks-main-box" style={containerStyle}>
          <div style={headerStyle}>
            🎤 Workshops & Talks
          </div>
          
          <div style={listContainerStyle}>
            {specialTalks.map((talk, index) => (
              <div key={index} className="talk-item" style={itemStyle}>
                <div style={leftBorderStyle}></div>
                
                {/* Icon Container */}
                <div 
                  className="talk-icon"
                  style={{
                    fontSize: '2rem',
                    color: '#1e2068',
                    display: 'flex',
                    alignItems: 'flex-start',
                    paddingTop: '0.2rem',
                    transition: 'all 0.3s ease'
                  }}
                >
                  {iconMap[talk.icon]}
                </div>
                
                {/* Content */}
                <div style={{ flex: 1 }}>
                  <h3 style={{ color: '#1e2068', fontSize: '1.15rem', marginBottom: '0.4rem', fontWeight: '700' }}>
                    {talk.title}
                  </h3>
                  <div style={{ color: '#444', fontSize: '1rem', marginBottom: '0.4rem' }}>
                    {talk.eventPrefix} <strong style={{ color: '#1e2068' }}>{talk.institution}</strong>
                  </div>
                  {talk.date && (
                    <div style={{ color: '#888', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <FiCalendar /> {talk.date}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default SpecialTalks;
