"use client";

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import React, { useRef } from 'react';
import { useRestaurant } from '../context/RestaurantContext';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const textTitleRef = useRef<HTMLHeadingElement>(null);
  const { config, restaurantId } = useRestaurant();

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      imageRef.current,
      { clipPath: 'polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)', filter: 'brightness(0)' },
      { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', filter: 'brightness(0.6)', duration: 2.2, ease: 'power4.inOut' }
    );

    tl.fromTo(
      gsap.utils.toArray('.hero-char'),
      { y: 300, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5, stagger: 0.05, ease: 'power4.out' },
      "-=1.2"
    );

    tl.fromTo(
      '.hero-subtitle',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out' },
      "-=0.5"
    );

    gsap.to(imageRef.current, {
      yPercent: 30,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    });
  }, { scope: containerRef, dependencies: [restaurantId] });

  const title = restaurantId === 'grill' ? "PARK" : "DUBAI";
  const heroImage = restaurantId === 'grill'
    ? "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=2000"
    : "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&q=80&w=2000";
  const tags = restaurantId === 'grill'
    ? ["Skewers", "Kebab", "Mezze"]
    : ["Shawarma", "Falafel", "Pizza"];
  const isShawarma = restaurantId === 'shawarma';

  return (
    <section id="home" ref={containerRef} className="relative w-full h-screen bg-[#12100e] overflow-hidden flex items-center justify-center">
      <Image
        ref={imageRef}
        src={heroImage}
        alt={config.name}
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 object-cover z-0 brightness-75 contrast-110 pointer-events-none"
      />

      {isShawarma && (
        <>
          <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-brand-yellow/45 via-brand-yellow/10 to-transparent pointer-events-none z-10 blur-3xl" />
          <div className="absolute top-[12%] left-[20%] w-32 h-32 bg-brand-yellow/20 rounded-full blur-[60px] pointer-events-none z-10" />
          <div className="absolute top-[12%] right-[20%] w-32 h-32 bg-brand-yellow/20 rounded-full blur-[60px] pointer-events-none z-10" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-80 bg-gradient-to-r from-accent/30 to-brand-yellow/30 rounded-full blur-[140px] pointer-events-none z-10 opacity-75" />
        </>
      )}

      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/40 via-transparent to-black/75" />

      <div className="relative z-20 flex flex-col items-center pointer-events-none w-full mt-20">
        {isShawarma ? (
          <div className="flex flex-col items-center gap-1">
            <h1 className="font-display font-bold text-[28vw] sm:text-[22vw] leading-[0.75] tracking-tight uppercase flex items-center select-none drop-shadow-[0_12px_24px_rgba(0,0,0,0.85)] filter">
              <span className="hero-char inline-block text-accent relative mr-2 transform hover:scale-[1.02] transition-transform duration-300">
                D
                <span className="absolute left-[15%] top-[10%] text-[6vw] sm:text-[4.5vw] font-sans font-extrabold text-brand-yellow lowercase tracking-normal leading-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] filter">
                  دبي
                </span>
              </span>
              <span className="hero-char inline-block text-brand-yellow hover:scale-[1.02] transition-transform duration-300">u</span>
              <span className="hero-char inline-block text-accent hover:scale-[1.02] transition-transform duration-300">b</span>
              <span className="hero-char inline-block text-brand-yellow hover:scale-[1.02] transition-transform duration-300">A</span>
              <span className="hero-char inline-block text-accent hover:scale-[1.02] transition-transform duration-300">i</span>
            </h1>
          </div>
        ) : (
          <>
            <h1 ref={textTitleRef} className="font-display font-bold text-[25vw] sm:text-[20vw] leading-[0.8] tracking-tighter uppercase flex overflow-hidden">
              {title.split('').map((char, i) => (
                <span key={i} className={`hero-char inline-block ${i % 2 === 0 ? 'text-accent' : 'text-brand-yellow'}`}>{char}</span>
              ))}
            </h1>
            <h2 className="font-display font-semibold uppercase text-brand-yellow text-[10vw] sm:text-[6vw] leading-[0.8] tracking-wider drop-shadow-md opacity-0 hero-subtitle">
              {config.badge}
            </h2>
          </>
        )}

        <div className="hero-subtitle flex gap-8 md:gap-16 mt-8 md:mt-12 font-sans uppercase tracking-[0.3em] text-[10px] md:text-sm font-medium text-white">
          {tags.map((tag, idx) => (
            <React.Fragment key={tag}>
              <span>{tag}</span>
              {idx < tags.length - 1 && <span className="text-brand-yellow">•</span>}
            </React.Fragment>
          ))}
        </div>
      </div>

    </section>
  );
}
