import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import Lottie from 'react-lottie';
import Rocket from '../../Lotties/rocket_particles.json';
import { Nav, Footer } from '../../Components';
import About from '../About';
import Hero from '../Hero';
import Projects from '../Projects';
import Contact from '../Contact';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: Rocket,
};

export default function index() {
  const component = useRef();
  const [scrollY, setScrollY] = useState(0);
  const [direction, setDirection] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      setDirection(true);
      setScrollY(scrollYProgress.current * 110);

      if (scrollYProgress.current >= scrollYProgress.prev) {
        setDirection(false);
      }

      if (scrollYProgress.current === 0) {
        setDirection(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollYProgress]);

  return (
    <>
      <motion.div
        className='progress_bar'
        style={{ height: `${scrollY}%` }}
        initial={{ height: '0%' }}
        animate={{ height: `${scrollY}%` }}
        transition={{ duration: 0.8 }}
      >
        <Lottie
          options={defaultOptions}
          height={80}
          width={80}
          style={{
            transform: direction ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
        />
      </motion.div>
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
