import React from 'react';
import { mentorData } from '../data/mentorData';

const ConferenceProceedings = () => {
  const { conferenceProceedings } = mentorData.publications;

  return (
    <div className="animate-fade-in">
      <div className="page-header">
        <div className="container">
          <h1>🌐International Conference Proceedings Publications</h1>
          <p>Selected conference proceedings published in national and international venues.</p>
        </div>
      </div>

      <div className="container section pt-0">
        <div className="conference-list">
          {conferenceProceedings.map((item, index) => (
            <div className="card conference-card" key={index}>
              <div className="card-header">
                <h3 className="card-title">{item.title}</h3>
                <div className="publication-author">{item.authors}</div>
              </div>
              <div className="card-body">
                <p className="conference-details">{item.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ConferenceProceedings;
