import { useRouter } from 'next/router'
import React, { createContext, ReactNode, useEffect, useState } from 'react'
import { isLandscapeOrientation, isMobileDevice } from './utils'

interface INavigationContext {
  displayIntroModal: boolean
  setDisplayIntroModal: React.Dispatch<React.SetStateAction<boolean>>
  children?: ReactNode
}

export const NavigationContext = createContext<INavigationContext | null>(null)

const NavigationProvider = ({ children }: INavigationContext) => {
  const [isLandscape, setIsLandscape] = useState(isLandscapeOrientation())
  const [displayIntroModal, setDisplayIntroModal] = useState(true)
  console.log('displayIntroModal', displayIntroModal)

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
    <NavigationContext.Provider value={{ displayIntroModal, setDisplayIntroModal }}>
      {children}
    </NavigationContext.Provider>
  )
}

export default NavigationProvider
