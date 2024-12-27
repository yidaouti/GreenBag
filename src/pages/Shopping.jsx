import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import p1 from '../assets/img/Products/p1.png';
import p2 from '../assets/img/Products/p2.png';
import p3 from '../assets/img/Products/p3.png';
import p4 from '../assets/img/Products/p4.png';
import p5 from '../assets/img/Products/p5.png';
import p6 from '../assets/img/Products/p6.png';
import p7 from '../assets/img/Products/p7.png';
import p8 from '../assets/img/Products/p8.png';

const products = [
  {
    id: 1,
    name: 'Eco Tote',
    price: 8,
    description: 'A versatile tote bag designed with sustainable materials to support eco-friendly .',
    image: p1,
  },
  {
    id: 2,
    name: 'Canvas Carry',
    price: 10,
    description: 'A durable and stylish eco bag perfect for everyday activities and shopping trips.',
    image: p2,
  },
  {
    id: 3,
    name: 'Organic Shopper',
    price: 12,
    description: 'An eco-conscious choice for groceries, crafted to reduce plastic usage effortlessly.',
    image: p3,
  },
  {
    id: 4,
    name: 'Reusable Classic',
    price: 9,
    description: 'This sturdy and practical bag is perfect for all your daily errands and adventures.',
    image: p4,
  },
  {
    id: 5,
    name: 'Foldable Wonder',
    price: 11,
    description: 'Compact and portable, this foldable bag is a convenient companion for any outing.',
    image: p5,
  },
  {
    id: 6,
    name: 'Sustainable Chic',
    price: 15,
    description: 'An elegant and eco-friendly bag that combines functionality with stylish design.',
    image: p6,
  },
  {
    id: 7,
    name: 'Eco Traveler',
    price: 14,
    description: 'This versatile bag is ideal for trips and errands, keeping sustainability in focus.',
    image: p7,
  },
  {
    id: 8,
    name: 'Nature’s Companion',
    price: 13,
    description: 'Designed for functionality and sustainability, it’s perfect for every occasion.',
    image: p8,
  },
];

const ShoppingPage = ({onCartCountChange}) => {
  const [cart, setCart] = useState(() => {
    // Load cart from localStorage or initialize as an empty array
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);
  
    if (existingItem) {
      // Update quantity if the item is already in the cart
      const updatedCart = cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCart(updatedCart);
    } else {
      // Add the new product with a default quantity of 1
      const updatedCart = [...cart, { ...product, quantity: 1 }];
      setCart(updatedCart);
    }
  };
  

  // Update localStorage whenever the cart changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    const uniqueItemCount = new Set(cart.map(item => item.id)).size;
    onCartCountChange(uniqueItemCount); 
  }, [cart]); 



  

  return (
    <div className="font-[sans-serif] bg-gray-100">
      <div className="p-4 mx-auto lg:max-w-7xl md:max-w-4xl sm:max-w-xl max-sm:max-w-sm">
        {/* Intro Section */}
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-4">Eco-Friendly Bags Collection</h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
            Explore our premium range of eco-friendly bags, thoughtfully designed to reduce waste and promote sustainability. From shopping trips to daily errands, find the perfect bag to suit your needs.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-xl:gap-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} AddToCart={addToCart} />
          ))}
        </div>

        {/* Closing Section */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 text-sm sm:text-base">
            Want to know more about our eco-friendly materials?{' '}
            <a href="/contact" className="text-[#28a745] font-semibold hover:text-[#218838]">
              Contact us
            </a>{' '}
            for details and personalized recommendations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShoppingPage;
