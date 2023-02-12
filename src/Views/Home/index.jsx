import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Nav, Footer } from '../../Components';
import About from '../About';
import Hero from '../Hero';
import Projects from '../Projects';
import Contact from '../Contact';

export default function index() {
  const component = useRef();

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <motion.div className='progress_bar' style={{ scaleX }} />
      <div className='App' ref={component}>
        <Nav />
        <div className='start_container'>
          <Hero />
        </div>
        <div className='App_container'>
          <About />
          <Projects />
          <Contact />
        </div>
        <Footer />
      </div>
    </>
  );
}
