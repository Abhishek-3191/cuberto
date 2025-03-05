import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react"; // Icons for mobile menu

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed w-full top-0 flex items-center justify-between px-6 py-4 text-white bg-black/60 backdrop-blur-md z-50">
      {/* Logo with Blinking Effect */}
      <motion.h1
        className="text-2xl font-bold"
        animate={{ opacity: [1, 0, 1] }}
        transition={{ repeat: Infinity, duration: 1.5, times: [0, 0.67, 1] }}
      >
        Cuberto Clone
      </motion.h1>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-6">
        {["home", "services", "work", "contact"].map((section) => (
          <motion.button
            key={section}
            onClick={() => scrollToSection(section)}
            className="relative group transition duration-300"
            whileHover={{ scale: 1.1 }}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
            <motion.span
              className="absolute left-0 bottom-[-3px] w-full h-[2px] bg-white origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
            />
          </motion.button>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-16 left-0 w-full bg-black/90 backdrop-blur-lg py-4 flex flex-col items-center space-y-4 md:hidden"
        >
          {["home", "services", "work", "contact"].map((section) => (
            <button
              key={section}
              onClick={() => {
                scrollToSection(section);
                setMenuOpen(false);
              }}
              className="text-lg hover:underline transition duration-300"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </motion.div>
      )}
    </header>
  );
};

export default Header;

  