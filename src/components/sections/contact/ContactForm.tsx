'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formState);
  };

  const inputClasses = "w-full px-4 py-3 rounded-2xl border border-[#E3F2FD] bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#1a237e]/20 focus:border-[#1a237e] transition-all duration-300";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <label className="block text-[#1a237e] font-medium mb-2">Name</label>
          <input
            type="text"
            required
            className={inputClasses}
            value={formState.name}
            onChange={(e) => setFormState(prev => ({ ...prev, name: e.target.value }))}
            placeholder="Your name"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <label className="block text-[#1a237e] font-medium mb-2">Email</label>
          <input
            type="email"
            required
            className={inputClasses}
            value={formState.email}
            onChange={(e) => setFormState(prev => ({ ...prev, email: e.target.value }))}
            placeholder="your.email@example.com"
          />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <label className="block text-[#1a237e] font-medium mb-2">Subject</label>
        <input
          type="text"
          required
          className={inputClasses}
          value={formState.subject}
          onChange={(e) => setFormState(prev => ({ ...prev, subject: e.target.value }))}
          placeholder="What would you like to discuss?"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <label className="block text-[#1a237e] font-medium mb-2">Message</label>
        <textarea
          required
          rows={6}
          className={`${inputClasses} resize-none`}
          value={formState.message}
          onChange={(e) => setFormState(prev => ({ ...prev, message: e.target.value }))}
          placeholder="Tell us more about your inquiry..."
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex justify-center"
      >
        <button
          type="submit"
          className="px-8 py-4 bg-gradient-to-r from-[#1a237e] to-[#0d47a1] text-white rounded-full font-medium 
                   transform hover:scale-105 transition-all duration-300 hover:shadow-lg
                   focus:outline-none focus:ring-2 focus:ring-[#1a237e]/50"
        >
          Send Message
        </button>
      </motion.div>
    </form>
  );
} 