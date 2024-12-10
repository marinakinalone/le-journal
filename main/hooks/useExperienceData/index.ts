import { useContext } from 'react'
import { ExperienceContext } from '../../providers/Experience'

const useExperienceData = () => {
  const experienceContext = useContext(ExperienceContext)

  const updateCurrentExperienceData = (newContext: any) => {
    experienceContext.updateExperienceContext(newContext)
  }

  return { ...experienceContext, updateCurrentExperienceData }
}

export default useExperienceData
