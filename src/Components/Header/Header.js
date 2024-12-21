import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { TfiMenuAlt } from "react-icons/tfi";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-transparent shadow-md">
      {/* Desktop Header */}
      <div className="hidden md:flex md:flex-col md:items-center md:px-6 md:py-4">
        {/* <a href="/" className="flex items-center mb-4">
          <h1 className="text-3xl font-OpenSans font-semibold uppercase">
          Mittal weds Rohit
          </h1>
        </a> */}
        <nav className="flex space-x-6 font-semibold text-custom-gray text-base leading-[60px]">
          <a href="/" className="hover:text-custom-red">
            Home
          </a>
          <a href="/about" className="hover:text-custom-red">
            Hadi
          </a>
          <a href="/education" className="hover:text-custom-red">
            Mandap
          </a>
          <a href="/work" className="hover:text-custom-red">
            Sagai
          </a>
          <a href="/contact" className="hover:text-custom-red">
            Contact
          </a>
        </nav>
      </div>

      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between px-4 py-2">
        <a href="/" className="flex items-center">
          <h1 className="text-3xl font-OpenSans font-semibold uppercase">
            MR
          </h1>
        </a>
        <button
          type="button"
          className="text-gray-700 focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <IoMdClose className="text-3xl" />
          ) : (
            <TfiMenuAlt className="text-2xl" />
          )}
        </button>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden flex flex-col items-center py-4 space-y-4 bg-white shadow-md w-full font-playfair font-bold text-custom-gray text-base leading-[60px]">
          <a
            href="/"
            className="menu-link hover:text-custom-red"
            onClick={toggleMenu}
          >
            Home
          </a>
          <a
            href="/about"
            className="menu-link hover:text-custom-red"
            onClick={toggleMenu}
          >
            Hadi
          </a>
          <a
            href="/education"
            className="menu-link hover:text-custom-red"
            onClick={toggleMenu}
          >
            Mandap
          </a>
          <a
            href="/work"
            className="menu-link hover:text-custom-red"
            onClick={toggleMenu}
          >
            Sagai
          </a>
          <a
            href="/contact"
            className="menu-link hover:text-custom-red"
            onClick={toggleMenu}
          >
            Contact
          </a>
        </nav>
      )}
    </header>
  );
}

export default Header;
