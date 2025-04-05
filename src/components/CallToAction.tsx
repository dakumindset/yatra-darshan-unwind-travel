
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-yatra-forest to-yatra-lake text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">Ready for an Unforgettable Journey?</h2>
        <p className="max-w-2xl mx-auto text-white/90 mb-8 text-lg">
          Make your travel experience hectic-free and well-planned with Yatra Darshan. 
          Leave everything to us and just focus on creating beautiful memories.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Button className="bg-white text-yatra-forest hover:bg-gray-100 px-8 py-6 text-lg">
            Book Your Trip Now <ArrowRight className="ml-2" size={18} />
          </Button>
          <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
