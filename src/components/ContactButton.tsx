import { useState } from "react";
import { motion } from "framer-motion";

const ContactButton = () => {
  const [hovered, setHovered] = useState(false);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      className="fixed bottom-6 right-6 sm:bottom-4 sm:right-4 md:bottom-8 md:right-8 flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-blue-500 rounded-full shadow-lg cursor-pointer transition-all duration-300"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => scrollToSection("contact")}
    >
      {/* Rotating Face Emoji */}
      <motion.span
        className="text-xl sm:text-2xl md:text-3xl"
        animate={{ rotate: 360 }} // Infinite Rotation
        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
      >
        😃
      </motion.span>

      {/* Hover Text "Connect" */}
      {hovered && (
        <motion.span
          className="absolute text-xs sm:text-sm md:text-base font-bold text-white mt-12 sm:mt-14 bg-black px-3 py-1 rounded-lg"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Connect
        </motion.span>
      )}
    </motion.div>
  );
};

export default ContactButton;
