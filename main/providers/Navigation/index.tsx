import { useRouter } from 'next/router'
import React, { createContext, ReactNode, useCallback, useEffect } from 'react'
import { PATH } from '../../constants'

export interface INavigationContext {
  redirectToHome: () => void
  goBack: () => void
  currentExperienceId: string | null
  isHome: boolean
  isExperience: boolean
}

export const NavigationContext = createContext<INavigationContext | null>(null)

const { HOME } = PATH
const NOT_SUPPORTED = PATH.NOT_SUPPORTED

const NavigationProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter()

  const redirectToHome = useCallback(() => {
    if (router.pathname !== HOME) {
      router.push(HOME)
    }
  }, [router])

  const goBack = useCallback(() => {
    if (window.history.length > 1 && document.referrer) {
      router.back()
    } else {
      redirectToHome()
    }
  }, [router, redirectToHome])

  const currentExperienceId =
    router.pathname === '/experience/[id]' ? (router.query.id as string) || null : null
  const isHome = router.pathname === HOME
  const isExperience = router.pathname === '/experience/[id]'
  const isFormatNotSupported = router.pathname === NOT_SUPPORTED

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && (isExperience || isFormatNotSupported)) {
        redirectToHome()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isExperience, isFormatNotSupported, redirectToHome])

  return (
    <NavigationContext.Provider
      value={{
        redirectToHome,
        goBack,
        currentExperienceId,
        isHome,
        isExperience,
      }}
    >
      {children}
    </NavigationContext.Provider>
  )
}

export default NavigationProvider
