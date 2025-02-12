
import { useState } from "react";
import { motion } from "framer-motion";

const flamesResult = {
  F: "Friends 👫",
  L: "Love ❤️",
  A: "Affection 💕",
  M: "Marriage 💍",
  E: "Enemy 😡",
  S: "Sex 👨‍👩‍👧‍👦"
};

function calculateFlames(name1: string, name2: string): string {
  let combined = (name1 + name2).toLowerCase().replace(/[^a-z]/g, "");
  let uniqueChars = new Set(combined);
  let count = uniqueChars.size;
  let flames = "FLAMES";
  while (flames.length > 1) {
    let removeIndex = (count % flames.length) - 1;
    flames =
      removeIndex >= 0
        ? flames.slice(removeIndex + 1) + flames.slice(0, removeIndex)
        : flames.slice(0, flames.length - 1);
  }
  return flamesResult[flames as keyof typeof flamesResult] || "Unknown";
}

export default function FlamesGame() {
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [result, setResult] = useState("?");
  const [showResult, setShowResult] = useState(false);

  const handleSubmit = () => {
    if (name1 && name2) {
      setResult(calculateFlames(name1, name2));
      setShowResult(true);
    }
  };

  const handleReset = () => {
    setName1("");
    setName2("");
    setResult("?");
    setShowResult(false);
  };

  return (
    <div className="bg-pink-100 p-10">
        <h2 className="font-bold text-[30px] bmb-5 ml-5">Hey if you are still not sure<br></br> you can check our names on flames...</h2>
        <h3 className="text-center text-pink-100">Ye wali game to School mei bhi nahi khela</h3>
        <div className="p-6 bg-pink-100 shadow-lg rounded-lg max-w-md mx-auto text-center">
      <h2 className="text-2xl font-bold mb-4">🔥 FLAMES Game 🔥</h2>
      <input
        type="text"
        placeholder="Your Name"
        value={name1}
        onChange={(e) => setName1(e.target.value)}
        className="w-full p-2 border rounded mb-2"
      />
      <input
        type="text"
        placeholder="Partner's Name"
        value={name2}
        onChange={(e) => setName2(e.target.value)}
        className="w-full p-2 border rounded mb-4"
      />
      <div className="flex justify-center space-x-4"> {/* Container for buttons */}
        <button
          onClick={handleSubmit}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Check Compatibility ❤️
        </button>
        <button
          onClick={handleReset}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Reset
        </button>
      </div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: showResult ? 1 : 0 }}
        transition={{ type: "spring", stiffness: 120 }}
        className="mt-4 text-xl font-bold text-pink-600"
      >
        {showResult && result}
      </motion.div>
    </div>
    </div>
  );
}
