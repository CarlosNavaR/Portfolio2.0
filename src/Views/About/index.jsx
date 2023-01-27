import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Lottie from 'react-lottie';
import { useInView } from 'react-intersection-observer';
import astronautAbout from '../../Lotties/astronaut-about.json';
import { client } from '../../Hooks/client';
import useTranslate from '../../Hooks/useTranslate';
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
  const [about, setAbout] = useState(false);

  const [ref, inView] = useInView({
    threshold: 0.3,
    rootMargin: '-50px 0px -50px 0px',
    triggerOnce: false,
  });

  useEffect(() => {
    const query = `*[_type == "about"]`;
    client.fetch(query).then(res => {
      setAbout(res[0]);
    });
  }, []);

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
        <h1>{useTranslate(about?.title)}</h1>
        <>{useTranslate(about?.description)}</>
      </motion.div>
    </div>
  );
}
