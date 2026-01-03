import React, { useContext, useEffect, useState } from "react";
import { ProviderGameContext } from "../store/GameContextProvider";

const MapCompField = () => {
  const { box, placeShipsRandomly, handleShipHit, hits, turn } =
    useContext(ProviderGameContext);

   //Place Ship Randomly 
  useEffect(() => {
    placeShipsRandomly();
  }, []);

  //Game Over Logic
  const totalShip = box.filter((cell) => cell === "ship").length;
  const hitCount = Object.values(hits).filter((v) => v === "hit").length;
  const isGameOver = hitCount === totalShip && totalShip > 0;


  return (
    <div className="your-battle-field">
      {box?.map((box, index) => (
        <div
          className={`computer-box  ${
            turn !== "player" || isGameOver ? "disabled" : ""
          }`}
          onClick={() => handleShipHit(index)}
          box={box}
          key={index}
        >
          {hits[index] && (
            <div
              className={`attack ${
                hits[index] === "hit"
                  ? "successfull-attack"
                  : "unsuccessful-attack"
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default MapCompField;
