import React, { ReactNode } from 'react'
import AudioPlayer from '../../components/AudioPlayer'
import useExperienceData from '../../hooks/useExperienceData'

const AudioProvider = ({ children }: { children: ReactNode }) => {
  const { music } = useExperienceData()
  const musicSource = music?.source

  return (
    <>
      {musicSource ? <AudioPlayer source={musicSource} /> : null}
      {children}
    </>
  )
}

export default AudioProvider
