// // import { useState, useEffect } from "react";
// // import { Facebook, Instagram, Mail, Phone } from "lucide-react";
// // import logo from "../../assets/logo.png";
// // export default function ContactSection({ onTriggerPopup }) {
// //   const [isVisible, setIsVisible] = useState(false);

// //   useEffect(() => {
// //     // Add animation after component mounts
// //     setIsVisible(true);
// //   }, []);

// //   const handleCallNow = () => {
// //     // Replace with your actual phone number
// //     window.open("tel:+1234567890", "_self");
// //   };

// //   return (
// //     <div className="bg-gradient-to-br from-gray-900 to-gray-800 py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 rounded-xl shadow-xl">
// //       {/* Original Reach Us Section */}
// //       <div
// //         className={`max-w-3xl mx-auto text-center transition-all duration-1000 transform ${
// //           isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
// //         }`}
// //       >
// //         <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
// //           <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600 block sm:inline">
// //             If You Have Any Doubts?
// //           </span>
// //           <br className="hidden sm:block" />
// //           <span className="text-white block sm:inline mt-2 sm:mt-0">
// //             Feel Free to Reach Us
// //           </span>
// //         </h2>

// //         <div className="mt-6 sm:mt-8">
// //           <button
// //             onClick={onTriggerPopup}
// //             className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium rounded-lg text-white bg-purple-600 hover:bg-purple-700 cursor-pointer
// //             transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 
// //             focus:ring-purple-500 focus:ring-opacity-50 shadow-lg hover:shadow-xl"
// //             style={{ backgroundColor: "#9810fa" }}
// //           >
// //             Reach Us
// //           </button>
// //         </div>

// //         <div className="mt-8 sm:mt-12">
// //           <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
// //             Connect with us on social media
// //           </p>

// //           <div className="flex justify-center items-center space-x-4 sm:space-x-6 overflow-x-auto pb-2">
// //             {[
// //               {
// //                 icon: <Facebook size={20} className="sm:w-6 sm:h-6" />,
// //                 name: "Facebook",
// //                 delay: 100,
// //                 color: "bg-blue-600",
// //               },
// //               {
// //                 icon: <Instagram size={20} className="sm:w-6 sm:h-6" />,
// //                 name: "Instagram",
// //                 delay: 200,
// //                 color: "bg-pink-600",
// //               },
// //               {
// //                 icon: <Phone size={20} className="sm:w-6 sm:h-6" />,
// //                 name: "WhatsApp",
// //                 delay: 300,
// //                 color: "bg-green-600",
// //               },
// //               {
// //                 icon: <Mail size={20} className="sm:w-6 sm:h-6" />,
// //                 name: "Email",
// //                 delay: 400,
// //                 color: "bg-red-600",
// //               },
// //             ].map((social) => (
// //               <div
// //                 key={social.name}
// //                 className={`flex-shrink-0 transition-all duration-700 delay-${
// //                   social.delay
// //                 } transform ${
// //                   isVisible
// //                     ? "opacity-100 translate-y-0"
// //                     : "opacity-0 translate-y-4"
// //                 }`}
// //               >
// //                 <div
// //                   className={`flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full ${social.color} text-white
// //                   cursor-pointer hover:scale-110 transition-transform duration-300
// //                   shadow-lg`}
// //                 >
// //                   {social.icon}
// //                 </div>
// //                 <p className="mt-1 text-xs sm:text-sm text-gray-400 text-center">
// //                   {social.name}
// //                 </p>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </div>

// //       {/* Separator Line */}
// //       <div className="max-w-full mx-auto mt-12 sm:mt-16 px-4 sm:px-0">
// //         <div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
// //       </div>

// //       {/* Footer Section */}
// //       <div className="max-w-7xl mx-auto mt-8 sm:mt-12">
// //         {/* Mobile Layout */}
// //         <div className="block md:hidden space-y-6">
// //           {/* Logo */}
// //           <div className="text-center">
// //             <div className="text-xl font-bold text-white">
// //               <img src={logo} alt="" />
// //             </div>
// //           </div>

// //           {/* Call Button */}
// //           <div className="text-center">
// //             <button
// //               onClick={handleCallNow}
// //               className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg
// //               transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 
// //               focus:ring-green-500 focus:ring-opacity-50 shadow-lg hover:shadow-xl"
// //             >
// //               <Phone size={20} />
// //               <span className="font-medium">Call Now</span>
// //             </button>
// //           </div>

// //           {/* Footer Links */}
// //           <div className="text-center">
// //             <div className="flex flex-wrap justify-center gap-4 mb-4">
// //               <a
// //                 href="https://www.easewithdraw.com/#"
// //                 className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm"
// //               >
// //                 About
// //               </a>
// //               <a
// //                 href="https://www.easewithdraw.com/#"
// //                 className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm"
// //               >
// //                 Terms & Conditions
// //               </a>
// //               <a
// //                 href="https://www.easewithdraw.com/#"
// //                 className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm"
// //               >
// //                 Privacy Policy
// //               </a>
// //             </div>

