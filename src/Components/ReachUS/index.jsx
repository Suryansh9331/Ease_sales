import { useState, useEffect } from 'react';
import { Facebook, Instagram, Mail, Phone } from 'lucide-react';

export default function ContactSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add animation after component mounts
    setIsVisible(true);
  }, []);

  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 py-16 px-4 sm:px-6 lg:px-8 rounded-xl shadow-xl">
      <div 
        className={`max-w-3xl mx-auto text-center transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
            If You Have Any Doubts?
          </span>
          <br />
          <span className="text-white">Feel Free to Reach Us</span>
        </h2>
        
        <div className="mt-8">
          <button 
            className="px-8 py-3 text-lg font-medium rounded-lg text-white bg-purple-600 hover:bg-purple-700 
            transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 
            focus:ring-purple-500 focus:ring-opacity-50 shadow-lg hover:shadow-xl"
            style={{ backgroundColor: '#9810fa' }}
          >
            Reach Us
          </button>
        </div>

        <div className="mt-12">
          <p className="text-gray-300 mb-6">Connect with us on social media</p>
          
          <div className="flex justify-center space-x-6">
            {[
              { 
                icon: <Facebook size={24} />, 
                name: 'Facebook',
                delay: 100,
                color: 'bg-blue-600'
              },
              { 
                icon: <Instagram size={24} />, 
                name: 'Instagram',
                delay: 200,
                color: 'bg-pink-600'
              },
              { 
                icon: <Phone size={24} />, 
                name: 'WhatsApp',
                delay: 300,
                color: 'bg-green-600'
              },
              { 
                icon: <Mail size={24} />, 
                name: 'Email',
                delay: 400,
                color: 'bg-red-600'
              }
            ].map((social) => (
              <div 
                key={social.name}
                className={`transition-all duration-700 delay-${social.delay} transform ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                <div 
                  className={`flex items-center justify-center w-12 h-12 rounded-full ${social.color} text-white
                  cursor-pointer hover:scale-110 transition-transform duration-300
                  shadow-lg`}
                >
                  {social.icon}
                </div>
                <p className="mt-1 text-xs text-gray-400">{social.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}