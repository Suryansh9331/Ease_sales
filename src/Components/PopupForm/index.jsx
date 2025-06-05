// import { useState, useEffect } from 'react';
// import { X, Phone, Clock, User, Mail, MapPin } from 'lucide-react';

// export default function FinancePopupForm({ isOpen, onClose }) {
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutes in seconds
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     address: ''
//   });

//   // Timer countdown effect
//   useEffect(() => {
//     if (isOpen && timeLeft > 0) {
//       const timer = setInterval(() => {
//         setTimeLeft(prev => prev - 1);
//       }, 1000);
//       return () => clearInterval(timer);
//     }
//   }, [isOpen, timeLeft]);

//   // Reset form when popup opens
//   useEffect(() => {
//     if (isOpen) {
//       setIsSubmitted(false);
//       setTimeLeft(15 * 60); // Reset timer
//     }
//   }, [isOpen]);

//   // Format time display
//   const formatTime = (seconds) => {
//     const mins = Math.floor(seconds / 60);
//     const secs = seconds % 60;
//     return `${mins}:${secs.toString().padStart(2, '0')}`;
//   };

//   // Handle form input changes
//   const handleInputChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   // Handle form submission
//   const handleSubmit = async () => {
//     // Basic validation
//     if (!formData.name || !formData.email || !formData.phone || !formData.address) {
//       alert('Please fill in all required fields.');
//       return;
//     }

//     setIsLoading(true);

