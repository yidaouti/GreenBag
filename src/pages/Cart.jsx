import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import CartItem from '../components/CartItem';

const Cart = ({onCartCountChange}) => {
  const [cartItems, setCartItems] = useState(() => {
    // Load cart from localStorage or initialize as empty
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  console.log(cartItems);

  const handleUpdateQuantity = (id, quantity) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, quantity } : item
    );
    setCartItems(updatedCart);
  };

  const handleRemove = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
  };

  // Update localStorage whenever the cartItems state changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

    useEffect(() => {
      const uniqueItemCount = new Set(cartItems.map(item => item.id)).size;
      onCartCountChange(uniqueItemCount); 
    }, [cartItems]); 

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 5.99;
  const total = subtotal + shipping;

  return (
    <div className="pt-20">
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.h1
            className="text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Your Cart
          </motion.h1>

          {!cartItems.length > 0 && (
              <div className="text-center space-y-6 py-12">
              <p className="text-gray-700 text-xl">
                Your cart is empty.
              </p>
              <p className="text-gray-700 text-lg">
                Browse our amazing collection and add items to your cart!
              </p>
              <motion.a
                href="/shop"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-green-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-600 transition-colors text-lg"
              >
                Continue Shopping
              </motion.a>
            </div>            
            )}

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              {cartItems.length > 0 ? (
                cartItems.map((item) => (
                  <CartItem
                    key={item.id}
                    item={item}
                    onUpdateQuantity={handleUpdateQuantity}
                    onRemove={handleRemove}
                  />
                ))
              ) : (
                <>
                </>
              )}
            </div>

            {cartItems.length > 0 && (
              <div className="bg-white p-6 rounded-lg shadow-lg h-fit">
                <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>${shipping.toFixed(2)}</span>
                  </div>
                  <div className="border-t pt-2 mt-2">
                    <div className="flex justify-between font-semibold">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-[#32CD32] text-white py-3 rounded-lg font-semibold hover:bg-[#28a428] transition-colors"
                  disabled={cartItems.length === 0}
                >
                  Checkout
                </motion.button>
              </div>
            )}


          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;
