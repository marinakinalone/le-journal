import '../styles/globals.scss'
import type { AppProps as NextAppProps } from 'next/app'
import { ReactNode } from 'react'
import GameInfoProvider from '../main/providers/Game'
import NavigationProvider, { INavigationContext } from '../main/providers/Navigation'

interface AppProps extends NextAppProps {
  children: ReactNode
}

const navigationProps: INavigationContext = {
  displayIntroModal: false,
  redirectToHome: () => {},
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GameInfoProvider>
      <NavigationProvider {...navigationProps}>
        <Component {...pageProps} />
      </NavigationProvider>
    </GameInfoProvider>
  )
}

export default MyApp
