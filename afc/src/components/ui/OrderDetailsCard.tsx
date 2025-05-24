import React from 'react';
import { MapPin, Home, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface OrderDetailsCardProps {
  isOpen: boolean;
  onClose: () => void;
}

const OrderDetailsCard: React.FC<OrderDetailsCardProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.75 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.75 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="w-full max-w-md bg-black rounded-3xl border-2 border-yellow-400 p-8 relative overflow-hidden">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-50 p-2 rounded-full hover:bg-yellow-400/20 transition-colors duration-200"
              >
                <X className="w-6 h-6 text-yellow-400" />
              </button>
              
              {/* Background logo */}
              <div className="absolute inset-0 opacity-20 flex items-center justify-center">
                <img
                  src="/images/Afc-logo.jpg"
                  alt="AFC Logo"
                  className="w-96 h-96 object-contain"
                />
              </div>

              {/* Header */}
              <div className="relative z-10 text-center mb-12">
                <h1 className="text-white text-2xl font-bold tracking-wider mb-4">
                  ORDER DETAILS
                </h1>
                <div className="flex items-center justify-center gap-4">
                  <div className="w-16 h-0.5 bg-yellow-400"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-16 h-0.5 bg-yellow-400"></div>
                </div>
              </div>

              {/* Service Buttons */}
              <div className="relative z-10 space-y-6 mb-12">
                {/* Zomato Button */}
                <button className="w-full bg-red-600 hover:bg-red-700 transition-colors duration-200 rounded-2xl py-4 px-6 text-white font-bold text-xl tracking-wide shadow-lg">
                  Zomato
                </button>

                {/* Swiggy Button */}
                <button className="w-full bg-orange-500 hover:bg-orange-600 transition-colors duration-200 rounded-2xl py-4 px-6 text-white font-bold text-xl tracking-wide shadow-lg flex items-center justify-center gap-3">
                  <MapPin className="w-6 h-6" fill="white" />
                  Swiggy
                </button>

                {/* Home Delivery Button */}
                <button className="w-full bg-yellow-500 hover:bg-yellow-600 transition-colors duration-200 rounded-2xl py-4 px-6 text-black font-bold text-xl tracking-wide shadow-lg flex items-center justify-center gap-3">
                  <Home className="w-6 h-6" />
                  HOME DELIVERY
                </button>
              </div>

              {/* Footer */}
              <div className="relative z-10 text-center">
                <div className="w-12 h-0.5 bg-yellow-400 mx-auto mb-6"></div>
                <p className="text-yellow-400 text-sm">
                  © 2024 Home Food Delivery Service. All rights reserved.
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default OrderDetailsCard;