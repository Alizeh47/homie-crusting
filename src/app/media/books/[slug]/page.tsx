'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter, useParams } from 'next/navigation';

interface BookDetail {
  title: string;
  image: string;
  description: string;
  author: string;
  publishYear: string;
  genre: string[];
  rating: number;
  pages: number;
  synopsis: string[];
  reviews: Array<{
    user: string;
    comment: string;
    rating: number;
  }>;
  relatedBooks: Array<{
    title: string;
    author: string;
    image: string;
  }>;
}

const bookDetails = {
  'midnight-library': {
    title: 'The Midnight Library',
    image: '/images/media/books1.jpg',
    description: 'Between life and death there is a library. Would you make a different choice?',
    author: 'Matt Haig',
    publishYear: '2020',
    genre: ['Fiction', 'Fantasy', 'Contemporary'],
    rating: 4.5,
    pages: 304,
    synopsis: [
      'Between life and death there is a library, and within that library, the shelves go on forever. Every book provides a chance to try another life you could have lived. Nora Seed, the protagonist, finds herself in this library after a series of unfortunate events lead her to despair.',
      'Nora is given the opportunity to explore the infinite possibilities of her life, each book representing a different path she could have taken. From becoming a glaciologist in the Arctic to a rock star touring the world, Nora experiences the highs and lows of each potential life.',
      'As she delves deeper into the library, guided by her former school librarian Mrs. Elm, Nora confronts her deepest regrets and fears. She learns valuable lessons about the importance of embracing life\'s imperfections and the beauty of the present moment.',
      'Would you have done anything different, if you had the chance to undo your regrets? Nora\'s journey is a profound exploration of self-discovery and the impact of our choices.',
      'A dazzling novel about all the choices that go into a life well lived, from the internationally bestselling author of Reasons to Stay Alive and How To Stop Time. The Midnight Library is a heart-wrenching yet hopeful story that reminds us that every life has its own unique value and meaning.'
    ],
    reviews: [
      {
        user: 'BookLover123',
        comment: 'A beautiful exploration of life, choices, and regret. This book touched my soul.',
        rating: 5
      },
      {
        user: 'ReadingRainbow',
        comment: 'Thought-provoking and emotionally resonant. A must-read!',
        rating: 4
      }
    ],
    relatedBooks: [
      {
        title: 'How to Stop Time',
        author: 'Matt Haig',
        image: '/images/media/related1.jpg'
      },
      {
        title: 'The Invisible Life of Addie LaRue',
        author: 'V.E. Schwab',
        image: '/images/media/related2.jpg'
      }
    ]
  },
  'court-thorns-roses': {
    title: 'A Court of Thorns and Roses',
    image: '/images/media/books2.jpg',
    description: 'Enter a world of magic, romance, and dangerous bargains.',
    author: 'Sarah J. Maas',
    publishYear: '2015',
    genre: ['Fantasy', 'Romance', 'Young Adult'],
    rating: 4.7,
    pages: 419,
    synopsis: [
      'When nineteen-year-old huntress Feyre kills a wolf in the woods, a terrifying creature arrives to demand retribution.',
      'Dragged to a treacherous magical land she knows about only from legends, Feyre discovers that her captor is not truly a beast, but one of the lethal, immortal faeries who once ruled her world.',
      'As she adapts to her new home, her feelings for the faerie, Tamlin, transform from icy hostility into a fiery passion that burns through every lie she\'s been told about the beautiful, dangerous world of the Fae.',
      'Feyre learns that the faerie lands are divided into courts, each ruled by a High Lord. Tamlin is the High Lord of the Spring Court, a place of eternal springtime and beauty. However, the Spring Court is under a dark curse that only Feyre can break.',
      'Feyre meets other key characters, including Lucien, Tamlin\'s loyal emissary, and Rhysand, the enigmatic and powerful High Lord of the Night Court. As Feyre navigates the treacherous politics and dangers of the faerie world, she uncovers secrets that could change everything.',
      'The plot thickens as Feyre discovers that an ancient and malevolent force, Amarantha, has taken control of the faerie lands. Amarantha holds Tamlin and his court in her thrall, and Feyre must undergo a series of deadly trials to save them.',
      'Throughout her journey, Feyre\'s strength, resilience, and love are tested. She must confront her deepest fears and make unimaginable sacrifices to protect those she cares about and to find her place in the faerie world.'
    ],
    reviews: [
      {
        user: 'FantasyFanatic',
        comment: 'A masterpiece of world-building and character development.',
        rating: 5
      },
      {
        user: 'BookishDreams',
        comment: 'The romance is swoon-worthy and the plot is gripping!',
        rating: 5
      }
    ],
    relatedBooks: [
      {
        title: 'Throne of Glass',
        author: 'Sarah J. Maas',
        image: '/images/media/related3.jpg'
      },
      {
        title: 'From Blood and Ash',
        author: 'Jennifer L. Armentrout',
        image: '/images/media/related4.jpg'
      }
    ]
  },
  'seven-husbands': {
    title: 'The Seven Husbands of Evelyn Hugo',
    image: '/images/media/book4.jpg',
    description: 'The epic journey of a legendary Hollywood actress.',
    author: 'Taylor Jenkins Reid',
    publishYear: '2017',
    genre: ['Historical Fiction', 'Romance', 'LGBT'],
    rating: 4.8,
    pages: 389,
    synopsis: [
      "Aging and reclusive Hollywood movie icon Evelyn Hugo is finally ready to tell the truth about her glamorous and scandalous life.",
      "When she chooses unknown magazine reporter Monique Grant for the job, no one is more astounded than Monique herself.",
      "As Evelyn unspools her story of ruthless ambition, unexpected friendship, and a great forbidden love, Monique begins to feel a very real connection to the legendary star.",
      "Evelyn recounts her rise to fame in the 1950s, her strategic marriages to seven husbands, and the sacrifices she made to stay on top in a male-dominated industry.",
      "She reveals the truth behind her most iconic roles, the pressures of Hollywood, and the secrets she kept to protect her loved ones.",
      "Monique learns about Evelyn\u2019s deep and abiding love for fellow actress Celia St. James, a relationship that had to be hidden due to the societal norms of the time.",
      "As the story progresses, Monique discovers parallels between her own life and Evelyn\u2019s, leading her to reevaluate her own choices and ambitions.",
      "Evelyn\u2019s narrative is filled with twists and turns, including betrayals, heartbreaks, and moments of profound joy, painting a complex portrait of a woman who lived life on her own terms.",
      "In the end, Evelyn\u2019s revelations force Monique to confront a shocking truth that ties their lives together in an unexpected way."
    ],
    reviews: [
      {
        user: 'BookWorm',
        comment: 'A masterfully crafted story that will stay with you long after you finish.',
        rating: 5
      },
      {
        user: 'NovelNomad',
        comment: 'Absolutely captivating from start to finish!',
        rating: 5
      }
    ],
    relatedBooks: [
      {
        title: 'Daisy Jones & The Six',
        author: 'Taylor Jenkins Reid',
        image: '/images/media/related5.jpg'
      },
      {
        title: 'Malibu Rising',
        author: 'Taylor Jenkins Reid',
        image: '/images/media/related6.jpg'
      }
    ]
  }
} as const;

