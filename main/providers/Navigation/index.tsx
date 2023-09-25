import { useRouter } from 'next/router'
import React, { createContext, ReactNode, useEffect } from 'react'

interface INavigationContext {
  children?: ReactNode
}

export const NavigationContext = createContext<INavigationContext>({})

const NavigationProvider = ({ children }: INavigationContext) => {
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
  return <NavigationContext.Provider value={{}}>{children}</NavigationContext.Provider>
}

export default NavigationProvider
