import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Nav, Footer } from '../../Components';
import Hero from '../Hero';

gsap.registerPlugin(ScrollTrigger);

export default function index() {
  const panels = useRef([]);
  const containerRef = useRef();
  const appRef = useRef();

  const createPanelsRefs = (panel, position) => {
    panels.current[position] = panel;
  };

  useEffect(() => {
    const sections = panels.current.length;

    gsap.to(panels.current, {
      xPercent: -100 * (sections - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        // markers: true,
        snap: 1 / (sections - 1),
        end: () => window.innerWidth * 2,
        anticipatePin: 1,
      },
    });

    gsap.to('progress', {
      value: 100,
      ease: 'none',
      scrollTrigger: {
        trigger: '.app_body_container',
        scrub: 0.3,
      },
    });
  }, []);

  return (
    <div className='App' ref={appRef}>
      <Nav />
      <Hero />
      <div className='app_body_container' ref={containerRef}>
        <section className='panel' ref={e => createPanelsRefs(e, 0)}>
          a
        </section>
        <section className='panel' ref={e => createPanelsRefs(e, 1)}>
          b
        </section>
      </div>
      <Hero />

      <Footer />
    </div>
  );
}
