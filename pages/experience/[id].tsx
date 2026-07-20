import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Loader from '../../main/components/Loader'
import useExperienceData from '../../main/hooks/useExperienceData'
import { experiences } from '../../main/data'

const ExperiencePage = () => {
  const router = useRouter()
  const { id } = router.query
  const { updateCurrentExperienceData } = useExperienceData()

  useEffect(() => {
    if (id && typeof id === 'string') {
      const experience = experiences.find((exp) => exp.id === id)
      if (experience) {
        updateCurrentExperienceData({
          ...experience,
        })
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  const ExperienceComponent = dynamic(() => import(`../../experiences/${id}/index.tsx`), {
    loading: () => <Loader />,
    ssr: false,
  })

  return <ExperienceComponent />
}

export default ExperiencePage
