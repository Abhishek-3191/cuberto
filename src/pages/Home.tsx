// import { motion } from "framer-motion";
// import Hero from "../components/Hero";
// import Services from "../components/Services";
// import Work from "../components/Work";

// const Home = () => {
//   return (
//     <motion.div
//       className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.8 }}
//     >
//       <Hero />
//       <Services />
//       <Work />
//     </motion.div>
//   );
// };

// export default Home;

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
      <h1 className="text-5xl font-bold">Welcome to My Website</h1>
    </motion.div>
  );
};

export default Home;
