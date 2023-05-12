import React from 'react';
import Nav from '@/components/navbar';
// import Contact from '@/pages/contact';
import About from './about';
import Hero from './hero';
import Projects from './projects';
import Footer from './footer';
import { PropsHomeType } from '@/types/api';

export default function index(props: PropsHomeType) {
  const { query } = props;
  const { aboutMe, projects } = query;
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
        {/* <article className='main__contact' id='contact'>
          <Contact />
        </article> */}
      </section>
      <section className='main__projects' id='projects'>
        <Projects projects={projects} />
      </section>
      <Footer id='contact' />
    </>
  );
}
