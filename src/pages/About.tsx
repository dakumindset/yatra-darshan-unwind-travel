
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Separator } from "@/components/ui/separator";

const About = () => {
  return (
    <div className="min-h-screen font-poppins">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative py-20 bg-gradient-to-r from-gray-900 to-gray-700 text-white">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80')",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">About Yatra Darshan</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Learn more about our journey and passion for creating unforgettable travel experiences
          </p>
        </div>
      </div>
      
      {/* About Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-playfair font-bold mb-4 text-center">Our Story</h2>
          <Separator className="mb-8 bg-yatra-lake w-20 mx-auto" />
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              Founded in 2018, Yatra Darshan was born out of a deep love for India's diverse landscapes, rich cultural heritage, 
              and spiritual traditions. Our founders, avid travelers themselves, recognized the need for authentic, well-organized 
              travel experiences that go beyond the typical tourist spots.
            </p>
            
            <p className="mt-4">
              The name "Yatra Darshan" embodies our philosophy: "Yatra" means journey or pilgrimage, and "Darshan" refers to 
              seeing or experiencing the divine. Together, they represent our commitment to creating travel experiences that 
              are both transformative and spiritually enriching.
            </p>
            
            <h3 className="text-2xl font-playfair font-bold mt-8 mb-4">Our Mission</h3>
            <p>
              At Yatra Darshan, our mission is to provide carefully curated travel experiences that blend adventure, comfort, 
              and cultural immersion. We believe travel should be stress-free, educational, and personally transformative. 
              Our team of experienced travel experts works tirelessly to design journeys that showcase the authentic essence 
              of each destination.
            </p>
            
            <h3 className="text-2xl font-playfair font-bold mt-8 mb-4">What Sets Us Apart</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Expert Local Knowledge:</strong> Our guides are native to the regions they showcase, providing authentic insights 
                and access to hidden gems that most tourists never see.
              </li>
              <li>
                <strong>Responsible Tourism:</strong> We are committed to sustainable travel practices that respect local communities, 
                cultures, and environments.
              </li>
              <li>
                <strong>Personalized Service:</strong> We understand that every traveler is unique, which is why we offer customizable 
                itineraries to suit individual preferences and needs.
              </li>
              <li>
                <strong>Attention to Detail:</strong> From comfortable accommodations to seamless transportation and authentic dining 
                experiences, we ensure every aspect of your journey is meticulously planned.
              </li>
            </ul>
            
            <h3 className="text-2xl font-playfair font-bold mt-8 mb-4">Our Commitment</h3>
            <p>
              We are dedicated to making your travel experience as seamless and enjoyable as possible. When you choose 
              Yatra Darshan, you're not just booking a tour; you're entrusting us with your precious vacation time. 
              We take this responsibility seriously and work diligently to exceed your expectations at every turn.
            </p>
            
            <p className="mt-4">
              Whether you're seeking spiritual rejuvenation, cultural exploration, or natural beauty, we invite you to 
              embark on a journey of discovery with Yatra Darshan. Leave the planning to us, and focus on creating 
              beautiful memories that will last a lifetime.
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default About;
