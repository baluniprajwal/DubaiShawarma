import { MenuItem, RestaurantConfig } from './types';

export const restaurantConfigs: Record<string, RestaurantConfig> = {
  shawarma: {
    id: 'shawarma',
    name: 'Dubai Shawarma',
    tagline: 'Classic Middle Eastern Flavors',
    badge: 'Shawarma',
    address: '106-108 Gillingham, Kent, ME7 1AX',
    phone: '01634 559 886',
    description: 'We believe in authentic Middle Eastern flavors. No shortcuts. Just the raw power of traditional spices and fresh ingredients meeting time-honored recipes.'
  },
  grill: {
    id: 'grill',
    name: 'Park Shahri Naw',
    tagline: 'Authentic Kabab & Charcoal Grill',
    badge: 'Shahri Naw',
    address: '31 Shepiston Ln, Hayes, UB3 1LJ',
    phone: '0790 012 8859',
    description: 'Specializing in premium charcoal grilled skewers, tender traditional kebabs, rich authentic cold/hot mezze platters, and custom sharing feasts.'
  }
};

export const originalMenuData: MenuItem[] = [
  { id: '1', title: 'Chicken Shawarma with Samun', description: 'Classic chicken shawarma served with fresh samun bread.', price: '$3.99', image: 'https://images.unsplash.com/photo-1528736235302-52922df5c122?auto=format&fit=crop&q=80&w=1200', category: 'Shawarma' },
  { id: '2', title: 'Chicken Shawarma with Naan', description: 'Classic chicken shawarma served with fresh naan bread.', price: '$3.99', image: 'https://images.unsplash.com/photo-1528736235302-52922df5c122?auto=format&fit=crop&q=80&w=1200', category: 'Shawarma' },
  { id: '3', title: 'Lamb Shawarma with Samun', description: 'Juicy lamb shawarma served with fresh samun bread.', price: '$4.50', image: 'https://images.unsplash.com/photo-1528736235302-52922df5c122?auto=format&fit=crop&q=80&w=1200', category: 'Shawarma' },
  { id: '4', title: 'Lamb Shawarma with Naan', description: 'Juicy lamb shawarma served with fresh naan bread.', price: '$4.50', image: 'https://images.unsplash.com/photo-1528736235302-52922df5c122?auto=format&fit=crop&q=80&w=1200', category: 'Shawarma' },
  { id: '5', title: 'Chicken Shawarma with Chips & Salad', description: 'Chicken shawarma served with a side of chips and fresh salad.', price: '$6.50', image: 'https://images.unsplash.com/photo-1528736235302-52922df5c122?auto=format&fit=crop&q=80&w=1200', category: 'Shawarma' },
  { id: '6', title: 'Lamb Shawarma with Chips & Salad', description: 'Lamb shawarma served with a side of chips and fresh salad.', price: '$6.99', image: 'https://images.unsplash.com/photo-1528736235302-52922df5c122?auto=format&fit=crop&q=80&w=1200', category: 'Shawarma' },
  { id: '7', title: 'Chicken Shawarma with 2 Naan & Salad', description: 'Chicken shawarma served with 2 naan breads and fresh salad.', price: '$7.50', image: 'https://images.unsplash.com/photo-1528736235302-52922df5c122?auto=format&fit=crop&q=80&w=1200', category: 'Shawarma' },
  { id: '8', title: 'Lamb Shawarma with 2 Naan & Salad', description: 'Lamb shawarma served with 2 naan breads and fresh salad.', price: '$7.99', image: 'https://images.unsplash.com/photo-1528736235302-52922df5c122?auto=format&fit=crop&q=80&w=1200', category: 'Shawarma' },
  { id: '9', title: 'Mix Shawarma with 2 Naan & Salad', description: 'Mixed lamb and chicken shawarma served with 2 naan breads and fresh salad.', price: '$7.99', image: 'https://images.unsplash.com/photo-1528736235302-52922df5c122?auto=format&fit=crop&q=80&w=1200', category: 'Shawarma' },
  { id: '10', title: 'Mix Shawarma with Chips & Salad', description: 'Mixed lamb and chicken shawarma served with chips and fresh salad.', price: '$7.99', image: 'https://images.unsplash.com/photo-1528736235302-52922df5c122?auto=format&fit=crop&q=80&w=1200', category: 'Shawarma' },
  { id: '11', title: 'Falafel Sandwich', description: 'Crispy falafel balls in fresh bread with salad and sauce.', price: '$3.99', image: 'https://images.unsplash.com/photo-1593010950930-667087611a51?auto=format&fit=crop&q=80&w=1200', category: 'Sandwiches & Soups' },
  { id: '12', title: 'Chickpea Soup with 2 Samuns', description: 'Warm and hearty chickpea soup served with 2 samun breads.', price: '$3.99', image: 'https://images.unsplash.com/photo-1633418579042-3ed7294ae036?auto=format&fit=crop&q=80&w=1200', category: 'Sandwiches & Soups' },
  { id: '13', title: 'Garlic Bread', description: 'Classic garlic bread.', price: '$3.50', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=1200', category: 'Garlic Bread' },
  { id: '13b', title: 'Garlic Cheese', description: 'Garlic bread topped with melted cheese.', price: '$4.50', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=1200', category: 'Garlic Bread' },
  { id: '13c', title: 'Chicken Cheese', description: 'Garlic bread with chicken and melted cheese.', price: '$4.00', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=1200', category: 'Garlic Bread' },
  { id: '13d', title: 'Lamb Cheese', description: 'Garlic bread with lamb and melted cheese.', price: '$4.99', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=1200', category: 'Garlic Bread' },
  { id: '14a', title: 'Half Roast Chicken with 1 Naan & Salad', description: 'Delicious half roasted chicken served with naan and salad.', price: '$5.99', image: 'https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?auto=format&fit=crop&q=80&w=1200', category: 'Roast Chicken' },
  { id: '14b', title: 'Full Roast Chicken with 1 Naan & Salad', description: 'Whole roasted chicken served with 1 naan and salad.', price: '$8.99', image: 'https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?auto=format&fit=crop&q=80&w=1200', category: 'Roast Chicken' },
  { id: '14c', title: 'Half Roast Chicken with Rice & Salad', description: 'Half roasted chicken served with rice and salad.', price: '$7.99', image: 'https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?auto=format&fit=crop&q=80&w=1200', category: 'Roast Chicken' },
  { id: '15', title: 'Full Roast Chicken with Rice & Salad', description: 'Whole roasted chicken served with rice and salad.', price: '$10.50', image: 'https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?auto=format&fit=crop&q=80&w=1200', category: 'Roast Chicken' },
  { id: '15a', title: '10" Pizza - Cheese & Tomato', description: 'Classic cheese and tomato pizza.', price: '$4.00', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=1200', category: 'Pizza' },
  { id: '15b', title: '10" Pizza - Pepperoni', description: 'Pizza topped with pepperoni.', price: '$4.50', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=1200', category: 'Pizza' },
  { id: '15c', title: '10" Pizza - Chicken & 2 Veg', description: 'Pizza with chicken and your choice of 2 vegetables.', price: '$4.50', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=1200', category: 'Pizza' },
  { id: '15d', title: '10" Pizza - Lamb & 2 Veg', description: 'Pizza with lamb and your choice of 2 vegetables.', price: '$5.00', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=1200', category: 'Pizza' },
  { id: '15e', title: '10" Pizza - Chicken Cheese', description: 'Pizza topped with extra chicken and cheese.', price: '$4.00', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=1200', category: 'Pizza' },
  { id: '15f', title: '10" Pizza - Vegetarian', description: 'Vegetarian pizza packed with fresh toppings.', price: '$4.50', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=1200', category: 'Pizza' },
  { id: '15g', title: '10" Pizza - Dubai Special', description: 'Our signature loaded Dubai Special pizza.', price: '$7.00', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=1200', category: 'Pizza' },
  { id: '16', title: 'Fatayer - Cheese', description: 'Traditional fatayer stuffed with cheese.', price: '$4.00', image: 'https://images.unsplash.com/photo-1623356302022-ed722ae50493?auto=format&fit=crop&q=80&w=1200', category: 'Fatayer' },
  { id: '16b', title: 'Fatayer - Chicken', description: 'Traditional fatayer stuffed with deliciously seasoned chicken.', price: '$4.50', image: 'https://images.unsplash.com/photo-1623356302022-ed722ae50493?auto=format&fit=crop&q=80&w=1200', category: 'Fatayer' },
  { id: '16c', title: 'Fatayer - Lamb', description: 'Traditional fatayer stuffed with minced lamb.', price: '$4.99', image: 'https://images.unsplash.com/photo-1623356302022-ed722ae50493?auto=format&fit=crop&q=80&w=1200', category: 'Fatayer' },
  { id: '16d', title: 'Fatayer - Spicy Lamb', description: 'Traditional fatayer with a spicy lamb filling.', price: '$4.99', image: 'https://images.unsplash.com/photo-1623356302022-ed722ae50493?auto=format&fit=crop&q=80&w=1200', category: 'Fatayer' },
  { id: '16e', title: 'Fatayer - Veg with Cheese', description: 'Traditional fatayer stuffed with mixed veggies and cheese.', price: '$4.00', image: 'https://images.unsplash.com/photo-1623356302022-ed722ae50493?auto=format&fit=crop&q=80&w=1200', category: 'Fatayer' },
  { id: '16f', title: 'Fatayer - Mix (Lamb & Chicken)', description: 'Traditional fatayer stuffed with both lamb and chicken.', price: '$4.99', image: 'https://images.unsplash.com/photo-1623356302022-ed722ae50493?auto=format&fit=crop&q=80&w=1200', category: 'Fatayer' },
  { id: '17', title: '2 Naan or 2 Samun', description: 'Side order of 2 freshly baked naan or samun pieces.', price: '$1.00', image: 'https://images.unsplash.com/photo-1528736235302-52922df5c122?auto=format&fit=crop&q=80&w=1200', category: 'Extras' },
  { id: '17b', title: 'Chips', description: 'Crispy golden potato chips.', price: '$2.00', image: 'https://images.unsplash.com/photo-1576107245842-8c88998caab2?auto=format&fit=crop&q=80&w=1200', category: 'Extras' },
  { id: '17c', title: 'Salad', description: 'Side of fresh seasonal salad.', price: '$2.50', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=1200', category: 'Extras' },
  { id: '18', title: 'Hummus', description: 'Creamy traditional hummus.', price: '$2.50', image: 'https://images.unsplash.com/photo-1633418579042-3ed7294ae036?auto=format&fit=crop&q=80&w=1200', category: 'Extras' },
  { id: '18b', title: 'White Rice', description: 'Side of steamed white rice.', price: '$2.50', image: 'https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?auto=format&fit=crop&q=80&w=1200', category: 'Extras' },
  { id: '18c', title: 'Any Can or Ayran', description: 'Choice of canned soft drink or cold Ayran yogurt beverage.', price: '$1.00', image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=1200', category: 'Extras' }
];

export const grillMenuData: MenuItem[] = [
  { id: 'g1', title: 'Beef Shish Kebab Platter', description: 'Marinated beef hanger steak cubes grilled over hot coals. Served with saffron rice and roasted tomatoes.', price: '$13.99', image: 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&q=80&w=1200', category: 'Charcoal Grills' },
  { id: 'g2', title: 'Shish Tawook (Chicken Skewer)', description: 'Tender chicken breast cubes in lemon, yogurt, and garlic marinade, charcoal-grilled.', price: '$11.99', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=1200', category: 'Charcoal Grills' },
  { id: 'g3', title: 'Lamb Kofta Kebab', description: 'Skewers of minced lamb with finely chopped parsley, sweet onions, and spices.', price: '$12.99', image: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&q=80&w=1200', category: 'Charcoal Grills' },
  { id: 'g4', title: 'Dubai Mixed Grill Feast', description: 'The absolute masterpiece platter of Beef Shish, Shish Tawook, and Lamb Kofta. Served with rice, dual dips, and grilled peppers.', price: '$22.99', image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=1200', category: 'Charcoal Grills' },
  { id: 'g5', title: 'Charcoal Grilled Wings', description: 'Ten tender chicken wings marinated in sumac, lemon, and olive oil, charred over coal.', price: '$9.50', image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&q=80&w=1200', category: 'Charcoal Grills' },
  { id: 'g6', title: 'Hummus with Spiced Lamb', description: 'Signature creamy hummus topped with piping hot sautéed fine minced lamb, roasted pine nuts, and warm olive oil.', price: '$6.99', image: 'https://images.unsplash.com/photo-1633418579042-3ed7294ae036?auto=format&fit=crop&q=80&w=1200', category: 'Cold & Hot Mezze' },
  { id: 'g7', title: 'Grilled Halloumi Cheese', description: 'Slices of Cypriot halloumi cheese grilled on real flame, kissed with honey and organic sesame seeds.', price: '$5.50', image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=1200', category: 'Cold & Hot Mezze' },
  { id: 'g8', title: 'Falafel Deluxe Platter', description: 'Five hand-rolled spiced golden falafels, served with tangy pickles, homemade tahini, and double naan.', price: '$7.99', image: 'https://images.unsplash.com/photo-1593010950930-667087611a51?auto=format&fit=crop&q=80&w=1200', category: 'Cold & Hot Mezze' },
  { id: 'g9', title: 'Batata Harra (Spicy Herbs Potato)', description: 'Golden hand-cut potato cubes tossed with organic garlic, coriander, red chili dust, and lemon squeeze.', price: '$4.50', image: 'https://images.unsplash.com/photo-1576107245842-8c88998caab2?auto=format&fit=crop&q=80&w=1200', category: 'Cold & Hot Mezze' },
  { id: 'g10', title: 'Signature Tabouli Salad', description: 'Finely minced curly parsley, red ripened tomatoes, green onion stalks, and bulgur soaked in virgin olive oil & lemon juice.', price: '$4.99', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=1200', category: 'Salads & Greens' },
  { id: 'g11', title: 'Fattoush Crispy Salad', description: 'Crisp romaine heart leaves, sliced radish, sumac dressing, cucumber cubes, and crunchy fried flatbread shards.', price: '$5.50', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=1200', category: 'Salads & Greens' },
  { id: 'g12', title: 'Warm Cheese Kunafa Pastry', description: 'Shredded kataifi pastry sandwiching melted sweet Akawi cheese, soaked in hot orange-blossom simple syrup and crushed raw pistachios.', price: '$6.50', image: 'https://images.unsplash.com/photo-1623356302022-ed722ae50493?auto=format&fit=crop&q=80&w=1200', category: 'Sweets & Desserts' },
  { id: 'g13', title: 'Pistachio Honey Baklava', description: 'Flaky baked layers of sweet paper-thin phyllo pastry loaded with chopped green pistachios and orange tree honey.', price: '$4.50', image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=1200', category: 'Sweets & Desserts' },
  { id: 'g14', title: 'Traditional Turkish Coffee', description: 'Finely ground coffee beans simmered in brass cezve pots, poured unfiltered for maximum richness.', price: '$2.50', image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=1200', category: 'Beverages' },
  { id: 'g15', title: 'Royal Mint Ayran (Salted Yogurt)', description: 'Chilled traditional sour yogurt drink blended with fresh crushed mint leaves and sea salt crystals.', price: '$1.50', image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=1200', category: 'Beverages' }
];

export const menuData: MenuItem[] = [...originalMenuData, ...grillMenuData];

export function getMenu(restaurantId: string): MenuItem[] {
  return restaurantId === 'grill' ? grillMenuData : originalMenuData;
}
