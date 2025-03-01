import { useNavigate } from "react-router-dom";
// import Star from "../assets/images/backgroundImages/Star.png";
import StarsBackground from "../components/StarsBackground";
import Astronaut from "../assets/images/backgroundImages/Astronaut.png";
import Rocket from "../assets/images/backgroundImages/Rocket.png";
import Cloud from "../assets/images/backgroundImages/Cloud.png";
import GradientBackground from "../components/GradientBackground";

const StartPage = () => {
  const navigate = useNavigate();
  return (
    <GradientBackground>
      <StarsBackground />

      <h1 className="text-white text-3xl font-coiny font-bold mt-10">
        Mystery Blocks
      </h1>

      <img src={Astronaut} alt="Astronaut" className="w-50 mt-4 max-sm:w-40" />

      <h2 className="text-white text-lg font-semibold mt-2 max-sm:text-sm">
        Can You Unmask the Mystery
      </h2>
      <div className="flex max-sm:w-3/4">
        <img
          src={Rocket}
          alt="Rocket Left"
          className="absolute bottom-20 left-10 w-20 max-sm:left-0 w-10"
        />

        <div className="flex flex-col justify-center align-middle text-center">
          <p className="text-white text-sm max-w-xs mt-2 px-4 max-sm:text-xs mt-0">
            Guess the answer correctly, and watch the mystery image slowly come
            to life! Incorrect guesses keep the mystery hidden... How far can
            you go?
          </p>

          <button
            onClick={() => navigate("/game")}
            className="m-auto mt-12 w-2/5 px-6 py-2 bg-red-500 text-white text-lg font-semibold rounded-full shadow-md hover:bg-red-600 max-sm:mt-5 w-11/12"
          >
            Play Now
          </button>
        </div>
        <img
          src={Rocket}
          alt="Rocket Right"
          className="absolute bottom-20 right-10 w-20 max-sm:right-0 w-10"
        />
      </div>

      <img
        src={Cloud}
        alt="Clouds"
        className="absolute bottom-0 w-full h-10 max-sm:h-10"
      />
    </GradientBackground>
  );
};

export default StartPage;
