import React, { useEffect, useState } from "react"
import Prompts from "./Prompts"
import { musicPrompts } from "./data/musicPrompts"
import { silentPrompts } from "./data/silentPrompts"
import { StarterProps } from "./types"

const Starter = ({ silentDisplayTime, musicDisplayTime, setStartMusic }: StarterProps) => {
  const [displayMusicPrompts, setDisplayMusicPrompts] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setDisplayMusicPrompts(true)
    }, silentDisplayTime * silentPrompts.length)
  }, [displayMusicPrompts, silentDisplayTime])

  return (
    <section>
      <Prompts displayTime={silentDisplayTime} data={silentPrompts} />
      {displayMusicPrompts ? (
        <Prompts displayTime={musicDisplayTime} data={musicPrompts} setStartMusic={setStartMusic} />
      ) : (
        <></>
      )}
    </section>
  )
}

export default Starter
