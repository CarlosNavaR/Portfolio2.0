import React, { useEffect, useState } from 'react';
import { motion, useScroll } from 'framer-motion';
import Lottie from 'react-lottie';
import dynamic from 'next/dynamic';
import Loading from '@/components/loading';
import { getAboutMe, getProjects } from '@/api';
import { PropsHomeType } from '@/types/api';
import Rocket from '@/lotties/rocket_particles.json';
import { defaultLottieOptions } from '@/constants/framer';
import Layout from '@/components/layout';

const Home = dynamic(() => import('@/views/home'), {
  ssr: false,
  loading: () => <Loading />,
});

export default function index(props: PropsHomeType) {
  const { query } = props;

  const [scrollY, setScrollY] = useState(0);
  const [direction, setDirection] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    if (!localStorage.getItem('Buz@@Flag')) {
      localStorage.removeItem('Buz@@Theme');
      localStorage.removeItem('Buz@@Lang');
    }

    localStorage.setItem('Buz@@Flag', 'true');
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setDirection(true);
      setScrollY(scrollYProgress.get() * 110);

      if (scrollYProgress.get() >= scrollYProgress.getPrevious()) {
        setDirection(false);
      }

      if (scrollYProgress.get().toFixed(2) === '0.00') {
        setDirection(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollYProgress]);

  return (
    <Layout title='home'>
      <motion.div
        className='progress_bar'
        style={{ height: `${scrollY}%` }}
        initial={{ height: '0%' }}
        animate={{ height: `${scrollY}%` }}
        transition={{
          duration: 0.8,
          ease: 'easeIn',
          type: 'tween',
        }}
      >
        <Lottie
          options={defaultLottieOptions(Rocket)}
          height={80}
          width={60}
          style={{
            transform: direction ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
        />
      </motion.div>
      <Home query={query} />
    </Layout>
  );
}

export async function getStaticProps() {
  const aboutMe = await getAboutMe();
  const projects = await getProjects();

  return {
    props: {
      query: {
        aboutMe,
        projects,
      },
    },
  };
}
