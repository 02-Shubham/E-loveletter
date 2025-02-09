// "use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaHeart } from "react-icons/fa";

interface Gift {
  day: string;
  emoji: string;
  message: string;
  image: string;
  description: string;
}

const gifts: Gift[] = [
  {
    day: "Rose Day",
    emoji: "🌹",
    message: "A rose that never fades, just like my love for you.",
    image: "/roseday.jpg",
    description:
      "On this Rose Day, I give you a rose as eternal as my love. Each petal represents a moment we've shared, and the stem symbolizes the strength of our bond.",
  },
  {
    day: "Propose Day",
    emoji: "💍",
    message: "From this day forward, I want every moment to be with you.",
    image: "/propose.png",
    description:
      "On this special day, I gather all my love and courage to say—I choose you, today and forever. You are my greatest adventure, my sweetest dream, and the love I never want to lose.",
  },
  {
    day: "Chocolate Day",
    emoji: "🍫",
    message: "Sweet like chocolates, but never as sweet as you.",
    image: "/chocoday.jpg",
    description:
      "Chocolates melt, but my love for you only grows stronger. Each piece is a taste of the sweetness you bring to my life.",
  },
  {
    day: "Teddy Day",
    emoji: "🧸",
    message: "Soft and cuddly, just like my feelings for you.",
    image: "/teddy.jpg",
    description:
      "This teddy bear is a reminder of my soft spot for you. It's always there to comfort you when I can't be physically present.",
  },
  {
    day: "Promise Day",
    emoji: "🤝",
    message: "I promise to love you more each day.",
    image: "/image.png",
    description:
      "Today and every day, I promise to stand by you, support you, and love you unconditionally. My heart is yours, forever and always.",
  },
  {
    day: "Hug Day",
    emoji: "🤗",
    message: "A warm hug, forever yours.",
    image: "/hug.jpg",
    description:
      "My arms are always open for you. In every hug, I promise comfort, safety, and endless love.",
  },
  {
    day: "Kiss Day",
    emoji: "💋",
    message: "A kiss to seal our love forever.",
    image: "/kiss.jpg",
    description:
      "Every kiss we share is magical. It's a promise, a comfort, and a reminder of our deep connection.",
  },
  {
    day: "Valentine's Day",
    emoji: "❤️",
    message: "My heart belongs to you, today and always.",
    image: "/v.jpg",
    description:
      "On this special day, I celebrate you and the love we share. You're my valentine today and every day.",
  },
];

interface TimelineItemProps {
  day: string;
  emoji: string;
  message: string;
  isActive: boolean;
  onClick: () => void;
  index: number;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  day,
  emoji,
  isActive,
  onClick,
}) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className={`flex flex-col items-center cursor-pointer ${
      isActive ? "text-red-500" : "text-gray-600"
    }`}
    onClick={onClick}
  >
    <div
      className={`w-12 h-12 rounded-full flex items-center justify-center ${
        isActive ? "bg-red-500 text-white" : "bg-gray-200"
      }`}
    >
      {emoji}
    </div>
    <div className="mt-2 text-center">
      <div className="font-bold">{day}</div>
    </div>
    {isActive && (
      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="absolute top-full mt-2">
        <FaHeart className="text-red-500 w-6 h-6" />
      </motion.div>
    )}
  </motion.div>
);

export default function ValentineWeek() {
  const [activeDay, setActiveDay] = useState<number>(0);

  return (
    <div className="bg-pink-100 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">
        Here is your <br></br> Valentine's Week Gifts 🎁❤️
      </h2>
      <div className="max-w-6xl mx-auto px-4">
        <div className="relative">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-300 -translate-y-1/2" />
          <div className="relative flex justify-between">
            {gifts.map((gift, index) => (
              <TimelineItem
                key={gift.day}
                {...gift}
                isActive={activeDay === index}
                onClick={() => setActiveDay(index)}
                index={index}
              />
            ))}
          </div>
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeDay}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="mt-16 bg-white p-6 rounded-lg shadow-lg flex"
          >
            <img
              src={gifts[activeDay].image || "/placeholder.svg"}
              alt={gifts[activeDay].day}
              className="w-1/3 h-64 object-cover rounded-lg mr-6"
            />
            <div className="w-2/3">
              <h3 className="text-2xl font-bold mb-2">{gifts[activeDay].day}</h3>
              <p className="text-xl mb-4">{gifts[activeDay].message}</p>
              <p className="text-gray-600">{gifts[activeDay].description}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
