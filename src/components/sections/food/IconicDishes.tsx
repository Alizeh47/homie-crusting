'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

interface IconicDish {
  id: string;
  name: string;
  image: string;
  description: string;
  slug: string;
}

const iconicDishes = [
  {
    id: '1',
    name: 'Sushi',
    image: '/images/food/sushi.jpg',
    description: 'A delicate balance of flavors representing the precision and artistry of Japanese cuisine.',
    slug: 'sushi'
  },
  {
    id: '2',
    name: 'Paella',
    image: '/images/food/paella.jpg',
    description: 'A communal dish that brings families together, celebrating Spanish social dining culture.',
    slug: 'paella'
  },
  {
    id: '3',
    name: 'Dim Sum',
    image: '/images/food/dimsum.jpg',
    description: 'Small bites that embody the Chinese tradition of tea and conversation.',
    slug: 'dim-sum'
  },
  {
    id: '4',
    name: 'Indian Curry',
    image: '/images/food/curry.jpg',
    description: 'A rich blend of spices that tells the story of India\'s diverse culinary heritage.',
    slug: 'indian-curry'
  },
  {
    id: '5',
    name: 'Greek Moussaka',
    image: '/images/food/moussaka.jpg',
    description: 'Layers of flavor that showcase Mediterranean cooking traditions.',
    slug: 'greek-moussaka'
  },
  {
    id: '6',
    name: 'Mexican Tacos',
    image: '/images/food/tacos.jpg',
    description: 'Street food elevated to an art form, representing Mexico\'s vibrant food culture.',
    slug: 'mexican-tacos'
  }
];

// Double the array for seamless loop
const doubledDishes = [...iconicDishes, ...iconicDishes];

export function IconicDishes() {
  const router = useRouter();

  const handleLearnMore = (slug: string) => {
    router.push(`/food/iconic-dishes/${slug}`);
  };

  return (
    <section className="bg-gray-100 py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 text-center font-serif text-4xl font-bold text-gray-900 md:text-5xl"
        >
          Iconic Dishes Around the World
        </motion.h2>

        <div className="relative w-full">
          <div className="animate-scroll flex gap-6 whitespace-nowrap">
            {doubledDishes.map((dish, index) => (
              <div
                key={`${dish.id}-${index}`}
                className="group relative h-96 w-[300px] flex-shrink-0 cursor-pointer overflow-hidden rounded-lg"
              >
                <Image
                  src={dish.image}
                  alt={dish.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/75 transition-opacity duration-300 group-hover:opacity-90" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white">
                  <h3 className="mb-2 font-sans text-2xl font-bold tracking-wider">
                    {dish.name}
                  </h3>
                  <p className="text-sm font-light opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {dish.description}
                  </p>
                  <button 
                    onClick={() => handleLearnMore(dish.slug)}
                    className="mt-4 rounded-full border-2 border-white bg-transparent px-6 py-2 text-sm font-semibold opacity-0 transition-all duration-300 hover:bg-white hover:text-gray-900 group-hover:opacity-100"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}