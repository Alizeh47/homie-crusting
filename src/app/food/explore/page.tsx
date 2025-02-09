'use client';

import { motion } from 'framer-motion';
import { Globe, Search, Calendar, Users } from 'lucide-react';

export default function ExploreGlobalFlavorsPage() {
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
              Explore Global Flavors 🌎
            </h1>
            <p className="text-lg text-gray-600">
              Discover authentic culinary experiences and food tours around the world.
              Let us help you plan your perfect gastronomic adventure.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <form className="space-y-8">
              {/* Contact Information */}
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-gray-900">Contact Information</h2>
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

              {/* Travel Preferences */}
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-gray-900">Travel Preferences</h2>
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Destinations
                    </label>
                    <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#05342b]/20 focus:border-[#05342b]">
                      <option value="">Select your preferred region</option>
                      <option value="europe">Europe</option>
                      <option value="asia">Asia</option>
                      <option value="americas">The Americas</option>
                      <option value="africa">Africa</option>
                      <option value="middleeast">Middle East</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Trip Duration
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {['1-3 days', '4-7 days', '1-2 weeks', '2+ weeks'].map((duration) => (
                        <label key={duration} className="flex items-center space-x-2">
                          <input type="radio" name="duration" className="text-[#05342b] focus:ring-[#05342b]" />
                          <span className="text-sm text-gray-700">{duration}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Food Interests */}
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-gray-900">Food Interests</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Type of Experiences
                    </label>
                    <div className="space-y-3">
                      {[
                        'Street Food Tours',
                        'Cooking Classes',
                        'Fine Dining',
                        'Food Markets',
                        'Wine Tasting',
                        'Farm Visits'
                      ].map((exp) => (
                        <label key={exp} className="flex items-center space-x-2">
                          <input type="checkbox" className="rounded border-gray-300 text-[#05342b] focus:ring-[#05342b]" />
                          <span className="text-sm text-gray-700">{exp}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Budget Range (per person)
                    </label>
                    <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#05342b]/20 focus:border-[#05342b]">
                      <option value="">Select your budget range</option>
                      <option value="budget">$500 - $1,000</option>
                      <option value="midrange">$1,000 - $2,500</option>
                      <option value="luxury">$2,500 - $5,000</option>
                      <option value="ultraluxury">$5,000+</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Special Requirements */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Special Requirements or Preferences
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#05342b]/20 focus:border-[#05342b]"
                  placeholder="Tell us about any dietary restrictions, preferred cuisines, or specific experiences you're looking for..."
                />
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="px-8 py-4 bg-[#05342b] text-white rounded-lg font-medium hover:bg-[#05342b]/90 transition-all duration-300 transform hover:scale-105"
                >
                  Plan My Food Adventure
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 