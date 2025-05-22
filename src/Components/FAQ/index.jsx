// import React, { useState, useEffect, useRef } from "react";
// import { motion, useInView } from "framer-motion";

// const faqs = [
//   {
//     question: "Is EaseWithdraw safe to use?",
//     answer:
//       "Absolutely. We follow strict U.S. regulatory standards, employ bank-level encryption, and partner with licensed custodians to keep your crypto and personal data secure.",
//   },
//   {
//     question: "What cryptocurrencies are supported?",
//     answer:
//       "",
//   },
//   {
//     question: "Is Bitcoin supported on your platform?",
//     answer:
//       "Absolutely. We support Bitcoin (BTC) through various crypto-friendly cards like Nexo, Coinbase, and more. You can use your BTC for spending, transfers, and real-time conversions.",
//   },
//   {
//     question: "Can I build or repair my credit with Ease Withdraw?",
//     answer:
//       "Yes. We provide powerful tools and credit-backed solutions designed to help you build, improve, or repair your credit score. Whether you’re starting from scratch or working to fix past issues, we’ve got you covered.",
//   },
//   {
//     question: "Can I build or repair my credit with Ease Withdraw?",
//     answer:
//       "Yes. While Bitcoin (BTC) is fully supported, many of our partner cards—like Coinbase and Nexo—also support other major cryptocurrencies like Ethereum (ETH), USDT, and more",
//   },
// ];

// const FAQ = ({ onTriggerPopup }) => {
//   const [activeIndex, setActiveIndex] = useState(null);

//   // Create refs for each question
//   const questionRefs = useRef([]);
//   questionRefs.current = faqs.map(
//     (_, i) => questionRefs.current[i] ?? React.createRef()
//   );

//   // Create ref for heading
//   const headingRef = useRef(null);
//   const isHeadingInView = useInView(headingRef, { amount: 0.3, once: false });

//   // Track which questions are in view
//   const [questionsInView, setQuestionsInView] = useState(
//     Array(faqs.length).fill(false)
//   );

//   useEffect(() => {
//     const observers = questionRefs.current.map((ref, index) => {
//       const observer = new IntersectionObserver(
//         (entries) => {
//           const [entry] = entries;
//           setQuestionsInView((prev) => {
//             const newState = [...prev];
//             newState[index] = entry.isIntersecting;
//             return newState;
//           });
//         },
//         { threshold: 0.3 }
//       );

//       if (ref.current) {
//         observer.observe(ref.current);
//       }

//       return observer;
//     });

//     return () => {
//       observers.forEach((observer, index) => {
//         if (questionRefs.current[index].current) {
//           observer.unobserve(questionRefs.current[index].current);
//         }
//       });
//     };
//   }, []);

//   const toggleIndex = (index) => {
//     setActiveIndex(index === activeIndex ? null : index);
//   };

//   return (
//     <section className="h-auto sssssmt-16 px-6 md:px-20 py-16 bg-white">
//       <motion.h2
//         ref={headingRef}
//         initial={{ y: -100, opacity: 0 }}
//         animate={{
//           y: isHeadingInView ? 0 : -100,
//           opacity: isHeadingInView ? 1 : 0,
//         }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//         className="text-3xl md:text-5xl font-bold text-center mb-8 text-[#9810fa]"
//       >
//         FREQUENTLY ASKED QUESTIONS
//       </motion.h2>
//         <div className="flex justify-center space-x-1 mb-8">
//             <div className="w-6 h-1 bg-purple-600 rounded-full"></div>
//             <div className="w-6 h-1" style={{ backgroundColor: "#000000" }}></div>
//             <div className="w-6 h-1" style={{ backgroundColor: "#9810fa" }}></div>
//             <div className="w-6 h-1 bg-[#000000] rounded-full"></div>
//           </div>

//       <div className="space-y-4 max-w-4xl mx-auto">
//         {faqs.map((faq, index) => (
//           <motion.div
//             key={index}
//             ref={(el) => (questionRefs.current[index].current = el)}
//             initial={{ y: 100, opacity: 0 }}
//             animate={{
//               y: questionsInView[index] ? 0 : 100,
//               opacity: questionsInView[index] ? 1 : 0,
//             }}
//             transition={{ duration: 0.5 }}
//             className=" bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-4 cursor-pointer"
//             onClick={() => toggleIndex(index)}
//           >
//             <div className="flex justify-between items-center bg-gradient">
//               <p className="text-lg font-medium">{faq.question}</p>
//               <span className="text-xl">
//                 {activeIndex === index ? "−" : "+"}
//               </span>
//             </div>
//             <motion.div
//               initial={{ height: 0, opacity: 0 }}
//               animate={{
//                 height: activeIndex === index ? "auto" : 0,
//                 opacity: activeIndex === index ? 1 : 0,
//               }}
//               transition={{ duration: 0.3, ease: "easeInOut" }}
//               className="overflow-hidden"
//             >
//               <div className="mt-2 pt-2 text-gray-700">{faq.answer}</div>
//             </motion.div>
//           </motion.div>
//         ))}
//       </div>

//       <div className="mt-8 text-center">
     
//           <button  onClick={onTriggerPopup} 
//           className="text-purple-800   font-semibold border-2 border-purple-600 cursor-pointer px-4 py-2  inline-flex items-center gap-1">
//             Know More <span className="text-xl">→</span>
//           </button>
  
//       </div>
//     </section>
//   );
// };

// export default FAQ;





