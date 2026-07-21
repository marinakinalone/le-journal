import { useRouter } from 'next/router'
import React, { ReactNode, useEffect, useMemo, useRef, useState } from 'react'
import { PATH } from '../../constants'
import { experiences } from '../../data'
import { isLandscapeOrientation, isMobileDevice } from './utils'

const { NOT_SUPPORTED, HOME } = PATH

interface DeviceValidationProviderProps {
  children: ReactNode
  experienceId?: string | null
}

const DeviceValidationProvider = ({ children, experienceId }: DeviceValidationProviderProps) => {
  const [isLandscape, setIsLandscape] = useState(isLandscapeOrientation)
  const [savedPath, setSavedPath] = useState('')
  // Keep the experience that triggered the gate — router clears id on /format-not-supported
  const [blockedExperienceId, setBlockedExperienceId] = useState<string | null>(null)
  const router = useRouter()
  const isRedirecting = useRef(false)

  const isSupportedDevice = !(isMobileDevice() ?? false)

  const validationExperienceId =
    experienceId ?? (router.pathname === NOT_SUPPORTED ? blockedExperienceId : null)

  const experience = validationExperienceId
    ? experiences.find((exp) => exp.id === validationExperienceId)
    : null
  const config = experience?.config

  const isFormatSupported = useMemo(() => {
    if (!config || !validationExperienceId) return true

    const { isPortraitFormatAccepted, shouldSupportAllFormats } = config

    if (!shouldSupportAllFormats) {
      return isSupportedDevice && (isLandscape || isPortraitFormatAccepted)
    }

    return isLandscape || isPortraitFormatAccepted
  }, [config, isLandscape, isSupportedDevice, validationExperienceId])

  const shouldShowNotSupported = !isFormatSupported && !!validationExperienceId

  useEffect(() => {
    if (experienceId) {
      setBlockedExperienceId(experienceId)
    }
  }, [experienceId])

  useEffect(() => {
    if (router.pathname === HOME) {
      setBlockedExperienceId(null)
      setSavedPath('')
    }
  }, [router.pathname])

  useEffect(() => {
    if (router.asPath !== NOT_SUPPORTED && router.pathname === '/experience/[id]') {
      setSavedPath(router.asPath)
    }
  }, [router.asPath, router.pathname])

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
    if (!router.isReady || isRedirecting.current) return

    if (shouldShowNotSupported && router.pathname !== NOT_SUPPORTED) {
      isRedirecting.current = true
      void router.replace(NOT_SUPPORTED).finally(() => {
        isRedirecting.current = false
      })
      return
    }

    if (!shouldShowNotSupported && router.pathname === NOT_SUPPORTED) {
      const destination = savedPath && savedPath !== NOT_SUPPORTED ? savedPath : HOME
      isRedirecting.current = true
      void router.replace(destination).finally(() => {
        isRedirecting.current = false
      })
    }
  }, [shouldShowNotSupported, router, savedPath])

  return <>{children}</>
}

export default DeviceValidationProvider
