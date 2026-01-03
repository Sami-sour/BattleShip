import { createContext } from "react";

const gameLogic = {
  box: [],
  playerBox: [],
  ship: [],
  placementBox: [],
  showSecShip: true,
  showThirdShip: true,
  showFourthShip: true,
  showFifthShip: true,
  draggedShip: null,
  shipDirection: "H",
  gamePhase: "placement",
  hits: {},
  turn: "player",
  compHit: {},
  setCompHit: () => {},
  setTurn: () => {},
  setHits: () => {},
  handleShipHit: () => {},
  setShip: () => {},
  syncPlayerBox: () => {},
  setPlacementBox: () => {},
  setPlayerBox: () => {},
  areAllShipPlaced: () => {},
  setShipDirection: () => {},
  placeShipsRandomly: () => {},
  setDraggedShip: () => {},
  handleDrop: () => {},
};

export const ProviderGameContext = createContext(gameLogic);
