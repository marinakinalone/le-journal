import { useRouter } from 'next/router'
import React, { createContext, ReactNode, useEffect, useState } from 'react'
import { isLandscapeOrientation, isMobileDevice } from './utils'

export interface INavigationContext {
  displayIntroModal: boolean
  setDisplayIntroModal?: React.Dispatch<React.SetStateAction<boolean>>
  redirectToHome: () => void
  children?: ReactNode
}

export const NavigationContext = createContext<INavigationContext | null>(null)

const NavigationProvider = ({ children }: { children: ReactNode }) => {
  const [isLandscape, setIsLandscape] = useState(isLandscapeOrientation())
  const [displayIntroModal, setDisplayIntroModal] = useState(false) // TODO: set to true for production.

  const isSupportedDevice = !isMobileDevice()

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

  useEffect(() => {
    const handleResize = () => {
      setIsLandscape(isLandscapeOrientation())
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    if (!isLandscape || !isSupportedDevice) {
      router.push('/format-not-supported')
    }

    if (isLandscape && isSupportedDevice) {
      redirectToHome()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLandscape])

  return (
    <NavigationContext.Provider value={{ displayIntroModal, setDisplayIntroModal, redirectToHome }}>
      {children}
    </NavigationContext.Provider>
  )
}

export default NavigationProvider
