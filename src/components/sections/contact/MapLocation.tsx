'use client';

import React from 'react';
import { FiMapPin } from 'react-icons/fi';

export default function MapLocation() {
  return (
    <div className="relative w-full h-[400px] bg-[#E3F2FD]/10">
      {/* This is a placeholder for the actual map implementation */}
      {/* You would typically use a service like Google Maps, Mapbox, etc. */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center p-8">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center bg-gradient-to-r from-[#7986cb] to-[#5c6bc0]">
            <FiMapPin className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-xl font-semibold text-[#1a237e] mb-2">Our Location</h3>
          <p className="text-gray-600">
            123 Cultural Street<br />
            New York, NY 10001<br />
            United States
          </p>
        </div>
      </div>
    </div>
  );
} 