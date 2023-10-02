import { useContext } from 'react'
import { GameContext } from '../../providers/Game'

const useGameData = () => {
  const gameContext = useContext(GameContext)

  const updateCurrentGameData = (newContext: any) => {
    gameContext.updateGameContext(newContext)
  }

  return { ...gameContext, updateCurrentGameData }
}

export default useGameData
