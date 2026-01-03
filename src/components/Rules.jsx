const Rules = ({ showTab, handleOnClicked, handleButton }) => {
  return (
    <>
      {showTab && (
        <div className="rules-div">
          <div className="must-read">
            <div className="instructions">
              <h2 className="heading-1">Instructions</h2>
              <ul>
                <li>Click on the ship to rotate it.</li>
                <li>
                  Drag the head of the block and drop it on the board to place
                  it.
                </li>
                <li>
                  Once all your ships are placed, click on the button to start
                  the game.
                </li>
              </ul>

              <h2 className="heading-2">Rules</h2>
              <li>You cannot place the ships adjacent to each other.</li>
              <li>The player who destroys all the enemy's ships wins.</li>
            </div>
          </div>
          <div className="button">
            <div className="play-randomly-button">
              <button className="play-button" onClick={handleOnClicked}>
                Your Choice
              </button>
            </div>
            <div className="your-choice">
              <button className="choice" onClick={handleButton}>
                Play Randomly
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Rules;
