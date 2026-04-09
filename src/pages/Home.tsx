import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Star, ShieldCheck, Zap, PenTool as Tool, Smartphone, Headphones, Flame } from 'lucide-react';
import { shopDetails, smartphones, repairServices, offers, reviews, gallery, accessories } from '../data';
import Carousel from '../components/Carousel';

export default function Home() {
  const carouselItems = [
    {
      title: "Latest Vivo Y20",
      subtitle: "Experience the power of performance and style.",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1200&q=80",
      price: 11999,
      link: "/products"
    },
    {
      title: "Premium Accessories",
      subtitle: "Protect your device with our high-quality tempered glass and back covers.",
      image: "https://images.unsplash.com/photo-1605170439002-90845e8c0137?w=1200&q=80",
      price: "Starting at ₹50",
      link: "/products"
    },
    {
      title: "Expert Repairs",
      subtitle: "Get your phone fixed by professionals. Screen, battery, and more.",
      image: "https://images.unsplash.com/photo-1597740985671-2a8a3b80502e?w=1200&q=80",
      price: "Repairs from ₹100",
      link: "/services"
    },
    {
      title: "Redmi Note 12",
      subtitle: "The perfect balance of features and affordability.",
      image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=1200&q=80",
      price: 14499,
      link: "/products"
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src={gallery[0].image} 
            alt="Shop Background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 md:py-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
              Your Trusted <span className="text-blue-400">Mobile Shop</span> In Faridabad
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              {shopDetails.tagline}. We offer top brands, expert repairs, and premium accessories.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/products" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg text-center transition-colors flex items-center justify-center">
                Shop Now <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link to="/services" className="bg-white text-blue-900 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg text-center transition-colors flex items-center justify-center">
                Book Repair <Tool className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Deals</h2>
            <p className="text-gray-600">Check out our latest arrivals and exclusive offers.</p>
          </div>
          <Carousel items={carouselItems} />
        </div>
      </section>

      {/* Features/Offers Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {offers.map((offer, index) => {
              const Icon = offer.icon === 'flame' ? Flame : offer.icon === 'headphones' ? Headphones : Tool;
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-blue-50 rounded-xl p-6 flex items-start space-x-4 border border-blue-100"
                >
                  <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900">{offer.title}</h3>
                    <p className="text-gray-600 text-sm">{offer.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Smartphones</h2>
              <p className="text-gray-600">Discover our top-selling devices at unbeatable prices.</p>
            </div>
            <Link to="/products" className="text-blue-600 font-medium hover:text-blue-800 flex items-center hidden sm:flex">
              View All <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {smartphones.slice(0, 4).map((phone, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow border border-gray-100 group"
              >
                <div className="h-48 overflow-hidden bg-gray-100 relative">
                  <img 
                    src={phone.image} 
                    alt={`${phone.brand} ${phone.model}`} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded text-xs font-bold text-blue-600 shadow-sm">
                    {phone.brand}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg text-gray-900 mb-1">{phone.model}</h3>
                  <p className="text-xl font-bold text-blue-600 mb-4">₹{phone.price.toLocaleString('en-IN')}</p>
                  <a 
                    href={`https://wa.me/${shopDetails.contact.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(`Hi, I want to enquire about the ${phone.brand} ${phone.model}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gray-900 hover:bg-gray-800 text-white py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center"
                  >
                    Order Now
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 text-center sm:hidden">
            <Link to="/products" className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800">
              View All Products <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Expert Repair Services</h2>
            <p className="text-gray-600">Fast, reliable, and affordable repairs by certified technicians. We fix it right the first time.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repairServices.slice(0, 6).map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="border border-gray-200 rounded-xl p-6 hover:border-blue-300 hover:shadow-sm transition-all"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-bold text-lg text-gray-900">{service.service}</h3>
                  <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                    {service.priceRange}
                  </span>
                </div>
                <p className="text-gray-500 text-sm mb-4">Professional service with genuine parts and warranty.</p>
                <Link to="/contact" className="text-blue-600 text-sm font-medium hover:underline flex items-center">
                  Book Appointment <ArrowRight className="ml-1 w-3 h-3" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-blue-800 rounded-xl p-6 relative"
              >
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-blue-100 mb-6 italic">"{review.comment}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center font-bold text-lg mr-3">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold">{review.name}</p>
                    <p className="text-blue-300 text-xs">Verified Customer</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={gallery[1].image} 
                alt="Shop Interior" 
                className="rounded-2xl shadow-lg w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose {shopDetails.name}?</h2>
              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600">
                      <ShieldCheck className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Genuine Products</h3>
                    <p className="mt-2 text-base text-gray-500">We only sell 100% authentic smartphones and accessories with official warranties.</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600">
                      <Zap className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Quick Repairs</h3>
                    <p className="mt-2 text-base text-gray-500">Most common repairs like screen and battery replacements are done within hours.</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600">
                      <Star className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Trusted Since {shopDetails.established}</h3>
                    <p className="mt-2 text-base text-gray-500">Years of experience serving the Faridabad community with honest pricing.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
