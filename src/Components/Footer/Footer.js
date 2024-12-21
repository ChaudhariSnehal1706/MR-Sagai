import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Logo / Brand Name */}
        <div className="mb-4 md:mb-0">
          <h1 className="text-2xl font-bold">Your Brand</h1>
        </div>

        {/* Links */}
        <div className="flex flex-col md:flex-row gap-4">
          <a href="#about" className="hover:underline">About Us</a>
          <a href="#services" className="hover:underline">Services</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </div>

        {/* Social Media Icons using React Icons */}
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="https://www.facebook.com/chaudhari.snehal.940/" className="hover:text-blue-500">
            <FaFacebookF size={24} />
          </a>
          {/* <a href="#" className="hover:text-blue-400">
            <FaTwitter size={24} />
          </a> */}
          <a href="https://www.instagram.com/snehal_17_06/" className="hover:text-pink-600">
            <FaInstagram size={24} />
          </a>
          <a href="https://www.linkedin.com/in/snehal-chaudhari-136a3727b/" className="hover:text-blue-600">
            <FaLinkedinIn size={24} />
          </a>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center mt-8 border-t border-gray-700 pt-4">
        <p className="text-sm text-gray-400">&copy; 2024 Your Brand. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
