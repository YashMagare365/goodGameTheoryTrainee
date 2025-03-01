import { motion } from "framer-motion";
import StarsBackground from "../components/StarsBackground";
import { useLocation, useNavigate } from "react-router-dom";
import { Howl } from "howler";
import astronautRocket from "../assets/images/astronaut_rocket.png";
import winner_astronaut from "../assets/images/winner_astronaut.png";
import Rocket from "../assets/images/backgroundImages/Rocket.png";
import Cloud from "../assets/images/backgroundImages/Cloud.png";
import GradientBackground from "../components/GradientBackground";
import Confetti from "react-confetti";
import { useState, useEffect } from "react";

import yay from "../assets/music/yay.mp3";

const Yay = new Howl({
  src: [yay],
  loop: false,
  volume: 0.5,
});

const Completed = () => {
  const [showConfetti, setShowConfetti] = useState(true);
  useEffect(() => {
    Yay.play();
    const timer = setTimeout(() => setShowConfetti(false), 4000); // Stop confetti after 4 seconds
    return () => clearTimeout(timer);
  }, []);

  const location = useLocation();
  const navigate = useNavigate();
  const score = location.state?.score || 0;
  const isPerfectScore = score === 9;

  return (
    <GradientBackground>
      <StarsBackground />
      {showConfetti && <Confetti numberOfPieces={150} recycle={false} />}
      <motion.h1
        className="text-3xl md:text-4xl font-bold mt-6 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Mystery Blocks
      </motion.h1>

      <motion.div
        className="text-center mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {isPerfectScore ? (
          <h2 className="text-3xl md:text-4xl font-extrabold">Correct!</h2>
        ) : (
          <>
            <h2 className="text-xl md:text-2xl font-bold max-sm:text-md">
              So Close Yet So Far:
            </h2>
            <h2 className="text-3xl md:text-4xl font-extrabold max-sm:text-lg">
              {score}/9 Score
            </h2>
            <p className="text-lg mt-2">
              One Mark Away from Seeing the Full Picture!
            </p>
          </>
        )}
      </motion.div>

      <motion.img
        src={isPerfectScore ? winner_astronaut : astronautRocket}
        alt="Astronaut"
        className="w-[20%] max-w-[250px] md:max-w-[300px] lg:max-w-[350px] mt-6 max-sm:w-[40%]"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      />

      <div className="flex flex-wrap justify-around items-center w-full mt-4 gap-6">
        <motion.img
          src={Rocket}
          alt="rocket"
          className="h-28 md:h-36 w-auto hidden md:block"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        />

        <div className="flex flex-wrap justify-center gap-4">
          {!isPerfectScore && (
            <motion.button
              className="bg-red-500 text-white px-6 py-2 rounded-lg text-lg font-bold transition-transform transform hover:scale-105"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => navigate("/game")}
            >
              Try Again
            </motion.button>
          )}
          <motion.button
            className="bg-red-500 text-white px-6 py-2 rounded-lg text-lg font-bold transition-transform transform hover:scale-105"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => navigate("/next")}
          >
            Next
          </motion.button>
        </div>

        <motion.img
          src={Rocket}
          alt="rocket"
          className="h-28 md:h-36 w-auto hidden md:block"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        />
      </div>

      <div className="absolute bottom-0 w-full overflow-hidden">
        <motion.div
          className="flex w-[200%]"
          initial={{ x: 0 }}
          animate={{ y: ["10%", "30%"] }}
          transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
        >
          <img src={Cloud} alt="Clouds" className="w-full h-10" />
          <img src={Cloud} alt="Clouds" className="w-full h-10" />
        </motion.div>
      </div>
    </GradientBackground>
  );
};

export default Completed;
