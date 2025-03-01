import { motion } from "framer-motion";
import Confetti from "react-confetti";
import { useEffect, useState } from "react";
import correct from "../assets/images/correct.png";
import Cloud from "../assets/images/backgroundImages/Cloud.png";

const CorrectModal = ({ onClose }: { onClose: () => void }) => {
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(false), 4000); // Stop confetti after 4 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 bg-black/90 flex flex-col items-center justify-center"
      onClick={onClose}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {showConfetti && <Confetti numberOfPieces={150} recycle={false} />}

      <motion.img
        src={correct}
        alt="Correct Answer"
        className="h-3/4"
        initial={{ scale: 0.8, rotate: -10 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />

      <motion.img
        src={Cloud}
        alt="Cloud"
        className="fixed w-[30%] bottom-0 max-sm:w-full"
        // initial={{ x: "0%" }}
        animate={{ y: ["10%", "30%"] }}
        transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
      />
    </motion.div>
  );
};

export default CorrectModal;
