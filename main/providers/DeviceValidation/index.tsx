import { useRouter } from 'next/router'
import React, { createContext, ReactNode, useEffect, useState } from 'react'
import { PATH } from '../../constants'
import { experiences } from '../../data'
import { isLandscapeOrientation, isMobileDevice } from './utils'

export interface IDeviceValidationContext {
  isLandscape: boolean
  isMobile: boolean
  isFormatSupported: boolean
  shouldShowNotSupported: boolean
}

export const DeviceValidationContext = createContext<IDeviceValidationContext | null>(null)

const { NOT_SUPPORTED, HOME } = PATH

interface DeviceValidationProviderProps {
  children: ReactNode
  experienceId?: string | null
}

const DeviceValidationProvider = ({ children, experienceId }: DeviceValidationProviderProps) => {
  const [isLandscape, setIsLandscape] = useState(isLandscapeOrientation())
  const [savedPath, setSavedPath] = useState('')
  const router = useRouter()

  const isMobile = isMobileDevice() ?? false
  const isSupportedDevice = !isMobile

  // Get experience config
  const experience = experienceId
    ? experiences.find((exp) => exp.id === experienceId)
    : null

  const config = experience?.config

  // Calculate if format is supported
  const isFormatSupported = React.useMemo(() => {
    if (!config || !experienceId) return true

    const { isPortraitFormatAccepted, shouldSupportAllFormats } = config

    if (!shouldSupportAllFormats) {
      // Desktop only + format check
      return isSupportedDevice && (isLandscape || isPortraitFormatAccepted)
    }

    // Format check only
    return isLandscape || isPortraitFormatAccepted
  }, [config, isLandscape, isSupportedDevice, experienceId])

  const shouldShowNotSupported = !isFormatSupported && !!experienceId

  // Handle format validation and redirection
  useEffect(() => {
    if (router.asPath !== NOT_SUPPORTED) {
      setSavedPath(router.asPath)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.asPath])

  useEffect(() => {
    const handleResize = () => {
      setIsLandscape(isLandscapeOrientation())
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const handleOrientationChange = (event: MediaQueryListEvent) => {
      setIsLandscape(event.matches)
    }
    const mediaQueryList = window.matchMedia('(orientation: landscape)')
    mediaQueryList.addEventListener('change', handleOrientationChange)
    return () => mediaQueryList.removeEventListener('change', handleOrientationChange)
  }, [])

  useEffect(() => {
    if (shouldShowNotSupported && router.pathname !== NOT_SUPPORTED) {
      router.push(NOT_SUPPORTED)
    } else if (!shouldShowNotSupported && router.pathname === NOT_SUPPORTED && savedPath) {
      router.push(savedPath !== NOT_SUPPORTED ? savedPath : HOME)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shouldShowNotSupported, router.pathname])

  return (
    <DeviceValidationContext.Provider
      value={{
        isLandscape,
        isMobile,
        isFormatSupported,
        shouldShowNotSupported,
      }}
    >
      {children}
    </DeviceValidationContext.Provider>
  )
}

export default DeviceValidationProvider


