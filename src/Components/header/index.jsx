
import card1   from "../../assets/images/card1.png"
import card2   from "../../assets/images/card2.png"
import person   from "../../assets/images/person.jpeg"
import person2   from "../../assets/images/person2.jpeg"
import person3   from "../../assets/images/person3.jpeg"
import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative w-full h-auto overflow-hidden bg-gradient-to-br from-purple-50 to-purple-100">
      {/* Decorative elements */}
      <div className="absolute top-28 left-32 opacity-20 animate-spin-slow">
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
          <path d="M25 0L30 20H50L35 32.3607L40 52.3607L25 40L10 52.3607L15 32.3607L0 20H20L25 0Z" fill="#7444FD" />
        </svg>
      </div>
      <div className="absolute bottom-20 right-32 opacity-30 animate-spin-slow">
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
          <path d="M25 0L30 20H50L35 32.3607L40 52.3607L25 40L10 52.3607L15 32.3607L0 20H20L25 0Z" fill="#7444FD" />
        </svg>
      </div>

      {/* Navbar - Simplified with only logo and button */}
      <nav className={`w-full py-6  lg:py-8 px-4 lg:px-10 md:px-6 transition-all duration-300 z-50 ${
        scrolled ? 'fixed top-0 bg-white shadow-md' : 'relative bg-transparent'
      }`}>
        <div className="max-w-7xl  mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-lg sm:text-xl">
              E
            </div>
            <span className="text-2xl sm:text-xl font-bold text-gray-800">Easewithdraw</span>
          </div>

          {/* Get Started button */}
          <button className="bg-purple-600  text-white px-4 sm:px-6 py-2 rounded-full flex items-center text-sm sm:text-base space-x-1 sm:space-x-2 transform  transition-all duration-300 hover:bg-transparent hover:border-2 hover:text-purple-600  b-2">
            <span>Get in Touch</span>
            <ArrowRight size={14} className="sm:hidden" />
            <ArrowRight size={16} className="hidden sm:block" />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-2 md:px-8 pt-12 pb-6  lg:pb-20 flex flex-col lg:flex-row lg:gap-36 items-center relative">
        {/* Left content */}
        <div className="w-full lg:w-5/6 lg:pr-12 z-10 text-center lg:text-left">
          {/* Badge */}
          <div className="flex flex-wrap justify-center lg:justify-start mb-6 items-center gap-2">
            <div className="bg-white px-4 py-1 rounded-full shadow-sm text-sm font-medium">
              Finance
            </div>
            <div className="bg-white px-4 py-1 rounded-full shadow-sm text-sm font-medium flex items-center">
              <span>Find Your Solution</span>
              <span className="ml-2 text-orange-500">🔥</span>
            </div>
          </div>

          {/* Main heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight animate-fadeIn">
           Finance, Reimagined Powered by Crypto
          </h1>

          {/* Description */}
          <p className="text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0 text-xl">
           Access credit, invest in assets, and spend smarter — all through your digital wallet. No banks. No credit checks.
          </p>

          {/* Phone mockup - Mobile Only (shown between description and buttons) */}
          <div className="w-full lg:hidden flex justify-center mb-8">
            <div className="relative w-64 md:w-72 transform hover:scale-105 transition-transform duration-500 animate-float">
              <div className="absolute -z-10 w-full h-full bg-purple-200 rounded-full blur-3xl opacity-30 bottom-0"></div>
              <img 
                src={card2} 
                alt="Mobile App" 
                className="w-full h-auto rounded-3xl "
              />
            </div>
          </div>

          {/* Social proof - Mobile Only */}
          <div className="w-full lg:hidden flex flex-col items-center justify-center mb-8 space-y-6">
            <div className="flex -space-x-3">
              <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-gray-200">
                <img src="/api/placeholder/40/40" alt="Customer" className="w-full h-full object-cover" />
              </div>
              <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-gray-200">
                <img src="/api/placeholder/40/40" alt="Customer" className="w-full h-full object-cover" />
              </div>
              <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-gray-200">
                <img src="/api/placeholder/40/40" alt="Customer" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="text-center">
              <div className="font-medium">2,291</div>
              <div className="text-sm text-gray-500">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center">
                <div className="text-yellow-400 flex">
                  {[1, 2, 3, 4, 5].map((star, index) => (
                    <svg 
                      key={index} 
                      xmlns="http://www.w3.org/2000/svg" 
                      className={`h-5 w-5 ${index === 4 ? 'text-gray-300' : ''} ${index % 2 === 0 ? 'animate-spin-star' : 'animate-spin-star-delayed'}`}
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-gray-600">4.8/5 Rating</span>
              </div>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full flex items-center justify-center space-x-2 transform hover:scale-105 transition-all duration-300 shadow-lg">
              <span>Join the Waitlist</span>
              <ArrowRight size={16} />
            </button>
            <button className="border  border-purple-600 hover:border-purple-600 text-gray-700 hover:text-purple-600 px-6 py-3 rounded-full flex items-center justify-center space-x-2 transform hover:scale-105 transition-all duration-300 bg-white">
              <span>Learn More</span>
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Social proof - Desktop Only */}
          <div className="hidden lg:flex items-center">
            <div className="flex -space-x-3">
              <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-gray-200">
                <img src={person} alt="Customer" className="w-full h-full object-cover" />
              </div>
              <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-gray-200">
                <img src={person2} alt="Customer" className="w-full h-full object-cover" />
              </div>
              <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-gray-200">
                <img src={person3 ``} alt="Customer" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="ml-4 border-r border-gray-300 pr-6">
              <div className="font-medium">2,291</div>
              <div className="text-sm text-gray-500">Happy Customers</div>
            </div>
            <div className="ml-6">
              <div className="flex items-center">
                <div className="text-yellow-400 flex">
                  {[1, 2, 3, 4, 5].map((star, index) => (
                    <svg 
                      key={index} 
                      xmlns="http://www.w3.org/2000/svg" 
                      className={`h-5 w-5 ${index === 4 ? 'text-gray-300' : ''} ${index % 2 === 0 ? 'animate-spin-star' : 'animate-spin-star-delayed'}`}
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-gray-600">4.8/5 Rating</span>
              </div>
            </div>
          </div>
        </div>

       
         {/* Right content - Card display (desktop only) */}
        <div className="hidden lg:block w-full lg:w-1/2 mt-12 lg:mt-0 flex justify-center lg:justify-end">
          <div className="relative w-84 md:w-72 lg:w-96 transform hover:scale-105 transition-transform duration-500">
            <div className="absolute -z-10 w-full h-full bg-purple-200 rounded-full blur-3xl opacity-30 bottom-0"></div>
            <div className="relative">
              <img 
                src={card1}
                alt="Crypto Card Black" 
                className="w-full h-auto  absolute top-0 left-0 z-10 animate-bounce-slow"
                style={{ transform: "rotate(-10deg) translateY(-20px)" }}
              />
              <img 
                src={card2} 
                alt="Crypto Card Green" 
                className="w-full h-auto  relative z-0"
                style={{ transform: "rotate(5deg)" }}
              />
            </div>
          </div>
        </div>
      </div>

    <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes spin-star {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        
        @keyframes spin-star-delayed {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(-360deg);
          }
        }
        
        @keyframes bounce-slow {
          0%, 100% {
            transform: rotate(-10deg) translateY(-20px);
          }
          50% {
            transform: rotate(-10deg) translateY(-30px);
          }
        }
        
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
        
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }
        
        .animate-spin-star {
          animation: spin-star 20s linear infinite;
        }
        
        .animate-spin-star-delayed {
          animation: spin-star-delayed 25s linear infinite;
        }
        
        .animate-spin-slow {
          animation: spin-star 30s linear infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
