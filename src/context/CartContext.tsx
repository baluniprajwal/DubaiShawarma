"use client";

import React, { createContext, useContext, useState, ReactNode, useCallback } from 'react';
import { MenuItem } from '../types';

interface CartItem {
  item: MenuItem;
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: MenuItem) => void;
  removeFromCart: (id: string, removeAll?: boolean) => void;
  clearCart: () => void;
  total: number;
  itemCount: number;
  isCartOpen: boolean;
  setIsCartOpen: (isOpen: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = useCallback((item: MenuItem) => {
    setCart(prev => {
      const existing = prev.find(i => i.item.id === item.id);
      if (existing) {
        return prev.map(i => i.item.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { item, quantity: 1 }];
    });
  }, []);

  const removeFromCart = useCallback((id: string, removeAll: boolean = false) => {
    setCart(prev => {
      if (removeAll) return prev.filter(i => i.item.id !== id);
      
      return prev.map(i => {
        if (i.item.id === id) {
          return { ...i, quantity: i.quantity - 1 };
        }
        return i;
      }).filter(i => i.quantity > 0);
    });
  }, []);

  const clearCart = useCallback(() => setCart([]), []);

  const total = cart.reduce((sum, current) => {
     const price = parseFloat(current.item.price.replace('$', ''));
     return sum + (price * current.quantity);
  }, 0);
  
  const itemCount = cart.reduce((sum, current) => sum + current.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, total, itemCount, isCartOpen, setIsCartOpen }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
