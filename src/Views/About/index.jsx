import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Lottie from 'react-lottie';
import astronautAbout from '../../Lotties/astronaut-about.json';
import { client } from '../../Hooks/client';
import useTranslate from '../../Hooks/useTranslate';
import { fadeIn } from '../../Helper/motion';
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

  useEffect(() => {
    const query = `*[_type == "about"]`;
    client.fetch(query).then(res => {
      setAbout(res[0]);
    });
  }, []);

  return (
    <div className='About_container'>
      <motion.div
        className='About_container__image'
        variants={fadeIn('right', 'tween', 0.2, 1)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.25 }}
      >
        <Lottie options={defaultOptions} width={300} height={300} />
      </motion.div>
      <motion.div
        className='About_container_description'
        variants={fadeIn('up', 'tween', 0.2, 1)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.25 }}
      >
        <h1>{useTranslate(about?.title)}</h1>
        <>{useTranslate(about?.description)}</>
      </motion.div>
    </div>
  );
}
