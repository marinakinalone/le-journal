import type { NextPage } from 'next'
import Home from '../games/home'
import Loader from '../main/components/Loader'

// import { Routes } from './Routes'

const App: NextPage = () => {
  //TODO add loading screen as well
  return <Loader />
}

export default App
