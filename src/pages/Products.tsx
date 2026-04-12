import React, { useState } from 'react';
import { motion } from 'motion/react';
import { shopDetails, smartphones, accessories } from '../data';
import { Search, Filter, Smartphone, Headphones } from 'lucide-react';

export default function Products() {
  const [activeTab, setActiveTab] = useState<'smartphones' | 'accessories'>('smartphones');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredSmartphones = smartphones.filter(phone => 
    phone.brand.toLowerCase().includes(searchTerm.toLowerCase()) || 
    phone.model.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredAccessories = accessories.filter(acc => 
    acc.product.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl font-display font-bold text-gray-900 mb-4 tracking-tight">Our Products</h1>
          <p className="text-lg text-gray-600">
            Browse our extensive collection of the latest smartphones and premium accessories.
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 space-y-4 md:space-y-0">
          {/* Tabs */}
          <div className="flex bg-white rounded-lg shadow-sm p-1 border border-gray-200 w-full md:w-auto">
            <button
              onClick={() => setActiveTab('smartphones')}
              className={`flex-1 md:flex-none flex items-center justify-center px-6 py-2.5 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'smartphones' 
                  ? 'bg-blue-600 text-white shadow' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              <Smartphone className="w-4 h-4 mr-2" />
              Smartphones
            </button>
            <button
              onClick={() => setActiveTab('accessories')}
              className={`flex-1 md:flex-none flex items-center justify-center px-6 py-2.5 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'accessories' 
                  ? 'bg-blue-600 text-white shadow' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              <Headphones className="w-4 h-4 mr-2" />
              Accessories
            </button>
          </div>

          {/* Search */}
          <div className="relative w-full md:w-72">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder={`Search ${activeTab}...`}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
        </div>

        {/* Product Grid */}
        {activeTab === 'smartphones' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredSmartphones.length > 0 ? (
              filteredSmartphones.map((phone, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow border border-gray-100 group flex flex-col"
                >
                  <div className="h-56 overflow-hidden bg-gray-100 relative">
                    <img 
                      src={phone.image} 
                      alt={`${phone.brand} ${phone.model}`} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded text-xs font-bold text-blue-600 shadow-sm">
                      {phone.brand}
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <h3 className="font-display font-bold text-lg text-gray-900 mb-1 tracking-tight">{phone.model}</h3>
                    <p className="text-2xl font-bold text-blue-600 mb-4 mt-auto font-sans">₹{phone.price.toLocaleString('en-IN')}</p>
                    <a 
                      href={`https://wa.me/${shopDetails.contact.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(`Hi, I want to enquire about the ${phone.brand} ${phone.model}.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-gray-900 hover:bg-gray-800 text-white py-2.5 rounded-lg text-sm font-medium transition-colors flex items-center justify-center"
                    >
                      Order Now
                    </a>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full text-center py-12 text-gray-500">
                No smartphones found matching "{searchTerm}"
              </div>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredAccessories.length > 0 ? (
              filteredAccessories.map((acc, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow border border-gray-100 group flex flex-col"
                >
                  <div className="h-48 overflow-hidden bg-gray-100 relative">
                    <img 
                      src={acc.image} 
                      alt={acc.product} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <h3 className="font-display font-bold text-lg text-gray-900 mb-2 tracking-tight">{acc.product}</h3>
                    <p className="text-xl font-bold text-blue-600 mb-4 mt-auto font-sans">{acc.priceRange}</p>
                    <a 
                      href={`https://wa.me/${shopDetails.contact.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(`Hi, I want to enquire about the ${acc.product}.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-blue-50 hover:bg-blue-100 text-blue-700 py-2.5 rounded-lg text-sm font-medium transition-colors flex items-center justify-center"
                    >
                      Order Now
                    </a>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full text-center py-12 text-gray-500">
                No accessories found matching "{searchTerm}"
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
