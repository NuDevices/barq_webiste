import { motion } from "framer-motion";

const SlidingText = () => {
  return (
    <motion.div
      className="overflow-hidden whitespace-nowrap text-center"
      initial={{ x: "100%" }}
      animate={{ x: "-100%" }}
      transition={{ ease: "linear", duration: 8, repeat: Infinity }}
    >
      <p className="text-lg md:text-xl text-[#2CB2DD] font-semibold">
        AI Acceleration • Edge Computing • Smarter AI • Next-Gen Vision Processing
      </p>
    </motion.div>
  );
};

export default SlidingText;
