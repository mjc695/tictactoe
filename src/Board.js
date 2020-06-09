import React from 'react'
import Square from './square'

class Board extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let shape;
    return (
      <div>
        {/* <div className='board' >
          <img src='/images/tic-tac-toe-board.png' alt='/images/tic-tac-toe-board.png'></img>
        </div> */}
        {this.props.game.map(col => {
          return (
            <div className='column'>
              {col.map(row => {
                return (
                  <div className='row'>
                    <Square squareVal={row} ></Square>
                  </div>
                )
              })}
            </div>
          )


        })}
        <div className='row'></div>
      </div>
    )
  }

}

export default Board
