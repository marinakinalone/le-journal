import { useRouter } from 'next/router'
import React, { createContext, ReactNode, useEffect, useState } from 'react'
import { isLandscapeOrientation, isMobileDevice, isTabletDevice } from './utils'

interface INavigationContext {
  children?: ReactNode
  isLandscape: boolean
}

export const NavigationContext = createContext<INavigationContext>({})

const NavigationProvider = ({ children }: INavigationContext) => {
  const [isLandscape, setIsLandscape] = useState(isLandscapeOrientation())

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

  const handleOrientationChange = () => {
    if (isLandscapeOrientation()) {
      redirectToHome()
    }
  }

  useEffect(() => {
    const handleResize = () => {
      setIsLandscape(isLandscapeOrientation())
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('orientationchange', handleOrientationChange)

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('orientationchange', handleOrientationChange)
    }
  }, [])

  useEffect(() => {
    if (!isLandscape) {
      router.push('/format-not-supported')
    }
  }, [isLandscape, router])

  return <NavigationContext.Provider value={{ isLandscape }}>{children}</NavigationContext.Provider>
}

export default NavigationProvider
