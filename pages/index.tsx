import React, { useEffect, useState } from 'react';
import { MotionValue, motion, useScroll } from 'framer-motion';
import Lottie from 'react-lottie';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import Loading from '@/components/loading';
import { getAboutMe, getProjects } from '@/api';
import { PropsHomeType } from '@/types/api';
import Rocket from '@/lotties/rocket_particles.json';
import { defaultLottieOptions } from '@/constants/framer';

const Home = dynamic(() => import('@/pages/home'), {
  ssr: false,
  loading: () => <Loading />,
});

export default function index(props: PropsHomeType) {
  const { query } = props;

  const [scrollY, setScrollY] = useState(0);
  const [direction, setDirection] = useState(false);
  const { scrollYProgress } = useScroll();

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
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link
          rel='shortcut icon'
          href='./static/favicon.ico'
          type='image/x-icon'
        />
        <title>Carlos Nava - FrontEnd</title>
        <meta
          name='description'
          content='Bienvenido, este es mi portafolio personal donde plasmo un poco de mi, mostrando mi experiencia y proyectos realizados como desarrollador '
        />
        <meta name='author' content='Carlos Nava' />
        <meta
          name='keywords'
          content='Carlos Nava, FrontEnd, React, JavaScript, Developer'
        />
        <meta name='robots' content='index, follow' />
        <meta name='googlebot' content='index, follow' />
        <meta name='google' content='nositelinkssearchbox' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='main'>
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
            height={60}
            width={60}
            style={{
              transform: direction ? 'rotate(180deg)' : 'rotate(0deg)',
            }}
          />
        </motion.div>
        <Home query={query} />
      </main>
    </>
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
