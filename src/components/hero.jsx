import React from 'react';

const Hero = () => {
  return (
    <section
      className='text-center'
      style={{
        backgroundImage: 'url(https://via.placeholder.com/1500)',
        padding: '80px 20px',
        backgroundSize: 'cover',
      }}
    >
      <h2 style={{ fontSize: '3rem', color: 'white' }}>
        Welcome to My Website
      </h2>
      <p style={{ color: '#ddd' }}>
        This is a great place to explore amazing content.
      </p>
    </section>
  );
};

export default Hero; // Exporting Hero component
