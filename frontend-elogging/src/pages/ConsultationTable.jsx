import React, { useState } from 'react';
import '../css/consultation.css';
import Sidebar from '../components/Sidebar';

// Sample data for the consultation queue
const consultationData = [
  {
    id: 1,
    name: 'Jhoanna Robles',
    instructor: 'Jay Noel Rojo',
    purpose: 'Consultation',
    dateTime: 'June 21, 2024 | 1:30pm',
    status: 'Served',
  },
  {
    id: 2,
    name: 'Maraiah Arceta',
    instructor: 'Jhon Harvey Babia',
    purpose: 'Portfolio',
    dateTime: 'June 21, 2024 | 2:17pm',
    status: 'Served',
  },
  {
    id: 3,
    name: 'Arniel Baldeleover',
    instructor: 'Jhon Harvey Babia',
    purpose: 'Consultation',
    dateTime: 'June 21, 2024 | 2:47pm',
    status: 'Served',
  },
  {
    id: 4,
    name: 'Stacey Sevilljea',
    instructor: 'Jocelyn Barbosa',
    purpose: 'Pass Activity',
    dateTime: 'June 21, 2024 | 2:58pm',
    status: 'In queue',
  },
  {
    id: 5,
    name: 'Gwyneth L. Apuli',
    instructor: 'Dario Minosa',
    purpose: 'Consultation',
    dateTime: 'June 21, 2024 | 3:22pm',
    status: 'In queue',
  },
];

const ConsultationTable = () => {
  const [selectedInstructor, setSelectedInstructor] = useState('All');


  const instructors = ['All', ...new Set(consultationData.map((consultation) => consultation.instructor))];

  const filteredData =
    selectedInstructor === 'All'
      ? consultationData
      : consultationData.filter((consultation) => consultation.instructor === selectedInstructor);

  return (
    <div className="consultation-container">
      <Sidebar />
      <div className="filter-section">
        <label htmlFor="instructor-filter">Filter by Instructor: </label>
        <select
          id="instructor-filter"
          value={selectedInstructor}
          onChange={(e) => setSelectedInstructor(e.target.value)}
        >
          {instructors.map((instructor, index) => (
            <option key={index} value={instructor}>
              {instructor}
            </option>
          ))}
        </select>
      </div>
      <table className="consultation-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Instructor</th>
            <th>Purpose</th>
            <th>Date and Time</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((consultation) => (
            <tr key={consultation.id}>
              <td>{consultation.name}</td>
              <td>{consultation.instructor}</td>
              <td>{consultation.purpose}</td>
              <td>{consultation.dateTime}</td>
              <td>{consultation.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConsultationTable;
