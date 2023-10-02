import UAParser from 'ua-parser-js'

const createParser = () => {
  return new UAParser(navigator.userAgent)
}

export const isMobileDevice = () => {
  return createParser().getDevice().type === 'mobile'
}

export const isTabletDevice = () => {
  return createParser().getDevice().type === 'tablet'
}

export const isLandscapeOrientation = () => {
  if (typeof window !== 'undefined') {
    return window.innerWidth > window.innerHeight
  }
  return false // Handle the case where window is not defined
}
