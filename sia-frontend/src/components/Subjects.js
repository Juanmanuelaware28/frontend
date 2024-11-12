// src/components/Subjects.js
import React from 'react';

function Subjects() {
  const subjects = ['Math', 'Science', 'History'];

  return (
    <div className="container mt-5">
      <h2>Subjects List</h2>
      <ul className="list-group">
        {subjects.map((subject, index) => (
          <li className="list-group-item" key={index}>
            {subject}
          </li>
        ))}
      </ul>
    </div>
 
    )}