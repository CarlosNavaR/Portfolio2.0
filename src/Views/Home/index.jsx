import React from 'react';
import Hero from '../Hero';
import About from '../About';
import Projects from '../Projects';
import Contact from '../Contact';

export default function index() {
  return (
    <>
      <div className='start_container'>
        <Hero />
      </div>
      <div className='App_container'>
        <About />
        <Projects />
        <Contact />
      </div>
    </>
  );
}
