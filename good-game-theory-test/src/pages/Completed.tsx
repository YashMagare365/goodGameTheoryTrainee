import StarsBackground from "../components/StarsBackground";
import { useLocation, useNavigate } from "react-router-dom";
import astronautRocket from "../assets/images/astronaut_rocket.png";
import winner_astronaut from "../assets/images/winner_astronaut.png";
import Rocket from "../assets/images/backgroundImages/Rocket.png";
import Cloud from "../assets/images/backgroundImages/Cloud.png";
import GradientBackground from "../components/GradientBackground";

const Completed = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const score = location.state?.score || 0;
  const isPerfectScore = score === 9;

  return (
    <GradientBackground>
      <StarsBackground />

      {/* Game Title */}
      <h1 className="text-3xl md:text-4xl font-bold mt-6 text-center">
        Mystery Blocks
      </h1>

      {/* Score & Feedback Section */}
      <div className="text-center mt-4">
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
      </div>

      {/* Astronaut Image */}
      <img
        src={isPerfectScore ? winner_astronaut : astronautRocket}
        alt="Astronaut"
        className="w-[40%] max-w-[250px] md:max-w-[300px] lg:max-w-[350px] mt-6"
      />

      {/* Buttons & Rockets */}
      <div className="flex flex-wrap justify-center items-center w-full mt-4 gap-6">
        <img
          src={Rocket}
          alt="rocket"
          className="h-28 md:h-36 w-auto hidden md:block"
        />

        <div className="flex flex-wrap justify-center gap-4">
          {!isPerfectScore && (
            <button
              className="bg-red-500 text-white px-6 py-2 rounded-lg text-lg font-bold transition-transform transform hover:scale-105"
              onClick={() => navigate("/game")}
            >
              Try Again
            </button>
          )}
          <button
            className="bg-red-500 text-white px-6 py-2 rounded-lg text-lg font-bold transition-transform transform hover:scale-105"
            onClick={() => navigate("/next")}
          >
            Next
          </button>
        </div>

        <img
          src={Rocket}
          alt="rocket"
          className="h-28 md:h-36 w-auto hidden md:block"
        />
      </div>

      {/* Cloud Background */}
      <img
        src={Cloud}
        alt="Clouds"
        className="absolute bottom-0 left-0 w-full h-20 md:h-24 lg:h-32 opacity-90 max-sm:h-10"
      />
    </GradientBackground>
  );
};

export default Completed;
