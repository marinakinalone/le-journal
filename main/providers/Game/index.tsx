import Head from 'next/head'
import React, { createContext, ReactNode, useState } from 'react'

// TODO can probably extend data interface
interface IGameContext {
  title?: string
  description?: string
  faviconSrc?: string
  children?: ReactNode
}

export const GameContext = createContext({
  title: '', // Provide default values or leave them empty as needed
  description: '',
  faviconSrc: '',
  updateGameContext: (_newContext: Partial<IGameContext>) => {},
})

const GameProvider = ({
  title = 'le journal',
  description = 'un journal intime interactif',
  faviconSrc = './favico.ico',
  children,
}: IGameContext) => {
  const [gameContext, setGameContext] = useState({
    title,
    description,
    faviconSrc,
    updateGameContext: (newContext: Partial<IGameContext>) => {
      setGameContext((prevContext) => ({
        ...prevContext,
        ...newContext,
      }))
    },
  })

  return (
    <GameContext.Provider value={gameContext}>
      <Head>
        <title>{gameContext.title}</title>
        <meta name="description" content={gameContext.description} />
        <link rel="icon" href={gameContext.faviconSrc} />
      </Head>

      <main>{children}</main>
    </GameContext.Provider>
  )
}

export default GameProvider
