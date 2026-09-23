import React from 'react';
import { mentorData } from '../data/mentorData';

const QualificationExperience = () => {
  const {
    qualifications,
    experience,
    projectsGuided,
    researchInterests,
    curriculumDevelopment,
    awards
  } = mentorData;

  return (
    <div className="animate-fade-in">
      <div className="page-header">
        <div className="container">
          <h1>Qualification & Experience</h1>
          <p>Academic background and professional journey</p>
        </div>
      </div>

      <div className="container section pt-0">
        <div className="qualification-grid">
          <div className="qualification-column">
            <div className="card qualification-card">
              <h2 className="qualification-card-title">Education</h2>
              {qualifications.map((qual, index) => (
                <div className="qualification-item" key={index}>
                  <div className="qualification-item-title">
                    {qual.degree}
                    <span>{qual.duration}</span>
                  </div>
                  <div className="qualification-item-meta" style={{ color: qual.color }}>
                    {qual.institution}
                  </div>
                </div>
              ))}
            </div>

            <div className="card qualification-card">
              <h2 className="qualification-card-title">Projects Guided</h2>
              <div className="qualification-item-meta special-text">
                {projectsGuided}
              </div>
            </div>

            <div className="card qualification-card">
              <h2 className="qualification-card-title">Curriculum Development</h2>
              <ul className="qualification-list">
                {curriculumDevelopment.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="qualification-column">
            <div className="card qualification-card">
              <h2 className="qualification-card-title">Experience</h2>
              {experience.map((exp, index) => (
                <div className="qualification-item" key={index}>
                  <div className="qualification-item-title">
                    {exp.position}
                    <span>{exp.duration}</span>
                  </div>
                  <div className="qualification-item-meta" style={{ color: exp.color }}>
                    {exp.institution}
                  </div>
                </div>
              ))}
            </div>

            <div className="card qualification-card">
              <h2 className="qualification-card-title">Research Interests</h2>
              <ul className="qualification-list">
                {researchInterests.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="card qualification-card">
              <h2 className="qualification-card-title">Awards</h2>
              <ul className="qualification-list">
                {awards.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QualificationExperience;
