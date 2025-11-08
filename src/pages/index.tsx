import React from 'react';


import Hero from '../components/sections/Hero';
import '../styles/globals.css'
const HomePage: React.FC = () => {
  return (
    <div className="app">
    
      <main>
        <Hero />
        {/* Other sections will go here */}
      </main>

    </div>
  );
};

export default HomePage;