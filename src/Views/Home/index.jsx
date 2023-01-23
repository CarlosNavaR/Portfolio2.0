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
  const slider = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray('.panel');
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: 'none',
        scrollTrigger: {
          trigger: slider.current,
          pin: true,
          scrub: 1,
          // markers: true,
          snap: 1 / (panels.length - 1),
          end: () => `+=${slider.current.offsetWidth}`,
        },
      });
    }, component);

    gsap.to('progress', {
      value: 100,
      ease: 'none',
      scrollTrigger: {
        trigger: '.app_body_container',
        scrub: 0.3,
      },
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className='App' ref={component}>
      <Nav />
      <div className='first_container'>
        <Hero />
      </div>
      <div ref={slider} className='container'>
        <div className='panel'>
          <About />
        </div>
        <div className='panel'>
          <Projects />
        </div>
        <div className='panel' />
      </div>
      <div className='last_container'>
        <Hero />
        <Footer />
      </div>
    </div>
  );
}
