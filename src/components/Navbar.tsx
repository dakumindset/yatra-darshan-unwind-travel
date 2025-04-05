
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-playfair font-bold text-yatra-forest">
              Yatra<span className="text-yatra-lake">Darshan</span>
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="font-medium text-gray-700 hover:text-yatra-lake transition-colors">Home</Link>
            <Link to="/destinations" className="font-medium text-gray-700 hover:text-yatra-lake transition-colors">Destinations</Link>
            <Link to="/packages" className="font-medium text-gray-700 hover:text-yatra-lake transition-colors">Packages</Link>
            <Link to="/about" className="font-medium text-gray-700 hover:text-yatra-lake transition-colors">About</Link>
            <Link to="/contact" className="font-medium text-gray-700 hover:text-yatra-lake transition-colors">Contact</Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+919898989898" className="flex items-center text-yatra-forest">
              <Phone size={18} className="mr-2" />
              <span className="font-medium">+91 98989 89898</span>
            </a>
            <Button className="bg-yatra-lake hover:bg-yatra-forest text-white">Book Now</Button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-gray-700 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 p-4 bg-white rounded-lg shadow-lg animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="font-medium text-gray-700 hover:text-yatra-lake p-2 transition-colors">Home</Link>
              <Link to="/destinations" className="font-medium text-gray-700 hover:text-yatra-lake p-2 transition-colors">Destinations</Link>
              <Link to="/packages" className="font-medium text-gray-700 hover:text-yatra-lake p-2 transition-colors">Packages</Link>
              <Link to="/about" className="font-medium text-gray-700 hover:text-yatra-lake p-2 transition-colors">About</Link>
              <Link to="/contact" className="font-medium text-gray-700 hover:text-yatra-lake p-2 transition-colors">Contact</Link>
              <a href="tel:+919898989898" className="flex items-center text-yatra-forest p-2">
                <Phone size={18} className="mr-2" />
                <span className="font-medium">+91 98989 89898</span>
              </a>
              <Button className="bg-yatra-lake hover:bg-yatra-forest text-white w-full">Book Now</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
