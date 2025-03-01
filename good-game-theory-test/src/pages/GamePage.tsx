import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import ReactHowler from "react-howler";
import { Howl } from "howler";
import useSound from "use-sound";
import buttonTouch from "../assets/music/buttonTouch.mp3";
import IncorrectModal from "../components/IncorrectModal";
import CorrectModal from "../components/CorrectModal";
import StarsBackground from "../components/StarsBackground";
import Cloud from "../assets/images/backgroundImages/Cloud.png";
import coverImage from "../assets/images/moonImages/coverImage.png";
import moon1 from "../assets/images/moonImages/moon1.png";
import moon2 from "../assets/images/moonImages/moon2.png";
import moon3 from "../assets/images/moonImages/moon3.png";
import moon4 from "../assets/images/moonImages/moon4.png";
import moon5 from "../assets/images/moonImages/moon5.png";
import moon6 from "../assets/images/moonImages/moon6.png";
import moon7 from "../assets/images/moonImages/moon7.png";
import moon8 from "../assets/images/moonImages/moon8.png";
import moon9 from "../assets/images/moonImages/moon9.png";
import Rocket from "../assets/images/backgroundImages/Rocket.png";
import square from "../assets/images/questionImages/square.png";
import circle from "../assets/images/questionImages/circle.png";
import triangle from "../assets/images/questionImages/triangle.png";
import GradientBackground from "../components/GradientBackground";
import backgroundMusic from "../assets/music/backgroundMusic.mp3";
import wrongAnswer from "../assets/music/wrongAnswer.mp3";

const btnTouch = new Howl({
  src: [buttonTouch],
  loop: false,
  volume: 0.5,
});
const wrongAns = new Howl({
  src: [wrongAnswer],
  loop: false,
  volume: 0.8,
});

const questions = [
  {
    question: "Which shape is this?",
    image: square,
    options: ["Square", "Triangle", "Circle", "Oval"],
    correctAnswer: "Square",
  },
  {
    question: "Which shape is this?",
    image: triangle,
    options: ["Square", "Triangle", "Circle", "Oval"],
    correctAnswer: "Triangle",
  },
  {
    question: "Which shape is this?",
    image: circle,
    options: ["Square", "Triangle", "Circle", "Oval"],
    correctAnswer: "Circle",
  },
  {
    question: "Which shape is this?",
    image: square,
    options: ["Square", "Triangle", "Circle", "Oval"],
    correctAnswer: "Square",
  },
  {
    question: "Which shape is this?",
    image: triangle,
    options: ["Square", "Triangle", "Circle", "Oval"],
    correctAnswer: "Triangle",
  },
  {
    question: "Which shape is this?",
    image: circle,
    options: ["Square", "Triangle", "Circle", "Oval"],
    correctAnswer: "Circle",
  },
  {
    question: "Which shape is this?",
    image: square,
    options: ["Square", "Triangle", "Circle", "Oval"],
    correctAnswer: "Square",
  },
  {
    question: "Which shape is this?",
    image: triangle,
    options: ["Square", "Triangle", "Circle", "Oval"],
    correctAnswer: "Triangle",
  },
  {
    question: "Which shape is this?",
    image: circle,
    options: ["Square", "Triangle", "Circle", "Oval"],
    correctAnswer: "Circle",
  },
];

const images = [moon1, moon2, moon3, moon4, moon5, moon6, moon7, moon8, moon9];

const GamePage = () => {
  const navigate = useNavigate();

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [revealedBlocks, setRevealedBlocks] = useState<number[]>([]);
  const [showWrongModal, setShowWrongModal] = useState(false);
  const [showCorrectModal, setShowCorrectModal] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerClick = (answer: string) => {
    const correct = answer === questions[currentQuestionIndex].correctAnswer;
    const nextIndex = currentQuestionIndex + 1;

    if (correct) {
      btnTouch.play();
      setScore((prevScore) => prevScore + 1);
      if (!revealedBlocks.includes(currentQuestionIndex)) {
        setRevealedBlocks([...revealedBlocks, currentQuestionIndex]);
      }
      setShowCorrectModal(true);
    } else {
      wrongAns.play();
      setShowWrongModal(true);
    }

    if (nextIndex < questions.length) {
      setTimeout(() => {
        setCurrentQuestionIndex(nextIndex);
      }, 1000);
    } else {
      setTimeout(() => {
        navigate("/completed", { state: { score: score + 1 } });
      }, 1000);
    }
  };

  return (
    <GradientBackground>
      <StarsBackground />

      <motion.h1
        className="text-4xl mb-4 font-coiny"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Mystery Blocks
      </motion.h1>
      <motion.h2
        className="text-2xl mb-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {questions[currentQuestionIndex].question}
      </motion.h2>
      {questions[currentQuestionIndex].image && (
        <motion.img
          src={questions[currentQuestionIndex].image}
          alt="question"
          className="w-16 h-16 mb-4"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        />
      )}

      <div className="grid grid-cols-2 gap-4 mb-6">
        {questions[currentQuestionIndex].options.map((option, index) => (
          <motion.button
            key={index}
            className="px-4 py-2 bg-blue-500 opacity-100 hover:bg-blue-700 rounded-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => {
              // bgMusic.play();
              handleAnswerClick(option);
            }}
          >
            {index + 1}. {option}
          </motion.button>
        ))}
      </div>

      <div className="flex justify-between">
        <motion.img
          src={Rocket}
          alt="rocket"
          className="absolute bottom-10 left-10 w-40 max-sm:w-20 max-sm:left-0"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        />
        <div className="grid grid-cols-3 gap-2">
          {[...Array(9)].map((_, index) => (
            <motion.div
              key={index}
              className="w-12 h-12 border-2 border-white max-sm:h-10 max-sm:w-10"
              style={{
                backgroundImage: `url(${
                  revealedBlocks.includes(index) ? images[index] : coverImage
                })`,
                backgroundSize: "cover",
              }}
              animate={{
                opacity: revealedBlocks.includes(index) ? 1 : 0.5,
                scale: revealedBlocks.includes(index) ? 1.1 : 1,
              }}
              transition={{ duration: 0.5 }}
            />
          ))}
        </div>
        <motion.img
          src={Rocket}
          alt="rocket"
          className="absolute bottom-10 right-10 w-40 max-sm:w-20 max-sm:right-0"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        />
      </div>

      <div className="absolute bottom-0 w-full overflow-hidden">
        <motion.div
          className="flex w-[200%]"
          initial={{ x: 0 }}
          animate={{ y: ["10%", "40%"] }}
          transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
        >
          <img src={Cloud} alt="Clouds" className="w-full h-10" />
          <img src={Cloud} alt="Clouds" className="w-full h-10" />
        </motion.div>
      </div>

      {showWrongModal && (
        <IncorrectModal onClose={() => setShowWrongModal(false)} />
      )}
      {showCorrectModal && (
        <CorrectModal onClose={() => setShowCorrectModal(false)} />
      )}
    </GradientBackground>
  );
};

export default GamePage;
