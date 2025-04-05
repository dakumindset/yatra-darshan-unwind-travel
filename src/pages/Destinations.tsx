
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Separator } from "@/components/ui/separator";
import { MapPin } from 'lucide-react';

const Destinations = () => {
  return (
    <div className="min-h-screen font-poppins">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative py-20 bg-gradient-to-r from-gray-900 to-gray-700 text-white">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80')",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">Our Destinations</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Explore the majestic beauty and spiritual essence of Uttarakhand with our curated destinations
          </p>
        </div>
      </div>
      
      {/* Destinations Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-3xl font-playfair font-bold mb-4">Nainital</h2>
            <Separator className="mb-4 bg-yatra-lake w-20" />
            <p className="mb-4 text-gray-700">
              Known as the "Lake District of India," Nainital is a popular hill station built around the beautiful Naini Lake. Surrounded by mountains on three sides, this charming town offers colonial architecture, bustling markets, and panoramic Himalayan views.
            </p>
            <div className="mb-4">
              <h3 className="font-bold mb-2">Key Attractions:</h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Naini Lake - Boat rides and peaceful lakeside walks</li>
                <li>Mall Road - Shopping, dining, and cultural experiences</li>
                <li>Tiffin Top - Panoramic views of the Himalayas</li>
                <li>Naina Devi Temple - Ancient spiritual site</li>
              </ul>
            </div>
            <div className="flex items-center text-gray-600">
              <MapPin size={18} className="mr-2 text-yatra-lake" />
              <span>Uttarakhand, India</span>
            </div>
          </div>
          <div className="h-64 md:h-auto">
            <img 
              src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80" 
              alt="Nainital" 
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="order-2 md:order-1 h-64 md:h-auto">
            <img 
              src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80" 
              alt="Neem Karoli Baba Ashram" 
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-playfair font-bold mb-4">Neem Karoli Baba Ashram (Kainchi Dham)</h2>
            <Separator className="mb-4 bg-yatra-lake w-20" />
            <p className="mb-4 text-gray-700">
              A sacred spiritual center located in the serene Kainchi village, this ashram is dedicated to the revered saint Neem Karoli Baba. The ashram attracts devotees from around the world seeking spiritual solace and divine connection.
            </p>
            <div className="mb-4">
              <h3 className="font-bold mb-2">Key Attractions:</h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Main Temple - Houses the sacred Samadhi of Neem Karoli Baba</li>
                <li>Hanuman Temple - Dedicated to Lord Hanuman</li>
                <li>Meditation Hall - For silent reflection and spiritual practices</li>
                <li>Natural Surroundings - Peaceful environment along the riverside</li>
              </ul>
            </div>
            <div className="flex items-center text-gray-600">
              <MapPin size={18} className="mr-2 text-yatra-lake" />
              <span>Kainchi, Uttarakhand, India</span>
            </div>
          </div>
        </div>
        
        {/* More destinations would follow the same pattern */}
      </div>
      
      <Footer />
    </div>
  );
};

export default Destinations;
