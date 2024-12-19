import { useRouter } from 'next/router'
import React, { createContext, ReactNode, useEffect, useLayoutEffect, useState } from 'react'
import { PATH } from '../../constants'
import { isLandscapeOrientation, isMobileDevice } from './utils'
import { redirect } from 'next/dist/server/api-utils'

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
  const [navigationConfig, setNavigationConfig] = useState<
    Partial<{
      isPortraitFormatAccepted: boolean
      shouldSupportAllFormats: boolean
    }>
  >({})

  const isSupportedDevice = !isMobileDevice()

  const router = useRouter()

  const redirectToHome = () => {
    if (router.pathname !== HOME) {
      router.push(HOME)
    }
  }

  const redirectToNotSupported = () => {
    if (router.pathname !== NOT_SUPPORTED) {
      setSavedPath(router.asPath)
      router.push(NOT_SUPPORTED)
    }
  }

  const handleNavigation = () => {
    if (savedPath && savedPath !== NOT_SUPPORTED) {
      router.push(savedPath)
    } else {
      redirectToHome()
    }
  }

  useEffect(() => {
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
      setIsLandscape(event.matches)
    }

    const mediaQueryList = window.matchMedia('(orientation: landscape)')
    mediaQueryList.addEventListener('change', handleOrientationChange)

    return () => {
      mediaQueryList.removeEventListener('change', handleOrientationChange)
    }
  }, [])

  useEffect(() => {
    if (currentExperience) {
      const config = experienceConfig[currentExperience as keyof typeof experienceConfig] || {}
      setNavigationConfig(config)
    }
  }, [currentExperience])

  useEffect(() => {
    if (
      currentExperience &&
      navigationConfig.isPortraitFormatAccepted !== undefined &&
      navigationConfig.shouldSupportAllFormats !== undefined
    ) {
      const { isPortraitFormatAccepted, shouldSupportAllFormats } = navigationConfig

      if (!shouldSupportAllFormats) {
        if ((!isLandscape && !isPortraitFormatAccepted) || !isSupportedDevice) {
          redirectToNotSupported()
        } else if (router.pathname === NOT_SUPPORTED) {
          handleNavigation()
        }
      } else if (!isLandscape && !isPortraitFormatAccepted) {
        redirectToNotSupported()
      } else if (router.pathname === NOT_SUPPORTED) {
        handleNavigation()
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLandscape, isSupportedDevice, navigationConfig, currentExperience])

  return (
    <NavigationContext.Provider value={{ redirectToHome, setCurrentExperience }}>
      {children}
    </NavigationContext.Provider>
  )
}

export default NavigationProvider
