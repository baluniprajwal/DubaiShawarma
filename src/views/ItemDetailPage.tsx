"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { menuData } from '../data';
import { useCart } from '../context/CartContext';

export default function ItemDetailPage({ itemId }: { itemId: string }) {
  const router = useRouter();
  const { addToCart, setIsCartOpen } = useCart();
  const item = menuData.find((menuItem) => menuItem.id === itemId);

  if (!item) {
    return (
      <div className="pt-32 pb-24 min-h-screen bg-brand-yellow text-center flex flex-col items-center justify-center text-accent transition-colors duration-500">
        <h1 className="font-display font-bold text-4xl uppercase tracking-tighter mb-4">Item not found</h1>
        <Link href="/menu" className="font-sans text-xs tracking-widest uppercase text-accent/60 hover:text-accent transition-colors">
          Return to Menu
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-24 min-h-screen bg-brand-yellow text-accent transition-colors duration-500">
      <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
        <button
          onClick={() => router.back()}
          className="mb-12 font-sans text-[10px] uppercase tracking-[0.2em] text-accent/60 hover:text-accent transition-colors"
        >
          Back
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="relative aspect-square md:aspect-[4/5] overflow-hidden bg-white/20 border border-accent/15">
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>

          <div className="flex flex-col">
            <div className="mb-6 flex flex-wrap gap-4 items-center">
              <span className="border border-accent/15 bg-white/15 px-3 py-1 font-sans text-[10px] uppercase tracking-[0.2em] text-accent/85 font-bold">
                {item.category}
              </span>
            </div>

            <h1 className="font-display uppercase font-bold text-5xl md:text-7xl text-accent mb-6 tracking-wide leading-none">
              {item.title}
            </h1>

            <div className="font-display text-4xl text-accent font-medium mb-12">
              {item.price}
            </div>

            <div className="h-[1px] w-16 bg-accent mb-8" />

            <p className="font-sans text-sm tracking-[0.2em] uppercase leading-relaxed text-accent/75 mb-12 max-w-lg font-bold">
              {item.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-6 mt-8">
              <button
                onClick={() => {
                  addToCart(item);
                  setIsCartOpen(true);
                }}
                className="relative overflow-hidden group border border-accent text-accent px-12 py-5 font-sans tracking-[0.2em] uppercase text-xs hover:text-white hover:border-accent transition-colors duration-500 text-center"
              >
                <span className="relative z-10 font-bold">Add to Order</span>
                <div className="absolute inset-0 w-full h-full bg-accent scale-x-0 origin-right group-hover:origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out z-0" />
              </button>
              <Link
                href="/book"
                className="font-sans text-[10px] uppercase tracking-[0.2em] text-accent/60 hover:text-accent transition-colors flex items-center justify-center border border-accent/10 hover:border-accent/30 px-8"
              >
                Book a Table
              </Link>
            </div>

            <div className="mt-16 pt-8 border-t border-accent/15 flex gap-12 text-left">
              <div>
                <p className="font-sans text-[9px] uppercase tracking-widest text-accent/50 mb-2">Ingredients</p>
                <p className="font-sans text-xs tracking-wider text-accent/80 uppercase font-bold">Locally Sourced</p>
              </div>
              <div>
                <p className="font-sans text-[9px] uppercase tracking-widest text-accent/50 mb-2">Preparation</p>
                <p className="font-sans text-xs tracking-wider text-accent/80 uppercase font-bold">Wood Fired</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
