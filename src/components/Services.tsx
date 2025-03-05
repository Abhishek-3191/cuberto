import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Cursor = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [cursorSize, setCursorSize] = useState(12);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", moveCursor);
    return () => document.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full pointer-events-none mix-blend-difference"
      style={{
        transform: `translate(${cursorPos.x - cursorSize / 2}px, ${cursorPos.y - cursorSize / 2}px)`,
        width: isHovering ? 50 : cursorSize,
        height: isHovering ? 30 : cursorSize,
        background: "#fff",
        borderRadius: isHovering ? "10px" : "50%",
        transition: "all 0.2s ease-in-out",
      }}
    />
  );
};



const Services = () => {
  const [hovering, setHovering] = useState(false);

  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hover: { scale: 1.1, rotateX: 10, transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      id="services"
      className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-6 md:px-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* ✅ Custom Cursor */}
      <Cursor />

      <h2 className="text-4xl font-bold mb-8">Our Services</h2>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl"
        initial="initial"
        animate="animate"
      >
        {["Web Design", "Mobile Apps", "UI/UX", "Branding", "Marketing", "SEO Optimization"].map(
          (service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className="p-6 bg-gray-800 rounded-lg text-center shadow-lg cursor-pointer relative transition-all duration-300"
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 hover:opacity-20 transition-all duration-300 rounded-lg"
              />
              {service}
            </motion.div>
          )
        )}
      </motion.div>
    </motion.div>
  );
};

export default Services;