//     try {
//       // Replace 'YOUR_SHEETDB_API_URL' with your actual SheetDB API URL
//       const response = await fetch('https://sheetdb.io/api/v1/6nmze9ysr14ap', {
//         method: 'POST',
//         headers: {
//           'Accept': 'application/json',
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           data: [
//             {
//               Name: formData.name,
//               Email: formData.email,
//               Phone: formData.phone,
//               Address: formData.address,
//               'Submitted At': new Date().toISOString()
//             }
//           ]
//         })
//       });

//       if (response.ok) {
//         setIsSubmitted(true);
//       } else {
//         alert('There was an error submitting your form. Please try again.');
//       }
//     } catch (error) {
//       console.error('Submission error:', error);
//       alert('There was an error submitting your form. Please try again.');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // Handle call button click
//   const handleCallNow = () => {
//     window.location.href = 'tel:+1-555-123-4567'; // Replace with your actual phone number
//   };

//   // Close popup and reset states
//   const closePopup = () => {
//     onClose();
//     setIsSubmitted(false);
//     setFormData({
//       name: '',
//       email: '',
//       phone: '',
//       address: ''
//     });
//   };

//   // Don't render if not open
//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-60 p-4 backdrop-blur-sm   ">
//       <div 
//         className={`bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-screen overflow-y-auto transform transition-all duration-500 ease-out ${
//           isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-4'
//         }`}
//         style={{
//           background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
//           border: '1px solid rgba(152, 16, 250, 0.1)'
//         }}
//       >
//         {/* Header with gradient */}
//         <div 
//           className="relative px-8 py-6 rounded-t-2xl overflow-hidden"
//           style={{
//             background: 'linear-gradient(135deg, #9810fa 0%, #7c3aed 100%)'
//           }}
//         >
//           <div className="absolute inset-0 bg-white bg-opacity-10"></div>
//           <div className="relative flex justify-between items-center">
//             <div>
//               <h2 className="text-2xl font-bold text-white mb-1">
//                 {isSubmitted ? '🎉 Thank You!' : '💰 Get Your Free Quote'}
//               </h2>
//               <p className="text-purple-600 text-sm">
//                 {isSubmitted ? 'Your request has been received' : 'Fast approval in minutes'}
//               </p>
//             </div>
//             <button
//               onClick={closePopup}
//               className="text-black  cursor-pointer transition duration-300 transform hover:scale-110 p-2 rounded-full hover:bg-white hover:bg-opacity-20"
//             >
//               <X size={24} />
//             </button>
//           </div>
//         </div>

//         <div className="px-8 py-6">
//           {!isSubmitted ? (
//             <>
//               {/* Animated Scarcity Timer */}
//               <div className="text-center mb-8 p-6 bg-gradient-to-r from-red-50 to-orange-50 rounded-xl border border-red-200 transform transition-all duration-300 hover:shadow-lg">
//                 <div className="flex items-center justify-center mb-3">
//                   <div className="animate-pulse">
//                     <Clock className="text-red-600 mr-2" size={24} />
//                   </div>
//                   <span className="text-red-600 font-bold text-sm tracking-wide">LIMITED TIME OFFER</span>
//                 </div>
//                 <div className="text-3xl font-bold text-red-600 mb-2 animate-pulse">
//                   {formatTime(timeLeft)}
//                 </div>
//                 <p className="text-red-600 text-sm">
//                   ⚡ This exclusive offer expires soon!
//                 </p>
//               </div>

//               {/* Contact Form with animations */}
//               <div className="space-y-6">
//                 {/* Name Field */}
//                 <div className="group">
//                   <label className="block text-gray-700 font-semibold mb-3 flex items-center">
//                     <User className="mr-2 text-purple-600" size={18} />
//                     Full Name
//                   </label>
//                   <div className="relative">
//                     <input
//                       type="text"
//                       name="name"
//                       required
//                       value={formData.name}
//                       onChange={handleInputChange}
//                       className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500 transition-all duration-300 transform group-hover:border-purple-300 bg-gray-50 focus:bg-white text-lg"
//                       placeholder="Enter your full name"
//                     />
//                     <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-focus-within:opacity-10 transition-opacity duration-300 pointer-events-none"></div>
//                   </div>
//                 </div>

//                 {/* Email Field */}
//                 <div className="group">
//                   <label className="block text-gray-700 font-semibold mb-3 flex items-center">
//                     <Mail className="mr-2 text-purple-600" size={18} />
//                     Email Address
//                   </label>
//                   <div className="relative">
//                     <input
//                       type="email"
//                       name="email"
//                       required
//                       value={formData.email}
//                       onChange={handleInputChange}
//                       className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500 transition-all duration-300 transform group-hover:border-purple-300 bg-gray-50 focus:bg-white text-lg"
//                       placeholder="Enter your email address"
//                     />
//                     <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-focus-within:opacity-10 transition-opacity duration-300 pointer-events-none"></div>
//                   </div>
//                 </div>

//                 {/* Phone Field */}
//                 <div className="group">
//                   <label className="block text-gray-700 font-semibold mb-3 flex items-center">
//                     <Phone className="mr-2 text-purple-600" size={18} />
//                     Phone Number
//                   </label>
//                   <div className="relative">
//                     <input
//                       type="tel"
//                       name="phone"
//                       required
//                       value={formData.phone}
//                       onChange={handleInputChange}
//                       className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500 transition-all duration-300 transform group-hover:border-purple-300 bg-gray-50 focus:bg-white text-lg"
//                       placeholder="(555) 123-4567"
//                     />
//                     <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-focus-within:opacity-10 transition-opacity duration-300 pointer-events-none"></div>
//                   </div>
//                 </div>

//                 {/* Address Field */}
//                 <div className="group">
//                   <label className="block text-gray-700 font-semibold mb-3 flex items-center">
//                     <MapPin className="mr-2 text-purple-600" size={18} />
//                     Address
//                   </label>
//                   <div className="relative">
//                     <input
//                       type="text"
//                       name="address"
//                       required
//                       value={formData.address}
//                       onChange={handleInputChange}
//                       className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500 transition-all duration-300 transform group-hover:border-purple-300 bg-gray-50 focus:bg-white text-lg"
//                       placeholder="Enter your full address"
//                     />
//                     <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-focus-within:opacity-10 transition-opacity duration-300 pointer-events-none"></div>
//                   </div>
//                 </div>

//                 {/* Submit Button */}
//                 <button
//                   onClick={handleSubmit}
//                   disabled={isLoading}
//                   className="w-full py-4 px-6 text-white font-bold text-lg rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl disabled:opacity-50 disabled:transform-none relative overflow-hidden"
//                   style={{ 
//                     background: 'linear-gradient(135deg, #9810fa 0%, #7c3aed 100%)',
//                     boxShadow: '0 10px 30px rgba(152, 16, 250, 0.3)'
//                   }}
//                 >
//                   <div className="absolute inset-0 bg-white opacity-0 hover:opacity-10 transition-opacity duration-300"></div>
//                   <span className="relative flex items-center justify-center">
//                     {isLoading ? (
//                       <>
//                         <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
//                         Submitting...
//                       </>
//                     ) : (
//                       <>
//                         ✨ Get My Free Quote Now
//                       </>
//                     )}
//                   </span>
//                 </button>
//               </div>

//               {/* Trust indicators */}
//               <div className="mt-6 text-center">
//                 <p className="text-gray-500 text-sm flex items-center justify-center">
//                   🔒 Your information is secure and confidential
//                 </p>
//               </div>
//             </>
//           ) : (
//             /* Success Message with animation */
//             <div className="text-center py-8">
//               <div className="mb-8">
//                 <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 transform animate-bounce">
//                   <span className="text-white text-3xl">✓</span>
//                 </div>
//                 <h3 className="text-3xl font-bold text-green-600 mb-3">
//                   Thank You for Your Submission!
//                 </h3>
//                 <p className="text-gray-600 text-lg mb-6 leading-relaxed">
//                   🎉 Our finance specialist will contact you within 24 hours with your personalized quote.
//                 </p>
//               </div>

//               <button
//                 onClick={handleCallNow}
//                 className=" animate-bounce flex items-center justify-center w-full py-4 px-6 text-white font-bold text-lg rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl relative overflow-hidden"
//                 style={{ 
//                   background: 'linear-gradient(135deg, #9810fa 0%, #7c3aed 100%)',
//                   boxShadow: '0 10px 30px rgba(152, 16, 250, 0.3)'
//                 }}
//               >
//                 <div className="absolute inset-0 bg-white opacity-0 hover:opacity-10 transition-opacity duration-300 "></div>
//                 <Phone className="mr-3 animate-ping" size={20} />
//                 <span className="relative">Call Now: (555) 123-4567</span>
//               </button>
              
//               <p className="text-gray-500 text-sm mt-4 ">
//                 📞 Speak with a specialist immediately
//               </p>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }








import { useState, useEffect } from 'react';
import { X, Phone, Clock, User, Mail, MapPin } from 'lucide-react';

export default function FinancePopupForm({ isOpen, onClose }) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutes in seconds
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  });

  // Timer countdown effect
  useEffect(() => {
    if (isOpen && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [isOpen, timeLeft]);

  // Reset form when popup opens
  useEffect(() => {
    if (isOpen) {
      setIsSubmitted(false);
      setTimeLeft(15 * 60); // Reset timer
    }
  }, [isOpen]);

  // Format time display
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submission
  const handleSubmit = async () => {
    // Basic validation
    if (!formData.name || !formData.email || !formData.phone || !formData.address) {
      alert('Please fill in all required fields.');
      return;
    }

    setIsLoading(true);

    try {
      // Replace 'YOUR_SHEETDB_API_URL' with your actual SheetDB API URL
      const response = await fetch('https://sheetdb.io/api/v1/6nmze9ysr14ap', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data: [
            {
              Name: formData.name,
              Email: formData.email,
              Phone: formData.phone,
              Address: formData.address,
              'Submitted At': new Date().toISOString()
            }
          ]
        })
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        alert('There was an error submitting your form. Please try again.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('There was an error submitting your form. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  // Handle call button click
  const handleCallNow = () => {
    window.location.href = 'tel:+1 844-403-0233'; // Replace with your actual phone number
  };

  // Close popup and reset states
  const closePopup = () => {
    onClose();
    setIsSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      address: ''
    });
  };

  // Don't render if not open
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-60 p-2 backdrop-blur-sm">
      <div 
        className={`bg-white  rounded-2xl shadow-2xl max-w-sm w-full max-h-screen overflow-y-auto transform transition-all duration-500 ease-out ${
          isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-4'
        }`}
        style={{
          background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
          border: '1px solid rgba(152, 16, 250, 0.1)',
          maxHeight: '95vh'
        }}
      >
        {/* Header with gradient */}
        <div 
          className="relative px-4 py-3 rounded-t-2xl overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #9810fa 0%, #7c3aed 100%)'
          }}
        >
          <div className="absolute inset-0 bg-white bg-opacity-10"></div>
          <div className="relative flex justify-between items-center">
            <div>
              <h2 className="text-lg font-bold text-white mb-1">
                {isSubmitted ? '🎉 Thank You!' : '💰 Submit'}
              </h2>
              <p className="text-purple-500 text-xl font-bold ">
                {isSubmitted ? 'Your request has been received' : 'Fast approval in minutes.'}
              </p>
            </div>
            <button
              onClick={closePopup}
              className="text-white cursor-pointer transition duration-300 transform hover:scale-110 p-1 rounded-full hover:bg-white hover:bg-opacity-20"
            >
              <X className='text-black' size={20} />
            </button>
          </div>
        </div>

        <div className="px-4 py-3">
          {!isSubmitted ? (
            <>
              {/* Animated Scarcity Timer */}
              <div className="text-center mb-4 p-3 bg-gradient-to-r from-red-50 to-orange-50 rounded-lg border border-red-200 transform transition-all duration-300 hover:shadow-lg">
                <div className="flex items-center justify-center mb-2">
                  <div className="animate-pulse">
                    <Clock className="text-red-600 mr-1" size={16} />
                  </div>
                  <span className="text-red-600 font-bold text-xs tracking-wide">LIMITED TIME OFFER</span>
                </div>
                <div className="text-xl font-bold text-red-600 mb-1 animate-pulse">
                  {formatTime(timeLeft)}
                </div>
                <p className="text-red-600 text-xs">
                  ⚡ This exclusive offer expires soon!
                </p>
              </div>

              {/* Contact Form with animations */}
              <div className="space-y-3">
                {/* Name Field */}
                <div className="group">
                  <label className="block text-gray-700 font-semibold mb-1 flex items-center text-sm">
                    <User className="mr-1 text-purple-600" size={14} />
                    Full Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-purple-500 transition-all duration-300 transform group-hover:border-purple-300 bg-gray-50 focus:bg-white text-sm"
                      placeholder="Enter your full name"
                    />
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-focus-within:opacity-10 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                </div>

                {/* Email Field */}
                <div className="group">
                  <label className="block text-gray-700 font-semibold mb-1 flex items-center text-sm">
                    <Mail className="mr-1 text-purple-600" size={14} />
                    Email Address
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-purple-500 transition-all duration-300 transform group-hover:border-purple-300 bg-gray-50 focus:bg-white text-sm"
                      placeholder="Enter your email address"
                    />
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-focus-within:opacity-10 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                </div>

                {/* Phone Field */}
                <div className="group">
                  <label className="block text-gray-700 font-semibold mb-1 flex items-center text-sm">
                    <Phone className="mr-1 text-purple-600" size={14} />
                    Phone Number
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-purple-500 transition-all duration-300 transform group-hover:border-purple-300 bg-gray-50 focus:bg-white text-sm"
                      placeholder="(555) 123-4567"
                    />
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-focus-within:opacity-10 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                </div>

                {/* Address Field */}
                <div className="group">
                  <label className="block text-gray-700 font-semibold mb-1 flex items-center text-sm">
                    <MapPin className="mr-1 text-purple-600" size={14} />
                    Address
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="address"
                      required
                      value={formData.address}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-purple-500 transition-all duration-300 transform group-hover:border-purple-300 bg-gray-50 focus:bg-white text-sm"
                      placeholder="Enter your full address"
                    />
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-focus-within:opacity-10 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  disabled={isLoading}
                  className="w-full py-3 px-4 text-white font-bold text-sm rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl disabled:opacity-50 disabled:transform-none relative overflow-hidden mt-4"
                  style={{ 
                    background: 'linear-gradient(135deg, #9810fa 0%, #7c3aed 100%)',
                    boxShadow: '0 6px 20px rgba(152, 16, 250, 0.3)'
                  }}
                >
                  <div className="absolute inset-0 bg-white opacity-0 hover:opacity-10 transition-opacity duration-300"></div>
                  <span className="relative flex items-center justify-center">
                    {isLoading ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Submitting...
                      </>
                    ) : (
                      <>
                        ✨ Submit
                      </>
                    )}
                  </span>
                </button>
              </div>

              {/* Trust indicators */}
              <div className="mt-3 text-center">
                <p className="text-gray-500 text-xs flex items-center justify-center">
                  🔒 Your information is secure and confidential
                </p>
              </div>
            </>
          ) : (
            /* Success Message with animation */
            <div className="text-center py-4">
              <div className="mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 transform animate-bounce">
                  <span className="text-white text-2xl">✓</span>
                </div>
                <h3 className="text-xl font-bold text-green-600 mb-2">
                  Thank You for Your Submission!
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  🎉 Our finance specialist will contact you within 24 hours with your personalized quote.
                </p>
              </div>

              <button
                onClick={handleCallNow}
                className="animate-bounce flex items-center justify-center w-full py-3 px-4 text-white font-bold text-sm rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl relative overflow-hidden"
                style={{ 
                  background: 'linear-gradient(135deg, #9810fa 0%, #7c3aed 100%)',
                  boxShadow: '0 6px 20px rgba(152, 16, 250, 0.3)'
                }}
              >
                <div className="absolute inset-0 bg-white opacity-0 hover:opacity-10 transition-opacity duration-300"></div>
                <Phone className="mr-2 animate-ping" size={16} />
                <span className="relative">Call Now</span>
              </button>
              
              <p className="text-gray-500 text-xs mt-3">
                📞 Speak with a specialist immediately
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}