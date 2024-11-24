import React, { useEffect, useState } from 'react'
import { PromptProps } from './types';

const Prompts = ({ displayTime, data, setStartMusic }: PromptProps) => {
  const [index, setIndex] = useState(0);

  const cue = "Juste une minute de silence. "

  useEffect(() => {
    if (index < data.length - 1) {
      setTimeout(() => { setIndex(index + 1) }, displayTime)
    }

    if (data[index].prompt === cue && setStartMusic) {
      setStartMusic(true)
    }
  }, [displayTime, index, data, setStartMusic])
  return (
    <p>
      {data[index].prompt}
    </p>
  )
}

export default Prompts