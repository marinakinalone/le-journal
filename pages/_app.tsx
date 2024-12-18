import '../styles/globals.scss'
import type { AppProps as NextAppProps } from 'next/app'
import { ReactNode } from 'react'
import AudioProvider from '../main/providers/Audio'
import ExperienceInfoProvider from '../main/providers/Experience'

interface AppProps extends NextAppProps {
  children: ReactNode
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ExperienceInfoProvider>
      <AudioProvider>
        <Component {...pageProps} />
      </AudioProvider>
    </ExperienceInfoProvider>
  )
}

export default MyApp
