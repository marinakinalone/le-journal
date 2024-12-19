import { useRouter } from 'next/router'
import React, { createContext, ReactNode, useEffect, useState } from 'react'
import { PATH } from '../../constants'
import { isLandscapeOrientation, isMobileDevice } from './utils'

// TODO move to its own file
export const experienceConfig = {
  home: {
    isPortraitFormatAccepted: true,
    shouldSupportAllFormats: true,
  },
  palettes: {
    isPortraitFormatAccepted: true,
    shouldSupportAllFormats: true,
  },
  'jardinage-graphique': {
    isPortraitFormatAccepted: false,
    shouldSupportAllFormats: true,
  },
}

export interface INavigationContext {
  //  displayIntroModal: boolean
  // setDisplayIntroModal?: React.Dispatch<React.SetStateAction<boolean>>
  redirectToHome: () => void
  setCurrentExperience: React.Dispatch<React.SetStateAction<string>>
  children?: ReactNode
}

const { HOME, NOT_SUPPORTED } = PATH

export const NavigationContext = createContext<INavigationContext | null>(null)

const NavigationProvider = ({ children }: { children: ReactNode }) => {
  const [isLandscape, setIsLandscape] = useState(isLandscapeOrientation())
  // const [displayIntroModal, setDisplayIntroModal] = useState(false) // TODO: set to true for production.
  const [savedPath, setSavedPath] = useState('')
  const [currentExperience, setCurrentExperience] = useState('')
  const navigationConfig =
    experienceConfig[currentExperience as keyof typeof experienceConfig] || {}
  const { isPortraitFormatAccepted, shouldSupportAllFormats } = navigationConfig

  const isSupportedDevice = !isMobileDevice()

  const router = useRouter()

  const redirectToHome = () => {
    if (router.pathname !== HOME) {
      router.push(HOME)
    }
  }

  useEffect(() => {
    console.log('router.asPat: ', router.asPath)
    if (router.asPath !== NOT_SUPPORTED) {
      setSavedPath(router.asPath)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.asPath])

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
    const handleOrientationChange = (event: MediaQueryListEvent) => {
      console.log('orientation change: ', event.matches)
      setIsLandscape(event.matches)
    }

    const mediaQueryList = window.matchMedia('(orientation: landscape)')
    mediaQueryList.addEventListener('change', handleOrientationChange)

    return () => {
      mediaQueryList.removeEventListener('change', handleOrientationChange)
    }
  }, [])

  useEffect(() => {
    if (!shouldSupportAllFormats) {
      if ((!isLandscape && !isPortraitFormatAccepted) || !isSupportedDevice) {
        if (router.pathname !== NOT_SUPPORTED) {
          setSavedPath(router.asPath)
          router.push(NOT_SUPPORTED)
        }
      } else if (router.pathname === NOT_SUPPORTED) {
        if (savedPath && savedPath !== NOT_SUPPORTED) {
          router.push(savedPath)
        } else {
          redirectToHome()
        }
      }
    } else if (!isLandscape && !isPortraitFormatAccepted) {
      if (router.pathname !== NOT_SUPPORTED) {
        setSavedPath(router.asPath)
        router.push(NOT_SUPPORTED)
      }
    } else if (router.pathname === NOT_SUPPORTED) {
      if (savedPath && savedPath !== NOT_SUPPORTED) {
        router.push(savedPath)
      } else {
        redirectToHome()
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLandscape, isSupportedDevice])

  return (
    <NavigationContext.Provider value={{ redirectToHome, setCurrentExperience }}>
      {children}
    </NavigationContext.Provider>
  )
}

export default NavigationProvider
