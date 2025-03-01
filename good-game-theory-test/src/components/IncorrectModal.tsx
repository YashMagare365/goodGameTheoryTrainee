import { motion } from "framer-motion";
import wrong from "../assets/images/wrong.png";

const IncorrectModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <motion.div
      className="fixed inset-0 bg-black/90 flex flex-col items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      onClick={onClose}
    >
      <motion.h1
        className="text-white font-bold text-3xl text-center mb-4 fixed top-30"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        Incorrect Answer
      </motion.h1>
      <motion.img
        src={wrong}
        alt="Wrong Answer"
        className="h-4/5"
        animate={{ y: ["10%", "40%"] }}
        transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
      />
    </motion.div>
  );
};

export default IncorrectModal;
