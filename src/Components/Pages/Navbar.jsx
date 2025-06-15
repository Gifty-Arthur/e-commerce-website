import React, { useState } from "react";
import j from "../../assets/logo.png";
import cart from "../../assets/cart.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full bg-[#0E0E0E] h-full">
      <div className="flex items-center justify-between px-4 py-4 border-b border-[#979797]">
        {/* Logo + Hamburger (Grouped) */}
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white text-2xl md:hidden"
          >
            ☰
          </button>
          <img src={j} alt="Logo" className="h-6 md:h-auto" />

          {/* Hamburger Button (visible only on small screens) */}
        </div>

        {/* Nav links (hidden on mobile) */}
        <header className="hidden md:flex justify-between text-[13px] font-bold font-Manrope items-center px-6 py-4 text-white">
          <nav className="space-x-6">
            <a href="#" className="hover:text-[#D87D4A]">
              HOME
            </a>
            <a href="#" className="hover:text-[#D87D4A]">
              HEADPHONE
            </a>
            <a href="#" className="hover:text-[#D87D4A]">
              SPEAKERS
            </a>
            <a href="#" className="hover:text-[#D87D4A]">
              EARPHONES
            </a>
          </nav>
        </header>

        {/* Cart Icon */}
        <img src={cart} alt="Cart" className="h-6 md:h-auto" />
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center bg-[#1A1A1A] py-4 space-y-4 text-white text-[13px] font-Manrope font-bold">
          <a href="#" className="hover:text-custom3">
            HOME
          </a>
          <a href="#" className="hover:text-orange-400">
            HEADPHONE
          </a>
          <a href="#" className="hover:text-orange-400">
            SPEAKERS
          </a>
          <a href="#" className="hover:text-orange-400">
            EARPHONES
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
