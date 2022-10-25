import React, { useEffect, useState } from 'react'
import { musicPrompts } from './data/musicPrompts'
const EnMusique = () => {
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    setTimeout(() => { setDisplay(true) }, 5000)

  }, [])
  return (
    <p>En musique.<span></span><span></span></p>
  )
}

export default EnMusique