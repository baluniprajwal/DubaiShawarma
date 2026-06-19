"use client";

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { useRestaurant } from '../context/RestaurantContext';
import { MapPin, Phone, ShieldAlert, X } from 'lucide-react';
import { restaurantConfigs } from '../data';
import { lockScroll, unlockScroll } from '../utils/scroll-lock';

export default function RestaurantSelectorModal() {
  const {
    restaurantId,
    setRestaurant,
    hasSelectedRestaurant,
    showSelectionModal,
    setShowSelectionModal
  } = useRestaurant();

  useEffect(() => {
    if (showSelectionModal) {
      lockScroll('restaurant-selector');
    } else {
      unlockScroll('restaurant-selector');
    }

    return () => {
      unlockScroll('restaurant-selector');
    };
  }, [showSelectionModal]);

  const handleSelect = (id: 'shawarma' | 'grill') => {
    setRestaurant(id);
  };

  return (
    <AnimatePresence>
      {showSelectionModal && (
        <motion.div 
          id="restaurant-selector-overlay" 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[200] flex flex-col md:flex-row h-screen w-screen max-h-screen max-w-full overflow-hidden select-none bg-dark"
        >
          {hasSelectedRestaurant && (
            <button
              onClick={() => setShowSelectionModal(false)}
              className="absolute top-6 right-6 z-[250] flex items-center justify-center bg-white/10 hover:bg-accent text-[#faf8f0] p-3 rounded-full backdrop-blur-lg transition-all duration-300 transform hover:rotate-90 hover:scale-110 cursor-pointer border border-white/20 shadow-xl"
              title="Return to Site"
            >
              <X size={20} strokeWidth={2} />
            </button>
          )}

          <div 
            onClick={() => handleSelect('shawarma')}
            className={`group relative flex-1 h-1/2 md:h-full w-full flex flex-col justify-end p-8 sm:p-12 md:p-16 lg:p-24 overflow-hidden cursor-pointer transition-all duration-700 ease-out border-b md:border-b-0 md:border-r border-white/5 ${
              restaurantId === 'shawarma' && hasSelectedRestaurant ? 'opacity-100 z-10' : 'opacity-85 hover:opacity-100'
            }`}
          >
            <Image
              src="https://images.unsplash.com/photo-1528736235302-52922df5c122?auto=format&fit=crop&q=80&w=1600"
              alt="Dubai Shawarma"
              fill
              priority
              sizes="50vw"
              className="absolute inset-0 object-cover transition-transform duration-[2400ms] cubic-bezier(0.16, 1, 0.3, 1) scale-101 group-hover:scale-[1.04]"
            />
            <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-black/60 to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/30 to-transparent opacity-95 group-hover:opacity-90 transition-opacity duration-500" />
            
            {restaurantId === 'shawarma' && hasSelectedRestaurant && (
              <div className="absolute inset-3 md:inset-5 border border-accent rounded-xl z-20 pointer-events-none" />
            )}

            <div className="relative z-10 w-full max-w-lg transition-all duration-500 transform group-hover:-translate-y-2">
              <span className="font-display text-brand-yellow text-xs md:text-sm tracking-[0.3em] uppercase block mb-3 font-bold">
                {restaurantConfigs.shawarma.tagline}
              </span>
              
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase text-white tracking-normal font-bold leading-none">
                {restaurantConfigs.shawarma.name}
              </h2>
              
              <div className="my-5 h-[1.5px] w-8 bg-accent group-hover:w-24 transition-all duration-500 ease-out" />
              
              <p className="font-sans text-xs md:text-sm text-white/70 tracking-widest leading-relaxed uppercase font-semibold mb-6 max-w-sm">
                Middle Eastern street food. Golden hot baked breads, dynamic flame-carved carvings, and traditional fatayers.
              </p>

              <div className="flex flex-wrap gap-x-6 gap-y-2 pt-4 border-t border-white/5 text-[9px] md:text-[10px] font-sans uppercase tracking-[0.15em] text-white/45">
                <span className="flex items-center gap-1.5"><MapPin size={11} className="text-accent" /> {restaurantConfigs.shawarma.address}</span>
                <span className="flex items-center gap-1.5"><Phone size={11} className="text-accent" /> {restaurantConfigs.shawarma.phone}</span>
              </div>

              <div className="mt-8 flex">
                <span className="inline-block border-2 border-accent bg-accent text-[#faf8f0] px-8 py-3.5 font-display tracking-[0.25em] uppercase text-[10px] md:text-xs hover:bg-transparent hover:text-accent font-bold transition-all duration-300 rounded-sm shadow-md">
                  Enter Restaurant
                </span>
              </div>
            </div>
          </div>

          <div 
            onClick={() => handleSelect('grill')}
            className={`group relative flex-1 h-1/2 md:h-full w-full flex flex-col justify-end p-8 sm:p-12 md:p-16 lg:p-24 overflow-hidden cursor-pointer transition-all duration-700 ease-out ${
              restaurantId === 'grill' && hasSelectedRestaurant ? 'opacity-100 z-10' : 'opacity-85 hover:opacity-100'
            }`}
          >
            <Image
              src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=1600"
              alt="Park Shahri New"
              fill
              priority
              sizes="50vw"
              className="absolute inset-0 object-cover transition-transform duration-[2400ms] cubic-bezier(0.16, 1, 0.3, 1) scale-101 group-hover:scale-[1.04]"
            />
            <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-black/60 to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/30 to-transparent opacity-95 group-hover:opacity-90 transition-opacity duration-500" />
            
            {restaurantId === 'grill' && hasSelectedRestaurant && (
              <div className="absolute inset-3 md:inset-5 border border-accent rounded-xl z-20 pointer-events-none" />
            )}

            <div className="relative z-10 w-full max-w-lg transition-all duration-500 transform group-hover:-translate-y-2">
              <span className="font-display text-brand-yellow text-xs md:text-sm tracking-[0.3em] uppercase block mb-3 font-bold">
                {restaurantConfigs.grill.tagline}
              </span>
              
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase text-white tracking-normal font-bold leading-none">
                {restaurantConfigs.grill.name}
              </h2>
              
              <div className="my-5 h-[1.5px] w-8 bg-accent group-hover:w-24 transition-all duration-500 ease-out" />
              
              <p className="font-sans text-xs md:text-sm text-white/70 tracking-widest leading-relaxed uppercase font-semibold mb-6 max-w-sm">
                Authentic charcoal-kissed masterpieces. Flame-skewered lamb kofta, juicy shish tawook, and hand-prepared meze.
              </p>

              <div className="flex flex-wrap gap-x-6 gap-y-2 pt-4 border-t border-white/5 text-[9px] md:text-[10px] font-sans uppercase tracking-[0.15em] text-white/45">
                <span className="flex items-center gap-1.5"><MapPin size={11} className="text-accent" /> {restaurantConfigs.grill.address}</span>
                <span className="flex items-center gap-1.5"><Phone size={11} className="text-accent" /> {restaurantConfigs.grill.phone}</span>
              </div>

              <div className="mt-8 flex">
                <span className="inline-block border-2 border-[#14532d] bg-[#14532d] text-[#faf8f0] px-8 py-3.5 font-display tracking-[0.25em] uppercase text-[10px] md:text-xs hover:bg-transparent hover:text-[#14532d] font-bold transition-all duration-300 rounded-sm shadow-md">
                  Enter Restaurant
                </span>
              </div>
            </div>
          </div>

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30 pointer-events-none hidden md:flex items-center gap-2 bg-[#12100e]/40 backdrop-blur-md px-4 py-2 border border-white/5 rounded-full">
            <ShieldAlert size={11} className="text-accent" />
            <span className="font-sans text-[8px] uppercase tracking-widest text-[#faf8f0]/60 font-semibold leading-none">
              Changing active location clears current shopping bag contents
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
