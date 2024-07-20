import Head from 'next/head';
import React from 'react';
import Nav from '@/components/navbar';

type layoutProps = {
  title: string;
  children: React.ReactNode;
};

export default function index({ title, children }: layoutProps) {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link
          rel='shortcut icon'
          href='./static/favicon.ico'
          type='image/x-icon'
        />
        <title>Carlos Nava - {title}</title>
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
        <Nav />
        {children}
      </main>
    </>
  );
}
