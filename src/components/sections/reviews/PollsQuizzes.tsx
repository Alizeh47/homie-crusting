'use client'

import { useState } from 'react'

interface Poll {
  id: number
  question: string
  options: {
    id: number
    text: string
    votes: number
  }[]
  totalVotes: number
}

const samplePoll: Poll = {
  id: 1,
  question: "Which country has the most welcoming hospitality culture?",
  options: [
    { id: 1, text: "Japan", votes: 245 },
    { id: 2, text: "Thailand", votes: 189 },
    { id: 3, text: "Italy", votes: 167 },
    { id: 4, text: "Morocco", votes: 134 }
  ],
  totalVotes: 735
}

const trendingTopics = [
  { id: 1, topic: "Cultural Festivals", votes: 324, trend: "+12%" },
  { id: 2, topic: "Traditional Cuisine", votes: 256, trend: "+8%" },
  { id: 3, topic: "Language Exchange", votes: 198, trend: "+15%" },
  { id: 4, topic: "Travel Stories", votes: 167, trend: "+5%" }
]

const culturalQuiz = {
  question: "What is the traditional Japanese tea ceremony called?",
  options: [
    { id: 1, text: "Chanoyu", correct: true },
    { id: 2, text: "Ikebana", correct: false },
    { id: 3, text: "Origami", correct: false },
    { id: 4, text: "Kabuki", correct: false }
  ]
}

export default function PollsQuizzes() {
  const [selectedOption, setSelectedOption] = useState<number | null>(null)
  const [hasVoted, setHasVoted] = useState(false)
  const [quizAnswer, setQuizAnswer] = useState<number | null>(null)
  const [showAnswer, setShowAnswer] = useState(false)

  const handleVote = (optionId: number) => {
    if (!hasVoted) {
      setSelectedOption(optionId)
      setHasVoted(true)
    }
  }

  const handleQuizAnswer = (optionId: number) => {
    if (!showAnswer) {
      setQuizAnswer(optionId)
      setShowAnswer(true)
    }
  }

  const calculatePercentage = (votes: number) => {
    return Math.round((votes / samplePoll.totalVotes) * 100)
  }

  return (
    <section className="w-full py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto animate-fadeIn">
          {/* Main Poll */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-12 text-center">Cultural Perspectives Poll</h2>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg animate-slideUp">
              <h3 className="text-xl font-semibold mb-6">{samplePoll.question}</h3>
              <div className="space-y-4">
                {samplePoll.options.map((option, index) => (
                  <div key={option.id} className="animate-fadeIn" style={{ animationDelay: `${index * 100}ms` }}>
                    <button
                      onClick={() => handleVote(option.id)}
                      disabled={hasVoted}
                      className={`w-full p-4 rounded-lg text-left transition-all duration-300 relative ${
                        hasVoted ? 'cursor-default' : 'hover:bg-emerald-50/80 cursor-pointer hover:scale-102'
                      } ${selectedOption === option.id ? 'bg-emerald-100/90 backdrop-blur-sm border-emerald-500' : 'bg-white/70 backdrop-blur-sm'}`}
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{option.text}</span>
                        {hasVoted && <span className="text-neutral-500">{calculatePercentage(option.votes)}%</span>}
                      </div>
                      {hasVoted && (
                        <div
                          className="absolute left-0 bottom-0 h-1 bg-emerald-500/80 rounded-full transition-all duration-1000 ease-out origin-left"
                          style={{ width: `${calculatePercentage(option.votes)}%` }}
                        />
                      )}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Trending Topics & Quiz Section */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Trending Topics */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold mb-6">Trending Topics</h3>
              <div className="space-y-4">
                {trendingTopics.map((topic, index) => (
                  <div 
                    key={topic.id}
                    className="flex items-center justify-between p-4 rounded-lg bg-white/70 backdrop-blur-sm hover:bg-white/90 transition-all duration-300"
                  >
                    <div>
                      <h4 className="font-medium">{topic.topic}</h4>
                      <p className="text-sm text-neutral-500">{topic.votes} discussions</p>
                    </div>
                    <span className="text-emerald-600 font-medium">{topic.trend}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Cultural Quiz */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold mb-6">Test Your Cultural Knowledge</h3>
              <div className="space-y-6">
                <p className="text-lg font-medium">{culturalQuiz.question}</p>
                <div className="space-y-3">
                  {culturalQuiz.options.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => handleQuizAnswer(option.id)}
                      disabled={showAnswer}
                      className={`w-full p-4 rounded-lg text-left transition-all duration-300 ${
                        showAnswer
                          ? option.correct
                            ? 'bg-emerald-100 border-emerald-500'
                            : quizAnswer === option.id
                            ? 'bg-red-100 border-red-500'
                            : 'bg-white/70'
                          : 'bg-white/70 hover:bg-white/90 cursor-pointer'
                      }`}
                    >
                      {option.text}
                      {showAnswer && option.correct && (
                        <span className="ml-2 text-emerald-600">✓ Correct</span>
                      )}
                      {showAnswer && !option.correct && quizAnswer === option.id && (
                        <span className="ml-2 text-red-600">✗ Incorrect</span>
                      )}
                    </button>
                  ))}
                </div>
                {showAnswer && (
                  <p className="text-sm text-neutral-600 mt-4">
                    The tea ceremony, known as Chanoyu or Sadō, is a traditional Japanese cultural activity involving the ceremonial preparation and presentation of matcha green tea.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 