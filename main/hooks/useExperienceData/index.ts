import { useContext } from 'react'
import { ExperienceContext } from '../../providers/Experience'
import { IExperienceInfo } from '../../data/experiencesTypes'

// More flexible type that allows boolean values for hidden and new
type FlexibleExperienceUpdate = Omit<Partial<IExperienceInfo>, 'hidden' | 'new'> & {
  hidden?: boolean
  new?: boolean
}

const useExperienceData = () => {
  const experienceContext = useContext(ExperienceContext)

  const updateCurrentExperienceData = (newContext: FlexibleExperienceUpdate) => {
    // Normalize the context: convert boolean false to undefined, true stays as true
    const normalizedContext: Partial<IExperienceInfo> = { ...newContext }
    
    if ('hidden' in newContext) {
      if (newContext.hidden === false) {
        delete normalizedContext.hidden
      } else if (newContext.hidden === true) {
        normalizedContext.hidden = true
      }
    }
    
    if ('new' in newContext) {
      if (newContext.new === false) {
        delete normalizedContext.new
      } else if (newContext.new === true) {
        normalizedContext.new = true
      }
    }
    
    experienceContext.updateExperienceContext(normalizedContext as IExperienceInfo)
  }

  return { ...experienceContext, updateCurrentExperienceData }
}

export default useExperienceData
