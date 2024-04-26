import React from 'react'
import './Dice.css'


function dice({face ,rolling}) {
    return (
      <i className={`dice fas fa-dice-${face} ${rolling && "shaking"}`}></i>
    )
  }

  export default dice;