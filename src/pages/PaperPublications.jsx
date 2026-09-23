import React, { useMemo, useState } from 'react';
import { mentorData } from '../data/mentorData';
import { FiExternalLink, FiBookOpen } from 'react-icons/fi';

const PaperPublications = () => {
  const { paperPublications } = mentorData.publications;
  const [query, setQuery] = useState('');
  const [yearFilter, setYearFilter] = useState('All');

  const yearOptions = useMemo(() => {
    return Array.from(
      new Set(paperPublications.map((paper) => paper.year).filter(Boolean))
    ).sort((a, b) => Number(b) - Number(a));
  }, [paperPublications]);

  const filteredPapers = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return paperPublications.filter((paper) => {
      const titleMatch = paper.title.toLowerCase().includes(normalizedQuery);
      const journalMatch = paper.journal?.toLowerCase().includes(normalizedQuery);
      const matchesQuery = !normalizedQuery || titleMatch || journalMatch;
      const matchesYear = yearFilter === 'All' || paper.year === yearFilter;

      return matchesQuery && matchesYear;
    });
  }, [paperPublications, query, yearFilter]);

  const clearFilters = () => {
    setQuery('');
    setYearFilter('All');
  };

  return (
    <div className="animate-fade-in">
      <div className="page-header">
        <div className="container">
          <h1>📃Journal Publications</h1>
          <p>Research articles published in national and international journals</p>
        </div>
      </div>

      <div className="container section pt-0">
        <div className="publication-toolbar">
          <div className="publication-filter">
            <input
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search by Title or Publication..."
              className="search-input"
            />
          </div>

          <div className="publication-filter">
            <select
              value={yearFilter}
              onChange={(event) => setYearFilter(event.target.value)}
              className="search-select"
            >
              <option value="All">All Years</option>
              {yearOptions.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>

          
        </div>

        <div className="card-grid">
          {filteredPapers.length === 0 ? (
            <div className="no-results">
              No publications match your search. Try a different title or year.
            </div>
          ) : (
            filteredPapers.map((paper, index) => (
              <div className="card publication-card" key={index}>
                <div className="card-header">
                  <div className="publication-author">{paper.authors}</div>
                  <h3 className="card-title">"{paper.title}"</h3>
                </div>

                <div className="card-body">
                  <p className="publication-journal">{paper.journal}</p>
                  {paper.description && <p className="publication-description">{paper.description}</p>}

                  <div className="card-meta">
                    <div className="card-meta-item">
                      <FiBookOpen className="contact-icon" style={{ fontSize: '1rem' }} />
                      {paper.year}
                    </div>
                    {paper.volumeIssue && (
                      <div className="card-meta-item">{paper.volumeIssue}</div>
                    )}
                    {paper.doi && paper.doi !== '#' && (
                      <div className="card-meta-item" style={{ width: '100%' }}>
                        <strong>DOI:</strong> {paper.doi}
                      </div>
                    )}
                  </div>
                </div>

                {paper.link && paper.link !== '#' && (
                  <div className="card-action">
                    <a
                      href={paper.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline"
                    >
                      View Paper <FiExternalLink />
                    </a>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default PaperPublications;
