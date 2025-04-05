
import React from 'react';
import { MapPin } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

type DestinationCardProps = {
  image: string;
  name: string;
  description: string;
  location: string;
};

const DestinationCard = ({ image, name, description, location }: DestinationCardProps) => {
  return (
    <Card className="overflow-hidden group transition-all duration-300 hover:shadow-xl">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
          <h3 className="text-white text-xl font-semibold font-playfair">{name}</h3>
          <div className="flex items-center text-white/80 text-sm">
            <MapPin size={14} className="mr-1" />
            <span>{location}</span>
          </div>
        </div>
      </div>
      <CardContent className="p-4">
        <p className="text-gray-600 line-clamp-3">{description}</p>
      </CardContent>
    </Card>
  );
};

const FeaturedDestinations = () => {
  const destinations = [
    {
      image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80",
      name: "Nainital",
      description: "Known for its pear-shaped lake and surrounded by mountains, Nainital is a charming hill station with colonial architecture and vibrant Mall Road.",
      location: "Uttarakhand, India"
    },
    {
      image: "https://images.unsplash.com/photo-1584811644165-33078caa3929?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80",
      name: "Neem Karoli Baba Ashram",
      description: "A spiritual center dedicated to the saint Neem Karoli Baba at Kainchi Dham, offering peace and divine connection to devotees.",
      location: "Kainchi, Uttarakhand"
    },
    {
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80",
      name: "Bhimtal",
      description: "A tranquil lake town with an island aquarium, offering boating, panoramic Himalayan views, and the historic Bhimeshwar Temple.",
      location: "Uttarakhand, India"
    },
    {
      image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80",
      name: "Mukteshwar",
      description: "A serene hill station known for its ancient temple, Chauli Ki Jali rock formations, and mesmerizing views of the Himalayan range.",
      location: "Uttarakhand, India"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h4 className="text-yatra-lake uppercase font-medium tracking-wider mb-2">Explore Our</h4>
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-800">Featured Destinations</h2>
          <div className="w-20 h-1 bg-yatra-lake mx-auto mt-4 mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            Discover the pristine beauty and spiritual essence of Uttarakhand's most cherished locations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination, index) => (
            <DestinationCard 
              key={index}
              image={destination.image}
              name={destination.name}
              description={destination.description}
              location={destination.location}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDestinations;
