
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-playfair font-bold mb-4">
              Yatra<span className="text-yatra-lake">Darshan</span>
            </h3>
            <p className="text-gray-400 mb-4">
              Making your travel dreams come true with expertly curated journeys across the beautiful landscapes of India.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-yatra-lake transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-yatra-lake transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-yatra-lake transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-yatra-lake transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-yatra-lake transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/destinations" className="text-gray-400 hover:text-yatra-lake transition-colors">Destinations</Link>
              </li>
              <li>
                <Link to="/packages" className="text-gray-400 hover:text-yatra-lake transition-colors">Packages</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-yatra-lake transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-yatra-lake transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Popular Destinations */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Popular Destinations</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-yatra-lake transition-colors">Nainital</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-yatra-lake transition-colors">Kainchi Dham</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-yatra-lake transition-colors">Bhimtal</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-yatra-lake transition-colors">Mukteshwar</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-yatra-lake transition-colors">Tiffin Top</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="text-yatra-lake mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  123 Travel Street, Connaught Place, New Delhi - 110001, India
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-yatra-lake mr-2 flex-shrink-0" />
                <span className="text-gray-400">+91 98989 89898</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-yatra-lake mr-2 flex-shrink-0" />
                <span className="text-gray-400">info@yatradarshan.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Yatra Darshan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
