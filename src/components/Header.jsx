import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {  Menu, X, ShoppingCart } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/img/logo/greenbag-short.png';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Shop', href: '/shop' },
  { name: 'About', href: '/about' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Contact', href: '/contact' },
];

const Header = ({cartCount}) => {
  const [isOpen, setIsOpen] = useState(false);
  
  cartCount ? cartCount : 0;
  




  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 shadow-sm">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <NavLink to="/" className="flex items-center space-x-2">
            <img src={logo} className="w-10" alt="GreenBag Logo" />
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }) =>
                  isActive
                    ? 'text-[#32CD32] font-bold transition-colors'
                    : 'text-gray-600 hover:text-[#32CD32] transition-colors'
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* Desktop Cart Icon */}
          <div className="hidden md:flex items-center relative">
            <NavLink to="/cart" aria-label="View cart">
              <ShoppingCart className="w-6 h-6 text-gray-600 hover:text-[#32CD32] transition-colors" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#32CD32] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-gray-600" />
            ) : (
              <Menu className="w-6 h-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden"
            >
              <div className="py-4 space-y-4">
                {navigation.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    className={({ isActive }) =>
                      isActive
                        ? 'block text-[#32CD32] font-bold transition-colors'
                        : 'block text-gray-600 hover:text-[#32CD32] transition-colors'
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </NavLink>
                ))}
                <NavLink
                  to="/cart"
                  className="flex items-center space-x-2 text-gray-600 hover:text-[#32CD32] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <ShoppingCart className="w-5 h-5" />
                  <span>Cart ({cartCount})</span>
                </NavLink>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;
