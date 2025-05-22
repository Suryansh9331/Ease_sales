



// import { useState, useEffect, useRef } from 'react';
// import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

// const testimonials = [
//   {
//     id: 1,
//     name: "Sophia Williams",
//     role: "Small Business Owner",
//     image: {person},
//     content: "This credit card service transformed how I manage my business expenses. The rewards program is incredible and the customer support is always there when I need it.",
//     rating: 5,
//   },
//   {
//     id: 2,
//     name: "Alex Johnson",
//     role: "Freelance Designer",
//     image: "/api/placeholder/400/400",
//     content: "I've tried several credit cards, but this one stands out with its low interest rates and flexible payment options. Perfect for my irregular income pattern!",
//     rating: 5,
//   },
//   {
//     id: 3,
//     name: "Michael Chen",
//     role: "Tech Entrepreneur",
//     image: "/api/placeholder/400/400",
//     content: "The travel benefits and points system have saved me thousands on business trips. The mobile app is intuitive and makes managing finances on the go a breeze.",
//     rating: 4,
//   },
//   {
//     id: 4,
//     name: "Olivia Rodriguez",
//     role: "Marketing Executive",
//     image: "/api/placeholder/400/400",
//     content: "What impressed me most was how quickly I was approved and how the team helped me set up autopay. Haven't missed a payment since and my credit score has improved significantly.",
//     rating: 5,
//   },
// ];

// export default function TestimonialSection() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isAnimating, setIsAnimating] = useState(false);
//   const [direction, setDirection] = useState(null);
//   const slideRef = useRef(null);

//   // Auto-scroll testimonials with enhanced timing
//   useEffect(() => {
//     const interval = setInterval(() => {
//       nextTestimonial();
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [currentIndex]);

//   const nextTestimonial = () => {
//     if (isAnimating) return;
//     setIsAnimating(true);
//     setDirection('next');
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
//     setTimeout(() => setIsAnimating(false), 700);
//   };

//   const prevTestimonial = () => {
//     if (isAnimating) return;
//     setIsAnimating(true);
//     setDirection('prev');
//     setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
//     setTimeout(() => setIsAnimating(false), 700);
//   };

//   const goToTestimonial = (index) => {
//     if (isAnimating || index === currentIndex) return;
//     setIsAnimating(true);
//     setDirection(index > currentIndex ? 'next' : 'prev');
//     setCurrentIndex(index);
//     setTimeout(() => setIsAnimating(false), 700);
//   };

//   // Animation classes based on direction
//   const getAnimationClass = (index) => {
//     if (!isAnimating) return '';
//     if (index === currentIndex) {
//       return direction === 'next' ? 'animate-slide-in-right' : 'animate-slide-in-left';
//     }
//     return direction === 'next' ? 'animate-slide-out-left' : 'animate-slide-out-right';
//   };

//   return (
//     <div className="w-full py-16 px-4 bg-gradient-to-br from-white via-purple-50 to-teal-50">
//       <div className="max-w-6xl mx-auto">
//         {/* Enhanced Section Header */}
//         <div className="text-center mb-16 relative">
//           <div className="absolute left-1/2 transform -translate-x-1/2 -top-6 w-20 h-20 bg-teal-500 opacity-10 rounded-full blur-xl"></div>
//           <div className="absolute left-1/3 -translate-x-1/2 -top-2 w-12 h-12 bg-purple-600 opacity-10 rounded-full blur-lg"></div>
          
//           <h2 className="text-3xl md:text-5xl font-bold relative z-10">
//             <span className="bg-purple-600 bg-clip-text text-transparent">
//               What Our Clients Say
//             </span>
//           </h2>
          
//           <div className="h-1.5 w-24 bg-gradient-to-r from-purple-600 via-teal-500 to-purple-600 mx-auto mt-6 rounded-full"></div>
//           <div className="h-1 w-16 bg-gradient-to-r from-teal-500 to-purple-600 mx-auto mt-1.5 rounded-full opacity-70"></div>
//         </div>

