import React from "react"
import { MusicCreditProps } from "./types"

const MusicCredit = ({ game, artist, song }: MusicCreditProps) => {
  return (
    <li>
      <h3>{`x ${game}`}</h3>
      <p>{`${artist} - ${song}`}</p>
    </li>
  )
}

export default MusicCredit
