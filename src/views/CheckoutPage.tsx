"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useCart } from '../context/CartContext';
import { ColoredTitle } from '../components/ColoredTitle';

export default function CheckoutPage() {
  const { cart, total, clearCart } = useCart();
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
    clearCart();
  };

  if (isSuccess) {
    return (
      <div className="pt-32 pb-24 min-h-screen bg-[#faf8f0] text-center flex flex-col items-center justify-center text-accent transition-colors duration-500">
        <h1 className="font-display font-bold text-5xl uppercase tracking-tighter mb-4 font-semibold">
          <ColoredTitle text="Order Placed Successfully!" />
        </h1>
        <p className="font-sans text-sm tracking-[0.2em] text-accent/75 mb-12 uppercase font-bold">Thank you for your order.</p>
        <Link href="/menu" className="border border-accent text-accent px-8 py-4 font-sans tracking-[0.2em] uppercase text-xs hover:text-white hover:bg-accent transition-colors font-bold">
          Return to Menu
        </Link>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="pt-32 pb-24 min-h-screen bg-[#faf8f0] text-center flex flex-col items-center justify-center text-accent transition-colors duration-500">
        <h1 className="font-display font-bold text-4xl uppercase tracking-tighter mb-4">Your cart is empty</h1>
        <Link href="/menu" className="font-sans text-xs tracking-widest uppercase text-accent/60 hover:text-accent transition-colors underline underline-offset-8 mt-6 font-bold">
          Browse Menu
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#faf8f0] text-dark transition-colors duration-500">
      <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
        <div className="mb-12 border-b border-accent/15 pb-8 flex flex-col items-start">
          <h1 className="font-display font-bold text-5xl md:text-7xl tracking-tighter uppercase text-accent">
            <ColoredTitle text="Checkout" />
          </h1>
          <p className="font-sans mt-4 text-xs tracking-[0.4em] text-accent/60 uppercase font-bold">Complete your pickup order</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          <div className="flex-1">
            <form onSubmit={handleSubmit} className="flex flex-col gap-8">
              <div>
                <h3 className="font-display text-2xl text-dark uppercase tracking-wide mb-6 font-semibold">Customer Details</h3>
                <div className="flex flex-col gap-4">
                  <div>
                    <label className="block font-sans text-[10px] uppercase tracking-widest text-dark/70 mb-2 font-bold">Full Name</label>
                    <input required type="text" className="w-full bg-transparent border border-accent/20 px-4 py-3 text-dark font-sans text-sm focus:border-accent transition-colors outline-none font-medium placeholder:text-dark/40" placeholder="e.g. Jane Doe" />
                  </div>
                  <div>
                    <label className="block font-sans text-[10px] uppercase tracking-widest text-dark/70 mb-2 font-bold">UK Phone Number</label>
                    <input required type="tel" pattern="^(?:0|\\+?44)(?:\\d\\s?){9,10}$" title="Please enter a valid UK phone number" placeholder="e.g. 07700 900077" className="w-full bg-transparent border border-accent/20 px-4 py-3 text-dark font-sans text-sm focus:border-accent transition-colors outline-none font-medium placeholder:text-dark/40" />
                  </div>
                  <div>
                    <label className="block font-sans text-[10px] uppercase tracking-widest text-dark/70 mb-2 font-bold">Email Address</label>
                    <input required type="email" placeholder="e.g. name@example.com" className="w-full bg-transparent border border-accent/20 px-4 py-3 text-dark font-sans text-sm focus:border-accent transition-colors outline-none font-medium placeholder:text-dark/40" />
                  </div>
                  <div>
                    <label className="block font-sans text-[10px] uppercase tracking-widest text-dark/70 mb-2 font-bold">Special Instructions (Optional)</label>
                    <textarea rows={3} className="w-full bg-transparent border border-accent/20 px-4 py-3 text-dark font-sans text-sm focus:border-accent transition-colors outline-none resize-none font-medium placeholder:text-dark/40" placeholder="Any specific requirements..."></textarea>
                  </div>
                </div>
              </div>

              <button type="submit" className="mt-4 border border-accent bg-accent text-white px-8 py-5 font-sans tracking-[0.2em] uppercase text-xs hover:bg-[#faf8f0] hover:text-accent hover:border-accent transition-colors font-bold w-full">
                Place Pickup Order | ${total.toFixed(2)}
              </button>
            </form>
          </div>

          <div className="w-full lg:w-[400px]">
            <div className="bg-[#faf8f0] border border-accent/15 p-8 sticky top-32 shadow-sm">
              <h3 className="font-display text-2xl text-dark tracking-tighter uppercase mb-6 border-b border-accent/15 pb-4">
                Order Summary
              </h3>
              <div className="flex flex-col gap-6 mb-8">
                {cart.map(c => (
                  <div key={c.item.id} className="flex justify-between items-start gap-4">
                    <div>
                      <span className="font-display text-xs text-dark block font-semibold uppercase tracking-wider">{c.quantity}x {c.item.title}</span>
                    </div>
                    <span className="font-display text-dark/80">${(parseFloat(c.item.price.replace('$', '')) * c.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>
              <div className="border-t border-accent/15 pt-6">
                <div className="flex justify-between items-end">
                  <span className="font-sans text-[10px] uppercase tracking-widest text-dark/70 font-bold">Total</span>
                  <span className="font-display text-3xl text-dark leading-none">${total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
