// import React from 'react';
// import { MapPin, Home, X } from 'lucide-react';
// import { motion, AnimatePresence } from 'framer-motion';

// interface OrderDetailsCardProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// const OrderDetailsCard: React.FC<OrderDetailsCardProps> = ({ isOpen, onClose }) => {
//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <>
//           {/* Backdrop */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={onClose}
//             className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
//           />

//           {/* Modal */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.75 }}
//             animate={{ opacity: 1, scale: 1 }}
//             exit={{ opacity: 0, scale: 0.75 }}
//             className="fixed inset-0 z-50 flex items-center justify-center p-4"
//           >
//             <div className="w-full max-w-md bg-black rounded-3xl border-2 border-yellow-400 p-8 relative overflow-hidden">
//               {/* Close Button */}
//               <button
//                 onClick={onClose}
//                 className="absolute top-4 right-4 z-50 p-2 rounded-full hover:bg-yellow-400/20 transition-colors duration-200"
//               >
//                 <X className="w-6 h-6 text-yellow-400" />
//               </button>

//               {/* Background logo */}
//               <div className="absolute inset-0 opacity-20 flex items-center justify-center">
//                 <img
//                   src="/images/Afc-logo.jpg"
//                   alt="AFC Logo"
//                   className="w-96 h-96 object-contain"
//                 />
//               </div>

//               {/* Header */}
//               <div className="relative z-10 text-center mb-12">
//                 <h1 className="text-white text-2xl font-bold tracking-wider mb-4">
//                   ORDER DETAILS
//                 </h1>
//                 <div className="flex items-center justify-center gap-4">
//                   <div className="w-16 h-0.5 bg-yellow-400"></div>
//                   <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
//                   <div className="w-16 h-0.5 bg-yellow-400"></div>
//                 </div>
//               </div>

//               {/* Service Buttons */}
//               <div className="relative z-10 space-y-6 mb-12">
//                 {/* Zomato Button */}
//                 <a href="https://www.zomato.com/hyderabad/afc-absolutely-fried-chicken-rajendra-nagar" target="_blank" rel="noopener noreferrer" className="block w-full">
//                   <button className="w-full bg-red-600 hover:bg-red-700 transition-colors duration-200 rounded-2xl py-4 px-6 text-white font-bold text-xl tracking-wide shadow-lg">
//                     Zomato
//                   </button>
//                 </a>

//                 {/* Swiggy Button */}
//                 <a href="http://swiggy.com/city/hyderabad/afc-absolutely-fried-chicken-bavan-colony-hydershakote-rest874993" target="_blank" rel="noopener noreferrer" className="block w-full">
//                   <button className="w-full bg-orange-500 hover:bg-orange-600 transition-colors duration-200 rounded-2xl py-4 px-6 text-white font-bold text-xl tracking-wide shadow-lg flex items-center justify-center gap-3">
//                     <MapPin className="w-6 h-6" fill="white" />
//                     Swiggy
//                   </button>
//                 </a>

//                 {/* Home Delivery Button */}
//                 <button className="w-full bg-yellow-500 hover:bg-yellow-600 transition-colors duration-200 rounded-2xl py-4 px-6 text-black font-bold text-xl tracking-wide shadow-lg flex items-center justify-center gap-3">
//                   <Home className="w-6 h-6" />
//                   HOME DELIVERY
//                 </button>
//               </div>

//               {/* Footer */}
//               <div className="relative z-10 text-center">
//                 <div className="w-12 h-0.5 bg-yellow-400 mx-auto mb-6"></div>
//                 <p className="text-yellow-400 text-sm">
//                   © 2024 Home Food Delivery Service. All rights reserved.
//                 </p>
//               </div>
//             </div>
//           </motion.div>
//         </>
//       )}
//     </AnimatePresence>
//   );
// };

// export default OrderDetailsCard;

"use client";

import React, { useState } from "react";
import { MapPin, Home, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import HomeDelivery from "./HomeDelivery";

interface OrderDetailsCardProps {
  isOpen: boolean;
  onClose: () => void;
}

const OrderDetailsCard: React.FC<OrderDetailsCardProps> = ({ isOpen, onClose }) => {
  const [showHomeDelivery, setShowHomeDelivery] = useState(false);

  const handleClose = () => {
    setShowHomeDelivery(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 z-50 flex items-center justify-center"
          >
            <div className="w-[539px] h-auto bg-black rounded-[30px] border-2 border-yellow-400 relative overflow-hidden">
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 z-50 p-2 rounded-full hover:bg-yellow-400/20 transition-colors"
              >
                <X className="w-6 h-6 text-yellow-400" />
              </button>

              {/* Background logo */}
              <div className="absolute inset-0 opacity-10 flex items-center justify-center pointer-events-none z-0">
                <img
                  src="/images/Afc-logo.jpg"
                  alt="AFC Logo"
                  className="w-80 h-80 object-contain"
                />
              </div>

              {/* Content */}
              <div className="relative z-10 p-6 h-full w-full">
                {!showHomeDelivery ? (
                  <>
                    <div className="text-center mb-6">
                      <h1 className="text-white text-xl font-bold tracking-wider mb-2">
                        ORDER DETAILS
                      </h1>
                      <div className="flex items-center justify-center gap-3">
                        <div className="w-12 h-0.5 bg-yellow-400"></div>
                        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                        <div className="w-12 h-0.5 bg-yellow-400"></div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {/* Zomato Button */}
                      <a
                        href="https://www.zomato.com/hyderabad/afc-absolutely-fried-chicken-rajendra-nagar"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full"
                      >
                        <button className="w-full bg-red-600 hover:bg-red-700 rounded-2xl py-3 px-5 text-white font-bold text-lg shadow">
                          Zomato
                        </button>
                      </a>

                      {/* Swiggy Button */}
                      <a
                        href="http://swiggy.com/city/hyderabad/afc-absolutely-fried-chicken-bavan-colony-hydershakote-rest874993"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full"
                      >
                        <button className="w-full bg-orange-500 hover:bg-orange-600 rounded-2xl py-3 px-5 text-white font-bold text-lg shadow flex items-center justify-center gap-2">
                          <MapPin className="w-5 h-5" fill="white" />
                          Swiggy
                        </button>
                      </a>

                      {/* Home Delivery Button */}
                      <button
                        className="w-full bg-yellow-500 hover:bg-yellow-600 rounded-2xl py-3 px-5 text-black font-bold text-lg shadow flex items-center justify-center gap-2"
                        onClick={() => setShowHomeDelivery(true)}
                      >
                        <Home className="w-5 h-5" />
                        HOME DELIVERY
                      </button>
                    </div>

                    {/* Footer */}
                    <div className="text-center mt-8">
                      <div className="w-10 h-0.5 bg-yellow-400 mx-auto mb-4"></div>
                      <p className="text-yellow-400 text-xs">
                        © 2024 Home Food Delivery Service. All rights reserved.
                      </p>
                    </div>
                  </>
                ) : (
                  <div className="w-full h-full">
                    <HomeDelivery />
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default OrderDetailsCard;
