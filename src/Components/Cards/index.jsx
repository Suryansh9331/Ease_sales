
import { useState, useEffect } from "react";
import  nexo from "../../assets/images/nexo.png"
import  robinhood from "../../assets/images/robinhood.png"
import  truestwallet from "../../assets/images/trustwalletcard.png"
import  CashApp from "../../assets/images/Cashapp.png"
import  Coinbase from "../../assets/images/coinbase.png"
import  paypal from "../../assets/images/paypal.png"
export default function AnimatedCardsGrid() {
  const [visibleCards, setVisibleCards] = useState([]);
  const [highlightedCard, setHighlightedCard] = useState(null);

  // Sample card data - replace with your actual card information
  const cards = [
    {
      id: 1,
      title: "Your Nexo Wallet,Now in Your Pocket",
      description: "Nexo is your all-in-one platform to access the full potential of your crypto—without ever needing to sell it.",
      image: nexo,
    },
    {
      id: 2,
      title: "Introducing Robin Hood",
      description: "Banking is Broken.We're Not Here to Fix It We're Replacing It.",
      image: robinhood,
    },
    {
      id: 3,
      title: "Your Keys. Your Wallet your Rules.",
      description: "Discover a powerful 3-card series that brings the core of Trust Wallet into your hands — real tools for real control in the decentralized world",
      image: truestwallet,
    },
    {
      id: 4,
      title: "CashApp - The Future of Banking",
      description: "Banking, without the baggage Send it. Stack it. Your money, your rules- with zero hidden fees.",
      image: CashApp,
    },
    {
      id: 5,
      title: "Powered by Coinbase. Built for What's Next",
      description: "Welcome to the future of digital finance—secure, seamless, and built for everyone.",
      image:  Coinbase,
    },
    {
      id: 6,
      title: "Paypal",
      description: "More Than a Card. It’s a Key to Your Digital Wealth.",
      image: paypal ,
    },
  ];

  // Animate cards appearance on load
  useEffect(() => {
    const timer = setTimeout(() => {
      // Show all cards with staggered animation
      cards.forEach((card, index) => {
        setTimeout(() => {
          setVisibleCards((prev) => [...prev, card.id]);
        }, index * 400);
      });
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  // Auto-highlight cards sequentially
  useEffect(() => {
    if (visibleCards.length < cards.length) return;
    
    let currentIndex = 0;
    const interval = setInterval(() => {
      setHighlightedCard(cards[currentIndex].id);
      currentIndex = (currentIndex + 1) % cards.length;
    }, 3000);
    
    return () => clearInterval(interval);
  }, [visibleCards.length]);

  return (
    <div className="w-full h-auto max-w-8xl mx-auto  py-12 lg:px-22 md:px-4 font-sans bg-gradient-to-br from-purple-50 to-purple-100">
             <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight text-center" style={{ color: '#11182b' }}>
          Our Premium <span style={{ color: '#9810fa' }}>Cards</span> Collections
        </h1>
      
      <div className="flex flex-col space-y-16 mt-8">
        {cards.map((card, idx) => {
          const isVisible = visibleCards.includes(card.id);
          const isHighlighted = highlightedCard === card.id;
          const isEven = idx % 2 === 0;
          
          return (
            <div 
              key={card.id}
              className={`flex flex-col  ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} 
                items-center justify-center gap-8 transition-all duration-1000 
                ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-16'}
                ${isHighlighted ? 'scale-105' : 'scale-100'}`}
            >
              {/* Card Image */}
              <div className="w-full md:w-2/5 flex justify-center ">
                <div 
                  className={`relative w-full h-auto rounded-xl overflow-hidden  px-2
                    transition-all duration-700 transform
                    ${isHighlighted ? ' ring-2 ring-purple-500' : ''}`}
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover "
                  />
                  <div 
                    className={`absolute inset-0 transition-opacity duration-700
                      ${isHighlighted ? 'bg-gradient-to-t from-purple-900/60 to-transparent' : ' '}`}
                  ></div>
                  
                  <div className="absolute bottom-0 left-0 w-full p-4">
                    <div 
                      className={`h-1 bg-white rounded-full transition-all duration-700
                        ${isHighlighted ? 'w-full' : 'w-0'}`}
                    ></div>
                  </div>
                </div>
              </div>
              
              {/* Card Content */}
              <div 
                className={`w-full md:w-3/5 text-center ${isEven ? 'md:text-left' : 'md:text-right'}
                  transition-all duration-700 transform
                  ${isHighlighted ? 'translate-y-0' : isEven ? 'md:translate-x-4' : 'md:-translate-x-4'}`}
              >
                <span 
                  className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3
                    ${isHighlighted ? 'bg-purple-100 text-purple-800' : 'bg-gray-100 text-gray-600'}`}
                >
                  Card {idx + 1}
                </span>
                
                <h3 
                  className={`text-3xl font-bold mb-4 transition-colors duration-500
                    ${isHighlighted ? 'text-purple-700' : 'text-gray-800'}`}
                  style={{ color: isHighlighted ? "#9810fa" : "" }}
                >
                  {card.title}
                </h3>
                
                <p className="text-gray-600 text-lg mb-6">
                  {card.description}
                </p>
                
              <a href="#">                <button 
                  className={`px-6 py-3 rounded-full font-medium text-white transition-all duration-500 cursor-pointer
                    ${isHighlighted ? 'shadow-lg shadow-purple-200' : ''}`}
                  style={{ backgroundColor: "#9810fa" }}

                >
                  {isHighlighted ? 'Selected' : 'Get Your Card'}
                </button>
                </a>

              </div>
            </div>
          );
        })}
      </div>
      
      {/* Progress indicators */}
      <div className="flex justify-center items-center mt-12 space-x-2">
        {cards.map((card) => (
          <button
            key={card.id}
            onClick={() => setHighlightedCard(card.id)}
            className={`w-12 h-2 rounded-full transition-all duration-300 
              ${highlightedCard === card.id ? 'bg-purple-700 w-16' : 'bg-gray-300 hover:bg-purple-300'}`}
            aria-label={`Highlight ${card.title}`}
          />
        ))}
      </div>
    </div>
  );
}



// import { useState, useEffect, useRef } from "react";

// export default function EnhancedCardGallery() {
//   const [visibleCards, setVisibleCards] = useState([]);
//   const [activeCardIndex, setActiveCardIndex] = useState(0);
//   const [animating, setAnimating] = useState(false);
//   const containerRef = useRef(null);

//   // Sample card data - replace with your actual card information
//   const cards = [
//     {
//       id: 1,
//       title: "Premium Card",
//       description: "Our flagship card with exclusive benefits and premium features.",
//       image: nexo,
//     },
//     {
//       id: 2,
//       title: "Gold Card",
//       description: "Enhanced rewards and special offers for frequent users.",
//       image: "/api/placeholder/400/250",
//     },
//     {
//       id: 3,
//       title: "Silver Card",
//       description: "Perfect balance of benefits and affordability.",
//       image: "/api/placeholder/400/250",
//     },
//     {
//       id: 4,
//       title: "Business Card",
//       description: "Tailored for professionals with business-specific rewards.",
//       image: "/api/placeholder/400/250",
//     },
//     {
//       id: 5,
//       title: "Student Card",
//       description: "Special rates and benefits designed for students.",
//       image: "/api/placeholder/400/250",
//     },
//     {
//       id: 6,
//       title: "Travel Card",
//       description: "Maximize your travel experiences with exclusive perks.",
//       image: "/api/placeholder/400/250",
//     },
//   ];

//   // Initial animation on component mount
//   useEffect(() => {
//     // Animate scroll to top when component mounts
//     if (containerRef.current) {
//       containerRef.current.scrollIntoView({ behavior: "smooth" });
//     }
    
//     // Reveal cards one by one with staggered timing
//     cards.forEach((card, index) => {
//       setTimeout(() => {
//         setVisibleCards(prev => [...prev, card.id]);
        
//         // Add a nice scroll effect for each card as it appears
//         const cardElement = document.getElementById(`card-${card.id}`);
//         if (cardElement && index > 0) {
//           cardElement.scrollIntoView({ behavior: "smooth", block: "center" });
//         }
//       }, 800 + (index * 600));
//     });
//   }, []);

//   // Auto-cycle through card highlights
//   useEffect(() => {
//     if (visibleCards.length < cards.length) return;
    
//     const interval = setInterval(() => {
//       if (!animating) {
//         setAnimating(true);
//         setActiveCardIndex(prev => (prev + 1) % cards.length);
//         setTimeout(() => setAnimating(false), 800);
//       }
//     }, 5000);
    
//     return () => clearInterval(interval);
//   }, [visibleCards.length, animating]);

//   // Handle manual card selection
//   const selectCard = (index) => {
//     if (animating || index === activeCardIndex) return;
    
//     setAnimating(true);
//     setActiveCardIndex(index);
    
//     // Scroll to the selected card
//     const cardElement = document.getElementById(`card-${cards[index].id}`);
//     if (cardElement) {
//       cardElement.scrollIntoView({ behavior: "smooth", block: "center" });
//     }
    
//     setTimeout(() => setAnimating(false), 800);
//   };

//   return (
//     <div ref={containerRef} className="w-full max-w-6xl mx-auto px-4 py-16 font-sans bg-gradient-to-b from-white to-purple-50">
//       <div className="text-center mb-16 opacity-0 animate-fade-in" style={{ animation: "fadeIn 1.5s forwards" }}>
//         <h2 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-800 to-purple-500">
//           Our Premium Card Collection
//         </h2>
//         <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//           Discover our exclusive range of cards designed to fit your lifestyle and needs.
//         </p>
//       </div>
      
//       <div className="flex flex-col space-y-32 mt-8">
//         {cards.map((card, idx) => {
//           const isVisible = visibleCards.includes(card.id);
//           const isActive = idx === activeCardIndex;
//           const isEven = idx % 2 === 0;
          
//           return (
//             <div 
//               id={`card-${card.id}`}
//               key={card.id}
//               className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} 
//                 items-center gap-6 md:gap-12 relative
//                 transition-all duration-1000 ease-in-out
//                 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-24'}`}
//               onClick={() => selectCard(idx)}
//             >
//               {/* Animated background elements */}
//               <div className={`absolute inset-0 -z-10 transition-all duration-1000 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
//                 <div className="absolute top-0 left-0 w-32 h-32 rounded-full bg-purple-200 blur-3xl opacity-20"></div>
//                 <div className="absolute bottom-0 right-0 w-40 h-40 rounded-full bg-purple-300 blur-3xl opacity-20"></div>
//               </div>
              
//               {/* Card image container - larger and more prominent */}
//               <div className={`w-full md:w-1/2 p-6 transition-all duration-700 ease-out
//                 ${isActive ? 'scale-105' : 'scale-95'}`}>
//                 <div className={`relative mx-auto
//                   ${isActive ? 'animate-float' : ''}`}
//                   style={{
//                     animation: isActive ? "float 3s ease-in-out infinite" : "none",
//                     perspective: "1000px",
//                   }}
//                 >
//                   {/* 3D Card Effect */}
//                   <div 
//                     className={`relative overflow-hidden rounded-2xl
//                       transition-all duration-700 transform shadow-2xl
//                       ${isActive ? 
//                         `${isEven ? 'rotate-y-6' : '-rotate-y-6'} shadow-purple-400/30` : 
//                         'shadow-gray-400/20'}`}
//                     style={{
//                       height: "360px",
//                       width: "260px",
//                       maxWidth: "100%",
//                       margin: "0 auto",
//                       transformStyle: "preserve-3d",
//                     }}
//                   >
//                     {/* Main card image */}
//                     <img
//                       src={card.image}
//                       alt={card.title}
//                       className="w-full h-full object-contain rounded-2xl"
//                     />
                    
//                     {/* Card overlay effects */}
//                     <div 
//                       className={`absolute inset-0 transition-all duration-500
//                         bg-gradient-to-t ${isActive ? 'from-purple-900/10 to-transparent' : 'from-black/20 to-transparent'}`}
//                     ></div>
                    
//                     {/* Card border glow effect */}
//                     <div 
//                       className={`absolute inset-0 rounded-2xl transition-all duration-700
//                         border-2 ${isActive ? 'border-purple-400/50' : 'border-transparent'}`}
//                     ></div>
                    
//                     {/* Card number indicator */}
//                     <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/80 flex items-center justify-center
//                       text-sm font-bold" style={{ color: "#9810fa" }}>
//                       {idx + 1}
//                     </div>
                    
//                     {/* Progress indicator on active card */}
//                     {isActive && (
//                       <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-300 to-purple-600">
//                         <div className="h-full bg-white animate-progress-bar" style={{
//                           animation: "progressBar 5s linear forwards",
//                           width: "0%"
//                         }}></div>
//                       </div>
//                     )}
//                   </div>
                  
//                   {/* Reflection effect */}
//                   <div 
//                     className={`mx-auto mt-2 rounded-2xl transition-all duration-700
//                       bg-gradient-to-b from-purple-100/20 to-transparent
//                       ${isActive ? 'opacity-70' : 'opacity-0'}`}
//                     style={{
//                       height: "40px",
//                       width: "80%",
//                       transform: "rotateX(180deg) scaleY(0.3)",
//                       filter: "blur(4px)"
//                     }}
//                   ></div>
//                 </div>
//               </div>
              
//               {/* Card content */}
//               <div 
//                 className={`w-full md:w-1/2 ${isEven ? 'md:text-left pl-0 md:pl-6' : 'md:text-right pr-0 md:pr-6'}
//                   transition-all duration-700 ease-out
//                   ${isActive ? 'translate-y-0' : isEven ? 'md:translate-x-6 opacity-70' : 'md:-translate-x-6 opacity-70'}`}
//               >
//                 {/* Card tag/badge */}
//                 <span 
//                   className={`inline-block px-4 py-1 rounded-full text-sm font-semibold mb-4
//                     transition-all duration-500
//                     ${isActive ? 'bg-purple-100 text-purple-800' : 'bg-gray-100 text-gray-600'}`}
//                 >
//                   {isEven ? "Featured Card" : "Special Offer"}
//                 </span>
                
//                 {/* Card title */}
//                 <h3 
//                   className={`text-4xl font-bold mb-4 transition-all duration-500
//                     ${isActive ? 'scale-105' : ''}`}
//                   style={{ color: isActive ? "#9810fa" : "#374151" }}
//                 >
//                   {card.title}
//                 </h3>
                
//                 {/* Divider */}
//                 <div 
//                   className={`h-1 rounded-full mb-6 transition-all duration-700 transform origin-left
//                     ${isActive ? 'w-24 bg-purple-500' : 'w-16 bg-gray-200'}`}
//                   style={{ marginLeft: isEven ? "0" : "auto", marginRight: !isEven ? "0" : "auto" }}
//                 ></div>
                
//                 {/* Card description */}
//                 <p className={`text-gray-600 text-lg mb-8 transition-all duration-500
//                   ${isActive ? 'opacity-100' : 'opacity-80'}`}>
//                   {card.description}
//                 </p>
                
//                 {/* Call to action button */}
//                 <div className={isEven ? 'text-left' : 'text-right'}>
//                   <button 
//                     className={`px-8 py-3 rounded-full font-medium text-white 
//                       transition-all duration-500 transform
//                       ${isActive ? 
//                         'shadow-lg shadow-purple-300/50 scale-105 hover:scale-110' : 
//                         'hover:scale-105'}`}
//                     style={{ backgroundColor: "#9810fa" }}
//                   >
//                     {isActive ? 'View Card Details' : 'Learn More'}
//                   </button>
//                 </div>
                
//                 {/* Extra details that show when active */}
//                 <div 
//                   className={`mt-6 grid grid-cols-2 gap-4 text-sm text-gray-500
//                     transition-all duration-700
//                     ${isActive ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'}`}
//                 >
//                   <div>
//                     <p className="font-semibold">Annual Fee</p>
//                     <p>$0 - $99</p>
//                   </div>
//                   <div>
//                     <p className="font-semibold">Rewards Rate</p>
//                     <p>1% - 5%</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
      
//       {/* Card selector/navigator */}
//       <div className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-md py-4 border-t border-purple-100">
//         <div className="container mx-auto flex justify-center items-center gap-3">
//           {cards.map((card, idx) => (
//             <button
//               key={card.id}
//               onClick={() => selectCard(idx)}
//               className={`transition-all duration-500 p-1 rounded-lg
//                 ${activeCardIndex === idx ? 
//                   'ring-2 ring-purple-500 bg-purple-50 transform scale-110' : 
//                   'hover:bg-purple-50'}`}
//             >
//               <div 
//                 className="w-12 h-6 rounded-md overflow-hidden shadow-sm"
//                 style={{ backgroundColor: activeCardIndex === idx ? "#9810fa" : "#e5e7eb" }}
//               >
//                 <div className="h-full w-full flex items-center justify-center">
//                   <span className={`text-xs font-bold ${activeCardIndex === idx ? 'text-white' : 'text-gray-500'}`}>
//                     {idx + 1}
//                   </span>
//                 </div>
//               </div>
//             </button>
//           ))}
//         </div>
//       </div>
      
//       {/* CSS animations */}
//       <style jsx>{`
//         @keyframes fadeIn {
//           from { opacity: 0; transform: translateY(-20px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
        
//         @keyframes float {
//           0% { transform: translateY(0px); }
//           50% { transform: translateY(-10px); }
//           100% { transform: translateY(0px); }
//         }
        
//         @keyframes progressBar {
//           0% { width: 0%; }
//           100% { width: 100%; }
//         }
//       `}</style>
//     </div>
//   );
// }