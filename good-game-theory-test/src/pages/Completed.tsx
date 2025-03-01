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

      <h1 className="text-3xl font-bold mt-8">Mystery Blocks</h1>

      {isPerfectScore ? (
        <h2 className="text-4xl font-extrabold mt-4">Correct!</h2>
      ) : (
        <>
          <h2 className="text-2xl font-bold mt-4">So Close Yet So Far:</h2>
          <h2 className="text-4xl font-extrabold">{score}/9 Score</h2>
          <p className="text-lg mt-2">
            One Mark Away from Seeing the Full Picture!
          </p>
        </>
      )}

      {isPerfectScore ? (
        <img
          src={winner_astronaut}
          alt="Astronaut with Rocket"
          className="w-60 h-60 mt-6"
        />
      ) : (
        <img
          src={astronautRocket}
          alt="Astronaut with Rocket"
          className="w-60 h-60 mt-6"
        />
      )}

      <div className="flex justify-around items-center w-full mt-4">
        <img src={Rocket} alt="rocket" className="h-40 w-auto" />
        <div className="flex gap-4">
          {!isPerfectScore && (
            <button
              className="bg-red-500 text-white px-6 py-2 rounded-lg text-lg font-bold"
              onClick={() => navigate("/game")}
            >
              Try Again
            </button>
          )}
          <button
            className="bg-red-500 text-white px-6 py-2 rounded-lg text-lg font-bold"
            onClick={() => navigate("/next")}
          >
            Next
          </button>
        </div>
        <img src={Rocket} alt="rocket" className="h-40 w-auto" />
      </div>

      <img
        src={Cloud}
        alt="Clouds"
        className="absolute bottom-0 left-0 w-full h-15 opacity-90"
      />
    </GradientBackground>
  );
};

export default Completed;
