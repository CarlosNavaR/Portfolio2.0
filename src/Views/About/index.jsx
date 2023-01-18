import React from 'react';
import { motion } from 'framer-motion';
import Lottie from 'react-lottie';
import { useInView } from 'react-intersection-observer';
import astronautAbout from '../../Lotties/astronaut-about.json';
import './index.scss';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: astronautAbout,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

export default function index() {
  const [ref, inView] = useInView({
    threshold: 0.3,
    rootMargin: '-50px 0px -50px 0px',
    triggerOnce: false,
  });

  return (
    <div className='About_container'>
      <motion.div
        ref={ref}
        className='About_container__image'
        initial={{ opacity: 0, x: '-5px' }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1, ease: 'easeIn' }}
      >
        <Lottie options={defaultOptions} width={300} height={300} />
      </motion.div>
      <motion.div
        ref={ref}
        className='About_container_description'
        initial={{ opacity: 0, x: '-5px' }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1, ease: 'easeIn' }}
      >
        <p>About</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptates, quod, quia, voluptatibus quae voluptatem quibusdam
          voluptatum quos quas quidem nesciunt. Quisquam, quae. Quisquam
        </p>
      </motion.div>
    </div>
  );
}
