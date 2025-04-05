
import React from 'react';
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-[90vh] bg-gradient-to-r from-gray-900 to-gray-700 text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80')",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6 animate-fade-up">
          Discover the Beauty of <span className="text-yatra-lake">Kumaon</span>
        </h1>
        
        <p className="text-xl md:text-2xl max-w-3xl mb-8 opacity-90 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          Experience the divine serenity of Uttarakhand with our expertly curated packages that promise an unforgettable journey.
        </p>
        
        <div className="flex flex-col md:flex-row items-center gap-4 mb-12 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <div className="flex items-center">
            <MapPin className="text-yatra-lake mr-2" size={24} />
            <span>Nainital, Bhimtal, Mukteshwar</span>
          </div>
          <div className="hidden md:block h-5 border-l border-gray-400 mx-2"></div>
          <div className="flex items-center">
            <Calendar className="text-yatra-lake mr-2" size={24} />
            <span>2 Days, 1 Night</span>
          </div>
        </div>
        
        <div className="animate-fade-up" style={{ animationDelay: "0.4s" }}>
          <Button className="bg-yatra-lake hover:bg-yatra-forest text-white text-lg px-8 py-6 rounded-full">
            Explore Packages <ArrowRight className="ml-2" size={18} />
          </Button>
        </div>
      </div>
      
      {/* Wave pattern at the bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path fill="#ffffff" fillOpacity="1" d="M0,224L60,213.3C120,203,240,181,360,181.3C480,181,600,203,720,224C840,245,960,267,1080,261.3C1200,256,1320,224,1380,208L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
