import React, { useState, useEffect } from 'react';
import { X, CreditCard, CheckCircle } from 'lucide-react';

export default function Popup({ onTriggerPopup }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    // Show popup initially after 3 seconds
    const initialTimer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(initialTimer);
  }, []);

  useEffect(() => {
    // Reappear popup every 30 seconds after closing
    let reappearTimer;
    
    if (!isVisible && !isClosing) {
      reappearTimer = setTimeout(() => {
        setIsVisible(true);
      }, 10000); // 30 seconds
    }

    return () => clearTimeout(reappearTimer);
  }, [isVisible, isClosing]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsVisible(false);
      setIsClosing(false);
    }, 300);
  };

  

  if (!isVisible) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-1  z-20 transition-opacity duration-300 ${
          isClosing ? 'opacity-0' : 'opacity-100'
        }`}
        onClick={handleClose}
      />
      
      {/* Popup */}
      <div 
        className={` fixed right-4 top-1/2 transform -translate-y-1/2 w-64 sm:w-72 z-50 transition-all duration-300 ease-out rounded-xl border-2 border-black ${
          isClosing ? 'translate-x-full opacity-0' : 'translate-x-0 opacity-100'
        }`}
      >
        <div className="bg-white rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 shadow-xl border border-gray-200">
          
          {/* Header */}
          <div className="bg-gray-50 p-4 border-b border-gray-100 relative">
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition-colors duration-200"
            >
              <X className='text-black cursor-pointer' size={18} />
            </button>
            
            <div className="flex items-center mt-2 rounded-xl">
              <div className="bg-blue-100 rounded-xl mt-2 p-2 mr-3">
                <CreditCard size={20} className="text-blue-600" />
              </div>
              <div className=''>
                <h2 className="text-lg font-bold text-gray-800">Premium Credit Card</h2>
                <p className="text-sm text-gray-500">Limited Time Offer</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-4">
            
            {/* Main offer */}
            <div className="text-center mb-4">
              <h3 className="text-lg font-bold text-gray-900 mb-1">
                0% APR for 15 Months
              </h3>
              <p className="text-sm text-green-600 font-medium">
                + $200 Welcome Bonus
              </p>
            </div>

            {/* Benefits */}
            <div className="space-y-2 mb-4">
              <div className="flex items-center text-sm text-gray-700">
                <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                <span>No annual fee ever</span>
              </div>
              <div className="flex items-center text-sm text-gray-700">
                <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                <span>2% cashback on all purchases</span>
              </div>
              <div className="flex items-center text-sm text-gray-700">
                <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                <span>Instant approval decision</span>
              </div>
            </div>

            {/* Urgency */}
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-3 mb-4">
              <p className="text-sm text-orange-700 text-center font-medium">
                Limited time - Apply today!
              </p>
            </div>

            {/* CTA Button */}
            <button
               onClick={onTriggerPopup}
              className="w-2/3 bg-purple-600 ml-12 hover:text-purple-600  text-white font-semibold py-3 px-4 rounded-full transition-colors duration-200 animate-bounce cursor-pointer hover:bg-transparent hover:border-purple-600  hover:border-2"
            >
              Apply Now 
            </button>

            {/* Trust line */}
            <p className="text-xs text-center text-gray-500 mt-3">
              Secure application • FDIC insured
            </p>
          </div>
        </div>
      </div>
    </>
  );
}