
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { StarIcon } from "lucide-react";

type TestimonialProps = {
  name: string;
  location: string;
  testimonial: string;
  rating: number;
  initials: string;
};

const TestimonialCard = ({ name, location, testimonial, rating, initials }: TestimonialProps) => {
  return (
    <Card className="h-full">
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center">
            <Avatar className="h-12 w-12 mr-4 bg-yatra-lake text-white">
              <AvatarFallback>{initials}</AvatarFallback>
            </Avatar>
            <div>
              <h4 className="font-medium">{name}</h4>
              <p className="text-sm text-gray-500">{location}</p>
            </div>
          </div>
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon
                key={i}
                size={16}
                fill={i < rating ? "#D4AF37" : "none"}
                stroke={i < rating ? "#D4AF37" : "#D4AF37"}
                className="mr-1"
              />
            ))}
          </div>
        </div>
        <p className="text-gray-700 italic">{testimonial}</p>
      </CardContent>
    </Card>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rajesh Sharma",
      location: "Delhi",
      testimonial: "The Kumaon Darshan tour was simply amazing! Our guide was knowledgeable, the hotel was comfortable, and the itinerary was perfectly paced. Will definitely book with Yatra Darshan again.",
      rating: 5,
      initials: "RS"
    },
    {
      name: "Priya Patel",
      location: "Mumbai",
      testimonial: "I was looking for a short break and this 2-day package was perfect. Everything was well-organized and worry-free. The views from Mukteshwar were breathtaking!",
      rating: 4,
      initials: "PP"
    },
    {
      name: "Anil Gupta",
      location: "Bangalore",
      testimonial: "As a solo traveler, I felt completely at ease. The attention to detail and personalized service made my trip memorable. The spiritual experience at Kainchi Dham was profound.",
      rating: 5,
      initials: "AG"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h4 className="text-yatra-lake uppercase font-medium tracking-wider mb-2">Happy Travelers</h4>
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-800">What Our Customers Say</h2>
          <div className="w-20 h-1 bg-yatra-lake mx-auto mt-4 mb-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              location={testimonial.location}
              testimonial={testimonial.testimonial}
              rating={testimonial.rating}
              initials={testimonial.initials}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
