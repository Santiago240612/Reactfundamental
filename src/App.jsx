import React from 'react';
import Header from './components/header'; // Importing Header component
import Hero from './components/hero'; // Importing Hero component
import Services from './components/services'; // Importing Services component
import Navigation from './components/navigation';
import Footer from './components/footer'; // Importing Footer component

const App = () => {
  return (
    <div>
      <Header />
      <Navigation />
      <Hero />
      <Services />
      <Footer />
    </div>
  );
};

export default App; // Exporting App to be rendered in the main index.js
