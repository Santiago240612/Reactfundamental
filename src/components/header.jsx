import React from 'react';
import Navigation from './navigation.jsx';

const Header = () => {
  return (
    <header
      className='text-center'
      style={{ padding: '20px', backgroundColor: '#3498db', color: 'white' }}
    >
      <h1>My Awesome Website</h1>
      <Navigation />
    </header>
  );
};

export default Header;
