import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StartPage from "./pages/StartPage";
import GamePage from "./pages/GamePage";
import Completed from "./pages/Completed";
import ReactHowler from "react-howler";
import backgroundMusic from "./assets/music/backgroundMusic.mp3";
import { useState, createContext, useContext } from "react";

// Context to manage music state
const MusicContext = createContext<
  { isPlaying: boolean; toggleMusic: () => void } | undefined
>(undefined);

const MusicProvider = ({ children }: { children: React.ReactNode }) => {
  const [isPlaying, setIsPlaying] = useState(true);

  const toggleMusic = () => setIsPlaying((prev) => !prev);

  return (
    <MusicContext.Provider value={{ isPlaying, toggleMusic }}>
      <ReactHowler
        src={backgroundMusic}
        playing={isPlaying}
        loop={true}
        volume={0.5}
      />
      {children}
    </MusicContext.Provider>
  );
};

// Custom Hook for music controls
export const useMusic = () => {
  const context = useContext(MusicContext);
  if (!context) throw new Error("useMusic must be used within a MusicProvider");
  return context;
};

const App = () => {
  return (
    <MusicProvider>
      <Router>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/game" element={<GamePage />} />
          <Route path="/completed" element={<Completed />} />
        </Routes>
      </Router>
    </MusicProvider>
  );
};

export default App;
