import correct from "../assets/images/correct.png";
import Cloud from "../assets/images/backgroundImages/Cloud.png";

const CorrectModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <div
      className="fixed inset-0 bg-black/90 flex flex-col items-center justify-center"
      onClick={onClose} // Calls the function passed from GamePage
    >
      <img src={correct} alt="Wrong Answer" className="h-3/4 " />
      <img src={Cloud} alt="cloud" className="fixed bottom-0" />
    </div>
  );
};

export default CorrectModal;
