import React from "react";
import YourChoiceGameBoard from "./YourChoiceGameBoard";
import PRGameBoard from "./PRGameBoard";

const GameBoard = ({
  showGameBoard,
  showPRGameBoard,
  handleStartButtonForYourChoice,
  handleStartButForPlaceRandom,
}) => {
  return (
    <>
      <div className="game">
        <div className="game-boards">
          {showGameBoard && (
            <YourChoiceGameBoard
              handleStartButtonForYourChoice={handleStartButtonForYourChoice}
            />
          )}
          {showPRGameBoard && (
            <PRGameBoard
              handleStartButForPlaceRandom={handleStartButForPlaceRandom}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default GameBoard;
