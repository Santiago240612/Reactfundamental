// src/components/Student.jsx
import React from 'react';
import Grade from './Grade'; // Import the Grade component

const Student = ({ student }) => {
  // Conditional rendering based on graduate status
  const graduateStatus = student.graduate ? 'Graduated' : 'Enrolled';

  return (
    <div className='student-card'>
      <img
        className='student-image'
        src={student.picture}
        alt={`${student.firstName} ${student.lastName}`}
      />
      <h2 className='student-name'>{`${student.firstName} ${student.lastName}`}</h2>
      <p className='student-age'>Age: {student.age}</p>
      <p className='student-course'>Course: {student.course}</p>
      <p className='student-city'>City: {student.city}</p>

      {/* Render GPA grade */}
      <Grade gpa={student.gpa} />

      {/* Render Graduate Status */}
      <p className='student-status'>Status: {graduateStatus}</p>
    </div>
  );
};

export default Student;
