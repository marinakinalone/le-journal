import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import Loader from '../../main/components/Loader'

const GamePage = () => {
  const router = useRouter()
  const { slug } = router.query

  const GameComponent = dynamic(() => import(`../../games/${slug}/index.tsx`), {
    loading: () => <Loader />,
    ssr: false,
  })
  return <GameComponent />
}

export default GamePage
