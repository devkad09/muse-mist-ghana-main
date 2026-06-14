export interface Product {
  id: string;
  name: string;
  brand: string;
  type: 'perfume' | 'body-spray' | 'deodorant' | 'fragrance-mist';
  price: number;
  currency: string;
  volume: string;
  description: string;
  category: string;
  image: string;
  featured?: boolean;
}

export const products: Product[] = [
  {
    id: 'unique-001',
    name: 'Extremely Unique',
    brand: 'Perfumed',
    type: 'perfume',
    price: 89.99,
    currency: 'GHS',
    volume: '100ml',
    description: 'A luxurious eau de parfum with a distinctive black and gold bottle design. Features a elegant golden crown cap.',
    category: 'premium',
    image: '/extremely-unique.jpg',
    featured: true,
  },
  {
    id: 'invicto-intense-001',
    name: 'Invicto Intense',
    brand: 'Alhambra',
    type: 'perfume',
    price: 75.99,
    currency: 'GHS',
    volume: '50ml',
    description: 'An intense eau de parfum with a clear bottle and sophisticated label design. Perfect for the modern man.',
    category: 'premium',
    image: '/invicto-intense-single.jpg',
    featured: true,
  },
  {
    id: 'suave-001',
    name: 'Suave',
    brand: 'Alhambra',
    type: 'perfume',
    price: 72.99,
    currency: 'GHS',
    volume: '100ml',
    description: 'A refined fragrance with a striking black to yellow gradient bottle. Smooth and sophisticated.',
    category: 'premium',
    image: '/suave.jpg',
    featured: true,
  },
  {
    id: 'black-leather-men-001',
    name: 'Black Leather Men',
    brand: 'Alhambra',
    type: 'perfume',
    price: 68.99,
    currency: 'GHS',
    volume: '100ml',
    description: 'A classic mens fragrance with a bold black design. Natural spray application with rich leather notes.',
    category: 'mens',
    image: '/black-leather-men.jpg',
  },
  {
    id: 'sara-blaze-001',
    name: 'Sara Blaze',
    brand: 'Celoila',
    type: 'perfume',
    price: 82.99,
    currency: 'GHS',
    volume: '100ml',
    description: 'A luxurious women\'s fragrance in deep maroon with golden accents. Features an ornate golden cap.',
    category: 'womens',
    image: '/sara-blaze.jpg',
    featured: true,
  },
  {
    id: 'elysia-pista-sundae-001',
    name: 'Elysia Pista Sundae',
    brand: 'Alhambra',
    type: 'perfume',
    price: 79.99,
    currency: 'GHS',
    volume: '100ml',
    description: 'A fresh and sweet fragrance with a unique mint green bottle design. Features a distinctive lotus-shaped cap.',
    category: 'womens',
    image: '/elysia-pista-sundae.jpg',
    featured: true,
  },
  {
    id: 'storm-elixir-001',
    name: 'Storm Elixir',
    brand: 'Elitedi',
    type: 'body-spray',
    price: 35.99,
    currency: 'GHS',
    volume: '200ml',
    description: 'A refreshing perfumed deodorant body spray with a light mint green packaging. Perfect for daily use.',
    category: 'body-spray',
    image: '/elitedi-storm-elixir.jpg',
  },
  {
    id: 'oniro-001',
    name: 'Oniro',
    brand: 'Alhambra',
    type: 'perfume',
    price: 65.99,
    currency: 'GHS',
    volume: '50ml',
    description: 'A sophisticated fragrance with a hexagonal bottle design and minimalist label. Elegant and timeless.',
    category: 'unisex',
    image: '/oniro.jpg',
  },
  {
    id: 'kaly-floral-majesty-001',
    name: 'Kaly Floral Majesty',
    brand: 'Alhambra',
    type: 'perfume',
    price: 76.99,
    currency: 'GHS',
    volume: '50ml',
    description: 'A beautiful floral fragrance presented in a striking pink crystal bottle with golden accents.',
    category: 'womens',
    image: '/kaly-floral-majesty.jpg',
  },
  {
    id: 'bad-lad-001',
    name: 'Bad Lad Pour Homme',
    brand: 'Alhambra',
    type: 'perfume',
    price: 74.99,
    currency: 'GHS',
    volume: '50ml',
    description: 'A bold mens fragrance in black and gold packaging. For the modern, confident man.',
    category: 'mens',
    image: '/bad-lad.jpg',
  },
  {
    id: 'dolores-pour-femme-001',
    name: 'Dolores Pour Femme',
    brand: 'Alhambra',
    type: 'perfume',
    price: 70.99,
    currency: 'GHS',
    volume: '50ml',
    description: 'An elegant womens fragrance with a green to teal gradient bottle. Sophisticated and refined.',
    category: 'womens',
    image: '/dolores.jpg',
  },
  {
    id: 'hayaati-001',
    name: 'Hayaati',
    brand: 'Alhambra',
    type: 'perfume',
    price: 85.99,
    currency: 'GHS',
    volume: '50ml',
    description: 'An exclusive fragrance with Arabic heritage, presented in a sleek black bottle with elegant branding.',
    category: 'premium',
    image: '/hayaati.jpg',
    featured: true,
  },
  {
    id: 'picky-rose-001',
    name: 'Picky Rose',
    brand: 'Alhambra',
    type: 'perfume',
    price: 72.99,
    currency: 'GHS',
    volume: '80ml',
    description: 'A romantic rose fragrance in a charming pink bottle. Perfect for those with discriminating taste.',
    category: 'womens',
    image: '/picky-rose.jpg',
  },
  {
    id: 'niro-001',
    name: 'Niro',
    brand: 'Alhambra',
    type: 'perfume',
    price: 68.99,
    currency: 'GHS',
    volume: '50ml',
    description: 'A minimalist fragrance with a clear bottle and subtle labeling. Versatile for everyday wear.',
    category: 'unisex',
    image: '/niro.jpg',
  },
  {
    id: 'gold-rush-001',
    name: 'Gold Rush',
    brand: 'Elitedi Bellezza',
    type: 'fragrance-mist',
    price: 42.99,
    currency: 'GHS',
    volume: '250ml',
    description: 'A fine fragrance mist with a luxurious gold-themed presentation. Great for layering or refreshing.',
    category: 'fragrance-mist',
    image: '/elitedi-bellezza.jpg',
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((product) => product.category === category);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((product) => product.featured === true);
}

export function getProductsByBrand(brand: string): Product[] {
  return products.filter((product) => product.brand === brand);
}
