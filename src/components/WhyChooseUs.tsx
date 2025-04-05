
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Clock, HeartHandshake, Map } from "lucide-react";

type FeatureProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const FeatureCard = ({ icon, title, description }: FeatureProps) => {
  return (
    <Card className="border-none shadow-md hover:shadow-xl transition-shadow">
      <CardContent className="p-6 text-center">
        <div className="mx-auto bg-yatra-lake/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
          <div className="text-yatra-lake">{icon}</div>
        </div>
        <h3 className="font-playfair font-bold text-xl mb-3">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
};

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Shield size={28} />,
      title: "Safe & Reliable",
      description: "Your safety is our priority. All our tours follow strict safety protocols with verified vendors."
    },
    {
      icon: <HeartHandshake size={28} />,
      title: "Personalized Experience",
      description: "We tailor every journey to meet your preferences, ensuring an unforgettable travel experience."
    },
    {
      icon: <Clock size={28} />,
      title: "Stress-Free Planning",
      description: "Leave the planning to us while you focus on creating beautiful memories with your loved ones."
    },
    {
      icon: <Map size={28} />,
      title: "Expert Local Guides",
      description: "Our knowledgeable guides provide deep insights into local culture, history, and hidden gems."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h4 className="text-yatra-lake uppercase font-medium tracking-wider mb-2">Why Choose Us</h4>
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-800">The Yatra Darshan Difference</h2>
          <div className="w-20 h-1 bg-yatra-lake mx-auto mt-4 mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            We make your travel experience seamless and memorable with our attention to detail and personalized service
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
