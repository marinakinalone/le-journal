import React, { createContext, ReactNode, useState } from 'react'
import AudioPlayer from '../../components/AudioPlayer'
import useExperienceData from '../../hooks/useExperienceData'

interface IAudioContext {
  startAudio: boolean
  setStartAudio: React.Dispatch<React.SetStateAction<boolean>>
  children?: ReactNode
}

export const AudioContext = createContext<IAudioContext | null>(null)

const AudioProvider = ({ children }: { children: ReactNode }) => {
  const [startAudio, setStartAudio] = useState(true)
  const { music } = useExperienceData()

  return (
    <AudioContext.Provider
      value={{
        startAudio,
        setStartAudio,
      }}
    >
      {startAudio && music && <AudioPlayer source={music.source} />}
      {children}
    </AudioContext.Provider>
  )
}

export default AudioProvider
