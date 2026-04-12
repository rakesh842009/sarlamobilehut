import React, { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Smartphone, Wrench, ShoppingBag, Info, Phone, Menu, X, MapPin, Clock as ClockIcon } from 'lucide-react';
import { shopDetails } from '../data';

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const location = useLocation();

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const getShopStatus = () => {
    const day = currentTime.getDay(); // 0 is Sunday
    const hour = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const timeInMinutes = hour * 60 + minutes;

    // Monday - Saturday: 9:00 AM (540 mins) – 10:30 PM (1350 mins)
    // Sunday: 10:00 AM (600 mins) – 9:00 PM (1260 mins)
    
    let isOpen = false;
    if (day === 0) { // Sunday
      if (timeInMinutes >= 600 && timeInMinutes < 1260) isOpen = true;
    } else { // Mon-Sat
      if (timeInMinutes >= 540 && timeInMinutes < 1350) isOpen = true;
    }
    
    return isOpen ? 
      <span className="text-green-400 font-bold ml-2 flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-1 animate-pulse"></span> OPEN NOW</span> : 
      <span className="text-red-400 font-bold ml-2 flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-1"></span> CLOSED</span>;
  };

  const navLinks = [
    { name: 'Home', path: '/', icon: <Smartphone className="w-4 h-4" /> },
    { name: 'Products', path: '/products', icon: <ShoppingBag className="w-4 h-4" /> },
    { name: 'Services', path: '/services', icon: <Wrench className="w-4 h-4" /> },
    { name: 'About Us', path: '/about', icon: <Info className="w-4 h-4" /> },
    { name: 'Contact', path: '/contact', icon: <Phone className="w-4 h-4" /> },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-900 bg-gray-50">
      {/* Top Bar */}
      <div className="bg-blue-900 text-white py-2 px-4 text-sm hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span className="flex items-center"><Phone className="w-4 h-4 mr-2" /> {shopDetails.contact.mobile}</span>
            <span className="flex items-center"><MapPin className="w-4 h-4 mr-2" /> {shopDetails.address.city}, {shopDetails.address.state}</span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center bg-blue-800 px-3 py-1 rounded-full border border-blue-700">
              <ClockIcon className="w-4 h-4 mr-2 text-blue-300" />
              <span className="font-mono">{currentTime.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}</span>
              {getShopStatus()}
            </div>
            <div className="flex items-center">
              <ClockIcon className="w-4 h-4 mr-2" /> {shopDetails.workingHours[0].days}: {shopDetails.workingHours[0].hours}
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between py-2 items-center">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="bg-white rounded-lg p-1 shadow-sm transition-transform group-hover:scale-105">
                <img 
                  key={Date.now()}
                  src="./logo.png" 
                  alt="Sarla Mobile Hut Logo" 
                  className="h-16 md:h-24 w-auto object-contain" 
                />
              </div>
              <div>
                <h1 className="font-display font-bold text-xl md:text-2xl leading-tight text-blue-900 group-hover:text-blue-700 transition-colors tracking-tight">{shopDetails.name}</h1>
                <p className="text-xs font-medium text-gray-500 hidden sm:block tracking-wide uppercase">{shopDetails.tagline}</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`flex items-center space-x-1 text-sm font-medium transition-colors hover:text-blue-600 ${
                    location.pathname === link.path ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'
                  }`}
                >
                  {link.icon}
                  <span>{link.name}</span>
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium ${
                    location.pathname === link.path
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.icon}
                  <span>{link.name}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-12 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4 group">
                <div className="bg-white rounded p-1 shadow-sm">
                  <img 
                    src="./logo.png" 
                    alt="Sarla Mobile Hut Logo" 
                    className="h-12 w-auto object-contain" 
                  />
                </div>
                <h2 className="font-display font-bold text-xl group-hover:text-blue-400 transition-colors tracking-tight">{shopDetails.name}</h2>
              </div>
              <p className="text-gray-400 text-sm mb-4">{shopDetails.tagline}</p>
              <p className="text-gray-400 text-sm">Established in {shopDetails.established}</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4 border-b border-gray-700 pb-2">Quick Links</h3>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link to={link.path} className="text-gray-400 hover:text-white transition-colors text-sm">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4 border-b border-gray-700 pb-2">Contact Us</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="flex items-start">
                  <MapPin className="w-5 h-5 mr-2 text-blue-400 shrink-0" />
                  <span>
                    {shopDetails.address.line1},<br />
                    {shopDetails.address.line2},<br />
                    {shopDetails.address.city}, {shopDetails.address.state} - {shopDetails.address.pincode}
                  </span>
                </li>
                <li className="flex items-center">
                  <Phone className="w-5 h-5 mr-2 text-blue-400 shrink-0" />
                  <span>{shopDetails.contact.mobile}</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} {shopDetails.name}. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm mt-2 md:mt-0">
              Owned by {shopDetails.owner}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
