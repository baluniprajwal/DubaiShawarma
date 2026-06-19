"use client";

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import Link from 'next/link';
import { Search } from 'lucide-react';
import { useRef, useState, useMemo } from 'react';
import { useRestaurant } from '../context/RestaurantContext';
import { ColoredTitle } from './ColoredTitle';

gsap.registerPlugin(ScrollTrigger);

interface MenuProps {
  limit?: number;
}

export default function Menu({ limit }: MenuProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { menu, config } = useRestaurant();
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  useGSAP(() => {
    gsap.fromTo('.menu-card',
      { y: 100, opacity: 0, scale: 0.95 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        stagger: 0.1,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.menu-grid',
          start: 'top 80%'
        }
      }
    );
  }, { scope: sectionRef });

  const categories = useMemo(() => {
    return ['All', ...new Set(menu.map(item => item.category))];
  }, [menu]);

  const selectedCategory = categories.includes(activeCategory) ? activeCategory : 'All';

  const displayData = useMemo(() => {
    let filtered = menu;
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }
    if (searchQuery.trim()) {
      filtered = filtered.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return limit ? filtered.slice(0, limit) : filtered;
  }, [menu, selectedCategory, searchQuery, limit]);

  const isShawarma = config.id === 'shawarma';

  return (
    <section id="the-cuts" ref={sectionRef} className="py-32 min-h-screen relative transition-colors duration-500 bg-[#faf8f0]">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className={`mb-16 text-center border-b pb-12 flex flex-col items-center ${isShawarma ? 'border-accent/10' : 'border-dark/5'}`}>
          <h2 className="font-display font-bold text-6xl md:text-8xl tracking-tighter uppercase text-dark">
            <ColoredTitle text={limit ? 'Featured Cuts' : 'Our Menu'} colorMode="default" />
          </h2>
          <p className="font-sans mt-4 text-xs tracking-[0.4em] uppercase text-dark/40">
            {config.tagline || 'Classic Middle Eastern Flavors'}
          </p>
        </div>

        {!limit && (
          <div className="mb-16 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 font-sans text-[10px] uppercase tracking-widest transition-colors duration-300 border ${
                    selectedCategory === cat
                      ? 'bg-accent text-white border-accent font-bold'
                      : 'bg-transparent text-dark/60 border-dark/20 hover:border-accent hover:text-accent'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="relative w-full md:w-80 group">
              <input
                type="text"
                placeholder="Search menu..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-full font-sans text-xs uppercase tracking-widest px-12 py-4 outline-none transition-colors ${
                  isShawarma
                    ? 'bg-[#fbfbf9] border border-dark/20 text-dark focus:border-accent placeholder-dark/40'
                    : 'bg-[#fbfbf9] border border-dark/20 text-dark focus:border-dark/60 placeholder-dark/40'
                }`}
              />
              <Search size={18} className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${isShawarma ? 'text-dark/40 group-focus-within:text-accent' : 'text-dark/40 group-focus-within:text-dark'}`} />
            </div>
          </div>
        )}

        {displayData.length === 0 && !limit ? (
          <div className="py-32 text-center font-sans tracking-widest uppercase text-sm text-dark/50">
            No items found matching your criteria.
          </div>
        ) : (
          <div className="menu-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
            {displayData.map((item) => (
              <Link
                href={`/item/${item.id}`}
                key={item.id}
                className="menu-card group relative aspect-[3/4] rounded-2xl overflow-hidden block shadow-[0_4px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_24px_60px_-10px_rgba(140,28,28,0.15)] transition-all duration-700 ease-out select-none"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes={limit ? "(min-width: 1024px) 25vw, 50vw" : "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"}
                  className="absolute inset-0 object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]"
                />

                <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-black/50 to-transparent pointer-events-none opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/95 via-dark/45 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-700" />
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-white/0 pointer-events-none rounded-2xl" />

                <div className="absolute top-4 left-4 border border-white/20 bg-[#12100e]/80 backdrop-blur-md px-3.5 py-1.5 rounded-full">
                  <span className="font-sans text-[8px] font-bold uppercase tracking-[0.25em] text-[#faf8f0]/90 block leading-none">
                    {item.category}
                  </span>
                </div>

                <div className="absolute top-4 right-4 bg-accent/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-accent/30 shadow-sm">
                  <span className="font-display text-[10px] font-bold tracking-widest text-[#faf8f0] block leading-none">
                    {item.price}
                  </span>
                </div>

                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 flex flex-col justify-end text-center items-center z-10">
                  <h3 className="font-display text-2xl sm:text-3xl text-[#faf8f0] uppercase tracking-wider group-hover:text-brand-yellow transition-colors duration-500 font-bold leading-tight drop-shadow-md">
                    {item.title}
                  </h3>
                  <div className="mt-3.5 relative h-[1.5px] w-6 bg-brand-yellow/80 group-hover:w-16 group-hover:bg-brand-yellow transition-all duration-700 ease-out" />
                  <span className="opacity-0 group-hover:opacity-100 mt-2 font-sans text-[8px] uppercase tracking-[0.3em] text-[#faf8f0]/80 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                    Discover Plate
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}

        {limit && (
          <div className="mt-24 text-center">
            <Link href="/menu" className="inline-block relative overflow-hidden group border border-dark/20 text-dark px-12 py-4 font-sans tracking-[0.2em] uppercase text-xs transition-colors duration-500 hover:text-white hover:border-accent">
              <span className="relative z-10 font-bold">View Full Menu</span>
              <div className="absolute inset-0 w-full h-full bg-accent scale-x-0 origin-right group-hover:origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out z-0" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
