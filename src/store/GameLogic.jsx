import { useEffect, useState } from "react";
import { ProviderGameContext } from "./GameContextProvider";

const GameShipProvider = ({ children }) => {
  
  const [box, setbox] = useState(new Array(100).fill(null));
  const [placementBox, setPlacementBox] = useState(new Array(100).fill(null));
  const [playerBox, setPlayerBox] = useState(new Array(100).fill(null));

  const [draggedShip, setDraggedShip] = useState(null);
  const [hits, setHits] = useState({});
  const [turn, setTurn] = useState("player");
  const [compHit, setCompHit] = useState({});
  
  const [ship, setShip] = useState(true);
  const [showSecShip, setSecShip] = useState(true);
  const [showThirdShip, setThirdShip] = useState(true);
  const [showFourthShip, setFourthShip] = useState(true);
  const [showFifthShip, setFifthShip] = useState(true);
  const [shipDirection, setShipDirection] = useState({
    ship1: "H",
    ship2: "H",
    ship3: "H",
    ship4: "H",
    ship5: "H",
  });

  //Store Ship in next Page on click Start
  const syncPlayerBox = (sourceBox) => {
    setPlayerBox([...sourceBox]);
  };


  //Ship Hit Logic
  const handleShipHit = (index) => {
    if (turn !== "player") return;
    if (hits[index]) return;

    setHits((prev) => ({
      ...prev,
      [index]: box[index] ? "hit" : "miss",
    }));

    setTurn("computer");
  };

  useEffect(() => {
    if (turn !== "computer") return;

    const timeout = setTimeout(() => {
      let index;

      do {
        index = Math.floor(Math.random() * 100);
      } while (compHit[index]); 

      setCompHit((prev) => ({
        ...prev,
        [index]: playerBox[index] ? "hit" : "miss",
      }));

      setTurn("player");
    }, 800); 

    return () => clearTimeout(timeout);
  }, [turn]);


  //To Place Ship Randomly
  const shipsToPlace = [
    { id: "ship1", length: 5 },
    { id: "ship2", length: 4 },
    { id: "ship3", length: 3 },
    { id: "ship4", length: 3 },
    { id: "ship5", length: 2 },
  ];

  //Ship Placed
  const areAllShipPlaced = () => {
    return (
      !ship &&
      !showSecShip &&
      !showThirdShip &&
      !showFourthShip &&
      !showFifthShip
    );
  };


  //Logic of Random Ship Placement
  const getRandomIndex = () => Math.floor(Math.random() * 100);
  const placeShipsRandomly = () => {
    let newBoxes = new Array(100).fill(null);
    for (let ship of shipsToPlace) {
      let placed = false;

      while (!placed) {
        const startIndex = getRandomIndex();
        const rowStart = Math.floor(startIndex / 10) * 10;

        // overflow check
        if (startIndex + ship.length > rowStart + 10) continue;

        // validate position
        let valid = true;
        for (let i = 0; i < ship.length; i++) {
          const currentIndex = startIndex + i;

          if (newBoxes[currentIndex] !== null) {
            valid = false;
            break;
          }

          if (isAdjacentOccupied(currentIndex, newBoxes)) {
            valid = false;
            break;
          }
        }

        if (!valid) continue;

        // place ship
        for (let i = 0; i < ship.length; i++) {
          newBoxes[startIndex + i] = "ship";
        }

        placed = true;
      }
    }

    setPlacementBox(newBoxes);
    setbox(newBoxes);
  };


  //Logic for not to Place Ship Adjacent to another ship
  const isAdjacentOccupied = (index, boxes) => {
    const row = Math.floor(index / 10);
    const col = index % 10;

    const neighbors = [
      [row - 1, col],
      [row + 1, col],
      [row, col - 1],
      [row, col + 1],
      [row - 1, col - 1],
      [row - 1, col + 1],
      [row + 1, col - 1],
      [row + 1, col + 1],
    ];

    return neighbors.some(([r, c]) => {
      if (r < 0 || r >= 10 || c < 0 || c >= 10) return false;
      return boxes[r * 10 + c] !== null;
    });
  };


  const getShipCells = (startIndex, length, direction) => {
    const cells = [];

    for (let i = 0; i < length; i++) {
      cells.push(direction === "H" ? startIndex + i : startIndex + i * 10);
    }

    return cells;
  };


  //Ship drag and placed in box
  const handleDrop = (startIndex) => {
    if (!draggedShip) return;

    const { id, length, direction } = draggedShip;

    const cells = getShipCells(startIndex, length, direction);

    const row = Math.floor(startIndex / 10);
    const col = startIndex % 10;

    if (direction === "H" && col + length > 10) {
      alert("Doesn't fit horizontally");
      return;
    }

    if (direction === "V" && row + length > 10) {
      alert("Doesn't fit vertically");
      return;
    }

    for (let cell of cells) {
      if (box[cell] !== null || isAdjacentOccupied(cell, box)) {
        alert("Invalid placement");
        return;
      }
    }

    const updatedBoxes = [...box];
    cells.forEach((i) => (updatedBoxes[i] = id)); 

    setbox(updatedBoxes);

    //When drag in box it show hide from original position and placed in box
    if (id === "ship1") setShip(false);
    if (id === "ship2") setSecShip(false);
    if (id === "ship3") setThirdShip(false);
    if (id === "ship4") setFourthShip(false);
    if (id === "ship5") setFifthShip(false);

    setDraggedShip(null);
  };

  return (
    <>
      <ProviderGameContext.Provider
        value={{
          box,
          ship,
          showSecShip,
          showThirdShip,
          showFourthShip,
          showFifthShip,
          placementBox,
          draggedShip,
          shipDirection,
          playerBox,
          hits,
          turn,
          compHit,
          setTurn,
          setCompHit,
          setHits,
          setShip,
          handleShipHit,
          setPlayerBox,
          setbox,
          syncPlayerBox,
          setPlacementBox,
          areAllShipPlaced,
          setShipDirection,
          placeShipsRandomly,
          setDraggedShip,
          handleDrop,
        }}
      >
        {children}
      </ProviderGameContext.Provider>
    </>
  );
};

export default GameShipProvider;
