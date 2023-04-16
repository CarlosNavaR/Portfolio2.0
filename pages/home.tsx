import React from 'react';
import Hero from '@/pages/hero';
import Nav from '@/components/navbar';
import About from '@/pages/about';
import Contact from '@/pages/contact';
import { PropsHomeType } from '@/types/api';

export default function index(props: PropsHomeType) {
  const { query } = props;
  const { aboutMe } = query;
  return (
    <>
      <Nav />
      <section className='main__container'>
        <article className='main__hero' id='hero'>
          <Hero />
        </article>
        <article className='main__about' id='about'>
          <About aboutMe={aboutMe} />
        </article>
        <article>
          <h1>Projects</h1>
        </article>
        <article className='main__contact' id='contact'>
          <Contact />
        </article>
      </section>
    </>
  );
}
