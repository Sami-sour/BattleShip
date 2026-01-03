import React from 'react'

const Header = () => {
  return (
    <div className="header">
        <div className="image">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnM2UMO5DTjfe-2WAfqu3ksCTdDe7C3wwQjQ&s" alt="battleship" />
        </div>

        <div className="game-name">
           <h1 className='game-heading'>BattleShip</h1> 
        </div>
    </div>
  )
}

export default Header