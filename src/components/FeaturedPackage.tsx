
import React from 'react';
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Car, Hotel, ArrowRight, Check, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const FeaturedPackage = () => {
  return (
    <section className="py-16 bg-yatra-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h4 className="text-yatra-lake uppercase font-medium tracking-wider mb-2">Our Featured Package</h4>
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-800">Kumaon Darshan</h2>
          <div className="w-20 h-1 bg-yatra-lake mx-auto mt-4 mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            A complete 2-day journey through the most beautiful destinations of the Kumaon region
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Package Image */}
            <div className="relative h-80 lg:h-auto">
              <img
                src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80"
                alt="Kumaon Darshan Package"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-yatra-lake text-white px-4 py-2 rounded-full font-bold">
                ₹7,999/person
              </div>
            </div>

            {/* Package Details */}
            <div className="p-6 md:p-8">
              <h3 className="text-2xl font-playfair font-bold mb-4">Kumaon Darshan - 2 Days, 1 Night</h3>
              
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center text-gray-700">
                  <MapPin className="text-yatra-lake mr-2" size={18} />
                  <span>Delhi - Nainital - Bhimtal - Mukteshwar - Delhi</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Calendar className="text-yatra-lake mr-2" size={18} />
                  <span>2 Days, 1 Night</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-start">
                  <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Comfortable Hotel Stay</span>
                </div>
                <div className="flex items-start">
                  <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Pickup & Drop from Delhi</span>
                </div>
                <div className="flex items-start">
                  <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>All Sightseeing Included</span>
                </div>
                <div className="flex items-start">
                  <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Expert Local Guide</span>
                </div>
                <div className="flex items-start">
                  <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>All Transfers Included</span>
                </div>
                <div className="flex items-start">
                  <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Meals as per Itinerary</span>
                </div>
              </div>
              
              <Button className="bg-yatra-lake hover:bg-yatra-forest text-white w-full md:w-auto">
                Book This Package <ArrowRight className="ml-2" size={16} />
              </Button>
            </div>
          </div>

          {/* Itinerary Tabs */}
          <div className="border-t">
            <Tabs defaultValue="itinerary" className="w-full">
              <div className="px-6 pt-6">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="itinerary">Itinerary</TabsTrigger>
                  <TabsTrigger value="includes">Includes</TabsTrigger>
                  <TabsTrigger value="excludes">Excludes</TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="itinerary" className="px-6 pb-6 pt-4">
                <div className="space-y-6">
                  <div className="border-l-4 border-yatra-lake pl-4 py-2">
                    <div className="flex items-center mb-2">
                      <Clock size={18} className="text-yatra-lake mr-2" />
                      <h4 className="font-bold text-lg">Day 1: Delhi to Nainital & Bhimtal</h4>
                    </div>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>6:00 AM: Departure from Delhi Kashmere Gate</li>
                      <li>12:30 PM: Arrival at Neem Karoli Baba Ashram, Kainchi Dham</li>
                      <li>2:00 PM: Lunch and proceed to Nainital</li>
                      <li>3:30 PM: Check-in at hotel</li>
                      <li>4:30 PM: Visit Naini Lake & Mall Road</li>
                      <li>7:30 PM: Dinner at hotel</li>
                    </ul>
                  </div>
                  
                  <div className="border-l-4 border-yatra-lake pl-4 py-2">
                    <div className="flex items-center mb-2">
                      <Clock size={18} className="text-yatra-lake mr-2" />
                      <h4 className="font-bold text-lg">Day 2: Mukteshwar & Return to Delhi</h4>
                    </div>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>7:00 AM: Breakfast at hotel</li>
                      <li>8:00 AM: Checkout and visit Tiffin Top</li>
                      <li>10:00 AM: Visit Bhimtal Lake & Bhimeshwar Mahadev Temple</li>
                      <li>12:30 PM: Lunch</li>
                      <li>2:00 PM: Visit Mukteshwar Temple and Chauli Ki Jali</li>
                      <li>4:00 PM: Departure for Delhi</li>
                      <li>10:30 PM: Arrival at Delhi Kashmere Gate</li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="includes" className="px-6 pb-6 pt-4">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                    <span>AC Tempo Traveller/Bus from Delhi to all places mentioned and back to Delhi</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                    <span>1 night accommodation in 3-star hotel (twin sharing)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                    <span>Breakfast and dinner at hotel</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                    <span>All transfers and sightseeing as per itinerary</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                    <span>Professional tour guide</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                    <span>All applicable taxes</span>
                  </li>
                </ul>
              </TabsContent>
              
              <TabsContent value="excludes" className="px-6 pb-6 pt-4">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 mt-1">✕</span>
                    <span>Any meals not mentioned in the includes section</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 mt-1">✕</span>
                    <span>Personal expenses like tips, laundry, phone calls</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 mt-1">✕</span>
                    <span>Camera or video camera fees at monuments</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 mt-1">✕</span>
                    <span>Any other services not mentioned in the includes section</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 mt-1">✕</span>
                    <span>Travel insurance</span>
                  </li>
                </ul>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPackage;
