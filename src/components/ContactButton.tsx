// // // import { motion } from "framer-motion";
// // // import { useNavigate } from "react-router-dom";

// // // const ContactButton = () => {
// // //   const navigate = useNavigate();

// // //   return (
// // //     <motion.div
// // //       className="fixed bottom-6 right-6 cursor-pointer flex items-center justify-center"
// // //       initial={{ opacity: 0, scale: 0.8 }}
// // //       animate={{ opacity: 1, scale: 1 }}
// // //       transition={{ duration: 0.5 }}
// // //       whileHover={{ scale: 1.2 }}
// // //       whileTap={{ scale: 0.9 }}
// // //       onClick={() => navigate("/contact")}
// // //     >
// // //       {/* Rotating Text */}
// // //       <motion.div
// // //         className="absolute w-16 h-16 rounded-full border border-gray-500"
// // //         animate={{ rotate: 360 }}
// // //         transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
// // //       >
// // //         <span className="absolute text-xs top-1 left-1 text-gray-300">
// // //           Contact - Contact - Contact
// // //         </span>
// // //       </motion.div>

// // //       {/* Floating Face Emoji */}
// // //       <motion.img
// // //         src="https://cdn-icons-png.flaticon.com/512/147/147144.png"
// // //         alt="Contact"
// // //         className="w-12 h-12 rounded-full shadow-lg"
// // //         whileHover={{ scale: 1.2, rotate: 10 }}
// // //       />
// // //     </motion.div>
// // //   );
// // // };

// // // export default ContactButton;
// // import { useState } from "react";
// // import { motion } from "framer-motion";

// // const ContactButton = () => {
// //   const [hovered, setHovered] = useState(false);

// //   return (
// //     <motion.div
// //       className="fixed bottom-6 right-6 flex items-center justify-center w-16 h-16 bg-blue-500 rounded-full shadow-lg cursor-pointer transition-all duration-300"
// //       onMouseEnter={() => setHovered(true)}
// //       onMouseLeave={() => setHovered(false)}
// //     >
// //       <motion.span
// //         className="text-2xl"
// //         animate={{ scale: hovered ? 1.2 : 1 }}
// //       >
// //         😃
        
// //       </motion.span>
// //       {hovered && (
// //         <motion.span
// //           className="absolute text-sm font-bold text-white mt-14 bg-black px-3 py-1 rounded-lg"
// //           initial={{ opacity: 0, y: 10 }}
// //           animate={{ opacity: 1, y: 0 }}
// //         >
// //           Connect
// //         </motion.span>
// //       )}
      
// //     </motion.div>
    
// //   );
// // };

// // export default ContactButton;
// import { useState } from "react";
// import { motion } from "framer-motion";

// const ContactButton = () => {
//   const [hovered, setHovered] = useState(false);

//   // Function to scroll to the Contact section
//   const scrollToContact = () => {
//     const section = document.getElementById("contact");
//     if (section) {
//       section.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <motion.div
//       className="fixed bottom-6 right-6 flex items-center justify-center w-16 h-16 bg-blue-500 rounded-full shadow-lg cursor-pointer transition-all duration-300"
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//       onClick={scrollToContact} // Click event to scroll to Contact
//     >
//       {/* Rotating Face Emoji */}
//       <motion.span
//         className="text-2xl"
//         animate={{ rotate: 360 }} // Infinite Rotation
//         transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
//       >
//         😃
//       </motion.span>

//       {/* Hover Text "Connect" */}
//       {hovered && (
//         <motion.span
//           className="absolute text-sm font-bold text-white mt-14 bg-black px-3 py-1 rounded-lg"
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//         >
//           Connect
//         </motion.span>
//       )}
//     </motion.div>
//   );
// };

// export default ContactButton;

import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // Import navigation

const ContactButton = () => {
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate(); // Hook for navigation

  return (
    <motion.div
      className="fixed bottom-6 right-6 flex items-center justify-center w-16 h-16 bg-blue-500 rounded-full shadow-lg cursor-pointer transition-all duration-300"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => navigate("/contact")} // Navigate to Contact Page
    >
      {/* Rotating Face Emoji */}
      <motion.span
        className="text-2xl"
        animate={{ rotate: 360 }} // Infinite Rotation
        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
      >
        😃
      </motion.span>

      {/* Hover Text "Connect" */}
      {hovered && (
        <motion.span
          className="absolute text-sm font-bold text-white mt-14 bg-black px-3 py-1 rounded-lg"
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
