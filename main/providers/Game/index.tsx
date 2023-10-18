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

const GameInfoProvider = ({ children }: { children: ReactNode }) => {
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
        <link rel="apple-touch-icon" sizes="180x180" href={gameContext.favicons.appleTouchIcon} />
        <link rel="icon" type="image/png" sizes="32x32" href={gameContext.favicons.favicon32} />
        <link rel="icon" type="image/png" sizes="16x16" href={gameContext.favicons.favicon16} />
      </Head>
      <main>{children}</main>
    </GameContext.Provider>
  )
}

export default GameInfoProvider
