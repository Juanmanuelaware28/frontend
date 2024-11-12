// src/components/StudentProfile.js
import React, { useState } from 'react';

function StudentProfile() {
  const [subjects, setSubjects] = useState([
    { id: 1, name: 'Mathematics' },
    { id: 2, name: 'Science' },
    { id: 3, name: 'History' },
  ]);

  const handleAddSubject = () => {
    const newSubject = prompt('Enter new subject name:');
    if (newSubject) {
      const newSubjectObj = {
        id: subjects.length + 1,
        name: newSubject,
      };
      setSubjects([...subjects, newSubjectObj]);
    }
  };

  const handleRemoveSubject = (id) => {
    setSubjects(subjects.filter(subject => subject.id !== id));
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h4>Student Profile</h4>
            </div>
            <div className="card-body">
              <h5>Your Subjects:</h5>
              <ul className="list-group">
                {subjects.map(subject => (
                  <li key={subject.id} className="list-group-item d-flex justify-content-between">
                    {subject.name}
                    <button 
                      className="btn btn-danger btn-sm" 
                      onClick={() => handleRemoveSubject(subject.id)}>
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
              <button 
                className="btn btn-success mt-3" 
                onClick={handleAddSubject}>
                Add Subject
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentProfile;
