// import { motion } from "framer-motion";
// import { useState } from "react";

// const Header = () => {
//   const [hovered, setHovered] = useState(false);

//   return (
//     <header className="fixed w-full top-0 z-50 bg-transparent p-5 flex justify-between">
//       <motion.div
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="text-white text-xl font-bold"
//       >
//         Cuberto Clone
//       </motion.div>

//       <nav className="flex gap-6 text-white">
//         {["Home", "Services", "Work", "Contact"].map((item, index) => (
//           <motion.a
//             key={index}
//             href={`#${item.toLowerCase()}`}
//             className="relative"
//             onMouseEnter={() => setHovered(true)}
//             onMouseLeave={() => setHovered(false)}
//             whileHover={{ scale: 1.1 }}
//           >
//             {item}
//             {hovered && (
//               <motion.div
//                 layoutId="underline"
//                 className="absolute left-0 w-full h-[2px] bg-white"
//               />
//             )}
//           </motion.a>
//         ))}
//       </nav>
//     </header>
//   );
// };

// export default Header;
const Header = () => {
    const scrollToSection = (id: string) => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    };
  
    return (
      <header className="fixed w-full top-0 flex justify-between p-6 text-white bg-black/60 backdrop-blur-md">
        <h1 className="text-2xl font-bold">Cuberto Clone</h1>
        <nav className="space-x-6">
          <button onClick={() => scrollToSection("home")} className="hover:underline">Home</button>
          <button onClick={() => scrollToSection("services")} className="hover:underline">Services</button>
          <button onClick={() => scrollToSection("work")} className="hover:underline">Work</button>
          <button onClick={() => scrollToSection("contact")} className="hover:underline">Contact</button>
        </nav>
      </header>
    );
  };
  
  export default Header;
  