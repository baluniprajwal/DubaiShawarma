"use client";

import React, { useState } from 'react';
import { ColoredTitle } from '../components/ColoredTitle';

export default function BookTablePage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-brand-yellow text-accent transition-colors duration-500">
      <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
        <div className="mb-16 text-center border-b border-accent/15 pb-12">
          <h1 className="font-display font-bold text-6xl md:text-8xl tracking-tighter uppercase text-accent">
            <ColoredTitle text="Reserve" />
          </h1>
          <p className="font-sans mt-4 text-xs tracking-[0.4em] text-accent/60 uppercase font-bold">Secure your table at Dubai Shawarma</p>
        </div>

        {submitted ? (
          <div className="text-center bg-white/20 backdrop-blur-sm p-16 border border-accent/15 shadow-md">
            <h2 className="font-display text-4xl text-accent uppercase mb-4 font-semibold tracking-wide">Request Sent</h2>
            <p className="font-sans text-accent/75 tracking-widest uppercase text-sm font-bold">We will contact you shortly to confirm your reservation.</p>
          </div>
        ) : (
          <form onClick={(e) => e.stopPropagation()} onSubmit={handleSubmit} className="bg-white/20 backdrop-blur-sm p-8 md:p-16 border border-accent/15 flex flex-col gap-8 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-3">
                <label className="font-sans text-[10px] uppercase tracking-[0.2em] text-accent/70 font-bold">Date</label>
                <input required type="date" style={{ colorScheme: 'light' }} className="bg-transparent border border-accent/20 p-4 text-accent hover:border-accent/50 focus:outline-none focus:border-accent font-sans transition-colors cursor-pointer" />
              </div>
              <div className="flex flex-col gap-3">
                <label className="font-sans text-[10px] uppercase tracking-[0.2em] text-accent/70 font-bold">Time</label>
                <select required className="bg-white/10 border border-accent/20 p-4 text-accent hover:border-accent/50 focus:outline-none focus:border-accent font-sans transition-colors cursor-pointer">
                  <option value="">Select Time</option>
                  <option value="18:00">18:00</option>
                  <option value="19:00">19:00</option>
                  <option value="20:00">20:00</option>
                  <option value="21:00">21:00</option>
                  <option value="22:00">22:00</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <label className="font-sans text-[10px] uppercase tracking-[0.2em] text-accent/70 font-bold">Guests</label>
              <select required className="bg-white/10 border border-accent/20 p-4 text-accent hover:border-accent/50 focus:outline-none focus:border-accent font-sans transition-colors cursor-pointer font-medium">
                <option value="">Number of Guests</option>
                <option value="1">1 Guest</option>
                <option value="2">2 Guests</option>
                <option value="3">3 Guests</option>
                <option value="4">4 Guests</option>
                <option value="5">5+ Guests (Call Us)</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-3">
                <label className="font-sans text-[10px] uppercase tracking-[0.2em] text-accent/70 font-bold">Name</label>
                <input required type="text" placeholder="John Doe" className="bg-transparent border border-accent/20 p-4 text-accent hover:border-accent/50 focus:outline-none focus:border-accent font-sans transition-colors placeholder:text-accent/40 font-medium" />
              </div>
              <div className="flex flex-col gap-3">
                <label className="font-sans text-[10px] uppercase tracking-[0.2em] text-accent/70 font-bold">Phone</label>
                <input required type="tel" placeholder="+1 (555) 000-0000" className="bg-transparent border border-accent/20 p-4 text-accent hover:border-accent/50 focus:outline-none focus:border-accent font-sans transition-colors placeholder:text-accent/40 font-medium" />
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <label className="font-sans text-[10px] uppercase tracking-[0.2em] text-accent/70 font-bold">Special Requests</label>
              <textarea rows={4} className="bg-transparent border border-accent/20 p-4 text-accent hover:border-accent/50 focus:outline-none focus:border-accent font-sans transition-colors resize-none placeholder:text-accent/40 font-medium" placeholder="Dietary requirements, special occasions..."></textarea>
            </div>

            <button type="submit" className="mt-8 relative overflow-hidden group border border-accent text-accent px-12 py-5 font-sans tracking-[0.2em] uppercase text-xs hover:text-white hover:border-accent transition-colors duration-500 text-center w-full">
              <span className="relative z-10 font-bold">Request Table</span>
              <div className="absolute inset-0 w-full h-full bg-accent scale-x-0 origin-right group-hover:origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out z-0" />
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
