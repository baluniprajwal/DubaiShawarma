"use client";

import { useRestaurant } from '../context/RestaurantContext';
import { MapPin, Phone, Clock } from 'lucide-react';

export default function Footer() {
  const { config, restaurantId } = useRestaurant();
  const isShawarma = restaurantId === 'shawarma';
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(config.address + ' ' + config.name)}`;

  return (
    <footer id="reserve" className="pt-20 md:pt-28 pb-8 md:pb-10 px-6 md:px-12 border-t relative overflow-hidden select-none transition-colors duration-500 bg-accent border-brand-yellow/30 text-brand-yellow">
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-20 mb-16 text-left">
          <div className="space-y-4">
            <div className="flex items-center gap-1.5 uppercase tracking-[0.3em] text-[9px] font-bold text-brand-yellow">
              <span>Authentic</span>
            </div>
            <div>
              <h3 className="font-display uppercase text-2xl font-bold tracking-tight leading-none mb-1 text-brand-yellow">
                {config.name}
              </h3>
              <span className="font-sans text-xs uppercase tracking-widest font-semibold text-white">
                {config.badge}
              </span>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="font-sans uppercase tracking-[0.25em] text-[10px] font-bold flex items-center gap-2 text-brand-yellow/60">
              <MapPin size={12} className="text-brand-yellow" />
              Address
            </h4>
            <div className="leading-relaxed">
              <p className="font-sans text-sm font-semibold uppercase tracking-wider text-brand-yellow/85">
                {config.address}
              </p>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 font-display uppercase text-[10px] transition-colors duration-300 tracking-[0.15em] font-semibold underline underline-offset-4 text-brand-yellow hover:text-white"
              >
                Maps Directions
              </a>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="font-sans uppercase tracking-[0.25em] text-[10px] font-bold flex items-center gap-2 text-brand-yellow/60">
              <Clock size={12} className="text-brand-yellow" />
              Kitchen Hours
            </h4>
            <div className="leading-relaxed font-sans text-sm uppercase tracking-wider text-brand-yellow/70">
              <p className="font-semibold text-brand-yellow/80">Monday - Sunday</p>
              <p className="font-mono text-xs font-semibold mt-0.5 text-white">11:30 AM - 11:00 PM</p>
            </div>
          </div>

          <div className="space-y-3 md:text-right md:items-end flex flex-col">
            <h4 className="font-sans uppercase tracking-[0.25em] text-[10px] font-bold flex items-center md:justify-end gap-2 text-brand-yellow/60">
              <Phone size={12} className="text-brand-yellow" />
              Inquiries
            </h4>
            <div className="w-full">
              {isShawarma ? (
                <a href="tel:01634559886" className="font-display font-semibold uppercase text-xl sm:text-2xl tracking-wider transition-colors block leading-none md:text-right text-brand-yellow/95 hover:text-white">
                  {config.phone}
                </a>
              ) : (
                <div className="space-y-1">
                  <a href="tel:07900128859" className="font-display font-semibold uppercase text-xl tracking-wider transition-colors block leading-tight md:text-right text-brand-yellow/95 hover:text-white">
                    0790 012 8859
                  </a>
                  <a href="tel:07570511004" className="font-display font-semibold uppercase text-xl tracking-wider transition-colors block leading-tight md:text-right text-brand-yellow/95 hover:text-white">
                    0757 051 1004
                  </a>
                </div>
              )}
              <span className="font-sans text-[8px] uppercase tracking-widest mt-1 block md:text-right text-brand-yellow/40">Toll-free Hotline Desk</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t font-sans text-[10px] uppercase tracking-[0.2em] gap-4 border-brand-yellow/20 text-brand-yellow/40">
          <p>&copy; {new Date().getFullYear()} {config.name}. All rights reserved.</p>
          <div className="flex gap-6 font-semibold">
            <a href="#" className="transition-colors duration-300 hover:text-white">Instagram</a>
            <a href="#" className="transition-colors duration-300 hover:text-white">Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
