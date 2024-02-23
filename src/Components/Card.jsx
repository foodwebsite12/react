import React from 'react'
import "./Card.css"

const Card = (props) => {
  return (
    <div className='card'>
      <a href={props.src}><img src={props.src} alt="" /></a>
      <div className='desc'>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <button className='btn'>Order Now</button>
      </div>

    </div>
  )
}

export default Card;
