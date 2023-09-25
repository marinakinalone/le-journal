import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import GameInfoProvider from '../main/providers/Game'
import NavigationProvider from '../main/providers/Navigation'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GameInfoProvider>
      <NavigationProvider>
        <Component {...pageProps} />
      </NavigationProvider>
    </GameInfoProvider>
  )
}

export default MyApp
