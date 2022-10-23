import React from "react"
import ReactAudioPlayer from "react-audio-player"
import { AudioPlayerProps } from "./types"

const AudioPlayer = ({
  source,
  autoPlay = true,
  loop = true,
}: AudioPlayerProps) => {
  return <ReactAudioPlayer src={source} autoPlay={autoPlay} loop={loop} />
}

export default AudioPlayer
