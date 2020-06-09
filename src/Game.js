import React from 'react'
import Board from './Board'

class Game extends React.Component {
  constructor() {
    super()
    // this.state = { game: [[null, null, null], [null, null, null], [null, null, null]] }
    this.state = { game: [['X', 'X', 'X'], ['O', 'O', null], [null, null, null]] }
  }


  render() {
    return (
      <div className='game-wrapper'>
        <div className='game'>
          <Board game={this.state.game}></Board>
          {/* <img src={'/images/tic-tac-toe-board.png'} className="App-logo" alt="logo" /> */}
        </div>
        <div className='button-wrapper'>
          <button className='newGame' >Start a new game</button>
        </div>
      </div>
    )
  }
}

export default Game