export default function BookDetailPage() {
  const router = useRouter();
  const params = useParams();
  const [book, setBook] = useState<BookDetail | null>(null);

  useEffect(() => {
    if (!params?.slug) return;
    
    const bookDetail = bookDetails[params.slug as string];
    if (!bookDetail) {
      router.push('/media');
      return;
    }
    
    setBook(bookDetail);
  }, [params, router]);

  if (!book) return null;

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative h-[60vh]">
        <Image
          src={book.image}
          alt={book.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative h-full flex items-center justify-center text-center text-white px-4"
        >
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{book.title}</h1>
            <p className="text-xl md:text-2xl">by {book.author}</p>
            <div className="mt-4 flex items-center justify-center gap-4">
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">
                {book.publishYear}
              </span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">
                {book.pages} pages
              </span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">
                ★ {book.rating}
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Synopsis */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-6">Synopsis</h2>
            <div className="space-y-4">
              {book.synopsis.map((paragraph, index) => (
                <p key={index} className="text-lg text-gray-700 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.section>

          {/* Genre Tags */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-3xl font-bold mb-6">Genres</h2>
            <div className="flex flex-wrap gap-3">
              {book.genre.map((genre, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-purple-50 text-purple-700 rounded-full"
                >
                  {genre}
                </span>
              ))}
            </div>
          </motion.section>

          {/* Reviews */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold mb-6">Community Reviews</h2>
            <div className="space-y-6">
              {book.reviews.map((review, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-lg">{review.user}</h3>
                    <div className="flex items-center">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <span
                          key={i}
                          className={`text-xl ${
                            i < review.rating ? 'text-yellow-400' : 'text-gray-300'
                          }`}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700">{review.comment}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Related Books */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6">Related Books</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {book.relatedBooks.map((relatedBook, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-lg shadow-md flex items-center gap-4"
                >
                  <div className="relative w-20 h-28">
                    <Image
                      src={relatedBook.image}
                      alt={relatedBook.title}
                      fill
                      className="object-cover rounded"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{relatedBook.title}</h3>
                    <p className="text-gray-600">{relatedBook.author}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Back Button */}
          <div className="text-center pt-8">
            <button
              onClick={() => router.push('/media')}
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full
                       hover:shadow-lg transition-shadow duration-300"
            >
              Back to BookTok
            </button>
          </div>
        </div>
      </div>
    </main>
  );
} 