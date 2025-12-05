import { useContext } from 'react'
import { IExperienceInfo, IExperienceMusic } from '../../data/experiencesTypes'
import { ExperienceContext } from '../../providers/Experience'


type FlexibleExperienceUpdate = Omit<Partial<IExperienceInfo>, 'hidden' | 'new' | 'music'> & {
  hidden?: boolean
  new?: boolean
  music?: Partial<IExperienceMusic> & { source: string }
}

const useExperienceData = () => {
  const experienceContext = useContext(ExperienceContext)

  const updateCurrentExperienceData = (newContext: FlexibleExperienceUpdate) => {
    const normalizedContext = { ...newContext }
    
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
