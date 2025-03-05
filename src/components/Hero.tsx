import { motion } from "framer-motion";
import { useState } from "react";

// Letter-by-Letter Animation for Title
const titleVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

// Final Text Fall Animation
const textFallVariants = {
  visible: { y: 0, opacity: 1 },
  fall: {
    y: 100,
    opacity: 0,
    transition: { duration: 5.8, ease: "easeInOut" },
  },
};


// **🔹 Improved Smooth Scroll Function**
const handleScroll = () => {
  const nextSection = window.scrollY + window.innerHeight; // Moves to the next section
  const maxScroll = document.body.scrollHeight - window.innerHeight; // Last section
  
  if (window.scrollY >= maxScroll) {
    // If at the bottom, scroll back to the top
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    // Otherwise, move to the next section
    window.scrollTo({ top: nextSection, behavior: "smooth" });
  }
};


const Hero = () => {
  const [textKey, setTextKey] = useState(0);

  return (
    <motion.section
      className="h-screen flex flex-col items-center justify-center bg-black text-white px-4 text-center relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Background Scaling Effect */}
      
      {/* Animated Title (Letters Appear One by One, Then Falls & Repeats) */}
      <motion.div
        key={textKey}
        initial="visible"
        animate="fall"
        variants={textFallVariants}
        onAnimationComplete={() => setTextKey((prev) => prev + 1)}
      >
        <h1 className="relative text-4xl md:text-6xl font-bold flex">
          {"We Build Amazing Websites".split("").map((char, index) => (
            <motion.span
              key={index}
              custom={index}
              variants={titleVariants}
              initial="hidden"
              animate="visible"
              className="inline-block"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </h1>
      </motion.div>
  <br/>
      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mt-5 text-lg md:text-xl"
      >
        Inspired by Cuberto animations
      </motion.p>

      {/* "Get Started" Button with Smooth Scroll & Enhanced Hover */}
      <motion.button
        onClick={handleScroll}
        whileHover={{
          scale: 1.1,
          background: "linear-gradient(to right, #00c6ff, #0072ff)",
          color: "#000",
          transition: { duration: 0.3 },
        }}
        whileTap={{ scale: 0.95 }}
        className="mt-6 px-8 py-4 rounded-full text-white text-lg md:text-xl shadow-lg transition-all duration-700
        bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
      >
        Get Started
      </motion.button>
    </motion.section>
  );
};

export default Hero;
