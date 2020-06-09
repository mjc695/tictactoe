import React from 'react'

const Square = ({ squareVal }) => {
  console.log('going to square')
  console.log(squareVal)
  if (squareVal === 'x') {
    console.log('found an x')
  }
  return (
    <img className='board-units' src={`/images/tictactoe-${squareVal}.png`} alt='logo' />
  )
}

export default Square
