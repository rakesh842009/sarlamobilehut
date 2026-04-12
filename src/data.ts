 export const shopDetails = {
  name: "Sarla Mobile Hut",
  tagline: "Best Deals on Smartphones & Repairs",
  owner: "Rakesh Sharma",
  established: 2010,
  address: {
    line1: "B-2450 Near 22 Feet Road",
    line2: "SGM Nagar NIT, Faridabad",
    city: "Faridabad",
    state: "Haryana",
    pincode: "121001",
    country: "India",
  },
  contact: {
    mobile: "+91 9811653628",
    whatsapp: "+91 9811450708",
    email: "sarlamobilehut@gmail.com",
  },
  workingHours: [
    { days: "Monday – Saturday", hours: "9:00 AM – 10:30 PM" },
    { days: "Sunday", hours: "10:00 AM – 9:00 PM" },
  ],
};

export const smartphones = [
  { brand: "Vivo", model: "Y20", price: 11999, image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&q=80" },
  { brand: "Oppo", model: "A54", price: 12499, image: "https://images.unsplash.com/photo-1598327105666-5b89351cb315?w=500&q=80" },
  { brand: "Realme", model: "Narzo 50", price: 13999, image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=500&q=80" },
  { brand: "Redmi", model: "Note 12", price: 14499, image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=500&q=80" },
  { brand: "Samsung", model: "Galaxy M13", price: 10999, image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=500&q=80" },
];

export const repairServices = [
  { service: "Screen Replacement", priceRange: "₹800 – ₹2500", icon: "smartphone", image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80" },
  { service: "Battery Replacement", priceRange: "₹500 – ₹1500", icon: "battery" },
  { service: "Charging Port Repair", priceRange: "₹100 – ₹800", icon: "plug" },
  { service: "Software Update/Flash", priceRange: "₹200 – ₹500", icon: "cpu" },
  { service: "Water Damage Repair", priceRange: "₹500 – ₹2000", icon: "droplet" },
];

export const accessories = [
  { product: "Plain Tempered Glass", priceRange: "₹50 – ₹100", image: "https://images.unsplash.com/photo-1605170439002-90845e8c0137?w=500&q=80" },
  { product: "Super X Tempered Glass", priceRange: "₹150 – ₹300", image: "https://images.unsplash.com/photo-1605170439002-90845e8c0137?w=500&q=80" },
  { product: "Privacy Tempered Glass", priceRange: "₹200 – ₹400", image: "https://images.unsplash.com/photo-1605170439002-90845e8c0137?w=500&q=80" },
  { product: "Back Cover (Designer)", priceRange: "₹100 – ₹350", image: "https://images.unsplash.com/photo-1541560052-5e137f229371?w=500&q=80" },
  { product: "Silicone Back Cover", priceRange: "₹150 – ₹300", image: "https://images.unsplash.com/photo-1586105251261-72a756497a11?w=500&q=80" },
  { product: "Smoke Case Cover", priceRange: "₹150 – ₹400", image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500&q=80" },
  { product: "Transparent TPU Cover", priceRange: "₹50 – ₹150", image: "https://images.unsplash.com/photo-1541560052-5e137f229371?w=500&q=80" },
  { product: "Fast Data Cable (Type-C)", priceRange: "₹100 – ₹250", image: "/type-c-cable.png" },
  { product: "Micro USB Cable", priceRange: "₹50 – ₹150", image: "/micro-usb-cable.png.webp" },
  { product: "iPhone Data Cable", priceRange: "₹200 – ₹500", image: "https://images.unsplash.com/photo-1543165796-5426273ea4d1?w=500&q=80" },
  { product: "33W Fast Charger", priceRange: "₹450 – ₹950", image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=500&q=80" },
  { product: "Dual Port Car Charger", priceRange: "₹250 – ₹550", image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=500&q=80" },
  { product: "Bluetooth Neckband", priceRange: "₹499 – ₹1499", image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&q=80" },
  { product: "Wired Earphones", priceRange: "₹99 – ₹499", image: "https://images.unsplash.com/photo-1572569438065-809d0a0e2797?w=500&q=80" },
  { product: "Power Bank (10000mAh)", priceRange: "₹899 – ₹1999", image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=500&q=80" },
  { product: "Mobile Back Skin", priceRange: "₹100 – ₹200", image: "https://images.unsplash.com/photo-1605170439002-90845e8c0137?w=500&q=80" },
  { product: "OTG Adapter", priceRange: "₹50 – ₹150", image: "https://images.unsplash.com/photo-1588505794141-d856f517f50d?w=500&q=80" },
];

export const offers = [
  { title: "Flat ₹500 OFF", description: "on selected smartphones", icon: "flame" },
  { title: "Free Earphones", description: "with phones above ₹10,000", icon: "headphones" },
  { title: "Free Screen Guard", description: "with display replacement", icon: "tool" },
];

export const reviews = [
  { name: "Amit", rating: 5, comment: "Best repair service in Faridabad!" },
  { name: "Neha", rating: 4, comment: "Affordable prices and genuine products" },
  { name: "Rahul", rating: 5, comment: "Quick service, very reliable shop" },
];

export const servicesOffered = [
  "Mobile Sales (New & Used)",
  "Mobile Repairing",
  "Accessories Sale",
  "Recharge & SIM Services",
  "Phone Exchange Available",
];

export const gallery = [
  { title: "Shop Interior", image: "/shop.png.jpeg" },
  { title: "Display Counter", image: "https://images.unsplash.com/photo-1601784551446-20c9e07cd8d6?w=800&q=80" },
  { title: "Repair Workstation", image: "https://images.unsplash.com/photo-1597740985671-2a8a3b80502e?w=800&q=80" },
  { title: "Accessories Rack", image: "https://images.unsplash.com/photo-1531297172868-9f140cece067?w=800&q=80" },
];
