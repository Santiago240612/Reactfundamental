// src/App.jsx
import React from 'react';
import Student from './components/Student';
import './style.css'; // Make sure this imports your CSS for styling

// Sample student data
const studentData = {
  firstName: 'Testy',
  lastName: 'McTest',
  age: 42,
  course: 'Web Development',
  city: 'Berlin',
  picture: 'https://randomuser.me/api/portraits/men/1.jpg',
};

const App = () => {
  return (
    <div>
      <h1>Student Information</h1>
      <Student student={studentData} />
    </div>
  );
};

export default App;