import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const faqs = [
  {
    question: "What is EaseWithdraw?",
    answer:
      "EaseWithdraw is a secure crypto-to-fiat platform that lets you convert crypto (USDT, BTC, ETH) into cash and withdraw it directly to your U.S. bank account. We also offer BTC credit cards, crypto-backed credit lines, and personal loans for eligible users.",
  },
  {
    question: "How does EaseWithdraw work?",
    answer:
      "1. Sign up and complete a fast identity verification (KYC). 2. Select a service — crypto withdrawal, credit line, or loan. 3. Complete your crypto transaction or apply for credit. 4. Receive funds via bank transfer or spend instantly with a BTC-backed card.",
  },
  {
    question: "What crypto services do you offer?",
    answer:
      "We currently provide: Instant crypto-to-bank withdrawals, Multiple BTC credit card options (virtual and physical), Flexible crypto-backed credit lines, Personal loans with crypto as collateral, and 24/7 transaction management via web or mobile app.",
  },
  {
    question: "Are your credit cards really backed by BTC?",
    answer:
      "Yes. Our BTC credit cards let you spend against your crypto balance without selling your assets. You keep ownership while using your BTC as collateral. No credit score required — just verified crypto holdings.",
  },
  {
    question: "How do the credit lines work?",
    answer:
      "You can unlock instant credit by using your crypto as collateral. Based on the value of your holdings, we offer flexible lines you can draw from anytime, with competitive interest rates and no hard credit checks.",
  },
  {
    question: "Can I apply for a personal loan?",
    answer:
      "Yes. Eligible users can apply for crypto-backed personal loans starting from $1,000 to $50,000. Loan terms, interest rates, and limits depend on your crypto holdings and verification status.",
  },
  {
    question: "Is EaseWithdraw safe to use?",
    answer:
      "Absolutely. We follow strict U.S. regulatory standards, employ bank-level encryption, and partner with licensed custodians to keep your crypto and personal data secure.",
  },
  {
    question: "What cryptocurrencies are supported?",
    answer:
      "We currently support Bitcoin (BTC), Ethereum (ETH), and Tether (USDT – ERC20 & TRC20). We're adding more soon.",
  },
  {
    question: "How fast are crypto withdrawals?",
    answer:
      "Most crypto-to-bank transfers are completed in under 5 minutes, depending on network traffic and banking hours.",
  },
  {
    question: "Are there any fees?",
    answer:
      "Your first withdrawal is free. We display all conversion or loan-related fees upfront. No monthly or hidden fees. Credit cards may include standard interest and optional service fees.",
  },
];

const FAQ = ({ onTriggerPopup }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  // Create refs for each question
  const questionRefs = useRef([]);
  questionRefs.current = faqs.map(
    (_, i) => questionRefs.current[i] ?? React.createRef()
  );

  // Create ref for heading
  const headingRef = useRef(null);
  const isHeadingInView = useInView(headingRef, { amount: 0.3, once: false });

  // Track which questions are in view
  const [questionsInView, setQuestionsInView] = useState(
    Array(faqs.length).fill(false)
  );

  useEffect(() => {
    const observers = questionRefs.current.map((ref, index) => {
      const observer = new IntersectionObserver(
        (entries) => {
          const [entry] = entries;
          setQuestionsInView((prev) => {
            const newState = [...prev];
            newState[index] = entry.isIntersecting;
            return newState;
          });
        },
        { threshold: 0.3 }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return observer;
    });

    return () => {
      observers.forEach((observer, index) => {
        if (questionRefs.current[index].current) {
          observer.unobserve(questionRefs.current[index].current);
        }
      });
    };
  }, []);

  const toggleIndex = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="h-auto sssssmt-16 px-6 md:px-20 py-16 bg-white">
      <motion.h2
        ref={headingRef}
        initial={{ y: -100, opacity: 0 }}
        animate={{
          y: isHeadingInView ? 0 : -100,
          opacity: isHeadingInView ? 1 : 0,
        }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-3xl md:text-5xl font-bold text-center mb-8 text-[#9810fa]"
      >
        FREQUENTLY ASKED QUESTIONS
      </motion.h2>
        <div className="flex justify-center space-x-1 mb-8">
            <div className="w-6 h-1 bg-purple-600 rounded-full"></div>
            <div className="w-6 h-1" style={{ backgroundColor: "#000000" }}></div>
            <div className="w-6 h-1" style={{ backgroundColor: "#9810fa" }}></div>
            <div className="w-6 h-1 bg-[#000000] rounded-full"></div>
          </div>

      <div className="space-y-4 max-w-4xl mx-auto">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            ref={(el) => (questionRefs.current[index].current = el)}
            initial={{ y: 100, opacity: 0 }}
            animate={{
              y: questionsInView[index] ? 0 : 100,
              opacity: questionsInView[index] ? 1 : 0,
            }}
            transition={{ duration: 0.5 }}
            className=" bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-4 cursor-pointer"
            onClick={() => toggleIndex(index)}
          >
            <div className="flex justify-between items-center bg-gradient">
              <p className="text-lg font-medium">{faq.question}</p>
              <span className="text-xl">
                {activeIndex === index ? "−" : "+"}
              </span>
            </div>
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: activeIndex === index ? "auto" : 0,
                opacity: activeIndex === index ? 1 : 0,
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="mt-2 pt-2 text-gray-700">{faq.answer}</div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 text-center">
     
          <button  onClick={onTriggerPopup} 
          className="text-purple-800   font-semibold border-2 border-purple-600 cursor-pointer px-4 py-2  inline-flex items-center gap-1">
            Know More <span className="text-xl">→</span>
          </button>
  
      </div>
    </section>
  );
};

export default FAQ;