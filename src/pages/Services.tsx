import React from 'react';
import { motion } from 'motion/react';
import { repairServices, servicesOffered, shopDetails } from '../data';
import { Wrench, Smartphone, Cpu, Battery, Droplet, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'smartphone': return <Smartphone className="w-8 h-8" />;
      case 'battery': return <Battery className="w-8 h-8" />;
      case 'plug': return <Wrench className="w-8 h-8" />;
      case 'cpu': return <Cpu className="w-8 h-8" />;
      case 'droplet': return <Droplet className="w-8 h-8" />;
      default: return <Wrench className="w-8 h-8" />;
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-display font-bold text-gray-900 mb-4 tracking-tight">Professional Repair Services</h1>
          <p className="text-lg text-gray-600">
            Expert technicians, genuine parts, and quick turnaround times. We bring your devices back to life.
          </p>
        </div>

        {/* Repair Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {repairServices.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
              <div className="relative z-10">
                <div className="text-blue-600 mb-6 bg-blue-50 w-16 h-16 rounded-xl flex items-center justify-center">
                  {getIcon(service.icon)}
                </div>
                <h3 className="text-xl font-display font-bold text-gray-900 mb-2 tracking-tight">{service.service}</h3>
                <div className="flex items-end mb-6">
                  <span className="text-sm text-gray-500 mr-2">Estimated:</span>
                  <span className="text-lg font-bold text-green-600">{service.priceRange}</span>
                </div>
                <ul className="space-y-2 mb-8">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mr-2" /> Genuine Parts Used
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mr-2" /> Warranty Included
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mr-2" /> Same Day Service*
                  </li>
                </ul>
                <Link to="/contact" className="inline-flex items-center justify-center w-full bg-gray-50 hover:bg-gray-100 text-gray-900 font-medium py-2.5 rounded-lg transition-colors border border-gray-200">
                  Book Repair
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Warranty Policy */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-20"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h2 className="text-2xl font-display font-bold text-gray-900 mb-4 tracking-tight">Our Warranty Policy</h2>
              <p className="text-gray-600 mb-4">
                We stand behind our work. All our repair services come with a standard warranty to give you peace of mind.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start text-sm text-gray-600">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 mr-2 shrink-0" /> 
                  <span><strong>Duration:</strong> 3 to 6 months depending on the repair type and parts used.</span>
                </li>
                <li className="flex items-start text-sm text-gray-600">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 mr-2 shrink-0" /> 
                  <span><strong>Coverage:</strong> Covers defects in parts replaced and workmanship.</span>
                </li>
                <li className="flex items-start text-sm text-gray-600">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 mr-2 shrink-0" /> 
                  <span><strong>Exclusions:</strong> Does not cover accidental damage, water damage after repair, or issues unrelated to the original repair.</span>
                </li>
              </ul>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl shrink-0 w-full md:w-auto text-center border border-blue-100">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-display font-bold text-gray-900 mb-1 tracking-tight">Guaranteed Quality</h3>
              <p className="text-sm text-gray-500">100% Satisfaction</p>
            </div>
          </div>
        </motion.div>

        {/* Other Services */}
        <div className="bg-blue-900 rounded-3xl overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-10 md:p-16 flex flex-col justify-center">
              <h2 className="text-3xl font-display font-bold text-white mb-6 tracking-tight">More Than Just Repairs</h2>
              <p className="text-blue-200 mb-8 text-lg">
                At {shopDetails.name}, we provide a comprehensive range of mobile solutions to meet all your needs under one roof.
              </p>
              <ul className="space-y-4">
                {servicesOffered.map((service, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center text-white text-lg"
                  >
                    <div className="bg-blue-800 p-1 rounded-full mr-4">
                      <CheckCircle2 className="w-5 h-5 text-blue-300" />
                    </div>
                    {service}
                  </motion.li>
                ))}
              </ul>
              <div className="mt-10">
                <Link to="/contact" className="inline-flex items-center bg-white text-blue-900 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors">
                  Contact Us <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>
            <div className="hidden lg:block bg-blue-800 relative">
              <img 
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80" 
                alt="Technician working" 
                className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-50"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
