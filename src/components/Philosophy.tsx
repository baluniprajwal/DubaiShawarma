"use client";

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import { useRestaurant } from '../context/RestaurantContext';

gsap.registerPlugin(ScrollTrigger);

export default function Philosophy() {
  const triggerRef = useRef<HTMLDivElement>(null);
  const { config } = useRestaurant();

  useGSAP(() => {
    gsap.fromTo('.phil-text',
      { scale: 0.8, opacity: 0, y: 50 },
      {
        scale: 1,
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: triggerRef.current,
          start: 'top 60%'
        }
      }
    );
  }, { scope: triggerRef });

  return (
    <section
      ref={triggerRef}
      className="relative h-[75vh] overflow-hidden flex items-center justify-center py-32 border-t border-dark/5 transition-all duration-500 ease-out bg-brand-yellow text-dark"
    >
      <div className="absolute top-0 left-0 w-full h-2 bg-accent" />
      <div className="absolute bottom-0 left-0 w-full h-2 bg-accent" />
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[10%] h-[60%] border-r-2 border-y-2 border-accent/20 hidden lg:block" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[10%] h-[60%] border-l-2 border-y-2 border-accent/20 hidden lg:block" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/10 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute top-8 right-8 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/5 font-sans text-[9px] uppercase tracking-[0.25em] font-semibold text-accent hidden sm:block">
        {config.badge} Heritage
      </div>

      <div className="relative z-20 text-center flex flex-col items-center px-4 w-full max-w-5xl">
        <h2 className="phil-text font-display font-bold text-[12vw] sm:text-[10vw] tracking-tighter uppercase leading-[0.85] w-full text-center">
          <span className="text-accent">Purists</span>
          <br />
          <span className="text-dark">At </span>
          <span className="text-accent">Heart</span>
        </h2>
        <div className="mt-12 max-w-xl mx-auto px-4">
          <div className="w-8 h-[1px] mx-auto mb-6 bg-accent" />
          <p className="font-sans text-xs md:text-sm uppercase tracking-[0.2em] leading-loose text-center font-medium text-dark/80">
            {config.description || "We believe in authentic Middle Eastern flavors. No shortcuts. Just the raw power of traditional spices and fresh ingredients meeting time-honored recipes."}
          </p>
        </div>
      </div>
    </section>
  );
}
