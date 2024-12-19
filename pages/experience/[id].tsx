import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Loader from '../../main/components/Loader'
import useNavigation from '../../main/hooks/useNavigation'

const ExperiencePage = () => {
  const router = useRouter()
  const { id } = router.query

  const { setCurrentExperience } = useNavigation()

  useEffect(() => {
    setCurrentExperience(id as string)
  }, [id])

  const ExperienceComponent = dynamic(() => import(`../../experiences/${id}/index.tsx`), {
    loading: () => <Loader />,
    ssr: false,
  })
  return <ExperienceComponent />
}

export default ExperiencePage