// //             {/* Social Media Links */}
// //           </div>
// //         </div>

// //         {/* Tablet and Desktop Layout */}
// //         <div className="hidden md:flex justify-between items-start mb-8">
// //           {/* Logo - Left */}
// //           <div className="flex-shrink-0">
// //             <div className="text-xl md:text-2xl lg:text-2xl xl:text-3xl font-bold text-white">
// //               <img className="lg:w-full  md:w-50 h-auto" src={logo} alt="" />
// //             </div>
// //           </div>

// //           {/* Footer Links and Social Media - Center */}
// //           <div className="flex flex-col items-center space-y-3 md:space-y-4">
// //             <div className="flex gap-4 md:gap-6 lg:gap-8 xl:gap-12">
// //               <a
// //                 href="https://www.easewithdraw.com/#"
// //                 className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm md:text-base xl:text-lg"
// //               >
// //                 About
// //               </a>
// //               <a
// //                 href="https://www.easewithdraw.com/#"
// //                 className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm md:text-base xl:text-lg"
// //               >
// //                 Terms & Conditions
// //               </a>
// //               <a
// //                 href="https://www.easewithdraw.com/#"
// //                 className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm md:text-base xl:text-lg"
// //               >
// //                 Privacy Policy
// //               </a>
// //             </div>
// //           </div>

// //           {/* Call Now Button - Right */}
// //           <div className="flex-shrink-0">
// //             <button
// //               onClick={handleCallNow}
// //               className="flex items-center space-x-2 px-4 py-2 md:px-6 md:py-3 xl:px-8 xl:py-4 bg-green-600 hover:bg-green-700 text-white rounded-lg
// //               transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 
// //               focus:ring-green-500 focus:ring-opacity-50 shadow-lg hover:shadow-xl text-sm md:text-base xl:text-lg"
// //             >
// //               <Phone size={18} className="md:w-5 md:h-5 xl:w-6 xl:h-6" />
// //               <span className="font-medium">Call Now</span>
// //             </button>
// //           </div>
// //         </div>

// //         {/* Bottom Row: Copyright and Contact Email */}
// //         <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:justify-between sm:items-center pt-6 border-t border-gray-700">
// //           <div className="text-gray-400 text-xs sm:text-sm text-center sm:text-left order-2 sm:order-1">
// //             © 2024 Your Company Name. All rights reserved.
// //           </div>
// //           <div className="text-gray-400 text-xs sm:text-sm text-center sm:text-right order-1 sm:order-2">
// //             Contact:{" "}
// //             <a
// //               href="mailto:contact@yourcompany.com"
// //               className="text-purple-400 hover:text-purple-300 transition-colors duration-300 break-all"
// //             >
// //               info@easewithdraw.com
// //             </a>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }












import logo from '../../assets/images/easelogo.png'
import { useState, useEffect } from 'react';
import { Facebook, Instagram, Mail, Phone } from 'lucide-react';

