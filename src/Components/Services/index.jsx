
import React, { useState, useEffect } from 'react';
import { TrendingUp, CreditCard, Wallet, DollarSign, Shield, Zap, PieChart, Coins, Target, Lock, Clock, BarChart3, ArrowRight, CheckCircle } from 'lucide-react';

const ServicesSection = ({ onTriggerPopup }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const SWITCH_INTERVAL = 10000; // 10 seconds

  useEffect(() => {
    setIsVisible(true);
    // Start the auto-switching immediately
    setIsPaused(false);
  }, []);

  // Auto-switch tabs with progress bar
  useEffect(() => {
    if (isPaused) return;

    const progressInterval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + (100 / (SWITCH_INTERVAL / 100));
        if (newProgress >= 100) {
          // Switch tab and reset progress
          setTimeout(() => {
            setActiveTab(current => current === 0 ? 1 : 0);
            setProgress(0);
          }, 0);
          return 100;
        }
        return newProgress;
      });
    }, 100);

    return () => clearInterval(progressInterval);
  }, [activeTab, isPaused, SWITCH_INTERVAL]);

  // Debug logging (remove in production)
  useEffect(() => {
    console.log('Tab switching - Active:', activeTab, 'Progress:', progress.toFixed(1), 'Paused:', isPaused);
  }, [activeTab, progress, isPaused]);

  const handleTabClick = (index) => {
    console.log('Tab clicked:', index);
    setActiveTab(index);
    setProgress(0);
    setIsPaused(true);
    // Resume auto-switching after manual interaction
    setTimeout(() => {
      console.log('Resuming auto-switch');
      setIsPaused(false);
    }, 5000); // Increased to 5 seconds
  };

  const services = [
    {
      id: 1,
      title: "Investment Tools",
      subtitle: "Grow Your Wealth with Ease",
      description: "Smarter ways to make your money work harder—without lifting a finger. Whether you're just getting started or scaling up your portfolio, EaseWithdraw gives you intuitive investment tools tailored for crypto users.",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "from-purple-600 to-blue-500",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600",
      miniServices: [
        {
          title: "Crypto Savings Accounts",
          subtitle: "Earn While You Hold",
          description: "Deposit your BTC, ETH, or stablecoins and earn up to 10% APY—with flexible or fixed-term options. No hidden fees. No lock-in required (unless you want higher returns).",
          icon: <Wallet className="w-5 h-5" />,
          features: ["Up to 10% APY", "No Hidden Fees", "Flexible Terms", "Secure Storage"]
        },
        {
          title: "Auto-Invest Plans",
          subtitle: "Automate Your Investments",
          description: "Set daily, weekly, or monthly buys for BTC, ETH, or bundles. Perfect for long-term investors using Dollar-Cost Averaging. Invest regularly without timing the market.",
          icon: <Target className="w-5 h-5" />,
          features: ["Dollar-Cost Averaging", "Automated Buying", "Flexible Schedule", "Long-term Strategy"]
        },
        {
          title: "In-App Staking Tools",
          subtitle: "Stake and Earn",
          description: "Stake ETH, MATIC, and more with just a few taps. No wallets, no nodes, no stress. Track your rewards in real-time and maximize your holdings passively.",
          icon: <Coins className="w-5 h-5" />,
          features: ["Easy Staking", "Real-time Tracking", "Multiple Coins", "Passive Income"]
        },
        {
          title: "Portfolio Management",
          subtitle: "Smarter Portfolio Tracking",
          description: "Visualize and manage your entire portfolio in one place. Track performance, rebalance automatically, and get real-time alerts. Your financial cockpit, simplified.",
          icon: <PieChart className="w-5 h-5" />,
          features: ["Portfolio Visualization", "Auto-Rebalancing", "Real-time Alerts", "Performance Tracking"]
        },
        {
          title: "Themed Bundles",
          subtitle: "Diversified Crypto Portfolios",
          description: "Instantly invest in curated crypto baskets—rebalanced monthly by our strategy team. Spread your risk with one click for long-term growth.",
          icon: <BarChart3 className="w-5 h-5" />,
          features: ["Top 10 Bundle", "DeFi Portfolio", "Stablecoin Mix", "Monthly Rebalancing"]
        },
        {
          title: "Real-World Investments",
          subtitle: "Crypto-Backed Traditional Assets",
          description: "Use your crypto as collateral to invest in U.S. Stocks, ETFs, and precious metals. Keep your crypto while expanding your investment opportunities.",
          icon: <TrendingUp className="w-5 h-5" />,
          features: ["U.S. Stocks Access", "ETF Investments", "Precious Metals", "Collateral-Based"]
        }
      ]
    },
    {
      id: 2,
      title: "Instant Credit Line",
      subtitle: "Unlock Cash Without Selling Crypto",
      description: "Need quick access to cash? With EaseWithdraw's Instant Crypto Credit Lines, you can borrow against your BTC, ETH, or USDT — without selling or affecting your holdings.",
      icon: <CreditCard className="w-6 h-6" />,
      color: "from-pink-500 to-purple-600",
      bgColor: "bg-pink-50",
      textColor: "text-pink-600",
      miniServices: [
        {
          title: "Instant Approval & Funding",
          subtitle: "Get Cash in Minutes",
          description: "Access funds instantly with no paperwork, no bank runs, and no delays. Your crypto-backed credit line is approved and funded within minutes.",
          icon: <Zap className="w-5 h-5" />,
          features: ["Instant Approval", "No Paperwork", "Minutes to Fund", "24/7 Access"]
        },
        {
          title: "Revolving Credit Line",
          subtitle: "Use Funds Anytime",
          description: "Flexible revolving credit that you can use whenever you need it. Borrow, repay, and borrow again with complete flexibility and control.",
          icon: <Clock className="w-5 h-5" />,
          features: ["Revolving Access", "Flexible Usage", "Repay Anytime", "No Fixed Schedule"]
        },
        {
          title: "No Credit Score Required",
          subtitle: "Crypto-Collateralized Lending",
          description: "Your crypto serves as collateral, so no credit checks or FICO scores are needed. Get up to 60% LTV on supported cryptocurrencies.",
          icon: <Shield className="w-5 h-5" />,
          features: ["No Credit Check", "Up to 60% LTV", "Crypto Collateral", "Instant Qualification"]
        },
        {
          title: "Safe Collateral Storage",
          subtitle: "Your Crypto Stays Secure",
          description: "Your cryptocurrency remains safe as collateral while you access cash. Advanced security measures protect your digital assets at all times.",
          icon: <Lock className="w-5 h-5" />,
          features: ["Secure Storage", "Advanced Protection", "Insured Assets", "Multi-layer Security"]
        },
        {
          title: "Flexible Withdrawal Options",
          subtitle: "Access Your Funds",
          description: "Withdraw USD directly to your bank account or spend with your BTC credit card. Multiple options to access and use your approved credit line.",
          icon: <DollarSign className="w-5 h-5" />,
          features: ["Bank Transfers", "BTC Credit Card", "Multiple Options", "Instant Access"]
        }
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-gray-50 relative overflow-hidden h-auto">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" style={{backgroundColor: '#9810fa20'}}></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className={`text-center mb-20 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Our <span className="bg-clip-text text-transparent" style={{backgroundImage: 'linear-gradient(135deg, #9810fa, #ff6b9d)'}}>Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Comprehensive crypto-financial solutions designed to maximize your wealth and provide instant liquidity when you need it most
          </p>
        </div>

        {/* Enhanced Service Tabs with Beautiful Progress Bar */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-2xl lg:rounded-3xl p-2 lg:p-3 shadow-2xl border border-gray-100 relative overflow-hidden backdrop-blur-sm w-full max-w-6xl">
            {/* Beautiful Progress Bar */}
            <div className="absolute bottom-0 left-0 h-1 lg:h-2 bg-gradient-to-r from-gray-100 to-gray-200 w-full rounded-b-2xl lg:rounded-b-3xl">
              <div 
                className="h-full transition-all duration-75 ease-linear rounded-full relative overflow-hidden"
                style={{
                  width: `${progress}%`,
                  background: 'linear-gradient(90deg, #9810fa, #ff6b9d, #9810fa)',
                  backgroundSize: '200% 100%',
                  animation: 'shimmer 2s linear infinite',
                  marginLeft: activeTab === 0 ? '0%' : '50%',
                  maxWidth: '50%',
                  boxShadow: '0 0 20px rgba(152, 16, 250, 0.3)'
                }}
              >
                <div 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
                  style={{
                    animation: 'slide 2s linear infinite'
                  }}
                ></div>
              </div>
            </div>
            
            {/* Tab Buttons Row - Responsive */}
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
              {services.map((service, index) => (
                <button
                  key={service.id}
                  onClick={() => handleTabClick(index)}
                  className={`px-3 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-5 rounded-xl lg:rounded-2xl font-bold transition-all duration-500 flex items-center space-x-2 sm:space-x-3 lg:space-x-4 relative z-10 group flex-1 ${
                    activeTab === index
                      ? 'text-white shadow-2xl transform scale-105'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50 hover:scale-102'
                  }`}
                  style={{
                    backgroundColor: activeTab === index ? '#9810fa' : 'transparent',
                    backgroundImage: activeTab === index ? 'linear-gradient(135deg, #9810fa, #c084fc)' : 'none'
                  }}
                >
                  {/* Icon with enhanced styling */}
                  <div className={`p-1.5 sm:p-2 rounded-lg lg:rounded-xl transition-all duration-300 flex-shrink-0 ${
                    activeTab === index 
                      ? 'bg-black ' 
                      : 'bg-gray-100 group-hover:bg-gray-200'
                  }`}>
                    {React.cloneElement(service.icon, { 
                      className: `w-4 h-4 sm:w-5 h-5 lg:w-6 lg:h-6 ${activeTab === index ? 'text-white' : 'text-gray-600'}` 
                    })}
                  </div>
                  
                  {/* Text content - Responsive */}
                  <div className="text-left flex-1 min-w-0">
                    <div className="text-sm sm:text-base lg:text-lg font-bold truncate">{service.title}</div>
                    <div className={`text-xs sm:text-sm opacity-80 truncate ${
                      activeTab === index ? 'text-purple-100' : 'text-gray-500'
                    }`}>
                      Click to explore
                    </div>
                  </div>
                  
                  {/* Active indicator */}
                  {activeTab === index && (
                    <div className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-600 rounded-full animate-pulse"></div>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Active Service Main Card - Responsive */}
        <div className={`transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className={`${services[activeTab].bgColor} rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-12 mb-12 lg:mb-16 border border-gray-100 shadow-2xl relative overflow-hidden`}>
            {/* Decorative Elements */}
            <div 
              className="absolute top-0 right-0 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 opacity-10 rounded-full transform translate-x-16 sm:translate-x-24 lg:translate-x-32 -translate-y-16 sm:-translate-y-24 lg:-translate-y-32"
              style={{backgroundColor: '#9810fa'}}
            ></div>
            
            <div className="text-center max-w-4xl mx-auto relative z-10">
              <div 
                className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-2xl lg:rounded-3xl text-white mb-6 lg:mb-8 shadow-2xl"
                style={{backgroundColor: '#9810fa'}}
              >
                {React.cloneElement(services[activeTab].icon, { className: "w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" })}
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 lg:mb-4">{services[activeTab].title}</h3>
              <p className="text-lg sm:text-xl lg:text-2xl font-semibold mb-4 lg:mb-6" style={{color: '#9810fa'}}>
                {services[activeTab].subtitle}
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto px-4">
                {services[activeTab].description}
              </p>
            </div>
          </div>
        </div>

        {/* Mini Services Grid - Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {services[activeTab].miniServices.map((miniService, index) => (
            <div
              key={index}
              className={`group bg-white rounded-xl lg:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 lg:hover:-translate-y-3 animate-fade-up relative overflow-hidden`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Card Background Gradient */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                style={{backgroundColor: '#9810fa'}}
              ></div>
              
              {/* Service Icon */}
              <div 
                className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-lg lg:rounded-xl text-white mb-4 sm:mb-5 lg:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg relative z-10"
                style={{backgroundColor: '#9810fa'}}
              >
                {React.cloneElement(miniService.icon, { className: "w-5 h-5 sm:w-6 sm:h-6" })}
              </div>

              {/* Service Content */}
              <div className="relative z-10">
                <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 lg:mb-3 group-hover:text-transparent group-hover:bg-clip-text transition-all duration-300"
                    style={{'--tw-gradient-from': '#9810fa', '--tw-gradient-to': '#ff6b9d'}}>
                  {miniService.title}
                </h4>
                
                <p className="text-sm sm:text-base lg:text-lg font-semibold mb-3 lg:mb-4" style={{color: '#9810fa'}}>
                  {miniService.subtitle}
                </p>
                
                <p className="text-gray-600 mb-4 sm:mb-5 lg:mb-6 leading-relaxed text-sm sm:text-base">
                  {miniService.description}
                </p>

                {/* Features List */}
                <div className="space-y-2 lg:space-y-3 mb-4 sm:mb-5 lg:mb-6">
                  {miniService.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center space-x-2 lg:space-x-3 group-hover:translate-x-1 lg:group-hover:translate-x-2 transition-transform duration-300"
                      style={{ transitionDelay: `${featureIndex * 50}ms` }}
                    >
                      <CheckCircle className="w-4 h-4 lg:w-5 lg:h-5 flex-shrink-0" style={{color: '#9810fa'}} />
                      <span className="text-gray-700 font-medium text-xs sm:text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Learn More Button */}
                <button   onClick={onTriggerPopup} 
                className="inline-flex items-center space-x-2 font-semibold hover:gap-3 transition-all duration-300 group-hover:scale-105 text-sm sm:text-base cursor-pointer border-2 border-purple-500 px-4 py-1"
                        style={{color: '#9810fa'}}>
                  <span>Learn More</span>
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action - Responsive */}
        <div className="text-center mt-12 sm:mt-16 lg:mt-20">
          <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 lg:mb-6 px-4">Ready to Start Growing Your Wealth?</h3>
            <p className="text-base sm:text-lg text-gray-600 mb-6 lg:mb-8 max-w-2xl mx-auto px-4">
              Join thousands of users who are already maximizing their crypto potential with EaseWithdraw
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
              <button    onClick={onTriggerPopup}
                className="w-full sm:w-auto text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 cursor-pointer"
                style={{backgroundColor: '#9810fa'}}
              >
                Start Investing Now
              </button>
              <button  onClick={onTriggerPopup}
                className="w-full sm:w-auto border-2 text-gray-700 px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg transform hover:-translate-y-1 transition-all duration-300 hover:text-white bg-white cursor-pointer hover:shadow-2xl"
                style={{
                  borderColor: '#9810fa',
                  color: '#9810fa'
                }}
              >
                Get Credit Line
              </button>
            </div>
           
          </div>
        </div>
      </div>

      {/* Enhanced Custom Styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(30px, -30px) rotate(120deg); }
          66% { transform: translate(-20px, 20px) rotate(240deg); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(-30px, 30px) rotate(-120deg); }
          66% { transform: translate(20px, -20px) rotate(-240deg); }
        }
        
        @keyframes fade-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        
        @keyframes slide {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(400%); }
        }
        
        .animate-float {
          animation: float 20s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 25s ease-in-out infinite;
        }
        
        .animate-fade-up {
          animation: fade-up 0.8s ease-out forwards;
        }
        
        .group:hover h4 {
          background-image: linear-gradient(135deg, #9810fa, #ff6b9d);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        .hover\\:scale-102:hover {
          transform: scale(1.02);
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;