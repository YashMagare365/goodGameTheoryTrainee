import wrong from "../assets/images/wrong.png"; // Ensure correct path

const IncorrectModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <div
      className="fixed inset-0 bg-black/90 flex flex-col items-center justify-center"
      onClick={onClose} // Calls the function passed from GamePage
    >
      <h1 className="text-white font-bold text-3xl text-center mb-4 fixed top-30">
        Incorrect Answer
      </h1>
      <img src={wrong} alt="Wrong Answer" className="h-4/5 " />
    </div>
  );
};

export default IncorrectModal;
