import React, { useEffect, useState } from 'react'

const StartTimer = () => {
  const [countdown, setCountdown] = useState(3)
  useEffect(() => {
    if (countdown > 1) {
      setTimeout(() => {
        setCountdown(countdown - 1)
      }, 1000)
    }
  }, [countdown])
  return (
    <section>
      <h1>{countdown}</h1>
    </section>
  )
}

export default StartTimer