import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Nav, Footer } from '../../Components';
import About from '../About';
import Hero from '../Hero';
import Projects from '../Projects';

gsap.registerPlugin(ScrollTrigger);

export default function index() {
  const component = useRef();

  useLayoutEffect(() => {
    gsap.to('progress', {
      value: 100,
      ease: 'none',
      scrollTrigger: {
        trigger: '.App',
        scrub: 0.3,
      },
    });
  }, []);

  return (
    <div className='App' ref={component}>
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}
