"use client";

import React, { useState } from 'react';
import { Phone, Mail, MapPin, Twitter, Instagram, MessageCircle } from 'lucide-react';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string; 
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    if (!formData.firstName || !formData.email || !formData.address || !formData.message) {
      setSubmitError('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);
    setSubmitError('');

    try {
      const payload = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        message: formData.message
      };

      const response = await fetch('https://afc-backend-fhlt.onrender.com/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Success:', data);
      alert('Message sent successfully!');
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        message: ''
      });
    } catch (error) {
      console.error('Error:', error);
      setSubmitError('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen p-4 md:p-8 flex items-center justify-center">
      <div className="max-w-7xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row">
        
        <div className="w-full lg:w-2/5 bg-[#ebbd28] text-white p-8 md:p-12 relative overflow-hidden">
         
          <div className="absolute bottom-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-black rounded-full opacity-90 transform translate-x-20 translate-y-20 md:translate-x-32 md:translate-y-32"></div>
          <div className="absolute bottom-12 right-12 w-32 h-32 md:w-40 md:h-40 bg-white rounded-full opacity-60"></div>
          
          <div className="relative z-10 text-black">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Information</h1>
            <p className="mb-8 md:mb-16 text-base md:text-lg">Say something to start a live chat!</p>
            
            <div className="space-y-6 md:space-y-12">
              <div className="flex items-center space-x-4 md:space-x-6">
                <div className="p-2">
                  <Phone className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <span className="text-base md:text-xl">+1012 3456 789</span>
              </div>
              
              <div className="flex items-center space-x-4 md:space-x-6">
                <div className="p-2">
                  <Mail className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <span className="text-base md:text-xl">demo@gmail.com</span>
              </div>
              
              <div className="flex items-center space-x-4 md:space-x-6">
                <div className="p-2">
                  <MapPin className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <div className="text-base md:text-xl">
                  <div>132 Dartmouth Street Boston,</div>
                  <div>Massachusetts 02156 United States</div>
                </div>
              </div>
            </div>
            
            <div className="flex space-x-4 md:space-x-6 mt-12 md:mt-20" id='contact1'>
              <div className="w-10 h-10 md:w-12 md:h-12 bg-black bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 cursor-pointer transition-all">
                <Twitter className="w-4 h-4 md:w-6 md:h-6 text-white" />
              </div>
              <div className="w-10 h-10 md:w-12 md:h-12 bg-black bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 cursor-pointer transition-all">
                <Instagram className="w-4 h-4 md:w-6 md:h-6 text-white" />
              </div>
              <div className="w-10 h-10 md:w-12 md:h-12 bg-black bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 cursor-pointer transition-all">
                <MessageCircle className="w-4 h-4 md:w-6 md:h-6 text-white" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Side - Form */}
        <div className="w-full lg:w-3/5 p-6 md:p-8 lg:p-16 bg-transparent ">
          <div className="max-w-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8">
              <div>
                <label className="block text-gray-600 text-sm mb-2">First Name *</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full pb-3 border-b-2 border-gray-200 text-gray-900 focus:border-[#ebbd28] outline-none text-base md:text-lg bg-transparent transition-colors"
                  placeholder=""
                  required
                />
              </div>
              <div>
                <label className="block text-gray-600 text-sm mb-2">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full pb-3 border-b-2 border-gray-200 text-gray-900 focus:border-[#ebbd28] outline-none text-base md:text-lg bg-transparent transition-colors"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
              <div>
                <label className="block text-gray-600 text-sm mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full pb-3 border-b-2 border-gray-200 text-gray-900 focus:border-[#ebbd28] outline-none text-base md:text-lg bg-transparent transition-colors"
                  placeholder=""
                  required
                />
              </div>
              <div>
                <label className="block text-gray-600 text-sm mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full pb-3 border-b-2 text-gray-900 border-gray-200 focus:border-[#ebbd28] outline-none text-base md:text-lg bg-transparent transition-colors"
                />
              </div>
            </div>
            
            <div className="mb-6 md:mb-8">
              <label className="block text-gray-600 text-sm mb-2">Address *</label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className="w-full pb-3 border-b-2 text-gray-900 border-gray-200 focus:border-[#ebbd28] outline-none text-base md:text-lg bg-transparent resize-none transition-colors"
                placeholder="Enter your address"
                rows={2}
                required
              ></textarea>
            </div>
            
            <div className="mb-8 md:mb-12" id='contact'>
              <label className="block text-gray-600 text-sm mb-2">Message *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="w-full pb-3 border-b-2 text-gray-900 border-gray-200 focus:border-[#ebbd28] outline-none text-base md:text-lg bg-transparent resize-none transition-colors"
                placeholder="Write your message..."
                required
              ></textarea>
            </div>

            {submitError && (
              <div className="mb-4 text-red-500 text-sm">
                {submitError}
              </div>
            )}
            
            <div className="flex justify-end">
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className={`${isSubmitting ? 'bg-gray-400' : 'bg-[#ebbd28] hover:bg-black hover:text-white'} text-black px-8 py-3 md:px-12 md:py-4 rounded-full font-semibold text-base md:text-lg transition-all duration-300 shadow-lg`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;