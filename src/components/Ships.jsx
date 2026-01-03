import React, { useContext } from "react";
import { ProviderGameContext } from "../store/GameContextProvider";

const Ships = () => {
  const {
    setDraggedShip,
    ship,
    showSecShip,
    showThirdShip,
    showFourthShip,
    showFifthShip,
    shipDirection,
    setShipDirection,
  } = useContext(ProviderGameContext);


  //Rotate Ship
  const rotateShip = (id) => {
    setShipDirection((prev) => ({
      ...prev,
      [id]: prev[id] === "H" ? "V" : "H",
    }));
  };

  const getShipStyle = (id) => ({
    display: "flex",
    flexDirection: shipDirection[id] === "H" ? "row" : "column",
  });

  return (
    <div className="ships-for-attack">
      {ship && (
        <div
          className="ships"
          draggable
          style={getShipStyle("ship1")}
          onClick={() => rotateShip("ship1")}
          onDragStart={() =>
            setDraggedShip({
              length: 5,
              id: "ship1",
              direction: shipDirection["ship1"],
            })
          }
        >
          <div className="ship"></div>
          <div className="ship"></div>
          <div className="ship"></div>
          <div className="ship"></div>
          <div className="ship"></div>
        </div>
      )}

      {showSecShip && (
        <div
          className="ships"
          draggable
          style={getShipStyle("ship2")}
          onClick={() => rotateShip("ship2")}
          onDragStart={() =>
            setDraggedShip({
              length: 4,
              id: "ship2",
              direction: shipDirection["ship2"],
            })
          }
        >
          <div className="ship"></div>
          <div className="ship"></div>
          <div className="ship"></div>
          <div className="ship"></div>
        </div>
      )}

      {showThirdShip && (
        <div
          className="ships"
          draggable
          style={getShipStyle("ship3")}
          onClick={() => rotateShip("ship3")}
          onDragStart={() =>
            setDraggedShip({
              length: 3,
              id: "ship3",
              direction: shipDirection["ship3"],
            })
          }
        >
          <div className="ship"></div>
          <div className="ship"></div>
          <div className="ship"></div>
        </div>
      )}

      {showFourthShip && (
        <div
          className="ships"
          draggable
          onClick={() => rotateShip("ship4")}
          style={getShipStyle("ship4")}
          onDragStart={() =>
            setDraggedShip({
              length: 3,
              id: "ship4",
              direction: shipDirection["ship4"],
            })
          }
        >
          <div className="ship"></div>
          <div className="ship"></div>
          <div className="ship"></div>
        </div>
      )}

      {showFifthShip && (
        <div
          className="ships"
          draggable
          onClick={() => rotateShip("ship5")}
          style={getShipStyle("ship5")}
          onDragStart={() =>
            setDraggedShip({
              length: 2,
              id: "ship5",
              direction: shipDirection["ship5"],
            })
          }
        >
          <div className="ship"></div>
          <div className="ship"></div>
        </div>
      )}
    </div>
  );
};

export default Ships;
