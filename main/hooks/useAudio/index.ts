import { useContext } from 'react'
import { CustomAudioContext } from '../../providers/Audio'

const useAudio = () => {
  const audioContext = useContext(CustomAudioContext)

  return { ...audioContext }
}

export default useAudio
