import React from 'react'
import ReactAudioPlayer from 'react-audio-player'

interface IAudioPlayerProps {
  source: string // TODO should be a way to make it more error proof, see TranslationMap
  autoPlay?: boolean
  loop?: boolean
}

const AudioPlayer = ({ source, autoPlay = true, loop = true }: IAudioPlayerProps) => {
  console.log('music has started') //TODO download music and remove.
  return <ReactAudioPlayer src={source} autoPlay={autoPlay} loop={loop} />
}

export default AudioPlayer
