import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../CartProvider"; // adjust this path as needed
import CartPopup from "../CartPopup";

import logo from "../../assets/logo.png";
import cartIcon from "../../assets/cart.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartItems, showCart, setShowCart } = useCart();

  return (
    <div className="w-full bg-[#0E0E0E]">
      <div className="flex items-center justify-between px-4 py-4 border-b border-[#979797] relative">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white text-2xl md:hidden"
          >
            ☰
          </button>
          <img src={logo} alt="Logo" className="h-6 md:h-auto" />
        </div>

        {/* Desktop Nav */}
        <header className="hidden md:flex justify-between text-[13px] font-bold font-Manrope items-center px-6 py-4 text-white">
          <nav className="space-x-6">
            <Link to="/" className="hover:text-[#D87D4A]">
              HOME
            </Link>
            <Link to="/headphones" className="hover:text-[#D87D4A]">
              HEADPHONES
            </Link>
            <Link to="/speakers" className="hover:text-[#D87D4A]">
              SPEAKERS
            </Link>
            <Link to="/earphones" className="hover:text-[#D87D4A]">
              EARPHONES
            </Link>
          </nav>
        </header>

        {/* Cart Icon */}
        <div className="relative">
          <img
            src={cartIcon}
            onClick={() => setShowCart(!showCart)}
            className="cursor-pointer"
            alt="Cart Icon"
          />
          {cartItems.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {cartItems.length}
            </span>
          )}
        </div>

        {/* Cart Popup */}
        {showCart && <CartPopup onClose={() => setShowCart(false)} />}
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center bg-[#1A1A1A] py-4 space-y-4 text-white text-[13px] font-Manrope font-bold">
          <Link
            to="/"
            className="hover:text-orange-400"
            onClick={() => setMenuOpen(false)}
          >
            HOME
          </Link>
          <Link
            to="/headphones"
            className="hover:text-orange-400"
            onClick={() => setMenuOpen(false)}
          >
            HEADPHONES
          </Link>
          <Link
            to="/speakers"
            className="hover:text-orange-400"
            onClick={() => setMenuOpen(false)}
          >
            SPEAKERS
          </Link>
          <Link
            to="/earphones"
            className="hover:text-orange-400"
            onClick={() => setMenuOpen(false)}
          >
            EARPHONES
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
