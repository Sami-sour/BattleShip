import React, { useContext, useEffect } from "react";
import { ProviderGameContext } from "../store/GameContextProvider";

const PRGameBoard = ({ handleStartButForPlaceRandom }) => {
  const { placementBox, placeShipsRandomly, syncPlayerBox } =
    useContext(ProviderGameContext);

  //Place Ship Randomly
  useEffect(() => {
    placeShipsRandomly();
  }, []);

  return (
    <div className="play-randomly-board">
      <div className="grid-board">
        {placementBox.map((boxes, index) => (
          <div className="box" key={index} boxes={boxes}>
            {boxes && <div className="placed-ship"></div>}
          </div>
        ))}
      </div>

      <div className="start-game-btn">
        <button
          className="start"
          onClick={() => {
            syncPlayerBox(placementBox);
            handleStartButForPlaceRandom();
          }}
        >
          Start
        </button>
      </div>
    </div>
  );
};

export default PRGameBoard;
