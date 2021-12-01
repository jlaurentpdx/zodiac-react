import React from 'react'
import './Main.css'
import { signs } from '../../../src/data'
import ZodiacCard from '../ZodiacCard/ZodiacCard'

import bg from '../../../src/bg.jpg'

export default function Main() {
  return (
    <main style={{ backgroundImage: `url(${bg})` }}>
      {signs.map((sign) => (
        <ZodiacCard key={sign.name} {...sign} />
      ))}
    </main>
  )
}
