import { Suspense } from 'react';
import IconicDishClient from './IconicDishClient';
import { notFound } from 'next/navigation';

// Dish data with additional details
const dishesData = {
  'sushi': {
    name: 'Sushi',
    image: '/images/food/sushi.jpg',
    description: 'A delicate balance of flavors representing the precision and artistry of Japanese cuisine.',
    origin: 'Japan',
    history: 'Sushi has its origins in a Southeast Asian dish that spread to Japan in the 8th century. The modern version of sushi was developed in Edo (modern-day Tokyo) during the 18th century.',
    preparationTime: '30-45 minutes',
    servingSize: '8-12 pieces',
    keyIngredients: [
      'Sushi rice',
      'Nori (seaweed)',
      'Fresh fish',
      'Wasabi',
      'Soy sauce'
    ],
    culturalSignificance: 'Sushi represents the Japanese principles of minimalism, precision, and respect for ingredients. It\'s considered both an art form and a culinary experience.'
  },
  'paella': {
    name: 'Paella',
    image: '/images/food/paella.jpg',
    description: 'A communal dish that brings families together, celebrating Spanish social dining culture.',
    origin: 'Valencia, Spain',
    history: 'Paella originated in the mid-19th century near lake Albufera in Valencia. Farm laborers would cook rice in a flat pan over wood fires, adding local ingredients like snails and vegetables.',
    preparationTime: '45-60 minutes',
    servingSize: '6-8 people',
    keyIngredients: [
      'Bomba rice',
      'Saffron',
      'Olive oil',
      'Seafood or chicken',
      'Bell peppers'
    ],
    culturalSignificance: 'Paella is more than just Spain\'s national dish - it\'s a symbol of unity and celebration, traditionally eaten straight from the pan at family gatherings.'
  },
  'dim-sum': {
    name: 'Dim Sum',
    image: '/images/food/dimsum.jpg',
    description: 'Small bites that embody the Chinese tradition of tea and conversation.',
    origin: 'China',
    history: 'Dim sum originated in the Guangdong province and was initially served in teahouses for silk road travelers. The tradition dates back to the Han Dynasty.',
    preparationTime: 'Varies by item',
    servingSize: '2-4 pieces per type',
    keyIngredients: [
      'Various wrappers',
      'Ground meat',
      'Shrimp',
      'Vegetables',
      'Bamboo shoots'
    ],
    culturalSignificance: 'Dim sum is integral to Chinese brunch culture, emphasizing the importance of gathering with family and friends for tea and conversation.'
  },
  'indian-curry': {
    name: 'Indian Curry',
    image: '/images/food/curry.jpg',
    description: 'A rich blend of spices that tells the story of India\'s diverse culinary heritage.',
    origin: 'India',
    history: 'The history of curry spans more than 4,000 years. The word "curry" was derived from the Tamil word "kari" meaning sauce or relish for rice.',
    preparationTime: '45-60 minutes',
    servingSize: '4-6 people',
    keyIngredients: [
      'Various spices',
      'Onions',
      'Tomatoes',
      'Ginger-garlic paste',
      'Choice of protein'
    ],
    culturalSignificance: 'Curry represents the diversity of Indian cuisine, with each region having its own unique blend of spices and preparation methods.'
  },
  'greek-moussaka': {
    name: 'Greek Moussaka',
    image: '/images/food/moussaka.jpg',
    description: 'Layers of flavor that showcase Mediterranean cooking traditions.',
    origin: 'Greece',
    history: 'While eggplant was introduced to Greece by the Arabs in the 13th century, modern moussaka was created by chef Nikolaos Tselementes in the 1920s.',
    preparationTime: '90 minutes',
    servingSize: '8-10 servings',
    keyIngredients: [
      'Eggplant',
      'Ground lamb',
      'Béchamel sauce',
      'Tomatoes',
      'Greek spices'
    ],
    culturalSignificance: 'Moussaka is a cornerstone of Greek cuisine, representing the country\'s love for hearty, family-style dishes.'
  },
  'mexican-tacos': {
    name: 'Mexican Tacos',
    image: '/images/food/tacos.jpg',
    description: 'Street food elevated to an art form, representing Mexico\'s vibrant food culture.',
    origin: 'Mexico',
    history: 'Tacos predate the arrival of Europeans in Mexico, with anthropologists finding evidence that indigenous people in the Valley of Mexico ate tacos filled with small fish.',
    preparationTime: '20-30 minutes',
    servingSize: '2-3 tacos per person',
    keyIngredients: [
      'Corn tortillas',
      'Choice of meat',
      'Onions',
      'Cilantro',
      'Lime'
    ],
    culturalSignificance: 'Tacos are a symbol of Mexican street food culture, representing the accessibility and creativity of Mexican cuisine.'
  }
};

// Server component that validates the slug and passes data to client component
export default function IconicDishPage({ params }: { params: { slug: string } }) {
  const dish = dishesData[params.slug as keyof typeof dishesData];

  if (!dish) {
    notFound();
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <IconicDishClient dish={dish} />
    </Suspense>
  );
} 