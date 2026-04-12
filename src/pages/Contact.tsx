import React, { useState } from 'react';
import { motion } from 'motion/react';
import { shopDetails } from '../data';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    subject: 'Repair Enquiry',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const whatsappMessage = `*New Contact Form Submission*%0A%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Subject:* ${formData.subject}%0A` +
      `*Message:* ${formData.message}`;
    
    const whatsappNumber = shopDetails.contact.whatsapp.replace(/\D/g, '');
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
          <img src="/logo.png" alt="Sarla Mobile Hut Logo" className="h-36 w-auto object-contain mb-6" referrerPolicy="no-referrer" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600">
            Have a question, need a repair quote, or looking for a specific device? We're here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6 border-b pb-4">Store Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-50 p-3 rounded-lg text-blue-600 mr-4 shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {shopDetails.address.line1}<br />
                      {shopDetails.address.line2}<br />
                      {shopDetails.address.city}, {shopDetails.address.state} - {shopDetails.address.pincode}<br />
                      {shopDetails.address.country}
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-50 p-3 rounded-lg text-blue-600 mr-4 shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Phone & WhatsApp</h4>
                    <p className="text-gray-600 text-sm">{shopDetails.contact.mobile}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-50 p-3 rounded-lg text-blue-600 mr-4 shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-600 text-sm">{shopDetails.contact.email}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-50 p-3 rounded-lg text-blue-600 mr-4 shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Working Hours</h4>
                    {shopDetails.workingHours.map((wh, idx) => (
                      <p key={idx} className="text-gray-600 text-sm">
                        <span className="font-medium">{wh.days}:</span> {wh.hours}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 h-full"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6 border-b pb-4">Send us a Message</h3>
              
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <select 
                    id="subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors bg-white"
                  >
                    <option>Repair Enquiry</option>
                    <option>Product Availability</option>
                    <option>Bulk Order</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full sm:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors flex items-center justify-center"
                >
                  Send Message <Send className="ml-2 w-4 h-4" />
                </button>
              </form>
            </motion.div>
          </div>

        </div>
        
        {/* Map Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-gray-200 rounded-2xl h-96 w-full overflow-hidden relative border border-gray-300 shadow-inner"
        >
          <iframe 
            width="100%" 
            height="100%" 
            frameBorder="0" 
            scrolling="no" 
            marginHeight={0} 
            marginWidth={0} 
            title="Sarla Mobile Hut Location"
            src="https://maps.google.com/maps?q=28.40768858197126,77.29262453735738&t=&z=17&ie=UTF8&iwloc=&output=embed"
          ></iframe>
          <div className="absolute bottom-4 left-4 right-4 md:right-auto md:w-80">
            <div className="bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-gray-100">
              <div className="flex items-center space-x-3 mb-2">
                <div className="bg-blue-600 p-2 rounded-lg text-white">
                  <MapPin className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-gray-900">Visit Our Store</h4>
              </div>
              <p className="text-xs text-gray-600 mb-3">
                {shopDetails.address.line1}, {shopDetails.address.line2}, {shopDetails.address.city}
              </p>
              <a 
                href="https://www.google.com/maps/search/?api=1&query=28.40768858197126,77.29262453735738" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-center bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
              >
                Get Directions
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
