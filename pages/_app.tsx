import '../styles/globals.scss'
import type { AppProps as NextAppProps } from 'next/app'
import { ReactNode } from 'react'
import AudioProvider from '../main/providers/Audio'
import ExperienceInfoProvider from '../main/providers/Experience'
import NavigationProvider from '../main/providers/Navigation'

interface AppProps extends NextAppProps {
  children: ReactNode
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ExperienceInfoProvider>
      <NavigationProvider>
        <AudioProvider>
          <Component {...pageProps} />
        </AudioProvider>
      </NavigationProvider>
    </ExperienceInfoProvider>
  )
}

export default MyApp
