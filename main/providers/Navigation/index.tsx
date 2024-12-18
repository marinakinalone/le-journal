import { useRouter } from 'next/router'
import React, { createContext, ReactNode, useEffect, useState } from 'react'
import { PATH } from '../../constants'
import { isLandscapeOrientation, isMobileDevice } from './utils'

export interface INavigationContext {
  //  ddisplayIntroModal: boolean
  // setDisplayIntroModal?: React.Dispatch<React.SetStateAction<boolean>>
  redirectToHome: () => void
  children?: ReactNode
}

const { HOME, NOT_SUPPORTED } = PATH

export const NavigationContext = createContext<INavigationContext | null>(null)

const NavigationProvider = ({
  isPortraitFormatAccepted = true,
  shouldSupportAllFormats = true,
  children,
}: {
  isPortraitFormatAccepted?: boolean
  shouldSupportAllFormats?: boolean
  children: ReactNode
}) => {
  const [isLandscape, setIsLandscape] = useState(isLandscapeOrientation())
  // const [displayIntroModal, setDisplayIntroModal] = useState(false) // TODO: set to true for production.
  const [savedPath, setSavedPath] = useState('')

  const isSupportedDevice = !isMobileDevice()

  const router = useRouter()

  const redirectToHome = () => {
    if (router.pathname !== HOME) {
      router.push(HOME)
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
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLandscape, isSupportedDevice])

  return (
    <NavigationContext.Provider value={{ redirectToHome }}>{children}</NavigationContext.Provider>
  )
}

export default NavigationProvider
