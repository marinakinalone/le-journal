import { useContext } from 'react'
import { GameContext } from '../../providers/Game'

const useGameData = () => {
  // TODO verify the information we fetch
  const gameContext = useContext(GameContext)

  const updateCurrentGameData = (newContext: any) => {
    gameContext.updateGameContext(newContext)
  }

  console.log('gameContext:', gameContext) // Log the context for debugging

  return { ...gameContext, updateCurrentGameData }
}

export default useGameData
