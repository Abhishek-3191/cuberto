import Hero from "@/components/Hero";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      id="home"
      className="h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Hero/>
    </motion.div>
  );
};

export default Home;
