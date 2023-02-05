import React, { useRef } from 'react';
import { Nav, Footer } from '../../Components';
import About from '../About';
import Hero from '../Hero';
import Projects from '../Projects';
import Contact from '../Contact';

export default function index() {
  const component = useRef();

  return (
    <div className='App' ref={component}>
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
