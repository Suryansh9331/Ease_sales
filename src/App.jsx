import React from 'react';
import Header from './Components/header';
import HowItWorks from './Components/Steps';
import CheckScore from './Components/CheckScoreButton';
import AnimatedCardsGrid from './Components/Cards';
import WhyChooseUs from './Components/WhyChooseUS';
import  FAQ from './Components/FAQ';
import TestimonialSection from './Components/Testimonial';
import ContactSection from './Components/ReachUS';
function App() {
  return (
    <div>
      <Header/>
      <HowItWorks/>
      <CheckScore/>
      <AnimatedCardsGrid/>
      <WhyChooseUs/>
      <FAQ/>
      <TestimonialSection/>
      <ContactSection/>
      {/* /* Add any */}
    </div>
  );
}
export default App;