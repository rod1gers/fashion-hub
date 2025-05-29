import React, { useState, useEffect } from 'react';
import { ChevronDown, Instagram, Twitter, Mail, Phone, MapPin, Star, ShoppingBag, Heart } from 'lucide-react';

const FashionHubLanding = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeImage, setActiveImage] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const heroImages = [
    './images/3.webp',
    './images/6.webp',
    './images/7.webp',
  ];

  const collections = [
    {
      id: 1,
      title: 'Urban Streetwear',
      image: './images/image.png',
      category: 'Casual'
    },
    {
      id: 2,
      title: 'Elegant Evening',
      image: './images/3.webp',
      category: 'Formal'
    },
    {
      id: 3,
      title: 'Summer Vibes',
      image: './images/8.webp',
      category: 'Seasonal'
    },
    {
      id: 4,
      title: 'Shoes',
      image: './images/9.webp',
      category: 'Kicks'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
            Fashion Hub Collections
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-pink-400 transition-colors">Home</a>
            <a href="#collections" className="hover:text-pink-400 transition-colors">Collections</a>
            <a href="#about" className="hover:text-pink-400 transition-colors">About</a>
          </div>
          <ShoppingBag className="w-6 h-6 hover:text-pink-400 transition-colors cursor-pointer" />
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-purple-900/20 to-black z-10"></div>
        
        {/* Background Images Slider */}
        <div className="absolute inset-0">
          {heroImages.map((img, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === activeImage ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                backgroundImage: `url(${img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                transform: `scale(${1 + scrollY * 0.0005})`,
              }}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-20 text-center max-w-4xl mx-auto px-6">
          <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight">
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
              FASHION
            </span>
            <br />
            <span className="text-white">REDEFINED</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl mx-auto">
            Discover extraordinary pieces that speak to your unique style. Where innovation meets elegance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://www.tiktok.com/@fashionhubcollections" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full text-white font-semibold hover:shadow-2xl hover:shadow-pink-500/25 transform hover:scale-105 transition-all duration-300 text-center"
            >
              Follow on TikTok
            </a>
            <a 
              href="https://wa.me/254705392489" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-white rounded-full text-white font-semibold hover:bg-white hover:text-black transition-all duration-300 text-center"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <ChevronDown className="w-8 h-8 animate-bounce text-white/60" />
        </div>
      </section>

      {/* Collections Section */}
      <section id="collections" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-pink-400 to-violet-400 bg-clip-text text-transparent">
                Our Collections
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Curated pieces that define modern fashion. Each collection tells a unique story.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {collections.map((item, index) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-2xl cursor-pointer"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="aspect-[3/4] relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-sm font-medium">
                    {item.category}
                  </div>

                  {/* Heart Icon */}
                  <div className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Heart className="w-5 h-5" />
                  </div>

                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                    <p className="text-pink-400 font-semibold text-lg">{item.price}</p>
                    <div className={`mt-4 transform transition-all duration-300 ${
                      hoveredCard === index ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                    }`}>
                      <a 
                        href="https://wa.me/254705392489" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="px-8 py-4 border-2 border-white rounded-full text-white font-semibold hover:bg-white hover:text-black transition-all duration-300 text-center"
                      >
                        Order Via WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-pink-400 to-violet-400 bg-clip-text text-transparent">
                  About Us
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                Fashion Hub Collections was born from a passion for exceptional design and sustainable fashion. 
                We believe that clothing should be more than just fabric – it should be an extension of your personality.
              </p>
              <p className="text-lg text-gray-400 mb-8">
                We are proud to offer countrywide delivery of our premium clothing collection across all regions of Kenya. 
                Whether you're located in Nairobi, Mombasa, Kisumu, Eldoret, Nakuru, or any other town or city throughout 
                the country, we ensure that our high-quality clothes reach you safely and promptly.
              </p>
              
            </div>
            <div className="relative">
              <img
                src="./images/Ropa En Perchero.jpeg"
                alt="Fashion Designer"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full opacity-20 blur-2xl"></div>
              <div className="absolute -top-8 -right-8 w-40 h-40 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full opacity-20 blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="text-2xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
            Fashion Hub Collections
          </div>
          <p className="text-gray-400">© {new Date().getFullYear()} Fashion Hub Collections. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default FashionHubLanding;