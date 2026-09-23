import React from 'react';
import { mentorData } from '../data/mentorData';

const ConferencesAttended = () => {
  const { attended } = mentorData.conferences;

  return (
    <div className="animate-fade-in">
      <div className="page-header">
        <div className="container">
          <h1>🎓 Conferences Attended</h1>
          <p>Participation in international and national academic conferences</p>
        </div>
      </div>

      <div className="container section pt-0">


        <style>{`
          .conf-table-wrapper {
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 4px 16px rgba(0,0,0,0.1);
            border: 1px solid #ddd;
          }
          .conf-table {
            width: 100%;
            border-collapse: collapse;
            background: #fff;
          }
          .conf-table thead tr {
            background-color: #1e2068;
            color: #fff;
          }
          .conf-table thead th {
            padding: 1rem 1.25rem;
            text-align: left;
            font-weight: 600;
            font-size: 0.95rem;
            letter-spacing: 0.02em;
          }
          .conf-table tbody tr {
            border-bottom: 1px solid #eaeaea;
            transition: all 0.25s ease;
          }
          .conf-table tbody tr:last-child {
            border-bottom: none;
          }
          .conf-table tbody tr:nth-child(even) {
            background-color: #f7f8fc;
          }
          .conf-table tbody tr:hover {
            background-color: #eef2ff;
            transform: scale(1.005);
            box-shadow: 0 2px 12px rgba(37, 99, 235, 0.12);
          }
          .conf-table tbody td {
            padding: 1rem 1.25rem;
            font-size: 0.95rem;
            color: #333;
            vertical-align: middle;
          }
          .conf-table tbody td:first-child {
            color: #1e2068;
            font-weight: 700;
            text-align: center;
            width: 50px;
          }
          .conf-table tbody td:nth-child(2) {
            font-weight: 600;
            color: #1a1a2e;
          }
          @media (max-width: 768px) {
            .conf-table-wrapper {
              overflow-x: auto;
            }
            .conf-table thead th,
            .conf-table tbody td {
              padding: 0.75rem 0.9rem;
              font-size: 0.85rem;
            }
          }
        `}</style>

        <div className="conf-table-wrapper">
          <table className="conf-table">
            <thead>
              <tr>
                <th></th>
                <th>Conference Title</th>
                <th>Location</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {attended.map((conf, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{conf.name}</td>
                  <td>{conf.location}</td>
                  <td style={{ whiteSpace: 'nowrap', color: '#555' }}>{conf.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
};

export default ConferencesAttended;
