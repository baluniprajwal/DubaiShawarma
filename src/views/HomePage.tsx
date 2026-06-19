import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Process from '../components/Process';
import Philosophy from '../components/Philosophy';
import Menu from '../components/Menu';

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Menu limit={4} />
      <Process />
      <Philosophy />
    </>
  );
}
