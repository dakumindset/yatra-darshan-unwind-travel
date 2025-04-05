
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Calendar, Clock, ArrowRight } from "lucide-react";

const Packages = () => {
  return (
    <div className="min-h-screen font-poppins">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative py-20 bg-gradient-to-r from-gray-900 to-gray-700 text-white">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80')",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">Travel Packages</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Discover our carefully curated travel packages designed to provide you with unforgettable experiences
          </p>
        </div>
      </div>
      
      {/* Packages Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-playfair font-bold mb-4">Our Featured Packages</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our packages are designed to give you the perfect balance of adventure, relaxation, and cultural immersion. 
            All our tours include comfortable accommodations, transportation, and expert guides.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Kumaon Darshan Package */}
          <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
            <div className="relative h-48">
              <img 
                src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80" 
                alt="Kumaon Darshan Package" 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-yatra-lake text-white px-3 py-1 rounded-full font-bold text-sm">
                ₹7,999/person
              </div>
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-playfair font-bold mb-2">Kumaon Darshan</h3>
              <div className="flex flex-wrap gap-2 mb-3">
                <div className="flex items-center text-sm text-gray-600">
                  <Calendar size={14} className="mr-1 text-yatra-lake" />
                  <span>2 Days, 1 Night</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin size={14} className="mr-1 text-yatra-lake" />
                  <span>Nainital, Bhimtal, Mukteshwar</span>
                </div>
              </div>
              <p className="text-gray-600 mb-4 line-clamp-3">
                Experience the divine beauty of Kumaon with visits to Nainital, Bhimtal, Mukteshwar, and Kainchi Dham. 
                Package includes comfortable stays, transportation, and sightseeing.
              </p>
              <Button className="w-full bg-yatra-lake hover:bg-yatra-forest text-white">
                View Details <ArrowRight size={16} className="ml-2" />
              </Button>
            </CardContent>
          </Card>
          
          {/* Placeholder for future packages */}
          <Card className="overflow-hidden opacity-50 hover:opacity-80 transition-all duration-300">
            <div className="relative h-48 bg-gray-200 flex items-center justify-center">
              <Clock size={48} className="text-gray-400" />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-playfair font-bold mb-2">Char Dham Yatra</h3>
              <div className="flex flex-wrap gap-2 mb-3">
                <div className="flex items-center text-sm text-gray-600">
                  <Calendar size={14} className="mr-1" />
                  <span>9 Days, 8 Nights</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin size={14} className="mr-1" />
                  <span>Yamunotri, Gangotri, Kedarnath, Badrinath</span>
                </div>
              </div>
              <p className="text-gray-600 mb-4 line-clamp-3">
                Coming soon! Sacred journey to the four abodes of divinity in the Himalayas.
              </p>
              <Button variant="outline" className="w-full" disabled>
                Coming Soon
              </Button>
            </CardContent>
          </Card>
          
          <Card className="overflow-hidden opacity-50 hover:opacity-80 transition-all duration-300">
            <div className="relative h-48 bg-gray-200 flex items-center justify-center">
              <Clock size={48} className="text-gray-400" />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-playfair font-bold mb-2">Valley of Flowers Trek</h3>
              <div className="flex flex-wrap gap-2 mb-3">
                <div className="flex items-center text-sm text-gray-600">
                  <Calendar size={14} className="mr-1" />
                  <span>6 Days, 5 Nights</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin size={14} className="mr-1" />
                  <span>Govindghat, Ghangaria, Valley of Flowers</span>
                </div>
              </div>
              <p className="text-gray-600 mb-4 line-clamp-3">
                Coming soon! Trek through the UNESCO World Heritage site known for its meadows of alpine flowers.
              </p>
              <Button variant="outline" className="w-full" disabled>
                Coming Soon
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Packages;
