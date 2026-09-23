import React from 'react';
import { mentorData } from '../data/mentorData';
import { FiBookOpen } from 'react-icons/fi';

const PaperPublications2 = () => {
  const { bookPublications } = mentorData.publications;

  return (
    <div className="animate-fade-in">
      <div className="page-header">
        <div className="container">
          <h1>📚Books by Dr. I. Carol</h1>
          <p>Selected book publications authored by Dr. I. Carol</p>
        </div>
      </div>

      <div className="container section pt-0">
        <div className="card-grid">
          {bookPublications.map((book, index) => (
            <div className="card" key={index}>
              <div className="card-header">
                <div className="publication-author">{book.authors}</div>
                <h3 className="card-title">{book.title}</h3>
              </div>

              <div className="card-body">
                <div className="publication-journal">
                  <strong>Publisher:</strong> {book.publisher}
                </div>
                <div className="publication-description">
                  <strong>ISBN:</strong> {book.isbn}
                </div>

                <div className="card-meta">
                  <div className="card-meta-item">
                    <FiBookOpen className="contact-icon" style={{ fontSize: '1rem' }} />
                    {book.year}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PaperPublications2;
