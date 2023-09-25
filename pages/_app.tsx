import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import GameProvider from '../main/providers/Game'
import NavigationProvider from '../main/providers/Navigation'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GameProvider>
      <NavigationProvider>
        <Component {...pageProps} />
      </NavigationProvider>
    </GameProvider>
  )
}

export default MyApp
