"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode, useSyncExternalStore, useCallback } from 'react';
import { RestaurantId, RestaurantConfig, MenuItem } from '../types';
import { restaurantConfigs, getMenu } from '../data';
import { useCart } from './CartContext';

interface RestaurantContextType {
  restaurantId: RestaurantId;
  setRestaurant: (id: RestaurantId) => void;
  config: RestaurantConfig;
  menu: MenuItem[];
  hasSelectedRestaurant: boolean;
  showSelectionModal: boolean;
  setShowSelectionModal: (show: boolean) => void;
}

const STORAGE_KEY = 'selectedRestaurantId';
const STORAGE_EVENT = 'restaurant-selection-change';

const RestaurantContext = createContext<RestaurantContextType | undefined>(undefined);

function subscribe(callback: () => void) {
  const onChange = () => callback();

  window.addEventListener('storage', onChange);
  window.addEventListener(STORAGE_EVENT, onChange);

  return () => {
    window.removeEventListener('storage', onChange);
    window.removeEventListener(STORAGE_EVENT, onChange);
  };
}

function getSnapshot(): RestaurantId | null {
  const saved = localStorage.getItem(STORAGE_KEY);
  return saved === 'shawarma' || saved === 'grill' ? saved : null;
}

function getServerSnapshot(): null {
  return null;
}

export function RestaurantProvider({ children }: { children: ReactNode }) {
  const { clearCart } = useCart();
  const storedRestaurantId = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const restaurantId = storedRestaurantId ?? 'shawarma';
  const hasSelectedRestaurant = storedRestaurantId !== null;
  const showSelectionModal = storedRestaurantId === null || isModalOpen;

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-theme', restaurantId === 'grill' ? 'grill' : 'shawarma');
  }, [restaurantId]);

  const setRestaurant = useCallback((id: RestaurantId) => {
    if (storedRestaurantId && storedRestaurantId !== id) {
      clearCart();
    }

    localStorage.setItem(STORAGE_KEY, id);
    window.dispatchEvent(new Event(STORAGE_EVENT));
    setIsModalOpen(false);
  }, [clearCart, storedRestaurantId]);

  const setShowSelectionModal = useCallback((show: boolean) => {
    setIsModalOpen(show);
  }, []);

  const config = restaurantConfigs[restaurantId] || restaurantConfigs.shawarma;
  const menu = getMenu(restaurantId);

  return (
    <RestaurantContext.Provider value={{
      restaurantId,
      setRestaurant,
      config,
      menu,
      hasSelectedRestaurant,
      showSelectionModal,
      setShowSelectionModal
    }}>
      {children}
    </RestaurantContext.Provider>
  );
}

export function useRestaurant() {
  const context = useContext(RestaurantContext);
  if (context === undefined) {
    throw new Error('useRestaurant must be used within a RestaurantProvider');
  }
  return context;
}
