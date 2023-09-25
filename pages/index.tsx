/* eslint-disable react/jsx-no-comment-textnodes */
import type { NextPage } from 'next'
import GameProvider from '../main/providers/Game'
import NavigationProvider from '../main/providers/Navigation'
import { Routes } from './Routes'

const App: NextPage = () => {
  //TODO create mapper here - use centraliwed data with a Game component + useEffect + audioplayer
  //TODO add loading screen as well
  return (
    <GameProvider>
      <NavigationProvider>
        <Routes />
      </NavigationProvider>
    </GameProvider>
  )
}

export default App
