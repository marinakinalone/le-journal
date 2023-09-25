import Head from 'next/head'
import React, { createContext, ReactNode, useState } from 'react'
import { IgameInfo } from '../../data/gameTypes'
import { homePageData as initialGameContext } from '../../data/homePageData'

interface IGameContext extends IgameInfo {
  updateGameContext: (newContext: IgameInfo) => void
  children?: ReactNode
}

export const GameContext = createContext<IGameContext>({
  ...initialGameContext,
  updateGameContext: (_newContext) => {},
})

const GameInfoProvider = ({ children }: IGameContext) => {
  const [gameContext, setGameContext] = useState(initialGameContext)

  return (
    <GameContext.Provider
      value={{
        ...gameContext,
        updateGameContext: (newContext) => {
          setGameContext((prevContext) => ({
            ...prevContext,
            ...newContext,
          }))
        },
      }}
    >
      <Head>
        <title>{gameContext.title}</title>
        <meta name="description" content={gameContext.metadata.description} />
        <link rel="icon" href={gameContext.metadata.favicon} />
      </Head>
      <main>{children}</main>
    </GameContext.Provider>
  )
}

export default GameInfoProvider
