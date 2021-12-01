import React from 'react'
import './ZodiacCard.css'

export default function ZodiacCard(props) {
  return (
    <>
      <div className="zodiac-card">
        <img src={`${process.env.PUBLIC_URL}/zodiac_images/${props.name}.png`} />
        <span className="name">{props.name}</span>
        <span>{props.dates}</span>
      </div>
    </>
  )
}
