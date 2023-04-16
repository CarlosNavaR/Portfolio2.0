import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import Loading from '@/components/loading';
import { getAboutMe, getProjects } from '@/api';
import { PropsHomeType } from '@/types/api';

const Home = dynamic(() => import('@/pages/home'), {
  ssr: false,
  loading: () => <Loading />,
});

export default function index(props: PropsHomeType) {
  const { query } = props;

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
