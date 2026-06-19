"use client";

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Menu, X, ShoppingBag, GitCompare } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCart } from '../context/CartContext';
import { useRestaurant } from '../context/RestaurantContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLUListElement>(null);
  const pathname = usePathname();
  const { itemCount, setIsCartOpen } = useCart();
  const { config, restaurantId, setShowSelectionModal } = useRestaurant();

  useGSAP(() => {
    gsap.from(navRef.current, {
      y: -50,
      opacity: 0,
      duration: 1,
      delay: 0.5,
      ease: 'power3.out'
    });
  });

  useGSAP(() => {
    if (isOpen) {
      gsap.to(overlayRef.current, {
        clipPath: 'circle(150% at 100% 0%)',
        duration: 0.8,
        ease: 'power4.inOut'
      });
      gsap.fromTo(
        gsap.utils.toArray(linksRef.current?.children || []),
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, delay: 0.4, ease: 'power3.out' }
      );
    } else {
      gsap.to(overlayRef.current, {
        clipPath: 'circle(0% at 100% 0%)',
        duration: 0.8,
        ease: 'power4.inOut'
      });
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Origin', path: '/#origin' },
    { label: 'Menu', path: '/menu' },
    { label: 'Reserve', path: '/book' }
  ];

  return (
    <>
      <nav ref={navRef} className="fixed top-0 left-0 w-full z-50 px-6 py-8 md:px-12 flex justify-between items-center pointer-events-auto">
        <Link href="/" className="flex flex-col items-start gap-0 leading-none">
          {restaurantId === 'shawarma' ? (
            <span className="font-display text-3xl sm:text-4xl tracking-tight font-bold uppercase flex items-center">
              <span className="text-accent">D</span>
              <span className="text-brand-yellow lowercase">u</span>
              <span className="text-accent lowercase">b</span>
              <span className="text-brand-yellow">a</span>
              <span className="text-accent lowercase">i</span>
            </span>
          ) : (
            <span className="font-display text-4xl tracking-tighter font-bold uppercase flex items-center">
              <span className="text-accent">P</span>
              <span className="text-brand-yellow">A</span>
              <span className="text-accent">R</span>
              <span className="text-brand-yellow">K</span>
            </span>
          )}
          <span className="font-display text-brand-yellow text-[10px] sm:text-xs uppercase ml-1 tracking-widest leading-none drop-shadow-md font-medium">{config.badge}</span>
        </Link>

        <div className="flex items-center gap-4 md:gap-8">
          <button
            onClick={() => setShowSelectionModal(true)}
            className="flex items-center gap-1.5 border border-accent/35 hover:border-accent text-accent px-3 py-1.5 font-sans text-[9px] sm:text-[10px] uppercase tracking-[0.2em] transition-colors font-bold rounded-sm cursor-pointer"
            title="Switch Restaurant"
          >
            <GitCompare size={12} />
            <span className="hidden sm:inline">Switch Kitchen</span>
          </button>

          <Link href="/book" className="hidden md:block font-sans text-[10px] uppercase tracking-[0.2em] text-dark hover:text-accent transition-colors font-bold">
            Book a Table
          </Link>
          <Link href="/menu" className="hidden md:block border border-dark/25 px-5 py-2 font-sans text-[10px] uppercase tracking-[0.2em] text-dark hover:bg-accent hover:border-accent hover:text-white transition-colors font-bold">
            Menu
          </Link>
          <button onClick={() => setIsCartOpen(true)} className="relative text-dark hover:text-accent transition-colors flex items-center justify-center cursor-pointer">
            <ShoppingBag size={24} strokeWidth={1} />
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-accent text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="z-[60] relative outline-none text-dark hover:text-accent transition-colors transition-transform active:scale-95 cursor-pointer"
          >
            {isOpen ? <X size={36} strokeWidth={1} /> : <Menu size={36} strokeWidth={1} />}
          </button>
        </div>
      </nav>

      <div
        ref={overlayRef}
        className="fixed inset-0 bg-[#faf8f0] z-40 flex flex-col justify-center items-center"
        style={{ clipPath: 'circle(0% at 100% 0%)' }}
      >
        <ul ref={linksRef} className="text-center space-y-6 flex flex-col items-center">
          {navLinks.map((item) => {
            const handleClick = () => {
              setIsOpen(false);
              if (item.path.startsWith('/#') && pathname === '/') {
                const targetId = item.path.replace('/#', '');
                const el = document.getElementById(targetId);
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth' });
                  window.history.replaceState(null, '', `/#${targetId}`);
                }
              }
            };

            return (
              <li key={item.label} className="overflow-hidden">
                <Link
                  href={item.path}
                  onClick={handleClick}
                  className="font-display text-4xl sm:text-6xl md:text-8xl uppercase tracking-tighter font-bold text-dark hover:text-accent transition-colors duration-300"
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
          <li className="pt-8 overflow-hidden">
            <button
              onClick={() => {
                setIsOpen(false);
                setShowSelectionModal(true);
              }}
              className="flex items-center gap-2 border border-accent text-accent px-6 py-3 font-sans tracking-[0.2em] uppercase text-xs hover:bg-accent hover:text-white transition-colors duration-300 font-bold cursor-pointer"
            >
              <GitCompare size={14} className="stroke-[2.5]" />
              Switch Concept Kitchen
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}
