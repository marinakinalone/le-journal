import UAParser from 'ua-parser-js'

const createParser = () => {
  return new UAParser(navigator.userAgent)
}

export const isMobileDevice = () => {
  if (typeof navigator !== 'undefined') {
    return createParser().getDevice().type === 'mobile'
  }
  return undefined
}

export const isLandscapeOrientation = () => {
  if (typeof window !== 'undefined') {
    return window.innerWidth > window.innerHeight
  }
  return false
}