//         {/* Main Testimonial Display */}
//         <div className="relative overflow-hidden mb-12">
//           <div className="relative h-full min-h-64 md:min-h-80">
//             {testimonials.map((testimonial, index) => (
//               <div
//                 key={testimonial.id}
//                 style={{
//                   zIndex: currentIndex === index ? 20 : 10,
//                   opacity: currentIndex === index ? 1 : 0,
//                   position: 'absolute',
//                   top: 0,
//                   left: 0,
//                   width: '100%',
//                   transition: 'opacity 0.7s ease-in-out',
//                 }}
//                 className={`${getAnimationClass(index)}`}
//               >
//                 <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 overflow-hidden relative group">
//                   {/* Animated background elements */}
//                   <div className="absolute -top-20 -left-20 w-40 h-40 bg-purple-600 opacity-5 rounded-full group-hover:scale-150 transition-all duration-1000"></div>
//                   <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-teal-500 opacity-5 rounded-full group-hover:scale-150 transition-all duration-1000 delay-100"></div>
                  
//                   {/* Top accent bar with gradient */}
//                   <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-purple-600 via-teal-500 to-purple-600"></div>
                  
//                   <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
//                     {/* Enhanced Profile Section */}
//                     <div className="relative">
//                       {/* Decorative quote icon */}
//                       <div className="absolute -top-4 -left-4 bg-gradient-to-br from-purple-600 to-teal-500 rounded-full p-2 shadow-lg animate-pulse duration-2000">
//                         <Quote size={16} className="text-white" />
//                       </div>
                      
//                       {/* Profile image with animated border */}
//                       <div className="relative w-28 h-28 md:w-36 md:h-36">
//                         <div className="absolute inset-0 rounded-full  animate-spin-slow"></div>
//                         <div className="absolute inset-1 rounded-full bg-white"></div>
//                         <div className="absolute inset-2 rounded-full overflow-hidden border-2 border-white">
//                           <img 
//                             src={testimonial.image} 
//                             alt={testimonial.name} 
//                             className="w-full h-full object-cover"
//                           />
//                         </div>
//                       </div>
                      
//                       {/* Enhanced Rating Badge */}
//                       <div className="absolute -bottom-2 right-0  rounded-full p-1.5 shadow-lg">
//                         <div className="bg-white rounded-full p-1">
//                           <div className="flex">
//                             {[...Array(5)].map((_, i) => (
//                               <Star
//                                 key={i}
//                                 size={14}
//                                 className={`${
//                                   i < testimonial.rating 
//                                     ? "text-yellow-400 fill-yellow-400" 
//                                     : "text-gray-300"
//                                 } ${i < testimonial.rating && "animate-star-pulse delay-" + i}`}
//                               />
//                             ))}
//                           </div>
//                         </div>
//                       </div>
//                     </div>
                    
//                     {/* Enhanced Testimonial Content */}
//                     <div className="flex-1 text-center md:text-left relative">
//                       <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-teal-500 text-5xl font-serif leading-none absolute top-0 left-0 opacity-20">"</div>
//                       <p className="text-gray-700 italic mb-4 mt-4 relative z-10 text-lg leading-relaxed">
//                         {testimonial.content}
//                       </p>
//                       <div className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-purple-600 text-5xl font-serif leading-none absolute bottom-0 right-0 opacity-20">"</div>
                      
//                       <div className="mt-6 relative z-10">
//                         <h4 className="font-bold text-xl text-gray-900">{testimonial.name}</h4>
//                         <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-teal-500 font-medium">
//                           {testimonial.role}
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Enhanced Navigation Arrows */}
//           <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 flex justify-between z-30 px-2 md:px-4">
//             <button
//               onClick={prevTestimonial}
//               className="bg-white text-purple-600 hover:text-white p-2 md:p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:bg-gradient-to-r hover:from-purple-600 hover:to-teal-500 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 group"
//               disabled={isAnimating}
//             >
//               <ChevronLeft size={20} className="group-hover:animate-bounce-left" />
//             </button>
//             <button
//               onClick={nextTestimonial}
//               className="bg-white text-purple-600 hover:text-white p-2 md:p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:bg-gradient-to-r hover:from-teal-500 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 group"
//               disabled={isAnimating}
//             >
//               <ChevronRight size={20} className="group-hover:animate-bounce-right" />
//             </button>
//           </div>
//         </div>
        
//         {/* Enhanced Indicator Dots */}
//         <div className="flex justify-center space-x-2 mt-6">
//           {testimonials.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => goToTestimonial(index)}
//               className={`h-3 rounded-full transition-all duration-500 ${
//                 currentIndex === index
//                   ? "w-8 bg-gradient-to-r from-purple-600 to-teal-500 shadow-md"
//                   : "w-3 bg-gray-200 hover:bg-gray-300"
//               }`}
//               aria-label={`Go to testimonial ${index + 1}`}
//             />
//           ))}
//         </div>
        
       
//       </div>
      
