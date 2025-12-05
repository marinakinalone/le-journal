import '../styles/globals.scss'
import type { AppProps as NextAppProps } from 'next/app'
import { ReactNode } from 'react'
import AudioProvider from '../main/providers/Audio'
import ExperienceInfoProvider from '../main/providers/Experience'
import NavigationProvider from '../main/providers/Navigation'
import DeviceValidationProvider from '../main/providers/DeviceValidation'
import useNavigation from '../main/hooks/useNavigation'

interface AppProps extends NextAppProps {
  children: ReactNode
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NavigationProvider>
      <AppWithDeviceValidation>
        <ExperienceInfoProvider>
          <AudioProvider>
            <Component {...pageProps} />
          </AudioProvider>
        </ExperienceInfoProvider>
      </AppWithDeviceValidation>
    </NavigationProvider>
  )
}

// Wrapper component to access navigation context
function AppWithDeviceValidation({ children }: { children: ReactNode }) {
  const { currentExperienceId } = useNavigation()

  return <DeviceValidationProvider experienceId={currentExperienceId}>{children}</DeviceValidationProvider>
}

export default MyApp
