import type { NextPage } from 'next'
import Home from '../main/components/Home'
import useNavigation from '../main/hooks/useNavigation'

const App: NextPage = () => {
  const { setCurrentExperience } = useNavigation()
  setCurrentExperience('home')

  return <Home />
}

export default App