//       {/* Add custom animations */}
//       <style jsx global>{`
//         @keyframes spin-slow {
//           0% { transform: rotate(0deg); }
//           100% { transform: rotate(360deg); }
//         }
        
//         @keyframes star-pulse {
//           0%, 100% { transform: scale(1); }
//           50% { transform: scale(1.2); }
//         }
        
//         @keyframes slide-in-right {
//           0% { transform: translateX(100%); opacity: 0; }
//           100% { transform: translateX(0); opacity: 1; }
//         }
        
//         @keyframes slide-in-left {
//           0% { transform: translateX(-100%); opacity: 0; }
//           100% { transform: translateX(0); opacity: 1; }
//         }
        
//         @keyframes slide-out-left {
//           0% { transform: translateX(0); opacity: 1; }
//           100% { transform: translateX(-100%); opacity: 0; }
//         }
        
//         @keyframes slide-out-right {
//           0% { transform: translateX(0); opacity: 1; }
//           100% { transform: translateX(100%); opacity: 0; }
//         }
        
//         @keyframes bounce-left {
//           0%, 100% { transform: translateX(0); }
//           50% { transform: translateX(-3px); }
//         }
        
//         @keyframes bounce-right {
//           0%, 100% { transform: translateX(0); }
//           50% { transform: translateX(3px); }
//         }
        
//         .animate-spin-slow {
//           animation: spin-slow 8s linear infinite;
//         }
        
//         .animate-star-pulse {
//           animation: star-pulse 1.5s ease-in-out infinite;
//         }
        
//         .animate-slide-in-right {
//           animation: slide-in-right 0.7s ease-out forwards;
//         }
        
//         .animate-slide-in-left {
//           animation: slide-in-left 0.7s ease-out forwards;
//         }
        
//         .animate-slide-out-left {
//           animation: slide-out-left 0.7s ease-in forwards;
//         }
        
//         .animate-slide-out-right {
//           animation: slide-out-right 0.7s ease-in forwards;
//         }
        
//         .animate-bounce-left {
//           animation: bounce-left 0.5s ease-in-out infinite;
//         }
        
//         .animate-bounce-right {
//           animation: bounce-right 0.5s ease-in-out infinite;
//         }
        
//         .delay-0 { animation-delay: 0s; }
//         .delay-1 { animation-delay: 0.1s; }
//         .delay-2 { animation-delay: 0.2s; }
//         .delay-3 { animation-delay: 0.3s; }
//         .delay-4 { animation-delay: 0.4s; }
//       `}</style>
//     </div>
//   );
// }





import person from "../../assets/images/person.jpeg"
import person2 from "../../assets/images/person2.jpeg"
import person3 from "../../assets/images/person3.jpeg"
import person4 from "../../assets/images/person4.jpg"
import person5 from "../../assets/images/person5.jpg"
import girl from "../../assets/images/girl.jpg"
import person7 from "../../assets/images/person7.jpg"
import person8 from "../../assets/images/person8.jpg"


