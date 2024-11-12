// src/components/Student.js
import React, { useState } from 'react';

function Student() {
  const [subjects, setSubjects] = useState([]);
  const [newSubject, setNewSubject] = useState('');

  const handleAddSubject = () => {
    if (newSubject) {
      setSubjects([...subjects, newSubject]);
      setNewSubject('');
    }
  };

  const handleRemoveSubject = (subject) => {
    setSubjects(subjects.filter((s) => s !== subject));
  };

  return (
    <div className="container mt-5">
      <h2>Student Dashboard</h2>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          value={newSubject}
          onChange={(e) => setNewSubject(e.target.value)}
          placeholder="Add new subject"
        />
        <button
          type="button"
          className="btn btn-primary mt-2"
          onClick={handleAddSubject}
        >
          Add Subject
        </button>
      </div>
      <ul className="list-group">
        {subjects.map((subject, index) => (
          <li className="list-group-item d-flex justify-content-between" key={index}>
            {subject}
            <button
              className="btn btn-danger btn-sm"
              onClick={() => handleRemoveSubject(subject)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Student;
