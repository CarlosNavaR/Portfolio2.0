import React from 'react';
import Hero from '@/pages/hero';
import Nav from '@/components/navbar';

export default function index() {
  return (
    <>
      <Nav />
      <section className='main__container'>
        <article className='main__hero'>
          <Hero />
        </article>
      </section>
    </>
  );
}
