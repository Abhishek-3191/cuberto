// import { motion } from "framer-motion";

// const services = [
//   "Web Design",
//   "Mobile Apps",
//   "UI/UX",
//   "Branding",
//   "Marketing",
// ];

// const Services = () => {
//   return (
//     <section className="py-20 bg-gray-900 text-white">
//       <h2 className="text-4xl text-center mb-10">Our Services</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-10">
//         {services.map((service, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: index * 0.2, duration: 0.6 }}
//             className="p-6 bg-gray-800 rounded-lg text-center"
//           >
//             {service}
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Services;

import { motion } from "framer-motion";

const Services = () => {
  return (
    <motion.div
      id="services"
      className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl font-bold mb-8">Our Services</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {["Web Design", "Mobile Apps", "UI/UX", "Branding", "Marketing"].map((service, index) => (
          <motion.div
            key={index}
            className="p-4 bg-gray-800 rounded-lg text-center shadow-lg cursor-pointer hover:scale-105 transition-all duration-300"
          >
            {service}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Services;
