import React from "react"
import ReactAudioPlayer from "react-audio-player"

interface IAudioPlayerProps {
  source: string
  autoPlay?: boolean
  loop?: boolean
}

const AudioPlayer = ({
  source,
  autoPlay = true,
  loop = true,
}: IAudioPlayerProps) => {
  return <ReactAudioPlayer src={source} autoPlay={autoPlay} loop={loop} />
}

export default AudioPlayer
