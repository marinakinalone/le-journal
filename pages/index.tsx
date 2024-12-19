import type { NextPage } from 'next'
import { useEffect } from 'react'
import Home from '../main/components/Home'
import useNavigation from '../main/hooks/useNavigation'

const App: NextPage = () => {
  const { setCurrentExperience } = useNavigation()

  useEffect(() => {
    setCurrentExperience('home')
  }, [])

  return <Home />
}

export default App
