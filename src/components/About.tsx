"use client";

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { useRef } from 'react';
import { useRestaurant } from '../context/RestaurantContext';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const { config, restaurantId } = useRestaurant();
  const isShawarma = restaurantId === 'shawarma';

  useGSAP(() => {
    gsap.to(marqueeRef.current, {
      xPercent: -50,
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1
      }
    });

    gsap.fromTo('.about-img',
      { clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)', scale: 1.1 },
      {
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
        scale: 1,
        duration: 1.8,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: '.about-img',
          start: 'top 80%'
        }
      }
    );

    gsap.fromTo('.about-text',
      { y: 50, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: 'power3.out',
        scrollTrigger: {
          trigger: '.about-text',
          start: 'top 85%'
        }
      }
    );
  }, { scope: sectionRef, dependencies: [restaurantId] });

  const aboutImage = isShawarma
    ? "https://images.unsplash.com/photo-1561651823-34feb02250e4?auto=format&fit=crop&q=80&w=1200"
    : "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=1200";

  const headline = isShawarma
    ? "Hand-Stacked Cones. Slow-Roasted Bliss."
    : "Born from Coals. Crafted by Tradition.";

  const content = isShawarma
    ? "Our artisanal shawarma cones are loaded fresh every morning. Meticulously basted with heirloom Middle Eastern marinades, they slow-roast over intense vertical burners, hand-sliced straight into fresh-baked naan and samun flatbreads to seal in every drop of rich natural spice juice."
    : "We hand-craft traditional, flame-kissed skewers of premium ground meats and tender cuts over open-air charcoal grills. Each tender bite is smoked with seasoned woods, capturing the exact spice legacy and aromatic sizzle of authentic Shahri Naw grill masters.";

  const marqueeText = isShawarma
    ? { primary: "دبي Dubai", middle: "Artisanal Flatbread", secondary: "Slow Roasted Cones" }
    : { primary: "Charcoal Kabab", middle: "Flame Kissed Skewers", secondary: "Tandoori Naan" };

  return (
    <section id="origin" ref={sectionRef} className="py-32 overflow-hidden relative border-t bg-brand-yellow text-accent border-accent/20 transition-colors duration-500">
      <div className="border-y py-4 md:py-8 mb-24 lg:mb-32 overflow-hidden whitespace-nowrap flex select-none pointer-events-none transition-all duration-500 bg-accent border-accent text-brand-yellow shadow-xl">
        <div ref={marqueeRef} className="font-display text-[10vw] lg:text-[8vw] uppercase font-bold tracking-tighter shrink-0 flex items-center gap-8 md:gap-16">
          <span className="text-brand-yellow">{marqueeText.primary}</span>
          <span className="text-brand-yellow/70">•</span>
          <span className="text-brand-yellow">{marqueeText.middle}</span>
          <span className="text-brand-yellow/70">•</span>
          <span className="text-brand-yellow/90">{marqueeText.secondary}</span>
          <span className="text-brand-yellow/70">•</span>
          <span className="text-brand-yellow">{marqueeText.primary}</span>
          <span className="text-brand-yellow/70">•</span>
          <span className="text-brand-yellow">{marqueeText.middle}</span>
          <span className="text-brand-yellow/70">•</span>
          <span className="text-brand-yellow/90">{marqueeText.secondary}</span>
          <span className="text-brand-yellow/70">•</span>
          <span className="text-brand-yellow">{marqueeText.primary}</span>
          <span className="text-brand-yellow/70">•</span>
          <span className="text-brand-yellow">{marqueeText.middle}</span>
          <span className="text-brand-yellow/70">•</span>
          <span className="text-brand-yellow/90">{marqueeText.secondary}</span>
          <span className="text-brand-yellow/70">•</span>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div className="relative">
          <div className="absolute inset-0 -m-4 bg-gradient-to-tr from-accent to-brand-yellow -z-15 rounded-lg opacity-90 block scale-100 blur-[2px] transition-all duration-500 shadow-[0_10px_40px_rgba(220,38,38,0.2)]" />
          <div className="about-img relative w-full min-h-[60vh] lg:h-[80vh] rounded-sm overflow-hidden z-10">
            <Image
              src={aboutImage}
              alt={config.name}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover brightness-95"
            />
          </div>
          <div className="absolute -bottom-10 -right-10 w-64 h-64 rounded-full blur-[120px] opacity-20 pointer-events-none bg-accent" />
        </div>

        <div className="flex flex-col gap-10">
          <h2 className="about-text font-display text-5xl md:text-7xl leading-[1.1] uppercase font-bold tracking-tight text-accent">
            {headline}
          </h2>
          <p className="about-text font-sans text-lg leading-relaxed font-semibold max-w-md text-accent/90">
            {content}
          </p>
          <div className="about-text h-[1px] w-full mt-8 bg-accent/20" />
          <div className="about-text text-sm font-sans uppercase tracking-[0.2em] text-accent/70">
            <span>{isShawarma ? "The Slice Spit" : "The Charcoal Griller"}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
