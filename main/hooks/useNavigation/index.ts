import { useContext } from 'react'
import { NavigationContext } from '../../providers/Navigation'

const useNavigation = () => {
  const navigationContext = useContext(NavigationContext)

  if (!navigationContext) {
    throw new Error('useNavigation must be used within a NavigationProvider')
  }

  return { ...navigationContext }
}

export default useNavigation
