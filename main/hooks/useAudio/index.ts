import { useContext } from 'react'
import { AudioContext } from '../../providers/Audio'

const useAudio = () => {
  const audioContext = useContext(AudioContext)

  return { ...audioContext }
}

export default useAudio
