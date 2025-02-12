import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const questions = [
  { question: "What's my favorite color?", answer: "Red" },
  { question: "What's my favorite food?", answer: "Pizza" },
  { question: "Where did we first meet?", answer: "College" },
  { question: "What's my dream vacation destination?", answer: "Paris" },
  { question: "What’s my favorite movie?", answer: "The Notebook"}
];

const ValentineParallax = () => {
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 300], [0, -100]);
  const textY = useTransform(scrollY, [0, 300], [0, 50]);

  const [answers, setAnswers] = useState(Array(questions.length).fill(""));
  const [score, setScore] = useState<number | null>(null);

  const handleChange = (index: number, value: string) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const checkAnswers = () => {
    let correctCount = 0;
    answers.forEach((ans, index) => {
      if (ans.toLowerCase() === questions[index].answer.toLowerCase()) {
        correctCount++;
      }
    });
    setScore(correctCount);
  };

  const resetForm = () => {
    setAnswers(Array(questions.length).fill(""));
    setScore(null);
  };

  return (
    <div className="relative min-h-screen bg-pink-100 flex flex-col items-center justify-center p-6">
      {/* Floating Hearts */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-red-500 text-3xl"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
        >
          ❤️
        </motion.div>
      ))}

      {/* Couples' Quiz */}
      <div className="relative z-10 bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold text-center text-pink-600">How Well Do You Know Me?</h2>
        <div className="mt-4 space-y-4">
          {questions.map((q, index) => (
            <div key={index} className="flex flex-col">
              <label className="text-gray-800 font-medium">{q.question}</label>
              <input
                type="text"
                className="border p-2 rounded-lg mt-1"
                value={answers[index]}
                onChange={(e) => handleChange(index, e.target.value)}
                placeholder="Your answer..."
              />
            </div>
          ))}
          <button
            className="mt-4 w-full bg-red-500 text-white py-2 rounded-lg font-bold hover:bg-red-600"
            onClick={checkAnswers}
          >
            Submit Answers
          </button>
          <button
            className="mt-2 w-full bg-red-500 text-white py-2 rounded-lg font-bold hover:bg-red-600"
            onClick={resetForm}
          >
            Reset
          </button>
          {score !== null && (
            <p className="text-center text-lg font-semibold mt-4 text-gray-800">
              You got {score} out of {questions.length} correct! 💖
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ValentineParallax;
