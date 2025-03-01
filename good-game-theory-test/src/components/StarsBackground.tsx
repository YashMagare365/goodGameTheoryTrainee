import Star from "../assets/images/backgroundImages/Star.png";

const starPositions = [
  { top: "5%", left: "10%" },
  { top: "10%", left: "30%" },
  { top: "15%", left: "60%" },
  { top: "20%", left: "80%" },
  { top: "25%", left: "40%" },
  { top: "30%", left: "20%" },
  { top: "35%", left: "50%" },
  { top: "40%", left: "70%" },
  { top: "45%", left: "15%" },
  { top: "50%", left: "90%" },
  { top: "55%", left: "35%" },
  { top: "60%", left: "75%" },
  { top: "65%", left: "25%" },
  { top: "70%", left: "55%" },
  { top: "75%", left: "85%" },
  { top: "80%", left: "45%" },
  { top: "85%", left: "10%" },
  { top: "90%", left: "70%" },
  { top: "95%", left: "95%" },
];

const StarsBackground = () => {
  return (
    <>
      {starPositions.map((pos, index) => (
        <img
          key={index}
          src={Star}
          alt="star"
          className="absolute opacity-80 w-3 h-3"
          style={{ top: pos.top, left: pos.left }}
        />
      ))}
    </>
  );
};

export default StarsBackground;