import { useState, useEffect, useRef } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: " Jordan M.",
    role: "Tech Entrepreneur, California",
    image: person,
    content: "EaseWithdraw made managing my crypto and traditional finances effortless. Their platform bridges the gap between crypto wallets and real-world spending. I use their crypto card for everyday purchases — no hassles, just convenience!",
    rating: 5,
  },
  {
    id: 2,
    name: "Alex Johnson",
    role: "Freelance Designer, New York",
    image: person2,
    content: "I was skeptical about mixing crypto with personal finance tools, but EaseWithdraw blew me away. Their credit solutions are transparent, fast, and super flexible. It's like having a digital bank that actually works for you.",
    rating: 5,
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Crypto investor, Texas",
    image: person3,
    content: "Finally, a service that makes crypto usable in the real world. With EaseWithdraw, I can convert and spend crypto in seconds — whether it’s paying for lunch or booking a flight. It’s the future of finance, here today!",
    rating: 4,
  },
  {
    id: 4,
    name: "Nina T.",
    role: "Financial Analyst,  Florida",
    image: girl,
    content:"Security is everything in finance. EaseWithdraw has consistently proven itself with secure transactions, excellent customer support, and instant alerts. I feel safe and empowered using their tools.",
    rating: 5,
  },
  {
    id: 5,
    name: "Kevin H",
    role: "eCommerce Business Owner,   Illinois",
    image: person4,
    content:"EaseWithdraw lives up to its name. Withdrawals are lightning fast, and the entire process feels seamless. Whether it's fiat or crypto, moving my money is never a hassle anymore.",
    rating: 2,
  },
  {
    id: 6,
    name: "Hardy Max.",
    role: "Digital Marketer,  Georgia",
    image: person5,
    content:"Their dashboard is a game changer — I can track spending, crypto balances, and credit limits in one place. EaseWithdraw is perfect for anyone who wants smarter control of their finances.",
    rating: 5,
  },
  {
    id: 7,
    name: "Emily W.",
    role: "Remote Consultant,colorado",
    image: person7,
    content:"EaseWithdraw is the only platform I trust for handling both crypto and credit services. Whether I need to convert Bitcoin or use my card for a hotel booking, it just works — no delays, no confusion.",
    rating: 3,
  },
  {
    id: 8,
    name: "Samantha L.",
    role: "travel Blogger,  Nevada",
    image: person8,
    content:"EaseWithdraw gives me control over my money — crypto or cash. It's like having a global bank in my pocket. I can invest, spend, and save, all without switching between apps.",
    rating: 4,
  },
];

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState(null);
  const slideRef = useRef(null);
  const autoScrollRef = useRef(null);

  const nextTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection('next');
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 700);
  };

  const prevTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection('prev');
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
    setTimeout(() => setIsAnimating(false), 700);
  };

  const goToTestimonial = (index) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setDirection(index > currentIndex ? 'next' : 'prev');
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 700);
  };

  // Fixed auto-scroll testimonials
  useEffect(() => {
    // Clear any existing interval when component mounts or currentIndex changes
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current);
    }
    
    // Set new interval
    autoScrollRef.current = setInterval(() => {
      if (!isAnimating) {
        nextTestimonial();
      }
    }, 5000);
    
    // Clean up interval on unmount or when dependencies change
    return () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
      }
    };
  }, [currentIndex, isAnimating]);

  // Animation classes based on direction
  const getAnimationClass = (index) => {
    if (!isAnimating) return '';
    if (index === currentIndex) {
      return direction === 'next' ? 'animate-slide-in-right' : 'animate-slide-in-left';
    }
    return direction === 'next' ? 'animate-slide-out-left' : 'animate-slide-out-right';
  };

  return (
    <div className="w-full py-16 px-4 bg-gradient-to-br from-white via-purple-50 to-teal-50">
      <div className="max-w-6xl mx-auto">
        {/* Enhanced Section Header */}
        <div className="text-center mb-16 relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 -top-6 w-20 h-20 bg-teal-500 opacity-10 rounded-full blur-xl"></div>
          <div className="absolute left-1/3 -translate-x-1/2 -top-2 w-12 h-12 bg-purple-600 opacity-10 rounded-full blur-lg"></div>
          
          <h2 className="text-3xl md:text-5xl font-bold relative z-10">
            <span className="bg-purple-600 bg-clip-text text-transparent">
              What Our Clients Say
            </span>
          </h2>
          
          <div className="h-1.5 w-24 bg-gradient-to-r from-purple-600 via-teal-500 to-purple-600 mx-auto mt-6 rounded-full"></div>
          <div className="h-1 w-16 bg-gradient-to-r from-teal-500 to-purple-600 mx-auto mt-1.5 rounded-full opacity-70"></div>
        </div>

        {/* Main Testimonial Display */}
        <div className="relative overflow-hidden mb-12 lg:pb-4   ">

          <div className="relative h-full mb-110 lg:mb-64    ">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                style={{
                  zIndex: currentIndex === index ? 20 : 10,
                  opacity: currentIndex === index ? 1 : 0,
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  transition: 'opacity 0.7s ease-in-out',
                }}
                className={`${getAnimationClass(index)}`}
              >
                <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 overflow-hidden relative group">
                  {/* Animated background elements */}
                  <div className="absolute -top-20 -left-20 w-40 h-40 bg-purple-600 opacity-5 rounded-full group-hover:scale-150 transition-all duration-1000"></div>
                  <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-teal-500 opacity-5 rounded-full group-hover:scale-150 transition-all duration-1000 delay-100"></div>
                  
                  {/* Top accent bar with gradient */}
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-purple-600 via-teal-500 to-purple-600"></div>
                  
                  <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                    {/* Enhanced Profile Section */}
                    <div className="relative">
                      {/* Decorative quote icon */}
                      <div className="absolute -top-4 -left-4 bg-gradient-to-br from-purple-600 to-teal-500 rounded-full p-2 shadow-lg animate-pulse duration-2000">
                        <Quote size={16} className="text-white" />
                      </div>
                      
                      {/* Profile image with animated border */}
                      <div className="relative w-28 h-28 md:w-36 md:h-36">
                        <div className="absolute inset-0 rounded-full  animate-spin-slow"></div>
                        <div className="absolute inset-1 rounded-full bg-white"></div>
                        <div className="absolute inset-2 rounded-full overflow-hidden border-2 border-white">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      
                      {/* Enhanced Rating Badge */}
                      <div className="absolute -bottom-2 right-0  rounded-full p-1.5 shadow-lg">
                        <div className="bg-white rounded-full p-1">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                size={14}
                                className={`${
                                  i < testimonial.rating 
                                    ? "text-yellow-400 fill-yellow-400" 
                                    : "text-gray-300"
                                } ${i < testimonial.rating && "animate-star-pulse delay-" + i}`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Enhanced Testimonial Content */}
                    <div className="flex-1 text-center md:text-left relative">
                      <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-teal-500 text-5xl font-serif leading-none absolute top-0 left-0 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 mt-4 relative z-10 text-lg leading-relaxed">
                        {testimonial.content}
                      </p>
                      <div className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-purple-600 text-5xl font-serif leading-none absolute bottom-0 right-0 opacity-20">"</div>
                      
                      <div className="mt-6 relative z-10">
                        <h4 className="font-bold text-xl text-gray-900">{testimonial.name}</h4>
                        <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-teal-500 font-medium">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced Navigation Arrows */}
          <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 flex justify-between z-30 px-2 md:px-4">
            <button
              onClick={prevTestimonial}
              className="bg-white text-purple-600 hover:text-white p-2 md:p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:bg-gradient-to-r hover:from-purple-600 hover:to-teal-500 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 group"
              disabled={isAnimating}
            >
              <ChevronLeft size={20} className="group-hover:animate-bounce-left" />
            </button>
            <button
              onClick={nextTestimonial}
              className="bg-white text-purple-600 hover:text-white p-2 md:p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:bg-gradient-to-r hover:from-teal-500 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 group"
              disabled={isAnimating}
            >
              <ChevronRight size={20} className="group-hover:animate-bounce-right" />
            </button>
          </div>
        </div>
        
        {/* Enhanced Indicator Dots */}
        <div className="flex justify-center space-x-2 mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`h-3 rounded-full transition-all duration-500 ${
                currentIndex === index
                  ? "w-8 bg-gradient-to-r from-purple-600 to-teal-500 shadow-md"
                  : "w-3 bg-gray-200 hover:bg-gray-300"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
        
       
      </div>
      
      {/* Add custom animations */}
      <style jsx global>{`
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes star-pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.2); }
        }
        
        @keyframes slide-in-right {
          0% { transform: translateX(100%); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes slide-in-left {
          0% { transform: translateX(-100%); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes slide-out-left {
          0% { transform: translateX(0); opacity: 1; }
          100% { transform: translateX(-100%); opacity: 0; }
        }
        
        @keyframes slide-out-right {
          0% { transform: translateX(0); opacity: 1; }
          100% { transform: translateX(100%); opacity: 0; }
        }
        
        @keyframes bounce-left {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(-3px); }
        }
        
        @keyframes bounce-right {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(3px); }
        }
        
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        
        .animate-star-pulse {
          animation: star-pulse 1.5s ease-in-out infinite;
        }
        
        .animate-slide-in-right {
          animation: slide-in-right 0.7s ease-out forwards;
        }
        
        .animate-slide-in-left {
          animation: slide-in-left 0.7s ease-out forwards;
        }
        
        .animate-slide-out-left {
          animation: slide-out-left 0.7s ease-in forwards;
        }
        
        .animate-slide-out-right {
          animation: slide-out-right 0.7s ease-in forwards;
        }
        
        .animate-bounce-left {
          animation: bounce-left 0.5s ease-in-out infinite;
        }
        
        .animate-bounce-right {
          animation: bounce-right 0.5s ease-in-out infinite;
        }
        
        .delay-0 { animation-delay: 0s; }
        .delay-1 { animation-delay: 0.1s; }
        .delay-2 { animation-delay: 0.2s; }
        .delay-3 { animation-delay: 0.3s; }
        .delay-4 { animation-delay: 0.4s; }
      `}</style>
    </div>
  );
}