export default function ContactSection({ onTriggerPopup }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add animation after component mounts
    setIsVisible(true);
  }, []);

  const handleCallNow = () => {
    // Replace with your actual phone number
    window.open('tel:+1 844-403-0233', '_self');
  };

  // Social media link handlers
  const handleSocialClick = (platform) => {
    const socialLinks = {
      facebook: 'https://www.facebook.com/profile.php?id=61575195173339', // Replace with your Facebook page URL
      instagram: 'https://www.instagram.com/easewithdraw/', // Replace with your Instagram handle URL
      whatsapp: 'https://wa.me/', // Replace with your WhatsApp number (format: country code + number)
      email: 'mailto:support@easewithdraw.com' // Replace with your email address
    };

    if (socialLinks[platform]) {
      window.open(socialLinks[platform], '_blank');
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 rounded-xl shadow-xl">
      {/* Original Reach Us Section */}
      <div 
        className={`max-w-3xl mx-auto text-center transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600 block sm:inline">
            If You Have Any Doubts?
          </span>
          <br className="hidden sm:block" />
          <span className="text-white block sm:inline mt-2 sm:mt-0">Feel Free to Reach Us</span>
        </h2>
        
        <div className="mt-6 sm:mt-8">
          <button onClick={onTriggerPopup}
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium rounded-lg text-white bg-purple-600 hover:bg-purple-700 cursor-pointer
            transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 
            focus:ring-purple-500 focus:ring-opacity-50 shadow-lg hover:shadow-xl"
            style={{ backgroundColor: '#9810fa' }}
          >
            Reach Us
          </button>
        </div>

        <div className="mt-8 sm:mt-12">
          <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">Connect with us on social media</p>
          
          <div className="flex justify-center items-center space-x-4 sm:space-x-6 overflow-x-auto pb-2">
            {[
              { 
                icon: <Facebook size={20} className="sm:w-6 sm:h-6" />, 
                name: 'Facebook',
                delay: 100,
                color: 'bg-blue-600',
                platform: 'facebook'
              },
              { 
                icon: <Instagram size={20} className="sm:w-6 sm:h-6" />, 
                name: 'Instagram',
                delay: 200,
                color: 'bg-pink-600',
                platform: 'instagram'
              },
              { 
                icon: <Phone size={20} className="sm:w-6 sm:h-6" />, 
                name: 'WhatsApp',
                delay: 300,
                color: 'bg-green-600',
                platform: 'whatsapp'
              },
              { 
                icon: <Mail size={20} className="sm:w-6 sm:h-6" />, 
                name: 'Email',
                delay: 400,
                color: 'bg-red-600',
                platform: 'email'
              }
            ].map((social) => (
              <div 
                key={social.name}
                className={`flex-shrink-0 transition-all duration-700 delay-${social.delay} transform ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                <div 
                  className={`flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full ${social.color} text-white
                  cursor-pointer hover:scale-110 transition-transform duration-300
                  shadow-lg`}
                  onClick={() => handleSocialClick(social.platform)}
                >
                  {social.icon}
                </div>
                <p className="mt-1 text-xs sm:text-sm text-gray-400 text-center">{social.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Separator Line */}
      <div className="max-w-full mx-auto mt-12 sm:mt-16 px-4 sm:px-0">
        <div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
      </div>

      {/* Footer Section */}
      <div className="max-w-7xl mx-auto mt-8 sm:mt-12">
        {/* Mobile Layout */}
        <div className="block md:hidden space-y-6">
          {/* Logo */}
          <div className="text-center">
            <div className="text-xl font-bold text-white">
             <img src={logo} alt="" />
            </div>
          </div>

          {/* Call Button */}
          <div className="text-center">
            <button 
              onClick={handleCallNow}
              className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg
              transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 
              focus:ring-green-500 focus:ring-opacity-50 shadow-lg hover:shadow-xl"
            >
              <Phone size={20} />
              <span className="font-medium">Call Now</span>
            </button>
          </div>

          {/* Footer Links */}
          <div className="text-center">
            <div className="flex flex-wrap justify-center gap-4 mb-4">
              <a href="https://www.easewithdraw.com/#" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm">
                About
              </a>
              <a href="https://www.easewithdraw.com/#" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm">
                Terms & Conditions
              </a>
              <a href="https://www.easewithdraw.com/#" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm">
                Privacy Policy
              </a>
            </div>
            
            {/* Social Media Links */}
           
          </div>
        </div>

        {/* Tablet and Desktop Layout */}
        <div className="hidden md:flex justify-between items-start mb-8">
          {/* Logo - Left */}
          <div className="flex-shrink-0">
            <div className="text-xl md:text-2xl lg:text-2xl xl:text-3xl font-bold text-white">
              <img className="lg:w-full  md:w-50 h-auto" src={logo} alt="" />
            </div>
          </div>

          {/* Footer Links and Social Media - Center */}
          <div className="flex flex-col items-center space-y-3 md:space-y-4">
            <div className="flex gap-4 md:gap-6 lg:gap-8 xl:gap-12">
              <a href="https://www.easewithdraw.com/#" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm md:text-base xl:text-lg">
                About
              </a>
              <a href="https://www.easewithdraw.com/#" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm md:text-base xl:text-lg">
                Terms & Conditions
              </a>
              <a href="https://www.easewithdraw.com/#" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm md:text-base xl:text-lg">
                Privacy Policy
              </a>
            </div>
            
          
          </div>

          {/* Call Now Button - Right */}
          <div className="flex-shrink-0">
            <button 
              onClick={handleCallNow}
              className="flex items-center space-x-2 px-4 py-2 md:px-6 md:py-3 xl:px-8 xl:py-4 bg-green-600 hover:bg-green-700 text-white rounded-lg
              transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 
              focus:ring-green-500 focus:ring-opacity-50 shadow-lg hover:shadow-xl text-sm md:text-base xl:text-lg"
            >
              <Phone size={18} className="md:w-5 md:h-5 xl:w-6 xl:h-6" />
              <span className="font-medium">Call Now</span>
            </button>
          </div>
        </div>

        {/* Bottom Row: Copyright and Contact Email */}
        <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:justify-between sm:items-center pt-6 border-t border-gray-700">
          <div className="text-gray-400 text-xs sm:text-sm text-center sm:text-left order-2 sm:order-1">
            © 2025 Easewithdraw All rights reserved.
          </div>
          <div className="text-gray-400 text-xs sm:text-sm text-center sm:text-right order-1 sm:order-2">
            Contact: <a href="mailto:contact@yourcompany.com" className="text-purple-400 hover:text-purple-300 transition-colors duration-300 break-all">info@easewithdraw.com</a>
          </div>
        </div>
      </div>
    </div>
  );
}