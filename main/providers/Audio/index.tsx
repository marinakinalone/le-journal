import React, { createContext, ReactNode, useState } from 'react'
import AudioPlayer from '../../components/AudioPlayer'
import useExperienceData from '../../hooks/useExperienceData'

interface IAudioContext {
  startAudio: boolean
  setStartAudio: React.Dispatch<React.SetStateAction<boolean>>
  children?: ReactNode
}

export const CustomAudioContext = createContext<IAudioContext | null>(null)

const AudioProvider = ({ children }: { children: ReactNode }) => {
  const [startAudio, setStartAudio] = useState(true)
  const { music } = useExperienceData()

  return (
    <CustomAudioContext.Provider
      value={{
        startAudio,
        setStartAudio,
      }}
    >
      {startAudio && music && <AudioPlayer source={music.source} />}
      {children}
    </CustomAudioContext.Provider>
  )
}

export default AudioProvider
