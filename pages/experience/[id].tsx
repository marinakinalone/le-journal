import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import Loader from '../../main/components/Loader'

const ExperiencePage = () => {
  const router = useRouter()
  const { id } = router.query

  const ExperienceComponent = dynamic(() => import(`../../experiences/${id}/index.tsx`), {
    loading: () => <Loader />,
    ssr: false,
  })
  return <ExperienceComponent />
}

export default ExperiencePage
