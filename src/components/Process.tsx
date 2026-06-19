"use client";

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { useRef } from 'react';
import { useRestaurant } from '../context/RestaurantContext';
import { ColoredTitle } from './ColoredTitle';

gsap.registerPlugin(ScrollTrigger);

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { restaurantId } = useRestaurant();
  const isShawarma = restaurantId === 'shawarma';

  useGSAP(() => {
    const cards = gsap.utils.toArray<HTMLElement>('.process-card');

    gsap.fromTo(
      '.process-title',
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out', scrollTrigger: { trigger: '.process-title', start: 'top 80%' } }
    );

    cards.forEach((card, i) => {
      gsap.fromTo(card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: i * 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%'
          }
        }
      );
    });
  }, { scope: containerRef, dependencies: [restaurantId] });

  const shawarmaSteps = [
    {
      num: '01',
      title: 'The Spit Cones',
      desc: 'Hand-stacked from dawn with premium basted chicken thigh and seasoned halal lamb loin, layered beautifully for perfect roast ratios.',
      img: 'https://images.unsplash.com/photo-1561651823-34feb02250e4?auto=format&fit=crop&q=80&w=1200'
    },
    {
      num: '02',
      title: 'The Vertical Sizzle',
      desc: 'Rotisserie flame-kissed on high-intensity vertical grills, capturing and pooling every drop of seasoning and sweet natural juice.',
      img: 'https://images.unsplash.com/photo-1528736235302-52922df5c122?auto=format&fit=crop&q=80&w=1200'
    },
    {
      num: '03',
      title: 'The Tandoori Bake',
      desc: 'Pulled fresh from blistering clay tandoors, our warm Samun & flatbread folds seal the succulent carved meats in classic Dubai style.',
      img: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&q=80&w=1200'
    }
  ];

  const grillSteps = [
    {
      num: '01',
      title: 'The Selection',
      desc: 'We source exclusively grass-fed, grain-finished meat. Prime cuts undergo rigorous in-house inspection before any marination.',
      img: 'https://images.unsplash.com/photo-1607305387299-a3d9611cd469?auto=format&fit=crop&q=80&w=1200'
    },
    {
      num: '02',
      title: 'The Saffron Spice',
      desc: 'Infused over 24 hours in grated onions, yogurt, Persian saffron, and sumac spice rubs to break down fibers for absolute tenderness.',
      img: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?auto=format&fit=crop&q=80&w=1200'
    },
    {
      num: '03',
      title: 'The Live Coals',
      desc: 'Iron skewers are laid directly over glowing tandoori oak and hickory embers, generating the legendary charred aroma of Shahri Naw.',
      img: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1200'
    }
  ];

  const steps = isShawarma ? shawarmaSteps : grillSteps;

  return (
    <section ref={containerRef} id="discipline" className="relative w-full py-24 md:py-32 border-t transition-colors duration-500 ease-out bg-accent border-brand-yellow/30">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="process-title font-display text-4xl md:text-6xl lg:text-7xl uppercase font-bold mb-20 md:mb-24 tracking-tighter text-center text-brand-yellow">
          <ColoredTitle text="The Culinary Rite" colorMode="yellow-white" />
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, i) => (
            <div key={i} className="process-card flex flex-col group">
              <div className="relative w-full aspect-[4/5] overflow-hidden mb-8 border border-brand-yellow/30 bg-accent shadow-md">
                <Image
                  src={step.img}
                  alt={step.title}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="absolute inset-0 object-cover brightness-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <span className="absolute bottom-6 left-6 font-display text-6xl md:text-7xl font-bold leading-none drop-shadow-md text-brand-yellow">
                  {step.num}
                </span>
              </div>

              <h3 className="font-display uppercase text-2xl md:text-3xl font-bold mb-4 text-brand-yellow">
                {step.title}
              </h3>
              <div className="h-[1px] w-12 mb-6 transition-all duration-500 ease-out bg-brand-yellow/50 group-hover:w-full group-hover:bg-brand-yellow" />
              <p className="font-sans text-xs tracking-[0.2em] uppercase leading-relaxed font-bold text-brand-yellow/90">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
