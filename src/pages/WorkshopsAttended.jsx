import React from 'react';
import { mentorData } from '../data/mentorData';

const WorkshopsAttended = () => {
  const { workshops } = mentorData.conferences;

  return (
    <div className="animate-fade-in">
      <div className="page-header">
        <div className="container">
          <h1>Workshops & Faculty Development Programs Attended</h1>
          <p>International and National Workshops, FDPs, and Seminars</p>
        </div>
      </div>

      <div className="container section pt-0">

        <style>{`
          .ws-table-wrapper {
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 4px 16px rgba(0,0,0,0.1);
            border: 1px solid #ddd;
          }
          .ws-table {
            width: 100%;
            border-collapse: collapse;
            background: #fff;
          }
          .ws-table thead tr {
            background-color: #1e2068;
            color: #fff;
          }
          .ws-table thead th {
            padding: 1rem 1.25rem;
            text-align: left;
            font-weight: 600;
            font-size: 0.95rem;
            letter-spacing: 0.02em;
          }
          .ws-table tbody tr {
            border-bottom: 1px solid #eaeaea;
            transition: all 0.25s ease;
          }
          .ws-table tbody tr:last-child {
            border-bottom: none;
          }
          .ws-table tbody tr:nth-child(even) {
            background-color: #f7f8fc;
          }
          .ws-table tbody tr:hover {
            background-color: #eef2ff;
            transform: scale(1.005);
            box-shadow: 0 2px 12px rgba(37, 99, 235, 0.12);
          }
          .ws-table tbody td {
            padding: 1rem 1.25rem;
            font-size: 0.95rem;
            color: #333;
            vertical-align: middle;
          }
          .ws-table tbody td:first-child {
            color: #1e2068;
            font-weight: 700;
            text-align: center;
            width: 50px;
          }
          .ws-table tbody td:nth-child(2) {
            font-weight: 600;
            color: #1a1a2e;
          }
          .ws-table tbody td:nth-child(3) {
            font-weight: 600;
            color: #1a1a2e;
          }
          @media (max-width: 768px) {
            .ws-table-wrapper {
              overflow-x: auto;
            }
            .ws-table thead th,
            .ws-table tbody td {
              padding: 0.75rem 0.9rem;
              font-size: 0.85rem;
            }
          }
        `}</style>

        <div className="ws-table-wrapper">
          <table className="ws-table">
            <thead>
              <tr>
                <th></th>
                <th>Workshop Title</th>
                <th>Organizer</th>
              </tr>
            </thead>
            <tbody>
              {workshops.map((ws, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{ws.title}</td>
                  <td>{ws.organizer}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
};

export default WorkshopsAttended;
