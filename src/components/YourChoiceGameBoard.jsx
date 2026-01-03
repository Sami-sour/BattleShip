import React, { useContext } from "react";
import Ships from "./Ships";
import { ProviderGameContext } from "../store/GameContextProvider";

const YourChoiceGameBoard = ({ handleStartButtonForYourChoice }) => {
  const { box, handleDrop, areAllShipPlaced, syncPlayerBox } =
    useContext(ProviderGameContext);

  return (
    <>
      <div className="box-grid">
        <div className="boxes">
          {box.map((box, index) => (
            <div
              className="box"
              box={box}
              key={index}
              onDragOver={(e) => e.preventDefault()}
              onDrop={() => handleDrop(index)}
            >
              {box && <div className="placed-ship"></div>}
            </div>
          ))}
        </div>

        <div className="ship-container">
          <Ships />
        </div>
      </div>

      <div className="button-start">
        <button
          className="start-btn"
          onClick={() => {
            syncPlayerBox(box);
            handleStartButtonForYourChoice();
          }}
          disabled={!areAllShipPlaced()}
        >
          Start
        </button>
      </div>
    </>
  );
};

export default YourChoiceGameBoard;
