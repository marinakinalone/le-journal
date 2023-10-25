import '../styles/globals.scss'
import type { AppProps as NextAppProps } from 'next/app'
import { ReactNode } from 'react'
import AudioProvider from '../main/providers/Audio'
import GameInfoProvider from '../main/providers/Game'
import NavigationProvider from '../main/providers/Navigation'

interface AppProps extends NextAppProps {
  children: ReactNode
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GameInfoProvider>
      <NavigationProvider>
        <AudioProvider>
          <Component {...pageProps} />
        </AudioProvider>
      </NavigationProvider>
    </GameInfoProvider>
  )
}

export default MyApp
