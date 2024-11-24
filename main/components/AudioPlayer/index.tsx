import React from 'react'
import ReactAudioPlayer from 'react-audio-player'

interface IAudioPlayerProps {
  source: string // TODO should be a way to make it more error proof, see TranslationMap
  autoPlay?: boolean
  loop?: boolean
}

// TODO currently not in use, but could be used to play background music
const AudioPlayer = ({ source, autoPlay = true, loop = true }: IAudioPlayerProps) => {
  return <ReactAudioPlayer src={source} autoPlay={autoPlay} loop={loop} />
}

export default AudioPlayer
