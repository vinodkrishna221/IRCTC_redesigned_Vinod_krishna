import React, { useState } from 'react';
    import { useNavigate } from 'react-router-dom';
    import { Building, Calendar, Users, Search, Star, Wifi, CreditCard, Coffee, 
            MapPin, Filter, ArrowRight, ArrowUpDown, Tv as TvIcon } from 'lucide-react';
    import MainLayout from '@/layouts/MainLayout';
    import Card from '@/components/common/Card';
    import { Button } from '@/components/ui/button';
    import { Input } from '@/components/ui/input';
    import { Label } from '@/components/ui/label';
    import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
    import { cn } from '@/lib/utils';

    interface Station {
      code: string;
      name: string;
    }

    const popularHotels = [
      {
        id: 1,
        name: 'The Imperial Palace',
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&q=85&w=800&h=500&crop=center',
        location: 'Connaught Place, New Delhi',
        rating: 4.8,
        reviewCount: 1247,
        price: '₹8,500',
        amenities: ['wifi', 'breakfast', 'pool', 'gym', 'parking'],
        featured: true
      },
      {
        id: 2,
        name: 'Taj Lake Palace',
        image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&q=85&w=800&h=500&crop=center',
        location: 'Udaipur, Rajasthan',
        rating: 4.9,
        reviewCount: 934,
        price: '₹25,000',
        amenities: ['wifi', 'breakfast', 'pool', 'gym', 'spa', 'parking'],
        featured: true
      },
      {
        id: 3,
        name: 'Grand Hyatt',
        image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&q=85&w=800&h=500&crop=center',
        location: 'Bandra Kurla Complex, Mumbai',
        rating: 4.7,
        reviewCount: 1032,
        price: '₹12,300',
        amenities: ['wifi', 'breakfast', 'pool', 'gym', 'parking'],
        featured: false
      },
      {
        id: 4,
        name: 'Leela Palace',
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&q=85&w=800&h=500&crop=center',
        location: 'Diplomatic Enclave, New Delhi',
        rating: 4.9,
        reviewCount: 887,
        price: '₹19,500',
        amenities: ['wifi', 'breakfast', 'pool', 'gym', 'spa', 'parking'],
        featured: false
      },
      {
        id: 5,
        name: 'ITC Grand Chola',
        image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&q=85&w=800&h=500&crop=center',
        location: 'Guindy, Chennai',
        rating: 4.8,
        reviewCount: 765,
        price: '₹14,200',
        amenities: ['wifi', 'breakfast', 'pool', 'gym', 'spa', 'parking'],
        featured: false
      },
      {
        id: 6,
        name: 'JW Marriott',
        image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&q=85&w=800&h=500&crop=center',
        location: 'Senapati Bapat Road, Pune',
        rating: 4.7,
        reviewCount: 689,
        price: '₹11,800',
        amenities: ['wifi', 'breakfast', 'pool', 'gym', 'parking'],
        featured: false
      },
    ];

    const popularCities = [
      { name: 'New Delhi', image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-4.0.3&q=85&w=400&h=300&crop=center', hotels: '450+' },
      { name: 'Mumbai', image: 'https://images.unsplash.com/photo-1595658658481-d53d3f999875?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', hotels: '380+' },
      { name: 'Bengaluru', image: 'https://images.unsplash.com/photo-1697130383976-38f28c444292?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', hotels: '320+' },
      { name: 'Jaipur', image: 'https://images.unsplash.com/photo-1635929620316-d34cecc5639b?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', hotels: '210+' },
    ];

    const Hotels = () => {
      const navigate = useNavigate();

      const renderStars = (rating: number) => {
        return Array.from({ length: 5 }).map((_, index) => (
          <Star 
            key={index} 
            className={`h-4 w-4 ${index < Math.floor(rating) ? 'text-amber-400 fill-amber-400' : 'text-gray-300'}`}
          />
        ));
      };

      const renderAmenityIcon = (amenity: string) => {
        switch (amenity) {
          case 'wifi':
            return <Wifi className="text-green-500" aria-label="Free WiFi" />;
          case 'breakfast':
            return <Coffee className="text-amber-500" aria-label="Breakfast Included" />;
          case 'parking':
            return <Building className="text-blue-500" aria-label="Free Parking" />;
          case 'tv':
            return <TvIcon className="h-4 w-4" aria-label="Flat-screen TV" />;
          default:
            return null;
        }
      };

      return (
        <MainLayout>
          {/* Hero Section */}
          <section className="relative text-white py-20 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&q=85&w=1920&h=1080&crop=center')` }}>
            <div className="absolute inset-0 bg-black/60" />
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Find Your Perfect Stay</h1>
                <p className="text-xl text-white/90 mb-8 text-center">
                  Discover luxury hotels, cozy guesthouses, and everything in between
                </p>
                
                <Card className="bg-white rounded-xl p-6 shadow-lg relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div>
                      <Label htmlFor="destination">Destination</Label>
                      <div className="relative">
                        <Input type="text" id="destination" placeholder="City, area or hotel name" className="pl-10" />
                        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="checkin">Check-in / Check-out</Label>
                      <div className="relative">
                        <Input type="text" id="checkin" placeholder="Select Dates" className="pl-10" />
                        <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="guests">Guests & Rooms</Label>
                      <div className="relative">
                        <Input type="text" id="guests" placeholder="Add guests and rooms" className="pl-10" />
                        <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
                      </div>
                    </div>
                    
                    <div className="flex items-end">
                      <Button 
                        className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3"
                      >
                        <Search className="mr-2 w-5 h-5" /> Search
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </section>
          
          {/* Popular Cities Section */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Popular Destinations</h2>
                <p className="text-irctc-medium-gray max-w-3xl mx-auto">
                  Discover top-rated hotels in India's most visited cities
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {popularCities.map((city, index) => (
                  <Card 
                    key={index}
                    className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                  >
                    <div className="relative h-48">
                      <img 
                        src={city.image} 
                        alt={city.name} 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                        <div className="p-4 text-white">
                          <h3 className="text-xl font-bold">{city.name}</h3>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 flex justify-between items-center">
                      <span className="text-irctc-royal-blue font-medium">{city.hotels} hotels</span>
                      <Button variant="outline" size="sm">Explore</Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </section>
          
          {/* Featured Hotels */}
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row justify-between items-center mb-12">
                <div>
                  <h2 className="text-3xl font-bold mb-3">Featured Hotels</h2>
                  <p className="text-irctc-medium-gray max-w-2xl">
                    Luxury stays with exceptional service and amenities
                  </p>
                </div>
                
                <div className="mt-4 md:mt-0">
                  <Button variant="outline">
                    View All Hotels
                  </Button>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {popularHotels.map((hotel) => (
                  <div key={hotel.id}>
                    <Card className="h-full overflow-hidden flex flex-col">
                      <div className="relative">
                        <img 
                          src={hotel.image} 
                          alt={hotel.name} 
                          className="w-full h-60 object-cover"
                        />
                        {hotel.featured && (
                          <div className="absolute top-4 left-4 bg-indigo-600 text-white text-sm font-medium px-3 py-1 rounded-full">
                            Featured
                          </div>
                        )}
                      </div>
                      
                      <div className="p-6 flex-grow">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-xl font-bold">{hotel.name}</h3>
                          <div className="text-lg font-bold text-indigo-600">
                            {hotel.price} <span className="text-xs text-gray-500 font-normal">/ night</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center text-irctc-medium-gray mb-3">
                          <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
                          <span className="text-sm">{hotel.location}</span>
                        </div>
                        
                        <div className="flex items-center mb-4">
                          <div className="flex mr-2">
                            {renderStars(hotel.rating)}
                          </div>
                          <div className="text-sm text-irctc-medium-gray">
                            {hotel.rating} ({hotel.reviewCount} reviews)
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-3 text-gray-500 mb-5">
                          {hotel.amenities.slice(0, 4).map((amenity, index) => (
                            <div key={index} aria-label={amenity}>
                              {renderAmenityIcon(amenity)}
                            </div>
                          ))}
                          {hotel.amenities.length > 4 && (
                            <div className="text-xs text-irctc-medium-gray">
                              +{hotel.amenities.length - 4} more
                            </div>
                          )}
                        </div>
                      </div>
                      
                      <div className="px-6 pb-6">
                        <Button variant="default" className="w-full">View Details</Button>
                      </div>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </section>
          
          {/* Why Book With Us */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Why Book With Us?</h2>
                <p className="text-irctc-medium-gray max-w-3xl mx-auto">
                  Enjoy special benefits when booking hotels through IRCTC Express
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="p-8">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                      <Users className="w-8 h-8 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Train Station Proximity</h3>
                    <p className="text-irctc-medium-gray">
                      We prioritize hotels near railway stations for convenient transit connections
                    </p>
                  </div>
                </Card>
                
                <Card className="p-8">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                      <Building className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Quality Assured</h3>
                    <p className="text-irctc-medium-gray">
                      All hotels are personally verified and meet our strict quality standards
                    </p>
                  </div>
                </Card>
                
                <Card className="p-8">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                      <Calendar className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Flexible Booking</h3>
                    <p className="text-irctc-medium-gray">
                      Easy modifications and free cancellation options available on most bookings
                    </p>
                  </div>
                </Card>
              </div>
            </div>
          </section>
          
          {/* CTA Section */}
          <section className="py-16 bg-indigo-600 text-white">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Get Special Hotel Offers with IRCTC Express
              </h2>
              <p className="text-white/80 max-w-3xl mx-auto mb-8">
                Sign up to receive exclusive hotel deals and early access to special promotions.
                Members save up to 20% on hotel bookings across India.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button 
                  variant="accent" 
                  size="lg"
                  className="min-w-[200px]"
                >
                  Sign Up Now
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="bg-transparent border-white text-white hover:bg-white/10 min-w-[200px]"
                >
                  View All Offers
                </Button>
              </div>
            </div>
          </section>
        </MainLayout>
      );
    };

    export default Hotels;
