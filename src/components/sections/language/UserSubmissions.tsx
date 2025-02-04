'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FaHeart, FaRegHeart, FaGlobe, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface Submission {
  id: number;
  word: string;
  meaning: string;
  username: string;
  country: string;
  countryCode: string;
  likes: number;
  isLiked?: boolean;
  timestamp: string;
}

const submissions: Submission[] = [
  {
    id: 1,
    word: "Sobremesa",
    meaning: "The time spent around the table after lunch or dinner, talking to the people you shared the meal with",
    username: "Maria G.",
    country: "Spain",
    countryCode: "ES",
    likes: 234,
    timestamp: "2 days ago"
  },
  {
    id: 2,
    word: "Gigil",
    meaning: "The urge to pinch or squeeze something that is irresistibly cute",
    username: "Anna L.",
    country: "Philippines",
    countryCode: "PH",
    likes: 189,
    timestamp: "5 days ago"
  },
  {
    id: 3,
    word: "Waldeinsamkeit",
    meaning: "The feeling of being alone in the woods, connected to nature",
    username: "Hans M.",
    country: "Germany",
    countryCode: "DE",
    likes: 156,
    timestamp: "1 week ago"
  },
  {
    id: 4,
    word: "Hygge",
    meaning: "A quality of coziness and comfortable conviviality that engenders a feeling of contentment or well-being",
    username: "Lars K.",
    country: "Denmark",
    countryCode: "DK",
    likes: 245,
    timestamp: "3 days ago"
  },
  {
    id: 5,
    word: "Komorebi",
    meaning: "The interplay of light and leaves when sunlight shines through trees",
    username: "Yuki T.",
    country: "Japan",
    countryCode: "JP",
    likes: 278,
    timestamp: "4 days ago"
  },
  {
    id: 6,
    word: "Fernweh",
    meaning: "A longing for distant places; the opposite of homesickness",
    username: "Sophie B.",
    country: "Austria",
    countryCode: "AT",
    likes: 192,
    timestamp: "6 days ago"
  }
];

const UserSubmissions = () => {
  const [submissionsList, setSubmissionsList] = useState<Submission[]>(
    submissions.map(s => ({ ...s, isLiked: false }))
  );
  const [currentPage, setCurrentPage] = useState(0);
  const cardsPerPage = 3;
  const totalPages = Math.ceil(submissionsList.length / cardsPerPage);

  const handleLike = (id: number) => {
    setSubmissionsList(prev =>
      prev.map(submission => {
        if (submission.id === id) {
          return {
            ...submission,
            likes: submission.isLiked ? submission.likes - 1 : submission.likes + 1,
            isLiked: !submission.isLiked
          };
        }
        return submission;
      })
    );
  };

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const currentSubmissions = submissionsList.slice(
    currentPage * cardsPerPage,
    (currentPage + 1) * cardsPerPage
  );

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Community Expressions & Slang
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover unique words and expressions shared by our global community.
          </p>
        </motion.div>

        <div className="relative max-w-7xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={prevPage}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors"
          >
            <FaChevronLeft className="text-gray-600 text-xl" />
          </button>
          <button
            onClick={nextPage}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors"
          >
            <FaChevronRight className="text-gray-600 text-xl" />
          </button>

          {/* Cards Container */}
          <div className="overflow-hidden px-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {currentSubmissions.map((submission, index) => (
                  <motion.div
                    key={submission.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-2">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white">
                            <FaGlobe />
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">{submission.username}</p>
                            <p className="text-sm text-gray-500">{submission.country}</p>
                          </div>
                        </div>
                        <span className="text-sm text-gray-400">{submission.timestamp}</span>
                      </div>

                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{submission.word}</h3>
                      <p className="text-gray-600 mb-4">{submission.meaning}</p>

                      <div className="flex items-center justify-between">
                        <button
                          onClick={() => handleLike(submission.id)}
                          className="flex items-center space-x-2 text-gray-600 hover:text-red-500 transition-colors"
                        >
                          {submission.isLiked ? (
                            <FaHeart className="text-red-500" />
                          ) : (
                            <FaRegHeart />
                          )}
                          <span>{submission.likes}</span>
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full
                           font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
            Share Your Expression
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default UserSubmissions; 