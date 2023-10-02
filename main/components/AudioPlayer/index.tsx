import React from 'react'
import ReactAudioPlayer from 'react-audio-player'

interface IAudioPlayerProps {
  source: string // TODO should be a way to make it more error proof, see TranslationMap
  autoPlay?: boolean
  loop?: boolean
}

const AudioPlayer = ({ source, autoPlay = true, loop = true }: IAudioPlayerProps) => {
  console.log(source)
  return <ReactAudioPlayer src={source} autoPlay={autoPlay} loop={loop} />
}

export default AudioPlayer
