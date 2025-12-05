import { useContext } from 'react'
import { DeviceValidationContext } from '../../providers/DeviceValidation'

const useDeviceValidation = () => {
  const deviceValidationContext = useContext(DeviceValidationContext)

  if (!deviceValidationContext) {
    throw new Error('useDeviceValidation must be used within a DeviceValidationProvider')
  }

  return { ...deviceValidationContext }
}

export default useDeviceValidation


