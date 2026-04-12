import React from 'react';
import { motion } from 'motion/react';
import { shopDetails, gallery } from '../data';
import { Award, Users, Clock, Target } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6 tracking-tight">About {shopDetails.name}</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Serving the Faridabad community since {shopDetails.established} with top-notch mobile solutions, honest pricing, and unparalleled customer service.
            </p>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-6 tracking-tight">Our Story</h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  Founded in {shopDetails.established} by {shopDetails.owner}, {shopDetails.name} started with a simple mission: to provide reliable and affordable mobile repair services in Faridabad.
                </p>
                <p>
                  Over the years, we have grown from a small repair desk into a full-fledged mobile hub. Today, we not only fix thousands of devices every year but also offer a curated selection of the latest smartphones and premium accessories.
                </p>
                <p>
                  Our commitment to transparency, quality parts, and customer satisfaction has made us a trusted name in Faridabad's electronics market.
                </p>
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-100">
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-2xl mr-4">
                    {shopDetails.owner.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-lg">{shopDetails.owner}</p>
                    <p className="text-gray-500">Founder & Owner</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <img src={gallery[0].image} alt="Shop Front" className="rounded-2xl w-full h-48 md:h-64 object-cover shadow-md" referrerPolicy="no-referrer" />
              <img src={gallery[2].image} alt="Repair Workstation" className="rounded-2xl w-full h-48 md:h-64 object-cover shadow-md mt-8" referrerPolicy="no-referrer" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Stats/Values */}
      <div className="bg-blue-900 py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-4">
              <div className="mx-auto w-12 h-12 bg-blue-800 rounded-full flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-blue-300" />
              </div>
              <h3 className="text-3xl font-display font-bold mb-2 tracking-tight">{new Date().getFullYear() - shopDetails.established}+</h3>
              <p className="text-blue-200 text-sm uppercase tracking-wider">Years Experience</p>
            </div>
            <div className="p-4">
              <div className="mx-auto w-12 h-12 bg-blue-800 rounded-full flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-blue-300" />
              </div>
              <h3 className="text-3xl font-display font-bold mb-2 tracking-tight">10k+</h3>
              <p className="text-blue-200 text-sm uppercase tracking-wider">Happy Customers</p>
            </div>
            <div className="p-4">
              <div className="mx-auto w-12 h-12 bg-blue-800 rounded-full flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-blue-300" />
              </div>
              <h3 className="text-3xl font-display font-bold mb-2 tracking-tight">100%</h3>
              <p className="text-blue-200 text-sm uppercase tracking-wider">Genuine Parts</p>
            </div>
            <div className="p-4">
              <div className="mx-auto w-12 h-12 bg-blue-800 rounded-full flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-blue-300" />
              </div>
              <h3 className="text-3xl font-display font-bold mb-2 tracking-tight">24hr</h3>
              <p className="text-blue-200 text-sm uppercase tracking-wider">Avg Repair Time</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
