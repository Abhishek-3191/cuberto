import { motion } from "framer-motion";
import { useState } from "react";

const Work = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id="work" className="relative min-h-screen flex flex-col justify-center items-center text-white overflow-hidden">
      {/* 🔹 Background Video */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      >
      <source src="/a.mp4" type="video/mp4" />

      </video>

      <h2 className="text-4xl font-bold text-center mb-10 z-10">Our Work</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-10 w-full max-w-6xl z-10">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <motion.div
            key={item}
            className="relative h-60 bg-gray-900 rounded-lg flex items-center justify-center overflow-hidden cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onMouseEnter={() => setHoveredProject(item)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            {/* 🔹 Image Placeholder (Replace with Actual Project Image) */}
            <img 
              src={`https://th.bing.com/th/id/OIP._rdHB9LTODxUDFgl5QlfBAHaFQ?rs=1&pid=ImgDetMain`} 
              alt={`Project ${item}`} 
              className="absolute w-full h-full object-cover opacity-60"
            />

            {/* 🔹 Hover Effect - Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: hoveredProject === item ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
            >
              <motion.p className="text-xl font-semibold tracking-wide">
                Project {item}
              </motion.p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Work;

  