"use client";

import { useRestaurant } from '../context/RestaurantContext';

export const ColoredTitle = ({
  text,
  className = "",
  colorMode = "default",
}: {
  text: string;
  className?: string;
  colorMode?: 'default' | 'red-white' | 'yellow-white' | 'dark-red';
}) => {
  const { restaurantId } = useRestaurant();
  const isShawarma = restaurantId === 'shawarma';

  const getColor = (index: number) => {
    if (colorMode === 'red-white') return index % 2 === 0 ? 'text-accent' : 'text-white';
    if (colorMode === 'yellow-white') return index % 2 === 0 ? 'text-brand-yellow' : 'text-white';
    if (colorMode === 'dark-red') return index % 2 === 0 ? 'text-accent' : 'text-dark';
    return isShawarma
      ? index % 2 === 0 ? 'text-accent' : 'text-brand-yellow'
      : index % 2 === 0 ? 'text-accent' : 'text-brand-yellow';
  };

  return (
    <span className={`inline-block ${className}`}>
      {text.split('').map((char, i) => (
        <span key={i} className={getColor(i)}>
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  );
};
