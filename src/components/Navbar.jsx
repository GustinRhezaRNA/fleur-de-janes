import React, { useState } from 'react';
import { ShoppingCartIcon } from '../components/shopping-cart';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-6 flex justify-between items-center">
        <h1 className="text-3xl font-playfair font-medium">Fleur de Janes</h1>

        <div className="flex items-center gap-8">
          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8">
            <a href="/" className="text-black hover:underline">
              home
            </a>
            <a href="/products" className="text-black hover:underline">
              products
            </a>
            <a href="/about" className="text-black hover:underline">
              about
            </a>
          </div>

          {/* Hamburger Menu (Mobile) */}
          <button 
            className="md:hidden flex items-center justify-center p-2" 
            onClick={toggleMobileMenu}
          >
            <svg 
              className="w-6 h-6 text-black" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M4 6h16M4 12h16M4 18h16" 
              />
            </svg>
          </button>

          {/* Shopping Cart Icon */}
          <ShoppingCartIcon />
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-4 bg-white shadow-sm">
          <a href="/" className="text-black hover:underline">
            home
          </a>
          <a href="/products" className="text-black hover:underline">
            products
          </a>
          <a href="/about" className="text-black hover:underline">
            about
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
