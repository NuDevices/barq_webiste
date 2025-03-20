import { useState, useEffect } from "react";

const slogans = [
  "Redefining AI Vision Processing",
  "Edge AI, Smarter and Faster",
  "BARQ - AI Without Limits",
  "Unmatched AI Vision Performance"
];

const TypingEffect = () => {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (displayText.length < slogans[index].length) {
      timeout = setTimeout(() => {
        setDisplayText(slogans[index].slice(0, displayText.length + 1));
      }, 80);
    } else {
      timeout = setTimeout(() => {
        setDisplayText("");
        setIndex((prev) => (prev + 1) % slogans.length);
      }, 2000);
    }
    return () => clearTimeout(timeout);
  }, [displayText, index]);

  return (
    <p className="text-3xl text-gray-500 font-medium mt-6 transition-opacity duration-500">
      {displayText}|
    </p>
  );
};

export default TypingEffect;