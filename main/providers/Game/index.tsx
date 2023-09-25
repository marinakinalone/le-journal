import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { createContext, ReactNode, useEffect } from 'react'

// TODO can probably extend data interface
interface IGameContext {
  title: string
  description: string
  children?: ReactNode
}

export const GameContext = createContext<IGameContext>({
  title: '',
  description: '',
})

const GameProvider = ({
  title = 'le journal',
  description = 'un journal intime interactif',
  children,
}: IGameContext) => {
  // TODO make it Navigation Provider
  const router = useRouter()

  const redirectToHome = () => {
    router.push('/')
  }

  useEffect(() => {
    const handleKeyDown = (event: { key: string }) => {
      if (event.key === 'Escape') {
        redirectToHome()
      }
    }
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <GameContext.Provider
      value={{
        title,
        description,
      }}
    >
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>{children}</main>
    </GameContext.Provider>
  )
}

export default GameProvider
