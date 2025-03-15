// src/components/Student.jsx
import React from 'react';

const Student = ({ student }) => {
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
    </div>
  );
};

export default Student;
