// import { motion } from "framer-motion";

// const Work = () => {
//   return (
//     <section className="py-20 bg-black text-white">
//       <h2 className="text-4xl text-center mb-10">Our Work</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-10">
//         {[1, 2, 3].map((item) => (
//           <motion.div
//             key={item}
//             whileHover={{ scale: 1.05 }}
//             className="relative h-60 bg-gray-800 rounded-lg flex items-center justify-center"
//           >
//             <motion.p
//               whileHover={{ opacity: 1 }}
//               className="absolute text-lg opacity-70 hover:opacity-100"
//             >
//               Project {item}
//             </motion.p>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Work;
const Work = () => {
    return (
      <div id="work" className="h-screen flex flex-col items-center justify-center text-white bg-black">
        <h2 className="text-4xl font-bold mb-6">Our Work</h2>
        <div className="flex space-x-6">
          {["Project 1", "Project 2", "Project 3"].map((project, index) => (
            <div key={index} className="p-4 bg-gray-800 rounded-lg shadow-lg">
              {project}
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Work;
  