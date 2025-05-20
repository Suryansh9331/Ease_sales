import React from "react";

export default function HowItWorks() {
  return (
    <div className="w-full bg-white py-10  lg:pb-38 px-4 overflow-hidden">
      {/* How It Works Label */}
      <div className="flex justify-center mb-6">
        <div className="bg-purple-100 text-purple-700 px-4 py-1 rounded-full text-lg font-medium flex items-center">
          How It Work <span className="ml-2 bg-orange-400 h-2 w-2 rounded-full"></span>
        </div>
      </div>

      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 max-w-3xl mx-auto">
          Your Path to a Credit Card<br />
        </h2>
      </div>

      {/* Steps Container with Path */}
      <div className="relative max-w-6xl mx-auto px-4">
        {/* Curved Path - Hidden on mobile */}
        <div className="hidden md:block absolute top-24 left-0 right-0 h-24">
          <svg className="w-full h-full" viewBox="0 0 1000 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,50 Q250,-30 500,50 Q750,130 1000,50" stroke="#E0E0FF" strokeWidth="6" fill="none" />
            
            {/* First Dot */}
            <circle cx="0" cy="50" r="8" fill="#6B46C1" />
            
            {/* Middle Dot */}
            <circle cx="500" cy="50" r="8" fill="#6B46C1" />
            
            {/* End Dot */}
            <circle cx="1000" cy="50" r="8" fill="#6B46C1" />
          </svg>
        </div>

        {/* Steps Row */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12 md:gap-6">
          {/* Step 1 */}
          <div className="flex flex-col items-center text-center w-full max-w-xs">
            <div className="text-md font-medium text-purple-600 uppercase mb-2">STEP - 01</div>
            <h3 className="text-2xl md:text-2xl font-bold text-gray-800 mb-3">Create Account</h3>
            <p className="text-gray-500 text-sm">
           Create your account in minutes
            </p>
            {/* Mobile-only dot */}
            <div className="md:hidden mt-4 bg-purple-600 h-3 w-3 rounded-full"></div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center w-full max-w-xs">
            <div className="text-md font-medium text-purple-600 uppercase mb-2">STEP - 02</div>
            <h3 className="text-2xl md:text-2xl font-bold text-gray-800 mb-3">Link Wallet</h3>
            <p className="text-gray-500 text-sm">
Link your crypto wallet or deposit assets            </p>
            {/* Mobile-only dot */}
            <div className="md:hidden mt-4 bg-purple-600 h-3 w-3 rounded-full"></div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center w-full max-w-xs">
            <div className="text-md font-medium text-purple-600 uppercase mb-2">STEP - 03</div>
            <h3 className="text-2xl md:text-2xl font-bold text-gray-800 mb-3">Enjoy Your Card</h3>
            <p className="text-gray-500 text-sm">
            Start spending, borrowing, and investing instantly
            </p>
            {/* Mobile-only dot */}
            <div className="md:hidden mt-4 bg-purple-600 h-3 w-3 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}