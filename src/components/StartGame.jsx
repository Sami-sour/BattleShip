import React, { useContext, useEffect, useState } from "react";
import MapCompField from "./MapCompField";
import { ProviderGameContext } from "../store/GameContextProvider";

const StartGame = () => {
  const { playerBox, turn, compHit, hits, box } =
    useContext(ProviderGameContext);

  //Win Logic(Game Over Logic)
  const totalShip = box.filter((cell) => cell === "ship").length;
  const hitCount = Object.values(hits).filter((v) => v === "hit").length;
  const isWin = hitCount === totalShip && totalShip > 0;

  return (
    <>
      <div className="start-game">
        <div className="your-field">
          <h3 className={`heading-one ${isWin ? "disabled" : ""}`}>
            Your Battlefield
          </h3>
          <div className="box-div">
            {playerBox?.map((cell, index) => (
              <div
                key={index}
                className={`your-box ${isWin ? "disabled" : ""}`}
              >
                {cell && <div className="placed-ship"></div>}
                {compHit[index] && (
                  <div
                    className={`attack ${
                      compHit[index] === "hit"
                        ? "successfull-attack"
                        : "unsuccessful-attack"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="turn">
          <div className={`your-turn ${isWin ? "disabled" : ""}`}>
            {turn === "player" ? "Your Turn" : "Computer Thinking...."}
          </div>
        </div>

        <div className="comp-field">
          <h3 className={`heading-two ${isWin ? "disabled" : ""}`}>
            Computer's Battlefield
          </h3>
          <MapCompField />
        </div>
      </div>

      {isWin && (
        <div className="win-message">
          <div className="game-over">Game Over!! You Win the Game🥳</div>
        </div>
      )}
    </>
  );
};

export default StartGame;
