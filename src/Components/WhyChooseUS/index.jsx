
import { useState, useEffect } from "react";
import { Star, Shield, CreditCard, Clock, User, Zap, CheckCircle, TrendingUp } from "lucide-react";

export default function WhyChooseUs() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  
  useEffect(() => {
    setIsVisible(true);
    
    // Create animation cycle for cards
    const interval = setInterval(() => {
      setActiveIndex(prev => {
        if (prev === null || prev >= features.length - 1) return 0;
        return prev + 1;
      });
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  // Main purple: #9810fa
  // Added complementary colors:
  // Teal/turquoise: #10faed
  // Gold/amber: #fad310

  const features = [
    {
      icon: <CreditCard className="text-white" />,
      title: "Alternative Credit Access",
      description: "Use digital assets as collateral without giving them up.",
      gradient: "from-purple-600 to-purple-900",
      accent: "#10faed"
    },
    {
      icon: <Star className="text-white" />,
      title: "Faster Approval",
      description: "Credit lines in minutes, not days.",
      gradient: "from-purple-500 to-purple-800",
      accent: "#fad310"
    },
    {
      icon: <Shield className="text-white" />,
      title: "Smarter Spending",
      description: "Spend crypto just like cash, while preserving your portfolio.",
      gradient: "from-purple-700 to-indigo-900",
      accent: "#10faed"
    },
    {
      icon: <Clock className="text-white" />,
      title: "Unified Financial Control",
      description: "Invest, borrow, and spend — all from one intuitive platform.",
      gradient: "from-purple-600 to-purple-900",
      accent: "#fad310"
    },
    {
      icon: <User className="text-white" />,
      title: "Secure Wallet Connectivity:",
      description: "Compatible with major wallets like MetaMask, Coinbase Wallet, and others.",
      gradient: "from-purple-500 to-purple-800",
      accent: "#10faed"
    },
    {
      icon: <Zap className="text-white" />,
      title: "Integrated Compliance:",
      description: "Our platform meets U.S. regulations for financial institutions, ensuring user protection and legal clarity.",
      gradient: "from-purple-700 to-indigo-900",
      accent: "#fad310"
    }
  ];

  const stats = [
    { icon: <TrendingUp />, value: "98%", label: "Customer Satisfaction", accent: "#10faed" },
    { icon: <CheckCircle />, value: "10K+", label: "Happy Customers", accent: "#9810fa" },
    { icon: <Star />, value: "4.9", label: "Average Rating", accent: "#fad310" }
  ];

  return (
    <div className="bg-gradient-to-b from-white to-purple-50 py-16 px-4 w-full max-w-6xl h-auto mx-auto overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-cyan-100 opacity-30 blur-3xl -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-amber-100 opacity-30 blur-3xl -ml-32 -mb-32"></div>
      <div className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full bg-purple-100 opacity-20 blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      
      <div className={`relative z-10 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="text-center mb-16">
          {/* Animated heading section */}
          <div className="inline-block relative">
            <span className="absolute -inset-1 rounded-lg  opacity-75 blur group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></span>
            <h2 className="relative text-5xl font-bold mb-4   text-black">
              Why Choose Us
            </h2>
          </div>
          
          <div className="flex justify-center space-x-1 mb-6">
            <div className="w-6 h-1 bg-purple-600 rounded-full"></div>
            <div className="w-6 h-1" style={{ backgroundColor: "#10faed" }}></div>
            <div className="w-6 h-1" style={{ backgroundColor: "#fad310" }}></div>
            <div className="w-6 h-1 bg-purple-600 rounded-full"></div>
          </div>
          
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We deliver exceptional financial solutions with unparalleled service and benefits 
            that stand out from the competition. Your financial security is our top priority.
          </p>
        </div>

        {/* Features grid with enhanced animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`transition-all duration-700 transform 
                ${isVisible ? `translate-y-0 opacity-100 delay-${(index % 3) * 150}` : 'translate-y-10 opacity-0'}
                rounded-xl overflow-hidden hover:shadow-2xl 
                hover:-translate-y-2 transition-all duration-300 bg-white
                ${activeIndex === index ? 'ring-2 scale-105' : ''}`}
              style={{ boxShadow: activeIndex === index ? `0 0 0 2px ${feature.accent}` : "" }}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(prev => prev === index ? null : prev)}
            >
              <div className="p-8 flex flex-col items-center text-center h-full relative">
                {/* Accent corner */}
                <div 
                  className="absolute top-0 right-0 w-16 h-16"
                  style={{ backgroundColor: feature.accent, clipPath: "polygon(100% 0, 0 0, 100% 100%)", opacity: 0.15 }}
                ></div>
                
                <div className={`w-20 h-20 flex items-center justify-center rounded-full mb-6 bg-gradient-to-br ${feature.gradient} shadow-lg
                  ${activeIndex === index ? 'animate-pulse scale-110' : ''} transition-all duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3" style={{ color: "#000000" }}>
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                
                {/* Animated detail line */}
                <div className="mt-4 w-16 h-1 rounded-full overflow-hidden relative">
                  <div className="absolute inset-0 bg-gray-200"></div>
                  <div 
                    className={`h-full transition-all duration-300`}
                    style={{ 
                      backgroundColor: feature.accent,
                      width: activeIndex === index ? '100%' : '30%',
                      animation: activeIndex === index ? 'pulse 2s infinite' : 'none'
                    }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Trust indicators and statistics */}
        <div className={`mb-16 transition-all duration-1000 delay-500 transform 
          ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-white rounded-2xl shadow-xl p-8 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-20 h-20 rounded-br-full" style={{ backgroundColor: "#10faed", opacity: 0.1 }}></div>
            <div className="absolute bottom-0 right-0 w-20 h-20 rounded-tl-full" style={{ backgroundColor: "#fad310", opacity: 0.1 }}></div>
            
            <h3 className="text-3xl font-bold text-center mb-8" style={{ color: "#000000" }}>
              Trusted by Thousands
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div 
                    className="w-16 h-16 flex items-center justify-center rounded-full mb-4 relative"
                    style={{ backgroundColor: stat.accent === "#9810fa" ? stat.accent : "#9810fa" }}
                  >
                    {/* Accent ring */}
                    {stat.accent !== "#9810fa" && (
                      <div className="absolute -inset-1 rounded-full" style={{ 
                        backgroundColor: stat.accent,
                        opacity: 0.3,
                        animation: "pulse 2s infinite"
                      }}></div>
                    )}
                    <div className="text-white">{stat.icon}</div>
                  </div>
                  <span className="text-4xl font-bold mb-2" style={{ color: "#9810fa" }}>{stat.value}</span>
                  <span className="text-gray-600">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Call to action with enhanced animation */}
        <div className={`mt-12 text-center transition-all duration-1000 delay-700 transform 
          ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="relative inline-block group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 via-purple-600 to-amber-400 rounded-full opacity-75 blur  animate-pulse"></div>
            <button 
              className="relative px-10 py-4 rounded-full text-white font-medium text-lg shadow-xl bg-gradient-to-r from-purple-600 to-purple-900 hover:from-purple-700 hover:to-purple-900  duration-300 hover:border-2   "
            >
              Apply Now & Get Approved Today
            </button>
          </div>
          <p className="mt-4 text-sm text-gray-500">No credit check required. Fast & secure process.</p>
        </div>
      </div>
    </div>
  );
}