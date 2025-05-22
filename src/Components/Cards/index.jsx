
import { useState, useEffect } from "react";
import  nexo from "../../assets/images/nexo.png"
import  robinhood from "../../assets/images/robinhood.png"
import  truestwallet from "../../assets/images/trustwalletcard.png"
import  CashApp from "../../assets/images/Cashapp.png"
import  Coinbase from "../../assets/images/coinbase.png"
import  paypal from "../../assets/images/paypal.png"
export default function AnimatedCardsGrid({ onTriggerPopup }) {
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
                
                           <button    onClick={onTriggerPopup}
                  className={`px-6 py-3 rounded-full font-medium text-white transition-all duration-500 cursor-pointer 
                    ${isHighlighted ? 'shadow-lg shadow-purple-200' : ''}`}
                  style={{ backgroundColor: "#9810fa" }  }

                >
                  {isHighlighted ? 'Selected' : 'Get Your Card'}
                </button>
                

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


