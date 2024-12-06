'use client'

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ContactPopup = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  });
  const [errors, setErrors] = useState({});

  // Validate form fields
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (formData.phone && !/^[0-9]{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = "Phone number must be 10 digits";
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Form submission logic
    console.log('Form submitted:', formData);
    onClose();
  };

  // Prevent scroll on body when popup is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] overflow-y-auto bg-black bg-opacity-50 flex items-center justify-center p-4 antialiased"
      >
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ 
            type: "spring", 
            stiffness: 300, 
            damping: 20 
          }}
          className="relative w-full max-w-xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-300 ease-in-out hover:shadow-3xl"
          style={{
            maxHeight: '90vh'
          }}
        >
          {/* Gradient Header */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600"></div>

          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors group"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6 group-hover:rotate-90 transition-transform" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M6 18L18 6M6 6l12 12" 
              />
            </svg>
          </button>

          {/* Popup Content */}
          <div className="p-6 md:p-10">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
                Contact Rama Horn
              </h2>
              <p className="text-sm text-gray-500 max-w-md mx-auto">
                Have questions? We're here to help. Please fill out the form below and we'll get back to you shortly.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Field */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  {errors.name && (
                    <span className="text-xs text-red-500">{errors.name}</span>
                  )}
                </div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 ${
                    errors.name 
                      ? 'border-red-300 focus:ring-red-500' 
                      : 'border-gray-300 focus:ring-orange-500'
                  }`}
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email Field */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  {errors.email && (
                    <span className="text-xs text-red-500">{errors.email}</span>
                  )}
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 ${
                    errors.email 
                      ? 'border-red-300 focus:ring-red-500' 
                      : 'border-gray-300 focus:ring-orange-500'
                  }`}
                  placeholder="you@example.com"
                />
              </div>

              {/* Phone Field */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  {errors.phone && (
                    <span className="text-xs text-red-500">{errors.phone}</span>
                  )}
                </div>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 text-black border rounded-md shadow-sm focus:outline-none focus:ring-2 ${
                    errors.phone 
                      ? 'border-red-300 focus:ring-red-500' 
                      : 'border-gray-300 focus:ring-orange-500'
                  }`}
                  placeholder="(123) 456-7890"
                  required/>
              </div>

              {/* Address Field */}
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                  Address
                </label>
                <textarea
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-3 text-black py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Your full address (Optional)"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-3 rounded-md hover:bg-orange-600 transition-colors duration-300 ease-in-out transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
              >
                Submit Information
              </button>
            </form>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ContactPopup;