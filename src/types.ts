export interface MenuItem {
  id: string;
  title: string;
  description: string;
  price: string;
  image: string;
  category: string;
}

export type RestaurantId = 'shawarma' | 'grill';

export interface RestaurantConfig {
  id: RestaurantId;
  name: string;
  tagline: string;
  badge: string;
  address: string;
  phone: string;
  description: string;
}
