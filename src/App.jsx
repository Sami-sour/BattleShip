import { useState } from "react";
import "./App.css";
import GameBoard from "./components/GameBoard";
import Header from "./components/Header";
import Rules from "./components/Rules";
import GameShipProvider from "./store/GameLogic";
import StartGame from "./components/StartGame";

function App() {
  const [showTab, setShowTab] = useState(true);
  const [showGameBoard, setGameBoard] = useState(false);
  const [showPRGameBoard, setPRGameBoard] = useState(false);
  const [showGameStart, setGameStart] = useState(false);

  const handleOnClicked = () => {
    setShowTab(false);
    setGameBoard(true);
  };

  const handleButton = () => {
    setPRGameBoard(true);
    setShowTab(false);
  };

  const handleStartButtonForYourChoice = () => {
    setGameStart(true);
    setGameBoard(false);
    setPRGameBoard(false);
  };

  const handleStartButForPlaceRandom = () => {
    setGameStart(true);
    setGameBoard(false);
    setPRGameBoard(false);
  };

  return (
    <>
      <GameShipProvider>
        <Header />
        <Rules
          showTab={showTab}
          handleOnClicked={handleOnClicked}
          handleButton={handleButton}
        />
        <GameBoard
          showGameBoard={showGameBoard}
          showPRGameBoard={showPRGameBoard}
          handleStartButtonForYourChoice={handleStartButtonForYourChoice}
          handleStartButForPlaceRandom={handleStartButForPlaceRandom}
        />
        {showGameStart && <StartGame />}
      </GameShipProvider>
    </>
  );
}

export default App;
