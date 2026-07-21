import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Loader from '../../main/components/Loader'
import { experiences, loadableExperienceIds } from '../../main/data'
import useExperienceData from '../../main/hooks/useExperienceData'

const ExperiencePage = () => {
  const router = useRouter()
  const { id } = router.query
  const { updateCurrentExperienceData } = useExperienceData()

  const experienceId = typeof id === 'string' ? id : null
  const isLoadable = experienceId !== null && loadableExperienceIds.includes(experienceId)

  useEffect(() => {
    if (!experienceId) return

    const experience = experiences.find((exp) => exp.id === experienceId)
    if (experience) {
      updateCurrentExperienceData({ ...experience })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [experienceId])

  useEffect(() => {
    if (!router.isReady || !experienceId) return
    if (!isLoadable) {
      router.replace('/')
    }
  }, [router, experienceId, isLoadable])

  if (!experienceId || !isLoadable) {
    return <Loader />
  }

  const ExperienceComponent = dynamic(() => import(`../../experiences/${experienceId}/index.tsx`), {
    loading: () => <Loader />,
    ssr: false,
  })

  return <ExperienceComponent />
}

export default ExperiencePage
