import type { Product } from "../types/product";

export const products: Product[] = [
  {
    id: 1,
    name: "Classic Hoodie",
    price: 45000,
    image: "/images/product1.png",
    isNew: true,
    rating: 4,
  },
  {
    id: 2,
    name: "Urban Hoodie",
    price: 52000,
    image: "/images/product2.png",
    isSale: true,
    rating: 5,
  },
  {
    id: 3,
    name: "Minimal Hoodie",
    price: 48000,
    image: "/images/product3.png",
    rating: 4,
  },
  {
    id: 4,
    name: "Premium Hoodie",
    price: 60000,
    image: "/images/product4.png",
    isNew: true,
    rating: 5,
  },
];
