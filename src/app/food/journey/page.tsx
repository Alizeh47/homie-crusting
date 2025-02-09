'use client';

import { motion } from 'framer-motion';
import { Utensils, Globe, Clock, Users } from 'lucide-react';

export default function CulinaryJourneyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 pt-24">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Start Your Culinary Journey 🍽️
            </h1>
            <p className="text-lg text-gray-600">
              Tell us about your food preferences and let us curate a personalized
              culinary experience for you.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <form className="space-y-8">
              {/* Personal Information */}
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-gray-900">Personal Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#05342b]/20 focus:border-[#05342b]"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#05342b]/20 focus:border-[#05342b]"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
              </div>

              {/* Culinary Preferences */}
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-gray-900">Culinary Preferences</h2>
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Favorite Cuisines
                    </label>
                    <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#05342b]/20 focus:border-[#05342b]">
                      <option value="">Select your favorite cuisine</option>
                      <option value="italian">Italian</option>
                      <option value="japanese">Japanese</option>
                      <option value="indian">Indian</option>
                      <option value="mexican">Mexican</option>
                      <option value="thai">Thai</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Dietary Restrictions
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {['Vegetarian', 'Vegan', 'Gluten-Free', 'Dairy-Free', 'Halal', 'Kosher'].map((diet) => (
                        <label key={diet} className="flex items-center space-x-2">
                          <input type="checkbox" className="rounded border-gray-300 text-[#05342b] focus:ring-[#05342b]" />
                          <span className="text-sm text-gray-700">{diet}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Experience Level */}
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-gray-900">Cooking Experience</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {['Beginner', 'Intermediate', 'Advanced'].map((level) => (
                    <label key={level} className="relative flex cursor-pointer">
                      <input type="radio" name="experience" className="sr-only" />
                      <div className="group flex flex-col items-center p-6 rounded-lg border-2 border-gray-200 hover:border-[#05342b]">
                        <span className="text-lg font-medium text-gray-900">{level}</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Additional Information */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tell us more about your culinary interests
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#05342b]/20 focus:border-[#05342b]"
                  placeholder="Share your favorite dishes, cooking goals, or any specific interests..."
                />
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="px-8 py-4 bg-[#05342b] text-white rounded-lg font-medium hover:bg-[#05342b]/90 transition-all duration-300 transform hover:scale-105"
                >
                  Begin Your Culinary Adventure
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 