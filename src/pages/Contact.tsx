import { motion } from "framer-motion";
import { Input} from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <motion.div
      className="h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="bg-gray-800 p-10 rounded-lg shadow-lg w-96 text-center"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
        <motion.p
          className="text-gray-400 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Fill out the form and I'll get back to you soon!
        </motion.p>

        <motion.div
          className="flex flex-col gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Input type="text" placeholder="Your Name" className="p-3" />
          <Input type="email" placeholder="Your Email" className="p-3" />
          <Textarea placeholder="Your Message" className="p-3 h-24" />
          <motion.button
            className="bg-blue-600 hover:bg-blue-500 text-white py-2 px-6 rounded-lg mt-4"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Send Message
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
