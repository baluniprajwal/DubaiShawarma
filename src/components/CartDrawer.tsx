"use client";

import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '../context/CartContext';
import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { ColoredTitle } from './ColoredTitle';

export default function CartDrawer() {
  const { cart, addToCart, removeFromCart, total, isCartOpen, setIsCartOpen, clearCart } = useCart();

  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isCartOpen]);

  return (
    <div className={`fixed inset-0 z-[70] ${isCartOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
      <div
        className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ease-out ${
          isCartOpen ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={() => setIsCartOpen(false)}
      />
      <div
        className={`absolute top-0 right-0 h-full w-full max-w-md bg-brand-yellow border-l border-accent/20 shadow-2xl flex flex-col transform transition-transform duration-500 ease-out ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-8 border-b border-accent/15 flex justify-between items-center bg-white/20 backdrop-blur-sm">
          <h2 className="font-display text-4xl uppercase tracking-tighter text-accent">
            <ColoredTitle text="Your Order" />
          </h2>
          <button
            onClick={() => setIsCartOpen(false)}
            className="text-accent/60 hover:text-accent transition-colors p-2 -mr-2"
          >
            <X size={24} strokeWidth={1.5} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-8 relative">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center opacity-90 relative z-10 transition-all duration-300">
              <div className="w-16 h-[1px] bg-accent mb-6" />
              <p className="font-sans text-xs tracking-[0.2em] uppercase text-accent font-bold">Your cart is empty</p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="mt-8 border border-accent/25 px-8 py-4 font-sans text-[10px] uppercase tracking-widest text-accent hover:bg-accent hover:text-white transition-colors font-bold"
              >
                Browse Menu
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-8 relative z-10">
              {cart.map((c) => (
                <div key={c.item.id} className="flex gap-6 group">
                  <div className="w-24 aspect-square bg-white/30 border border-accent/15 overflow-hidden flex-shrink-0">
                    <Image
                      src={c.item.image}
                      alt={c.item.title}
                      width={96}
                      height={96}
                      sizes="96px"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="flex flex-col flex-1 justify-between py-1">
                    <div className="flex justify-between items-start gap-4">
                      <h3 className="font-display text-sm uppercase text-accent font-semibold leading-tight tracking-wider">{c.item.title}</h3>
                      <span className="font-display text-accent text-lg">${parseFloat(c.item.price.replace('$', '')).toFixed(2)}</span>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center gap-2 bg-white/25 border border-accent/15 px-2 py-1">
                        <button
                          onClick={() => removeFromCart(c.item.id)}
                          className="p-1 text-accent/60 hover:text-accent transition-colors"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="font-sans text-xs w-6 text-center text-accent font-semibold">{c.quantity}</span>
                        <button
                          onClick={() => addToCart(c.item)}
                          className="p-1 text-accent/60 hover:text-accent transition-colors"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(c.item.id, true)}
                        className="text-accent/40 hover:text-accent transition-colors p-2 -mr-2"
                        title="Remove Item"
                      >
                        <Trash2 size={16} strokeWidth={1.5} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cart.length > 0 && (
          <div className="p-8 border-t border-accent/15 bg-white/20 backdrop-blur-sm">
            <div className="flex justify-between items-center mb-6">
              <button
                onClick={() => clearCart()}
                className="font-sans text-[10px] uppercase tracking-widest text-accent/60 hover:text-accent transition-colors underline underline-offset-4 decoration-accent/25 font-bold"
              >
                Clear Cart
              </button>
            </div>
            <div className="flex justify-between items-end mb-8">
              <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-accent/70 font-bold">Subtotal</span>
              <span className="font-display text-4xl text-accent leading-none">${total.toFixed(2)}</span>
            </div>

            <Link
              href="/checkout"
              onClick={() => {
                setIsCartOpen(false);
              }}
              className="relative overflow-hidden block group border border-accent px-8 py-5 font-sans tracking-[0.2em] uppercase text-xs w-full text-center bg-accent text-white font-bold hover:bg-white hover:text-accent hover:border-accent transition-colors"
            >
              Checkout Order
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
