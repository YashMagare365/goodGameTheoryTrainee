import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import useSound from "use-sound";
import buttonTouch from "../assets/music/buttonTouch.mp3";
import StarsBackground from "../components/StarsBackground";
import GradientBackground from "../components/GradientBackground";
import Astronaut from "../assets/images/backgroundImages/Astronaut.png";
import Rocket from "../assets/images/backgroundImages/Rocket.png";
import Cloud from "../assets/images/backgroundImages/Cloud.png";

const btnTouch = new Howl({
  src: [buttonTouch],
  loop: false,
  volume: 0.5,
});

const StartPage = () => {
  const navigate = useNavigate();

  return (
    <GradientBackground>
      <StarsBackground />

      {/* Title with typing effect */}
      <motion.h1
        className="text-white text-3xl font-coiny font-bold mt-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Mystery Blocks
      </motion.h1>

      {/* Floating Astronaut */}
      <motion.img
        src={Astronaut}
        alt="Astronaut"
        className="w-50 mt-4 max-sm:w-40"
        initial={{ opacity: 1, y: -20 }}
        animate={{ opacity: 1, y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
      />

      <motion.h2
        className="text-white text-lg font-semibold mt-2 max-sm:text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        Can You Unmask the Mystery
      </motion.h2>

      <div className="flex max-sm:w-3/4 relative">
        {/* Animated Rockets */}
        <motion.img
          src={Rocket}
          alt="Rocket Left"
          className="fixed bottom-20 left-10 w-30 max-sm:left-0 max-sm:w-10"
          initial={{ x: -30 }}
          animate={{ x: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        />

        <div className="flex flex-col justify-center align-middle text-center">
          <motion.p
            className="text-white text-sm max-w-xs mt-2 px-4 max-sm:text-xs"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            Guess the answer correctly, and watch the mystery image slowly come
            to life! Incorrect guesses keep the mystery hidden... How far can
            you go?
          </motion.p>

          {/* Play Button with bounce animation */}
          <motion.button
            onClick={() => {
              btnTouch.play();
              navigate("/game");
            }}
            className="m-auto mt-12 w-2/5 px-6 py-2 bg-red-500 text-white text-lg font-semibold rounded-full shadow-md hover:bg-red-600 max-sm:mt-5 max-sm:w-11/12"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            animate={{ y: [0, -5, 0] }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            Play Now
          </motion.button>
        </div>

        <motion.img
          src={Rocket}
          alt="Rocket Right"
          className="fixed bottom-20 right-10 w-30 max-sm:right-0 max-sm:w-10"
          initial={{ x: 30 }}
          animate={{ x: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        />
      </div>

      <div className="absolute bottom-0 w-full overflow-hidden">
        <motion.div
          className="flex w-[200%]"
          initial={{ x: -50 }}
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

export default StartPage;
